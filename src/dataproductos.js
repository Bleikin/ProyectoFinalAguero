const productosTecnologia = [
  {
    id: 1,
    nombre: "Laptop Gamer Xtreme 15",
    descripcion: "La Laptop Gamer Xtreme 15 combina potencia, velocidad y diseño para ofrecer una experiencia de juego superior. Equipada con una tarjeta gráfica dedicada NVIDIA RTX, procesador de alto rendimiento y pantalla Full HD de alta tasa de refresco, esta portátil está optimizada para juegos exigentes, streaming y multitarea intensa. Su sistema de refrigeración avanzado y su teclado retroiluminado completan una máquina pensada para jugadores que buscan rendimiento y estilo en cualquier lugar.",
    marca: "XtremeTech",
    precio: 1499.99,
    imagen: "https://asset.msi.com/resize/image/global/product/product_1668147471bfb422e68c23700dc0a8ce78ffb25e6d.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    categorias: "Laptop"
  },
  {
    id: 2,
    nombre: "Monitor UltraWide 34''",
    descripcion: "El Monitor LG UltraWide 34'' ofrece una experiencia visual envolvente gracias a su pantalla curva panorámica, ideal para multitarea, edición de video y productividad. Con una resolución nítida y un amplio espacio de trabajo horizontal, permite visualizar múltiples ventanas simultáneamente sin necesidad de un segundo monitor. Su diseño elegante y bordes delgados lo hacen perfecto para estaciones de trabajo modernas, mientras que sus tecnologías de imagen avanzadas garantizan colores vibrantes y precisos.",
    marca: "LG",
    precio: 650,
    imagen: "https://www.scphardstore.com/wp-content/uploads/LG-34GP63A-B.png",
    categorias: "Monitor"
  },
  {
    id: 3,
    nombre: "Teclado Mecánico RGB",
    descripcion: "Eleva tu experiencia de juego y productividad con el teclado mecánico RGB Logitech, diseñado para ofrecerte el máximo rendimiento, durabilidad y personalización. Equipado con interruptores mecánicos de alta respuesta, este teclado garantiza pulsaciones precisas y rápidas, ideales tanto para gamers como para usuarios exigentes.",
    marca: "Logitech",
    precio: 120,
    imagen: "https://logitechar.vtexassets.com/arquivos/ids/157662-800-800?v=637388220605900000&width=800&height=800&aspect=true",
    categorias: "Periférico"
  },
  {
    id: 4,
    nombre: "Mouse Inalámbrico G502",
    descripcion: "El Logitech G502 Wireless combina alto rendimiento con total libertad de movimiento. Con su sensor HERO de hasta 25,000 DPI, tecnología inalámbrica Lightspeed, y 11 botones programables, ofrece una experiencia de juego precisa, rápida y personalizable.",
    marca: "Logitech",
    precio: 94.99,
    imagen: "https://logitechar.vtexassets.com/arquivos/ids/157163-800-800?v=637064268897430000&width=800&height=800&aspect=true",
    categorias: "Periférico"
  },

  {
    id: 5,
    nombre: "PC de Escritorio Creator Pro",
    descripcion: "La PC de Escritorio PowerBuild Creator Pro está diseñada para creadores de contenido, diseñadores gráficos, editores de video y usuarios exigentes. Equipada con procesador de alto rendimiento, gran capacidad de RAM, almacenamiento SSD ultra rápido y una potente GPU dedicada, esta estación de trabajo ofrece fluidez, multitarea avanzada y velocidad de renderizado profesional. Su diseño sobrio y elegante combina potencia y estética para tu espacio de trabajo.",
    marca: "PowerBuild",
    precio: 2200,
    imagen: "https://statics.qloud.ar/gaming-point-06-2021/221_04-04-2024-12-04-05-18_sin-monitor.png",
    categorias: "Desktop"
  },   
  
  {
    id: 6,
    nombre: "Auricular Redragon Zeus Pro Black H510",
    descripcion: "Auriculares gaming con sonido envolvente 7.1, conectividad inalámbrica 2.4GHz y Bluetooth 5.2, micrófono desmontable con cancelación de ruido, retroiluminación RGB y almohadillas de espuma viscoelástica para una experiencia inmersiva y cómoda.",
    marca: "Redragon",
    precio: 69.99,
    imagen: "https://gorilagames.com/img/Public/1019/33383-producto-redragon-auricular-zeus-pro-h510-inalambrico-wireless-bluetooth-go.jpg",
    categorias: "Auriculares"
  },

  {
    id: 7,
    nombre: "Tarjeta gráfica para juegos ROG Astral GeForce RTX™ 5080 OC Edition",
    descripcion: "La ROG Astral RTX™ 5080 OC Edition de ASUS ofrece un rendimiento gráfico extremo para gaming en 4K y experiencias de realidad aumentada. Equipada con la arquitectura NVIDIA Ada Lovelace, cuenta con núcleos RT y Tensor de última generación, overclock de fábrica y un sistema de refrigeración avanzado ROG para máximo rendimiento bajo presión.",
    marca: "ASUS",
    precio: 1.797,
    imagen: "https://m.media-amazon.com/images/I/81JPZdpeH+L._AC_SY300_SX300_.jpg",
    categorias: "Placa grafica"
  }, 

  {
    id: 8,
    nombre: "Mouse G403",
    descripcion: "Es un mouse gamer diseñado para ofrecer rendimiento y comodidad excepcionales. Cuenta con el sensor HERO 25K de alta precisión para un seguimiento 1:1.",
    marca: "Logitech",
    precio: 69.99,
    imagen: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2016/12/g403-prodigy-gaming-mouse.png?fit=386%2C388&ssl=1",
    categorias: "Periférico"
  }, 

  {
    id: 9,
    nombre: "Lg Ultragear 27' 1ms 144hz",
    descripcion: "Este monitor te ofrece una resolución UHD cristalina y colores vibrantes, ideal tanto para gaming de alta velocidad como para diseño, con una respuesta ultrarrápida y fluidos 144Hz.",
    marca: "LG",
    precio: 679.99,
    imagen: "https://bcdn.alfuhod.com/media/catalog/product/cache/c49c6d580f7f24178041719fd0fed908/image/213159c1c/lg-ultragear-27-4k-nano-ips-1ms-gtg-gaming-monitor-with-144hz-160hz-overclock-and-hdmi-2-1.webp",
    categorias: "Monitor"
  }, 

  {
    id: 10,
    nombre: "Teclado Gamer Redragon Shiva K512",
    descripcion: "Domina cada partida con el Teclado Gamer Redragon Shiva K512. Disfruta de una respuesta táctil precisa, iluminación RGB personalizable por tecla y teclas multimedia dedicadas, todo en un diseño robusto y cómodo, perfecto para tus sesiones de juego más intensas.",
    marca: "Redragon",
    precio: 34.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_658710-MLA77593527265_072024-O.webp",
    categorias: "Periférico"
  },

    {
    id: 11,
    nombre: "Auriculares inalámbricos G435",
    descripcion: "Auriculares inalámbricos ligeros (165 g) con conectividad LIGHTSPEED y Bluetooth, micrófonos duales, sonido espacial y hasta 18 horas de batería. Cómodos y versátiles para gaming y uso diario.",
    marca: "Logitech",
    precio: 49.99,
    imagen: "https://logitechar.vtexassets.com/arquivos/ids/158137-800-800?v=637672209473970000&width=800&height=800&aspect=true",
    categorias: "Auriculares"
  },

  {
    id: 12,
    nombre: "Monitor Gamer 24 Asus Tuf 180h",
    descripcion: "Monitor Full HD 180Hz, 1ms, pantalla IPS, compatible con FreeSync Premium y G-SYNC. Ideal para gaming fluido y colores nítidos.",
    marca: "ASUS",
    precio: 189.99,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_878101-MLA81091083118_122024-O.webp",
    categorias: "Monitor"
  },
  {
    id: 13,
    nombre: "Mouse Corsair M55 Rgb Pro",
    descripcion: "Diseñado para jugadores ambidiestros, el Corsair M55 RGB Pro ofrece un sensor óptico de 12.400 DPI, 8 botones programables y retroiluminación RGB personalizable. Su peso ligero de 86 g y diseño versátil lo hacen ideal para juegos FPS y MOBA.",
    marca: "Corsair",
    precio: 29.99,
    imagen: "https://insumaxinformatica.com.ar/img/Public/producto-127138-0.jpg",
    categorias: "Periférico"
  },

  {
    id: 14,
    nombre: "Vengeance RGB PRO drr4 RAM 32 GB (2x16GB) 3200 MHz",
    descripcion: "La memoria CORSAIR VENGEANCE RGB PRO DDR4 ofrece velocidad, estabilidad y un diseño espectacular con iluminación RGB dinámica. Con 32 GB (2 x 16 GB) a 3200 MHz, es ideal para gaming, creación de contenido y multitarea avanzada.",
    marca: "Corsair",
    precio: 91.99,
    imagen: "https://m.media-amazon.com/images/I/71e6YWJio-L._AC_SL1500_.jpg",
    categorias: "RAM"
  }, 

  {
    id: 15,
    nombre: "Tarjeta gráfica ROG Strix GeForce RTX 5070 Ti OC Edition 16 GB",
    descripcion: "La ROG Strix RTX 5070 Ti OC Edition combina potencia, refrigeración eficiente y un diseño premium. Con 16 GB de memoria GDDR6 y la arquitectura NVIDIA Ada Lovelace, ofrece gráficos realistas con ray tracing, alto rendimiento en juegos AAA y soporte para DLSS 3.5.",
    marca: "ASUS",
    precio: 1.079,
    imagen: "https://m.media-amazon.com/images/I/81tYKg1osaL._AC_SL1500_.jpg",
    categorias: "Placa grafica"
  }, 
];

export default productosTecnologia;