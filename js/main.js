

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
    nombre:"Protector Solar Facial Eucerin Sensitive Protect Fps 50+",
    descripcion:"El Protector Solar Facial Eucerin Sensitive Protect FPS 50+ ofrece protección diaria para piel sensible y seca. Su fórmula con Licochalcona A y Ácido Glicirretínico ayuda a neutralizar radicales libres y favorece la reparación de la piel. Tiene textura ligera, está clínicamente probado y es altamente tolerable",
    img: "../img/protectorSolar1.webp",
    precio:"$31.362",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar La Roche Posay Anthelios Ultra Protección Leche Hidratante Cuerpo Spf50+",
    descripcion:"Anthelios Leche Hidratante Carton Tube FPS 50+ de La Roche Posay, es un protector solar de muy alta protección UVA, con un envase sustentable más respetuoso con el medio ambiente. Hecho de cartón 100% reciclado, con -45% uso de plástico",
    img: "../img/protectorSolar2.webp",
    precio:"$52.554",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar Facial Pigment Control Eucerin FPS 50+",
    descripcion:"El Protector Solar Facial Eucerin Pigment Control FPS 50+ previene el fotoenvejecimiento prematuro y reduce las manchas oscuras gracias a su combinación de Licochalcona A y Thiamidol, que actúan sobre la hiperpigmentación y evitan su reaparición. Con Advanced Spectral Technology, protege contra rayos UVA, UVB y luz HEVIS. Su textura ligera se absorbe rápido, deja acabado mate y es apto para todo tipo de pieles",
    img: "../img/protectorSolar3.webp",
    precio:"$ 38.125",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector solar Vichy Idéal Soleil Hidratante FPS 50",
    descripcion:"Leche Hidratante protectora FPS 50+ Idéal Soleil es una leche con alto factor de protección solar, muy resistente al agua. Previene la adhesión de arena y tiene Ácido Hialurónico para hidratar la piel por 24 horas. Acabado seco. Lucha contra los efectos nocivos de los rayos UV, combatiendo los rayos UVB y UVB, apto para pieles sensibles",
    img: "../img/protectorSolar4.webp",
    precio:"$41.676",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar en Crema Eucerin Oil Control Sun Gel Toque Seco Fps 50",
    descripcion:"El Eucerin Oil Control Sun Gel-Creme Toque Seco FPS 50 ofrece protección avanzada contra rayos UVA/UVB y ayuda a prevenir el fotoenvejecimiento. Su fórmula con Licochalcona A, Ácido Glicirretínico y Carnitina controla el exceso de grasa, brindando un acabado mate seco por hasta 8 horas. Es muy resistente al agua, sudor y arena, se absorbe rápido y no deja residuos. Apto para piel sensible, grasa y con tendencia al acné",
    img: "../img/protectorSolar5.webp",
    precio:"$33.020",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Fotoprotector Isdin Transparent Wet Skin Fps 50+",
    descripcion:"Fotoprotector específicamente desarrollado para aplicarse tanto sobre piel mojada como seca. Permite la absorción en piel mojada sin dejar residuo blanco, manteniendo el factor de protección",
    img: "../img/protectorSolar6.webp",
    precio:"$68.324",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar Vichy Idéal Soleil Hidratante FPS 30",
    descripcion:"Leche Hidratante FPS 30 Capital Soleil de Vichy para pieles sensibles en formato familiar de 300ml",
    img: "../img/protectorSolar7.webp",
    precio:"$43.621",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar Corporal Eucerin Toque Seco Fps 30",
    descripcion:"El Protector Solar Corporal en Spray Eucerin Toque Seco FPS 30 está diseñado para piel sensible y con tendencia al acné. Su fórmula ligera y 100% transparente se absorbe rápido, refresca y protege contra rayos UVA/UVB gracias a la Licochalcona A, un potente antioxidante. Viene en envase de aerosol de aluminio reciclado, que permite una aplicación homogénea, rápida y desde cualquier ángulo",
    img: "../img/protectorSolar8.webp",
    precio:"$33.774",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Fotoultra Isdin Active Unify Color Fps 50",
    descripcion:"Ayuda a regular la producción de melanina gracias al DP3-Unify Complex, que actúa sobre las principales fases de la melanogénesis",
    img: "../img/protectorSolar9.webp",
    precio:"$50.884",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar La Roche Posay Anthelios Invisible en Spray FPS 50+",
    descripcion:"Anthelios Spray invisible de Cuerpo fps 50+ de La Roche-Posay. Muy alta protección. Ultra resistente. No deja manchas blancas",
    img: "../img/protectorSolar10.webp",
    precio:"$54.150",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Protector Solar Cetaphil Sun Ultra Matte Oil Control FPS 50+",
    descripcion:"Mujeres y hombres con piel mixta a grasa que busca una alta protección y reducción del brillo",
    img: "../img/protectorSolar11.webp",
    precio:"$29.802",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Fluido Isdin Fotoprotector Mineral FPS 50+",
    descripcion:"El fluido Isdin Fotoprotector Mineral FPS 50+, brinda fotoprotección invisible para la piel sensible, atópica o intolerante a filtros químicos",
    img: "../img/protectorSolar12.webp",
    precio:"$40.204",
    piel: "mixta",
    categoria:"protector"
},

