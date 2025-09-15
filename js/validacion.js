// ===============================
// REFERENCIAS
// ===============================
const form = document.getElementById("checkoutForm");
const errorBox = document.getElementById("error");

// Campos principales
const dni = document.getElementById("dni");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");

// Dirección
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const cp = document.getElementById("cp");
const provincia = document.getElementById("provincia");
const ciudad = document.getElementById("ciudad");

// Radios
const envioRadios = form.elements["envio"]; // Retiro / Domicilio
const pagoRadios = form.elements["pago"]; // mp / transferencia / tarjeta
const resumenFieldset = document.getElementById("resumenFieldset");
const resumenNombre = document.getElementById("resumenNombre");
const resumenPrecio = document.getElementById("resumenPrecio");
const resumenEnvio = document.getElementById("resumenEnvio");
const resumenTotal = document.getElementById("resumenTotal");
const cantidadInput = document.getElementById("cantidad");

const inputProducto = document.getElementById("productoInput");
const inputPrecio = document.getElementById("precioInput");
const inputTotal = document.getElementById("totalInput");
// ===============================
// UTILS UI
// ===============================
function getMsgEl(input) {
  // Crea (si no existe) un <small class="msg"> inmediatamente después del input
  let el =
    input.nextElementSibling &&
    input.nextElementSibling.classList?.contains("msg")
      ? input.nextElementSibling
      : null;
  if (!el) {
    el = document.createElement("small");
    el.className = "msg";
    el.id = input.id + "-msg";
    el.setAttribute("aria-live", "polite");
    input.insertAdjacentElement("afterend", el);
  }
  return el;
}
// usa formato de moneda ARS
const money = (n) =>
  isFinite(n)
    ? n.toLocaleString("es-AR", { style: "currency", currency: "ARS" })
    : "$0";

// lee item guardado
const checkoutItem = JSON.parse(localStorage.getItem("checkoutItem") || "null");

// función util para saber envío seleccionado (ya tenés 'envioRadios' en tu archivo)
function getCheckedValue(radioNodeList) {
  const r = Array.from(radioNodeList).find((r) => r.checked);
  return r ? r.value : null;
}

// definí costo de envío (ejemplo simple)
function envioCostoActual() {
  const v = getCheckedValue(envioRadios); // 'retiro' | 'domicilio' | null
  return v === "domicilio" ? 3500 : 0; // cambia este valor si querés otra tarifa
}

function updateResumen() {
  const qty = Math.max(1, parseInt(cantidadInput.value || "1", 10));
  const envio = envioCostoActual();
  const unit = checkoutItem ? checkoutItem.precio : 0;
  const subtotal = unit * qty;
  const total = subtotal + envio;

  resumenEnvio.textContent = money(envio);
  resumenTotal.textContent = money(total);

  // inputs ocultos que viajarán en el POST (o mock)
  inputTotal.value = total;
}

// Inicializa si hay item
if (checkoutItem) {
  resumenNombre.textContent = checkoutItem.nombre;
  resumenPrecio.textContent = money(checkoutItem.precio);
  inputProducto.value = checkoutItem.nombre;
  inputPrecio.value = checkoutItem.precio;
  cantidadInput.value = "1";
  updateResumen();
} else {
  // si entraron directo al checkout sin elegir producto
  resumenFieldset.style.display = "none";
}

// Recalcula cuando cambian cantidad o método de envío
cantidadInput.addEventListener("input", updateResumen);
Array.from(envioRadios).forEach((r) =>
  r.addEventListener("change", updateResumen)
);

function setFieldState(input, res) {
  input.classList.toggle("is-valid", !!res.valid);
  input.classList.toggle("is-invalid", !res.valid);
  input.setAttribute("aria-invalid", String(!res.valid));
  const msgEl = getMsgEl(input);
  msgEl.textContent = res.valid ? "" : res.message || "Campo inválido";
}

function mostrarErrores(lista) {
  const uniques = [...new Set(lista)];
  errorBox.innerHTML = uniques.map((e) => `<div>• ${e}</div>`).join("");
  errorBox.style.color = "#b00020";
  errorBox.setAttribute("role", "alert");
}
function limpiarErrores() {
  errorBox.innerHTML = "";
  errorBox.removeAttribute("role");
}
function focusFirstInvalid() {
  const first = form.querySelector(".is-invalid");
  if (first) first.focus();
}
function getCheckedValue(radioNodeList) {
  const r = Array.from(radioNodeList).find((r) => r.checked);
  return r ? r.value : null;
}

// ===============================
// RE & VALIDADORES
// ===============================
const RE = {
  dni: /^\d{7,8}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  tel: /^\+?\d[\d\s-]{6,13}\d$/, // permite +, espacios y guiones; 8–15 dígitos totales
  cp: /^\d{4,8}$/,
};
const ok = () => ({ valid: true });
const err = (m) => ({ valid: false, message: m });

function vDNI() {
  const v = dni.value.trim();
  return RE.dni.test(v) ? ok() : err("DNI inválido (7–8 dígitos numéricos).");
}
function vEmail() {
  const v = email.value.trim();
  return RE.email.test(v) ? ok() : err("Email inválido.");
}
function vTel() {
  const v = telefono.value.trim();
  return RE.tel.test(v)
    ? ok()
    : err("Teléfono inválido (acepta +, espacios y guiones).");
}
function vRequired(input, label = "Este campo") {
  const v = input.value.trim();
  return v ? ok() : err(`${label} es obligatorio.`);
}
function vCP() {
  const v = cp.value.trim();
  return RE.cp.test(v) ? ok() : err("Código postal inválido.");
}
function vSelectRequired(select, label = "Este campo") {
  return select.value ? ok() : err(`${label} es obligatorio.`);
}
function vRadioGroup(radioNodeList, label) {
  const checked = Array.from(radioNodeList).some((r) => r.checked);
  return checked ? ok() : err(`Seleccioná ${label}.`);
}

