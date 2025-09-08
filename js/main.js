let productos = document.getElementById("productos");

let productosCard = [{
    nombre:"Crema facial filorga age-purify",
    descripcion:"Corrige arrugas e imperfecciones al mismo tiempo con el fluido doble corrección de Filorga. La línea Age-Purify de Filorga es para pieles grasas o mixtas que tengan tendencia a las imperfecciones",
    img: "../img/crema1.webp",
    precio:"$129.720",
    piel: "mixta",
    categoria:"crema"

},
{
    nombre:"Crema de dia antimanchas",
    descripcion:"Ayuda a reducir manchas y unificar el tono de la piel. Piel más radiante y uniforme en 7 días",
    img: "../img/crema2.webp",
    precio:"$17.500",
    piel: "mixta",
    categoria:"crema"
},
{
    nombre:"Crema suavidad y humectación profunda",
    descripcion:"Hidrata profundamente, nutre, absorbe rápido, deja la piel suave y visiblemente saludable",
    img: "../img/crema3.webp",
    precio:"$6.442",
    piel: "seca",
    categoria:"crema"
},
{
    nombre:"Crema hidratante seborregulador",
    descripcion:"Tratamiento hidratante matificante que reduce el tamaño de los poros para pieles mixtas a grasas y pieles con poros dilatados y brillo recurrente",
    img: "../img/crema4.webp",
    precio:"$73.338",
    piel: "grasa",
    categoria:"crema"
},
{
    nombre:"Crema facial hidratante de noche",
    descripcion:"Hidrata intensamente durante 24 horas, ayuda a la regeneración de la piel durante la noche y deja el rostro fresco, suave y saludable. Apta para todo tipo de piel",
    img: "../img/crema5.webp",
    precio:"$10.000",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema facial hidratante de dia",
    descripcion:"Crema hidratante para el día aporta importantes beneficios de hidratación gracias a la acción equilibrada de sus componentes.",
    img: "../img/crema6.webp",
    precio:"$6.882",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema L'Oreal París hidra total",
    descripcion:" Reduce el exceso de grasa, la piel queda matificada durante todo el día. Piel visiblemente suave, homogénea y menos grasosa",
    img: "../img/crema7.webp",
    precio:"$15.800",
    piel: "grasa",
    categoria:"crema"
}
,
{
    nombre:"Crema Dermaglos manos y uñas",
    descripcion:"Generan una pelicula protectora que previene la deshidratación de la piel evitando el resecamiento",
    img: "../img/crema8.webp",
    precio:"$9.039",
    piel: "seca",
    categoria:"crema"
}
,
{
    nombre:"Crema antiarrugas reafirmante",
    descripcion:"Formulada para pieles secas. Hidrata, protege del sol (UVB/UVA) y gracias al acido hialurónico y vitaminas A y C, ayuda a reafirmar la piel y reducir visiblemente la profundidad de las arrugas.",
    img: "../img/crema9.webp",
    precio:"$37.413",
    piel: "seca",
    categoria:"crema"
}
,
{
    nombre:"Crema corporal Hinds Rosa Plus",
    descripcion:"Contiene una Fórmula con el Doble de Vitamina A, que hidrata la piel y ayuda a mantenerla saludable. Vas a sentir su textura ligera y liviana que se esparce súper facil y no deja sensacion grasosa",
    img: "../img/crema10.webp",
    precio:"$6.774",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema facial Pond's Clarant B3 Peil Grasa",
    descripcion:"Es Ideal para piel de normal a grasa, humectante. Es hipoalergenico y no tapa los poros. Combate el cambio de tono de tu piel para disminuir visiblemente las marcas oscuras en 2 semanas, dejando la piel más radiante y con un tono uniforme",
    img: "../img/crema11.webp",
    precio:"$10.000",
    piel: "grasa",
    categoria:"crema"
}
,
{
    nombre:"Crema hidratante facial La Roche-Posay",
    descripcion:"El hidratante Hydraphase Ligera para piel normal a mixta de La Roche-Posay es un tratamiento rehidratante intensivo con una fórmula reforzada con fragmentos de ácido hyalurónico.",
    img: "../img/crema12.webp",
    precio:"$89.736",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema de dia Eucerin Hyaluron-Filler",
    descripcion:"Está indicada para pieles normales a mixtas con pérdida de volumen y definición. Reafirma, redefine contornos, hidrata, reduce arrugas y protege contra el fotoenvejecimiento con FPS 15",
    img: "../img/crema13.webp",
    precio:"$104.373",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema facial hidratante Garnier vitamina C",
    descripcion:"Hidrata, protege y unifica el tono de la piel en 7 días. Formulada con vitamina Cg, niacinamida y vitamina E.Aprobado por Crueltry Free International.Comprometido con Green Beauty",
    img: "../img/crema14.webp",
    precio:"$10.714",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema dia L'Oréal París Revitalift Pro Retinol",
    descripcion:"La Crema Día Revitalift con Pro-Retinol reduce visiblemente las arrugas en 8 semanas, estimula la producción de colágeno, mejora la elasticidad y luminosidad, hidrata y protege la piel gracias a su FPS",
    img: "../img/crema15.webp",
    precio:"$26.713",
    piel: "mixta",
    categoria:"crema"
}
,
{
    nombre:"Crema facial Get The Look Prebióticos Día",
    descripcion:"fortalece la barrera cutánea, hidrata y nutre gracias a sus aceites ricos en omegas, vitamina E y niacinamida. Ayuda a reducir líneas de expresión, protege contra el envejecimiento prematuro y calma afecciones como rosácea, acné o dermatitis. Apta para todo tipo de piel",
    img: "../img/crema16.webp",
    precio:"$10.000",
    piel: "mixta",
    categoria:"crema"
},
{
    nombre:"Gel Exfoliante Eucerin Anti-Pigment",
    descripcion:"Eucerin Anti-Pigment El gel limpiador limpia en profundidad, exfolia y mejora la uniformidad de la piel, dejándola hidratada y radiante. Adecuado para todo tipo de pieles",
    img: "../img/limpiadorFacial1.webp",
    precio:"$37.740",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Cerave Gel Limpiador Espumoso",
    descripcion:" Este gel refrescante, con 3 ceramidas esenciales y ácido hialurónico, elimina de forma eficiente el exceso de grasa, la suciedad y el maquillaje. Su fórmula sin perfume es adecuada para pieles sensibles",
    img: "../img/limpiadorFacial2.webp",
    precio:"$28.874",
    piel: "mixta",
    categoria:"limpiador"
},

{
    nombre:"Dermaglos Gel de Limpieza Purificante",
    descripcion:"Fácil de aplicar el Gel de Limpieza Purificante limpia en profundidad las impurezas y controla el exceso de grasitud en pieles con tendencia oleosa",
    img: "../img/limpiadorFacial3.webp",
    precio:"$9.529",
    piel: "grasa",
    categoria:"limpiador"
},

{
    nombre:"La Roche Posay Effaclar Gel Mousse Purificante",
    descripcion:"Es un gel de higiene para pieles mixtas a grasas. Effaclar Gel está compuesto por Agua Termal de La Roche-Posay, Pidolato de zinc (Seborregulador) y Tensioactivos suaves (agentes limpiadores). Su fórmula no contiene parabenos ni alcohol",
    img: "../img/limpiadorFacial4.webp",
    precio:"$37.608",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Isdinceutics Essential Cleansing Aceite Limpiador",
    descripcion:"Essential Cleansing es un aceite limpiador facial suave y ligero de textura oil-to-milk que utiliza el poder del aceite para limpiar en profundidad la piel. En contacto con el agua se transforma en una agradable emulsión que deja la piel suave e hidratada",
    img: "../img/limpiadorFacial5.webp",
    precio:"$65.357",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Vichy Pureté Thermale Gel Fresco Limpiador",
    descripcion:"Limpiador facial suave para todo tipo de pieles, incluso sensibles, que elimina impurezas y protege contra la contaminación. Con Moringa y Agua Termal de Vichy para calmar y regenerar la piel, dejando una sensación fresca e hidratada",
    img: "../img/limpiadorFacial6.webp",
    precio:"$52.268",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Gel Limpiador Avène Cicalfate Lavanda",
    descripcion:"Pensado para cuidar las pieles sensibles y las zonas íntimas de tu bebé, aunque es un producto perfectamente funcional en niños mayores y adultos.",
    img: "../img/limpiadorFacial7.webp",
    precio:"$27.450",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Cerave Air Foam Cleanser Limpiador Facial Reequilibrante",
    descripcion:"Espuma facial que elimina impurezas, controla el sebo y mantiene la hidratación. Con ácido hialurónico, ceramidas, niacinamida y Glycolysine, limpia profundamente sin dañar la barrera cutánea. Ideal para pieles normales, mixtas, grasas o sensibles, ofreciendo una experiencia suave y equilibrante",
    img: "../img/limpiadorFacial8.webp",
    precio:"$28.872",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Eucerin Dermopure Oil Control Gel Limpiador",
    descripcion:"Combate imperfecciones, manchas y exceso de brillo con tres acciones: Anti-Manchas (ácidos glicólico y salicílico + humectantes), Anti-Imperfecciones (2% ácido salicílico antibacteriano) y Anti-Brillo (elimina sebo, suciedad y maquillaje). Ideal para piel grasa y con tendencia acneica. Dermatológicamente probado, efectivo y desarrollado por Eucerin, con más de 100 años de experiencia en cuidado de la piel",
    img: "../img/limpiadorFacial9.webp",
    precio:"$81.075",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Caviahue Espuma de Limpieza Facial",
    descripcion:"Limpia profundamente, humecta y elimina impurezas, exceso de grasa y maquillaje. Refresca, calma y suaviza la piel, facilitando su hidratación. Apta para todo tipo de pieles y uso diario. Contiene agua termal volcánica y aloe",
    img: "../img/limpiadorFacial10.webp",
    precio:"$15.051",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Dermaglos Leche de Limpieza Activa",
    descripcion:"El primer paso para cuidar tu piel es la limpieza, la Leche de Limpieza Activa Dermaglós elimina en profundidad el maquillaje y las impurezas diarias permitiendo a la piel respirar libremente sin dejar sensación de grasitud",
    img: "../img/limpiadorFacial11.webp",
    precio:"$9.526",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Cetaphil Limpiador Corporal Pro Ad Control",
    descripcion:"Limpia, hidrata y alivia la sequedad y la picazón en las pieles muy sensibles y/o con tendencia atópica. -Ayuda a mejorar la barrera de la piel. -Limpia suavemente mientras que la exclusiva tecnología de filagrinas patentada (Filaggrin Technology?) ayuda a mejorar la humedad natural de la piel",
    img: "../img/limpiadorFacial12.webp",
    precio:"$17.844",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Cetaphil Limpiador Facial Diario",
    descripcion:"Limpia profundamente y minimiza poros sin resecar la piel. Con niacinamida, pantenol y glicerina para hidratar y fortalecer la piel. Dermatológicamente probado, eficaz incluso en piel sensible, eliminando suciedad, exceso de grasa y maquillaje sin tirantez",
    img: "../img/limpiadorFacial13.webp",
    precio:"$28.872",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Perpiel Emulsión de Limpieza",
    descripcion:"Perpiel emulsión de limpieza con ácido hialurónico 7d. Desmaquilla, limpia, hidrata y suaviza. Para todo tipo de piel, ideal para piel normal a seca",
    img: "../img/limpiadorFacial14.webp",
    precio:"$14.002",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Caviahue Leche de Limpieza Facial",
    descripcion:"limpia suavemente el rostro, eliminando impurezas y maquillaje sin resecar la piel. Deja la piel fresca, suave y confortable, ideal para todo tipo de piel",
    img: "../img/limpiadorFacial15.webp",
    precio:"$15.001",
    piel: "mixta",
    categoria:"limpiador"
},
{
    nombre:"Leche y Tónico Micelar 2 en 1 Nivea Rose Care",
    descripcion:"Retira suavemente el maquillaje a prueba de agua sin frotar ni enjuagar, limpia, purifica y tonifica la piel sin resecarla. Contiene Agua de Rosas Orgánica que hidrata por 24 horas, dejando la piel suave y humectada. NIVEA, líder mundial en cuidado de la piel con más de 100 años de trayectoria, desarrolla constantemente innovaciones para todas las necesidades de la piel",
    img: "../img/limpiadorFacial16.webp",
    precio:"$7.155",
    piel: "mixta",
    categoria:"limpiador"
},
]
function mostrarProductos(categoria){

    productos.innerHTML="";
    for(let prodCard of productosCard){
        if (prodCard.categoria==categoria) {

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
    
    }

}