{
    nombre:"Sérum Anti Manchas Glycolic Bright L'Oréal París",
    descripcion:"Ayuda a prevenir y reducir en un 77% las manchas por el sol, edad, imperfecciones e incluso las manchas persistentes. Sus activos trabajan sobre la corrección de 4 aspectos: la intensidad, la opacidad, el tamaño y la cantidad de manchas. Ideal para todos los tipos y tonos de piel",
    img: "../img/serum1.webp",
    precio:"$39.000",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Facial Iluminador Vitamina C Garnier",
    descripcion:"Apto para todo tipo de piel y testeado con dermatólogos. Resultados visibles: piel con menos manchas, hidratada y radiante. Textura ligera, sin sensación grasosa. Aprobado por Cruelty Free International; pack creado con un 20% de vidrio reciclado. Sin parabenos ni aceites minerales",
    img: "../img/serum2.webp",
    precio:"$18.002",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Facial Acf by Dadatina Niacinamida Vol.1: Balance",
    descripcion:"Este serum otorga balance y humectación a la piel, reduciendo la inflamación y/o enrojecimiento de la misma. Ayuda a controlar el acné, brindando luminosidad",
    img: "../img/serum3.webp",
    precio:"$18.869",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Facial Dermaglós Vitamina C",
    descripcion:"Formulado para aportar luminosidad a la piel con efecto antioxidante. De textura liviana y rápida absorción, reduce signos de fatiga y estimula la producción de colágeno, aumentando la firmeza de la piel dejándola suave y saludable",
    img: "../img/serum4.webp",
    precio:"$ 22.550",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Skin Garnier Anti-imperfecciones con Ácido Salicílico",
    descripcion:"Nuevo Sérum Anti Imperfecciones para piel con tendencia al acné o para pieles mixtas con tendencia oleosa. Apto para pieles sensibles. Tratamiento concentrado formulado con Ácido Salicílico, Vitamina C°, AHA, y Niacinamida para tratar imperfecciones y manchas. Reduce -44% imperfecciones* y -41% visibilidad de manchas**. Textura ligera, sin sensación grasosa",
    img: "../img/serum5.webp",
    precio:"$30.900",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Facial L'Oréal Paris Retinol Revitalift Noche",
    descripcion:" Este activo antiedad por excelencia, posee la capacidad de, en solo dos semanas, reducir las arrugas más profundas, mejorar la textura de la piel, unificar el tono, y devolverle la elasticidad y luminosidad a la piel",
    img: "../img/serum6.webp",
    precio:"$45.622",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Cher Dieciocho Ultraglow",
    descripcion:"¡Experimenta una transformación asombrosa en tu piel con nuestro Sérum Ultra Glow! Esta fórmula innovadora combina ingredientes avanzados para revitalizar y rejuvenecer tu piel de manera excepcional",
    img: "../img/serum7.webp",
    precio:"$17.994",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Serum antiarrugas Bagovit Facial Pro Lifting",
    descripcion:"El Serum Antiarrugas Bagóvit Facial Pro Lifting posee una exclusiva fórmula siliconada de eficacia comprobada clínica y dermatológicamente. Gracias a su Ácido Hialurónico potenciado y extracto de acmella, rellena las arrugas dejando la piel más firme, tensa e hidratada",
    img: "../img/serum8.webp",
    precio:"$33.525",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Serum La Roche-Posay Pure Vitamin C",
    descripcion:"El sérum Pure Vitamin C 10 de la Roche Posay es un antioxidante co-creado con dermatológos para una piel radiante",
    img: "../img/serum9.webp",
    precio:"$85.555",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Serum Isdin de Noche Isdinceutics Retinal Intense",
    descripcion:"Lucí una piel visiblemente más joven con Retinal Intense, el sérum bifásico de noche con retinaldehído que ayuda a acelerar la renovación cutánea. Tras 1 mes de uso, reduce las arrugas y líneas de expresión en un 43%para una piel más lisa y uniforme y con un aspecto rejuvenecido",
    img: "../img/serum10.webp",
    precio:"$102.696",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Facial Get The Look Retinol + Ácido Hialurónico",
    descripcion:"El Sérum Facial Get The Look Retinol + Ácido Hialurónico es el aliado perfecto para una piel radiante y saludable. Su fórmula avanzada combina el poder del retinol y el ácido hialurónico, ofreciendo una hidratación intensiva que transforma la textura de la piel",
    img: "../img/serum11.webp",
    precio:"$ 9.894",
    piel: "mixta",
    categoria:"serum"
},

{
    nombre:"Sérum Antiedad La Roche Posay Retinol B3",
    descripcion:"Serum Antiedad Retinol B3 es un tratamiento antiedad que trata arrugas profundas y tono irregular apto para pieles sensibles. Compuesto por una molécula de 2 tipos de Retinol: uno puro y otro de liberación gradual, además tiene activos compensatorios que son la vitamina B3 y la glicerina. Asegura eficacia y tolerancia",
    img: "../img/serum12.webp",
    precio:"$ 91.438",
    piel: "mixta",
    categoria:"serum"
}
]
function mostrarProductos(categoria){

    productos.innerHTML="";
    for(let prodCard of productosCard){
        if (prodCard.categoria==categoria) {

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