// ===============================
// VALIDACIÓN CRUZADA (envío ↔ dirección)
// ===============================
function vDireccionSegunEnvio() {
  const envio = getCheckedValue(envioRadios); // 'retiro' | 'domicilio' | null
  const errors = [];

  if (envio === "domicilio") {
    const rules = [
      [() => vRequired(calle, "Calle"), calle],
      [() => vRequired(numero, "Número"), numero],
      [vCP, cp],
      [() => vSelectRequired(provincia, "Provincia"), provincia],
      [() => vRequired(ciudad, "Ciudad"), ciudad],
    ];
    for (const [fn, el] of rules) {
      const res = fn();
      setFieldState(el, res);
      if (!res.valid) errors.push(res.message);
    }
  } else if (envio === "retiro") {
    // Dirección no obligatoria → limpiamos estados/mensajes si los hubiese
    [calle, numero, cp, provincia, ciudad].forEach((el) => {
      if (!el) return;
      el.classList.remove("is-valid", "is-invalid");
      el.removeAttribute("aria-invalid");
      const msg =
        el.nextElementSibling &&
        el.nextElementSibling.classList?.contains("msg")
          ? el.nextElementSibling
          : null;
      if (msg) msg.textContent = "";
    });
  } else {
    errors.push("Elegí un método de envío.");
  }

  return errors;
}

// ===============================
// TIEMPO REAL (input/blur)
// ===============================
[
  [dni, vDNI],
  [email, vEmail],
  [telefono, vTel],
  [calle, () => vRequired(calle, "Calle")],
  [numero, () => vRequired(numero, "Número")],
  [cp, vCP],
  [provincia, () => vSelectRequired(provincia, "Provincia")],
  [ciudad, () => vRequired(ciudad, "Ciudad")],
]
  .filter(([el]) => !!el)
  .forEach(([el, fn]) => {
    const handler = () => setFieldState(el, fn());
    el.addEventListener("input", handler);
    el.addEventListener("blur", handler);
  });

Array.from(envioRadios).forEach((r) =>
  r.addEventListener("change", () => {
    limpiarErrores();
    vDireccionSegunEnvio();
  })
);
Array.from(pagoRadios).forEach((r) =>
  r.addEventListener("change", limpiarErrores)
);

// ===============================
// SUBMIT (validación total + envío/simulación)
// ===============================
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const errors = [];

  // Campos principales
  const campos = [
    [dni, vDNI],
    [email, vEmail],
    [telefono, vTel],
  ];
  for (const [el, fn] of campos) {
    const res = fn();
    setFieldState(el, res);
    if (!res.valid) errors.push(res.message);
  }

  // Radios
  const envioRes = vRadioGroup(envioRadios, "un método de envío");
  if (!envioRes.valid) errors.push(envioRes.message);

  const pagoRes = vRadioGroup(pagoRadios, "un método de pago");
  if (!pagoRes.valid) errors.push(pagoRes.message);

  // Cruzada: envío → dirección
  errors.push(...vDireccionSegunEnvio());

  if (errors.length) {
    mostrarErrores(errors);
    focusFirstInvalid();
    return;
  }

  // Si está todo OK:
  limpiarErrores();

  // Loading en botón
  const submitBtn = form.querySelector(
    'input[type="submit"], button[type="submit"]'
  );
  const prevText =
    submitBtn?.tagName === "INPUT" ? submitBtn.value : submitBtn?.textContent;
  if (submitBtn) {
    submitBtn.disabled = true;
    if (submitBtn.tagName === "INPUT") submitBtn.value = "Enviando…";
    else submitBtn.textContent = "Enviando…";
  }

  // Payload
  const payload = Object.fromEntries(new FormData(form).entries());

  try {
    // INTENTO REAL a JSON Server (si lo levantaste en http://localhost:3001)
    // npm i -D json-server
    // db.json -> { "orders": [] }
    // npm run mock-api -> json-server --watch db.json --port 3001
    const res = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Mock API no disponible, uso simulación");

    // ÉXITO real
    errorBox.style.color = "#117a3a";
    errorBox.innerHTML = "¡Pedido enviado con éxito! ✔";
  } catch (err) {
    // Fallback: simulación local de envío
    await new Promise((r) => setTimeout(r, 800));
    errorBox.style.color = "#117a3a";
    errorBox.innerHTML = "¡Pedido enviado (simulado)! ✔";
  } finally {
    // Reset UI
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitBtn.tagName === "INPUT") submitBtn.value = prevText || "Enviar";
      else submitBtn.textContent = prevText || "Enviar";
    }
    form.reset();
    form.querySelectorAll(".is-valid,.is-invalid").forEach((el) => {
      el.classList.remove("is-valid", "is-invalid");
      el.removeAttribute("aria-invalid");
      const msg =
        el.nextElementSibling &&
        el.nextElementSibling.classList?.contains("msg")
          ? el.nextElementSibling
          : null;
      if (msg) msg.textContent = "";
    });
  }
});
