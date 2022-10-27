interface cardPrincipal {
    description: string;
    image: string;
    title: string;
    url: string;
}

interface NewData {
    carts: cardPrincipal[],
}

export const initialCard: NewData = {
    carts: [
        {
            description: "Equipos de aire comprimido con la mejor tecnología, especializados en el flujo de aire continuo...",
            image: "/ini_tornillo.jpg",
            title: "COMPRESORES DE TORNILLO",
            url: 'compresores-de-tornillo'
        },
        {
            description: "Elaborados y ensamblados con los más altos estándares de calidad, adaptables a cualquier proceso industrial.",
            image: "/ini_piston.jpg",
            title: "COMPRESORES DE PISTÓN",
            url: 'compresores-de-piston'
        },
        {
            description: "Ensamblados con materiales de la mas alta calidad, garantizando un exelente funcionamiento.",
            image: "/ini-air-seco.jpg",
            title: "COMPRESORES NO LUBRICADOS",
            url: 'compresores-libres-de-aceite'
        },
        {
            description: "Somos importadores directos de una gran variedad de cabezotes industriales de pistón lubricados y no lubricados.",
            image: "/ini-cabezote.jpg",
            title: "CABEZOTES INDUSTRIALES",
            url: 'cabezotes-industriales'
        },
        {
            description:'Portafolio de Motores monofásicos y trifasicos: WEG, SIEMENS, MARATHON, NOVA, TEMPO, entre otras.',
            image: 'ini-motores.jpg',
            title: 'MOTORES ELÉCTRICOS',
            url: 'motores-electricos'
        },
        {
            description:'Disponemos de un amplio catálogo de accesorios y repuestos para compresores con los mejores precios del mercado.',
            image: 'ini-accesorios.jpg',
            title: 'ACCESORIOS Y REPUESTOS',
            url: 'accesorios-repuestos'
        },
        {
            description:'Portafolio: pistola de impacto, motortul neumático, apuntilladora industrial, entre otros, con los mejores precios a su alcance.',
            image: 'ini-herramienta.png',
            title: 'HERRAMIENTAS NEUMÁTICAS',
            url: 'herramientas-neumaticas'
        },
        {
            description:'Espumadoras, Pulmones, Cheetah, Cabinas para compresores, Tolva Sandblasting,accesorios para compresores de tornillo..',
            image: 'ini-especiales.jpg',
            title: 'ACCESORIOS ESPECIALES',
            url: 'accesorios-especiales'
        },
        {
            description:'Diseño, instalación y mantenimiento de redes neumáticas, para una óptima distribución del aire comprimido en su empresa..',
            image: 'ini-neumatica.jpg',
            title: 'REDES NEUMÁTICAS',
            url: 'redes-neumaticas'
        },
    ]
}
