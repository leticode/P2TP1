let header = document.getElementsByClassName("header");
let bloqueHeader = document.getElementsByClassName("bloqueHeader");
let productos = document.getElementById("productos");

let productosCard = [
  {
    nombre: "Crema facial filorga age-purify",
    descripcion:
      "Corrige arrugas e imperfecciones al mismo tiempo con el fluido doble corrección de Filorga. La línea Age-Purify de Filorga es para pieles grasas o mixtas que tengan tendencia a las imperfecciones",
    img: "../img/crema1.webp",
    precio: "$129.720",
  },
  {
    nombre: "Crema de dia antimanchas",
    descripcion:
      "Ayuda a reducir manchas y unificar el tono de la piel. Piel más radiante y uniforme en 7 días",
    img: "../img/crema2.webp",
    precio: "$17.500",
    piel: "",
  },
  {
    nombre: "Crema suavidad y humectación profunda",
    descripcion:
      "Hidrata profundamente, nutre, absorbe rápido, deja la piel suave y visiblemente saludable",
    img: "../img/crema3.webp",
    precio: "$6.442",
  },
  {
    nombre: "Crema hidratante seborregulador",
    descripcion:
      "Tratamiento hidratante matificante que reduce el tamaño de los poros para pieles mixtas a grasas y pieles con poros dilatados y brillo recurrente",
    img: "../img/crema4.webp",
    precio: "$73.338",
  },
  {
    nombre: "Crema facial hidratante de noche",
    descripcion:
      "Hidrata intensamente durante 24 horas, ayuda a la regeneración de la piel durante la noche y deja el rostro fresco, suave y saludable. Apta para todo tipo de piel",
    img: "../img/crema5.webp",
    precio: "$10.000",
  },
  {
    nombre: "Crema facial hidratante de dia",
    descripcion:
      "Crema hidratante para el día aporta importantes beneficios de hidratación gracias a la acción equilibrada de sus componentes.",
    img: "../img/crema6.webp",
    precio: "$6.882",
  },
  {
    nombre: "Crema L'Oreal París hidra total",
    descripcion:
      " Reduce el exceso de grasa, la piel queda matificada durante todo el día. Piel visiblemente suave, homogénea y menos grasosa",
    img: "../img/crema7.webp",
    precio: "$15.800",
  },
  {
    nombre: "Crema Dermaglos manos y uñas",
    descripcion:
      "Generan una pelicula protectora que previene la deshidratación de la piel evitando el resecamiento",
    img: "../img/crema8.webp",
    precio: "$9.039",
  },
  {
    nombre: "Crema antiarrugas reafirmante",
    descripcion:
      "Formulada para pieles secas. Hidrata, protege del sol (UVB/UVA) y gracias al acido hialurónico y vitaminas A y C, ayuda a reafirmar la piel y reducir visiblemente la profundidad de las arrugas.",
    img: "../img/crema9.webp",
    precio: "$37.413",
  },
  {
    nombre: "Crema corporal Hinds Rosa Plus",
    descripcion:
      "Contiene una Fórmula con el Doble de Vitamina A, que hidrata la piel y ayuda a mantenerla saludable. Vas a sentir su textura ligera y liviana que se esparce súper facil y no deja sensacion grasosa",
    img: "../img/crema10.webp",
    precio: "$6.774",
  },
  {
    nombre: "Crema facial Pond's Clarant B3 Peil Grasa",
    descripcion:
      "Es Ideal para piel de normal a grasa, humectante. Es hipoalergenico y no tapa los poros. Combate el cambio de tono de tu piel para disminuir visiblemente las marcas oscuras en 2 semanas, dejando la piel más radiante y con un tono uniforme",
    img: "../img/crema11.webp",
    precio: "$10.000",
  },
  {
    nombre: "Crema hidratante facial La Roche-Posay",
    descripcion:
      "El hidratante Hydraphase Ligera para piel normal a mixta de La Roche-Posay es un tratamiento rehidratante intensivo con una fórmula reforzada con fragmentos de ácido hyalurónico.",
    img: "../img/crema12.webp",
    precio: "$89.736",
  },
  {
    nombre: "Crema de dia Eucerin Hyaluron-Filler",
    descripcion:
      "Está indicada para pieles normales a mixtas con pérdida de volumen y definición. Reafirma, redefine contornos, hidrata, reduce arrugas y protege contra el fotoenvejecimiento con FPS 15",
    img: "../img/crema13.webp",
    precio: "$104.373",
  },
  {
    nombre: "Crema facial hidratante Garnier vitamina C",
    descripcion:
      "Hidrata, protege y unifica el tono de la piel en 7 días. Formulada con vitamina Cg, niacinamida y vitamina E.Aprobado por Crueltry Free International.Comprometido con Green Beauty",
    img: "../img/crema14.webp",
    precio: "$10.714",
  },
  {
    nombre: "Crema dia L'Oréal París Revitalift Pro Retinol",
    descripcion:
      "La Crema Día Revitalift con Pro-Retinol reduce visiblemente las arrugas en 8 semanas, estimula la producción de colágeno, mejora la elasticidad y luminosidad, hidrata y protege la piel gracias a su FPS",
    img: "../img/crema15.webp",
    precio: "$26.713",
  },
  {
    nombre: "Crema facial Get The Look Prebióticos Día",
    descripcion:
      "fortalece la barrera cutánea, hidrata y nutre gracias a sus aceites ricos en omegas, vitamina E y niacinamida. Ayuda a reducir líneas de expresión, protege contra el envejecimiento prematuro y calma afecciones como rosácea, acné o dermatitis. Apta para todo tipo de piel",
    img: "../img/crema16.webp",
    precio: "$10.000",
  },
];

for (let prodCard of productosCard) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${prodCard.img}" alt="${prodCard.nombre}">
    <h2>${prodCard.nombre}</h2>
    <p>${prodCard.descripcion}</p>
    <h4>${prodCard.precio}</h4>
    <button>Comprar</button>
    `;
  productos.appendChild(card);
}
