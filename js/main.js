let header = document.getElementsByClassName("header");
let bloqueHeader = document.getElementsByClassName("bloqueHeader")
let productos = document.getElementById("productos");

let productosCard = [{
    nombre:"Crema facial filorga age-purify",
    descripcion:"Tratamiento que corrige arrugas e imperfecciones mientras hidrata y suaviza la piel. Especialmente indicado para pieles mixtas o grasas con tendencia a imperfecciones y exceso de brillo.",
    img:"../img/crema1.webp",
    precio:"$129.720",
    piel:"mixta",
    categoria:"crema"
},
{
    nombre:"Crema de dia antimanchas",
    descripcion:"Crema diaria que ayuda a reducir manchas y unificar el tono de la piel. Deja el rostro más radiante, uniforme y saludable desde los primeros días de uso.",
    img:"../img/crema2.webp",
    precio:"$17.500",
    piel:"mixta",
    categoria:"crema"
},
{
    nombre:"Crema suavidad y humectación profunda",
    descripcion:"Hidrata en profundidad y nutre de manera efectiva, absorbiéndose rápidamente. Proporciona suavidad, frescura y un aspecto visiblemente saludable a todo tipo de piel seca o sensible.",
    img:"../img/crema3.webp",
    precio:"$6.442",
    piel:"seca",
    categoria:"crema"
},
{
    nombre:"Crema hidratante seborregulador",
    descripcion:"Hidratante matificante que reduce el tamaño de los poros y controla el exceso de grasa. Ideal para pieles mixtas a grasas con brillo recurrente y tendencia oleosa.",
    img:"../img/crema4.webp",
    precio:"$73.338",
    piel:"grasa",
    categoria:"crema"
},
{
    nombre:"Crema facial hidratante de noche",
    descripcion:"Proporciona hidratación intensa durante 24 horas, favorece la regeneración nocturna y deja la piel fresca y suave. Apta para todo tipo de pieles, incluso sensibles.",
    img:"../img/crema5.webp",
    precio:"$10.000",
    piel:"mixta",
    categoria:"crema"
},
{
    nombre:"Crema facial hidratante de dia",
    descripcion:"Hidratante diaria que aporta beneficios equilibrados para la piel, manteniéndola suave, fresca y protegida. Su fórmula ligera ayuda a conservar la hidratación durante horas.",
    img:"../img/crema6.webp",
    precio:"$6.882",
    piel:"mixta",
    categoria:"crema"
},
{
    nombre:"Crema L'Oreal París hidra total",
    descripcion:"Reduce el exceso de grasa y mantiene la piel matificada durante todo el día. Aporta suavidad, uniformidad y frescura, ideal para pieles mixtas y grasas con brillo.",
    img:"../img/crema7.webp",
    precio:"$15.800",
    piel:"grasa",
    categoria:"crema"
},
{
    nombre:"Crema Dermaglos manos y uñas",
    descripcion:"Crema que forma una película protectora en la piel, previniendo la deshidratación. Protege manos y uñas del resecamiento, brindando suavidad y una hidratación duradera al tacto.",
    img:"../img/crema8.webp",
    precio:"$9.039",
    piel:"seca",
    categoria:"crema"
},
{
    nombre:"Crema antiarrugas reafirmante",
    descripcion:"Formulada con ácido hialurónico y vitaminas A y C, hidrata y reafirma. Protege contra los rayos solares UVA/UVB, ayudando a reducir visiblemente las arrugas y líneas de expresión.",
    img:"../img/crema9.webp",
    precio:"$37.413",
    piel:"seca",
    categoria:"crema"
},
{
    nombre:"Crema corporal Hinds Rosa Plus",
    descripcion:"Fórmula con doble vitamina A que hidrata intensamente y mantiene la piel saludable. De textura ligera, fácil aplicación y sin sensación grasosa, ideal para uso diario en todo el cuerpo.",
    img:"../img/crema10.webp",
    precio:"$6.774",
    piel:"mixta",
    categoria:"crema"
},
{
    nombre:"Crema facial Pond's Clarant B3 Piel Grasa",
    descripcion:"Humectante hipoalergénico que combate manchas oscuras y unifica el tono de la piel en dos semanas. Ideal para pieles normales a grasas, no tapa los poros ni irrita.",
    img:"../img/crema11.webp",
    precio:"$10.000",
    piel:"grasa",
    categoria:"crema"
},
{
    nombre:"Crema hidratante facial La Roche-Posay",
    descripcion:"Hydraphase Ligera de La Roche-Posay es un hidratante intensivo con ácido hialurónico fragmentado. Refresca, hidrata profundamente y mantiene la piel suave y luminosa por más tiempo.",
    img:"../img/crema12.webp",
    precio:"$89.736",
    piel:"mixta",
    categoria:"crema"
},
// ----------------- limpiadores -----------------
{
    nombre:"Gel Exfoliante Eucerin Anti-Pigment",
    descripcion:"Gel limpiador que exfolia suavemente, mejora la uniformidad de la piel y aporta hidratación. Deja el rostro más luminoso, suave y radiante. Apto para todo tipo de pieles.",
    img:"../img/limpiadorFacial1.webp",
    precio:"$37.740",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Cerave Gel Limpiador Espumoso",
    descripcion:"Fórmula con 3 ceramidas y ácido hialurónico que elimina grasa, suciedad y maquillaje sin irritar. Refrescante, sin perfume, apto para pieles sensibles, mixtas o grasas con tendencia al brillo.",
    img:"../img/limpiadorFacial2.webp",
    precio:"$28.874",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Dermaglos Gel de Limpieza Purificante",
    descripcion:"Gel que limpia profundamente las impurezas y controla la grasitud. Ideal para pieles oleosas o con tendencia acneica, deja sensación de frescura y piel visiblemente purificada tras cada uso.",
    img:"../img/limpiadorFacial3.webp",
    precio:"$9.529",
    piel:"grasa",
    categoria:"limpiador"
},
{
    nombre:"La Roche Posay Effaclar Gel Mousse",
    descripcion:"Gel de higiene facial para pieles mixtas a grasas. Formulado con agua termal, zinc seborregulador y tensioactivos suaves, limpia eficazmente sin resecar. No contiene parabenos ni alcohol.",
    img:"../img/limpiadorFacial4.webp",
    precio:"$37.608",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Isdinceutics Essential Cleansing",
    descripcion:"Aceite limpiador de textura ligera que se transforma en emulsión al contacto con agua. Limpia en profundidad, elimina impurezas y deja la piel hidratada, suave y fresca al instante.",
    img:"../img/limpiadorFacial5.webp",
    precio:"$65.357",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Vichy Pureté Thermale Gel Fresco",
    descripcion:"Gel limpiador suave con moringa y agua termal de Vichy. Elimina impurezas, protege contra la contaminación y calma la piel, dejándola fresca, suave e hidratada en cada aplicación.",
    img:"../img/limpiadorFacial6.webp",
    precio:"$52.268",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Gel Limpiador Avène Cicalfate",
    descripcion:"Limpieza suave ideal para pieles sensibles y delicadas. Puede usarse en adultos y niños. Refresca, calma e hidrata, cuidando incluso zonas íntimas o áreas irritadas de la piel.",
    img:"../img/limpiadorFacial7.webp",
    precio:"$27.450",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Cerave Air Foam Cleanser",
    descripcion:"Espuma facial que elimina impurezas, controla sebo y mantiene la hidratación. Contiene ácido hialurónico, niacinamida y ceramidas, dejando la piel limpia, equilibrada y con aspecto fresco y saludable.",
    img:"../img/limpiadorFacial8.webp",
    precio:"$28.872",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Eucerin Dermopure Oil Control",
    descripcion:"Gel limpiador de triple acción: combate manchas, imperfecciones y exceso de brillo. Con ácidos glicólico y salicílico, limpia en profundidad y ayuda a mantener la piel libre de impurezas.",
    img:"../img/limpiadorFacial9.webp",
    precio:"$81.075",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Caviahue Espuma de Limpieza",
    descripcion:"Espuma limpiadora con agua termal volcánica y aloe vera. Limpia profundamente, elimina maquillaje y exceso de grasa, calma y suaviza la piel, dejándola fresca y lista para hidratarse.",
    img:"../img/limpiadorFacial10.webp",
    precio:"$15.051",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Dermaglos Leche de Limpieza Activa",
    descripcion:"Leche limpiadora que elimina maquillaje e impurezas sin dejar grasitud. Permite que la piel respire y luzca saludable. Textura suave, fresca y apta para uso diario en todo tipo de piel.",
    img:"../img/limpiadorFacial11.webp",
    precio:"$9.526",
    piel:"mixta",
    categoria:"limpiador"
},
{
    nombre:"Cetaphil Limpiador Corporal Pro Ad",
    descripcion:"Limpiador suave que hidrata y alivia sequedad o picazón en pieles sensibles o atópicas. Ayuda a fortalecer la barrera cutánea y mantiene la humedad natural de la piel de forma prolongada.",
    img:"../img/limpiadorFacial12.webp",
    precio:"$17.844",
    piel:"mixta",
    categoria:"limpiador"
},
// ----------------- protectores solares -----------------
{
    nombre:"Protector Solar Eucerin Sensitive FPS 50+",
    descripcion:"Protector solar para piel sensible y seca, con antioxidantes Licochalcona A y ácido glicirretínico. Neutraliza radicales libres, protege contra rayos UVA/UVB y favorece la reparación celular diaria.",
    img:"../img/protectorSolar1.webp",
    precio:"$31.362",
    piel:"mixta",
    categoria:"protector"
},
{
    nombre:"Protector Solar La Roche Posay Leche SPF 50+",
    descripcion:"Protector solar corporal de alta protección UVA/UVB en envase sustentable hecho con cartón reciclado. Textura ligera, hidratante y resistente al agua, ideal para pieles sensibles y exposición prolongada.",
    img:"../img/protectorSolar2.webp",
    precio:"$52.554",
    piel:"mixta",
    categoria:"protector"
},
// Protectores solares (continuación)
{
  nombre: "Protector Solar Facial Pigment Control Eucerin FPS 50+",
  descripcion: "Protector facial que previene el fotoenvejecimiento y reduce manchas con Thiamidol y Licochalcona A. Textura ligera, acabado mate y absorción rápida para uso diario.",
  img: "../img/protectorSolar3.webp",
  precio: "$ 38.125",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar Vichy Idéal Soleil Hidratante FPS 50",
  descripcion: "Leche hidratante con FPS50 resistente al agua que protege frente a rayos UV y aporta ácido hialurónico. Acabado seco y sensación ligera durante todo el día.",
  img: "../img/protectorSolar4.webp",
  precio: "$41.676",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar en Crema Eucerin Oil Control Sun Gel Toque Seco Fps 50",
  descripcion: "Gel-crema oil control con alta protección FPS50 y acabado mate. Controla el brillo y el sebo, es resistente al agua y apto para pieles sensibles con tendencia acneica.",
  img: "../img/protectorSolar5.webp",
  precio: "$33.020",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Fotoprotector Isdin Transparent Wet Skin Fps 50+",
  descripcion: "Fotoprotector transparente diseñado para aplicarse sobre piel seca o húmeda, de rápida absorción y sin residuo blanco. Ideal para actividades al aire libre y uso diario.",
  img: "../img/protectorSolar6.webp",
  precio: "$68.324",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar Vichy Idéal Soleil Hidratante FPS 30",
  descripcion: "Leche hidratante FPS30 para piel sensible en formato familiar. Hidrata y protege con acabado cómodo y resistente al agua, apto para uso diario de toda la familia.",
  img: "../img/protectorSolar7.webp",
  precio: "$43.621",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar Corporal Eucerin Toque Seco Fps 30",
  descripcion: "Protector corporal en spray FPS30 de textura ultraligera y 100% transparente. Se absorbe rápido, refresca y protege, ideal para pieles sensibles o con tendencia acneica.",
  img: "../img/protectorSolar8.webp",
  precio: "$33.774",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Fotoultra Isdin Active Unify Color Fps 50",
  descripcion: "Fotoprotector con acción unificadora del tono y protección FPS50. Reduce la apariencia de manchas y ayuda a prevenir su reaparición, dejando un acabado natural y luminoso.",
  img: "../img/protectorSolar9.webp",
  precio: "$50.884",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar La Roche Posay Anthelios Invisible en Spray FPS 50+",
  descripcion: "Spray corporal de muy alta protección SPF50+, invisible y ultra resistente. Aplicación práctica desde cualquier ángulo, ideal para pieles sensibles y exposiciones prolongadas.",
  img: "../img/protectorSolar10.webp",
  precio: "$54.150",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Protector Solar Cetaphil Sun Ultra Matte Oil Control FPS 50+",
  descripcion: "Protector facial para piel mixta a grasa con acabado ultra mate y control de brillo. Alta protección FPS50+ con sensación ligera, apto para uso diario.",
  img: "../img/protectorSolar11.webp",
  precio: "$29.802",
  piel: "mixta",
  categoria: "protector"
},
{
  nombre: "Fluido Isdin Fotoprotector Mineral FPS 50+",
  descripcion: "Fluido mineral FPS50+ pensado para piel sensible o intolerante a filtros químicos. Ofrece protección invisible, textura ligera y alta tolerancia para uso diario prolongado.",
  img: "../img/protectorSolar12.webp",
  precio: "$40.204",
  piel: "mixta",
  categoria: "protector"
},

// Serums
{
  nombre: "Sérum Anti Manchas Glycolic Bright L'Oréal París",
  descripcion: "Sérum anti-manchas con ácido glicólico que aclara y previene nuevas manchas. Mejora textura e ilumina la piel, aportando uniformidad y mayor claridad en pocas semanas.",
  img: "../img/serum1.webp",
  precio: "$39.000",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Facial Iluminador Vitamina C Garnier",
  descripcion: "Sérum iluminador con vitamina C que reduce manchas y aporta luminosidad. Textura ligera, apto para todo tipo de piel y de rápida absorción para uso diario.",
  img: "../img/serum2.webp",
  precio: "$18.002",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Facial Acf by Dadatina Niacinamida Vol.1: Balance",
  descripcion: "Sérum con niacinamida que regula la producción de sebo y reduce inflamación. Mejora el equilibrio y la textura, aportando luminosidad sin sensación grasa.",
  img: "../img/serum3.webp",
  precio: "$18.869",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Facial Dermaglós Vitamina C",
  descripcion: "Sérum antioxidante con vitamina C que aporta luminosidad y reduce signos de fatiga. Textura ligera de rápida absorción para una piel más firme y radiante.",
  img: "../img/serum4.webp",
  precio: "$ 22.550",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Skin Garnier Anti-imperfecciones con Ácido Salicílico",
  descripcion: "Sérum con ácido salicílico, niacinamida y AHA para reducir imperfecciones y mejorar la textura. Fórmula ligera que calma y protege la piel con tendencia acneica.",
  img: "../img/serum5.webp",
  precio: "$30.900",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Facial L'Oréal Paris Retinol Revitalift Noche",
  descripcion: "Sérum nocturno con retinol que ayuda a reducir arrugas y mejorar la textura en pocas semanas. Fórmula concentrada pensada para uso nocturno con tolerancia progresiva.",
  img: "../img/serum6.webp",
  precio: "$45.622",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Cher Dieciocho Ultraglow",
  descripcion: "Sérum iluminador que combina activos para revitalizar la piel y devolver luminosidad. Mejora textura, aporta hidratación ligera y deja un acabado radiante y saludable.",
  img: "../img/serum7.webp",
  precio: "$17.994",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Serum antiarrugas Bagovit Facial Pro Lifting",
  descripcion: "Sérum antiarrugas reafirmante con ácido hialurónico y extracto de acmella. Rellena líneas, mejora la firmeza y aporta un aspecto más terso y juvenil.",
  img: "../img/serum8.webp",
  precio: "$33.525",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Serum La Roche-Posay Pure Vitamin C",
  descripcion: "Sérum antioxidante con vitamina C pura que mejora luminosidad y uniformidad del tono. Fórmula desarrollada con dermatólogos para alta tolerancia y eficacia.",
  img: "../img/serum9.webp",
  precio: "$85.555",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Serum Isdin de Noche Isdinceutics Retinal Intense",
  descripcion: "Sérum nocturno bifásico con retinaldehído que acelera la renovación celular. Reduce arrugas y líneas de expresión, mejorando textura y firmeza con uso continuado.",
  img: "../img/serum10.webp",
  precio: "$102.696",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Facial Get The Look Retinol + Ácido Hialurónico",
  descripcion: "Sérum combinado de retinol e hialurónico que hidrata y corrige signos de envejecimiento. Textura ligera, apto para integración en rutinas nocturnas diarias.",
  img: "../img/serum11.webp",
  precio: "$ 9.894",
  piel: "mixta",
  categoria: "serum"
},
{
  nombre: "Sérum Antiedad La Roche Posay Retinol B3",
  descripcion: "Sérum antiedad con dos formas de retinol y vitamina B3 que trata arrugas profundas y unifica el tono, respetando pieles sensibles y ofreciendo buena tolerancia.",
  img: "../img/serum12.webp",
  precio: "$ 91.438",
  piel: "mixta",
  categoria: "serum"
}
]
function mostrarProductos(categoria) {
  let titulo = "DESCONOCIDO";
  if (categoria == "crema") {
    titulo = "Cremas";
  } else if (categoria == "limpiador") {
    titulo = "Limpiadores";
  } else if (categoria == "serum") {
    titulo = "Serum";
  } else if (categoria == "protector") {
    titulo = "Protector Solar";
  }

  document.getElementById("tituloHead").textContent=titulo;
  document.getElementById("tituloPagina").textContent=titulo;



            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <div>
                <img src="${prodCard.img}" alt="${prodCard.nombre}">
                <h2>${prodCard.nombre}</h2>
                <p>${prodCard.descripcion}</p>
            </div>
            <div class = "precioYComprar">
                <h4>${prodCard.precio}</h4>
                <button>Comprar</button>
            </div>
            `;
            productos.appendChild(card);
        }
    
    }

}







