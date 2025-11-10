const productos= [
    { id: 1,name: "Ariana Grande - Sweet Like Candy", imageName: '9.jpg', url: "p1m.html" },
    { id: 2,name: "Versace Bright Crystal Spray",imageName: '15.jpg', url: "p2m.html" },
    { id: 3,name: "Perfume Para Mujer Marca Ebc Cloud", imageName: '16.jpg', url: "p3m.html" },
    { id: 4,name: "Adrianna Cotton Candy", imageName: '17.jpg', url: "p4m.html" },
    { id: 5,name: "NARCISO RODRIGUEZ MUSC NOIR ROSE", imageName: '18.jpg', url: "p5m.html" },
    { id: 6,name: "Body Mist Set Passionate Island", imageName: '20.jpg', url: "p6m.html" },
    { id: 7,name: "Fragancia corporal Body Fantasies vanilla", imageName: '21.jpg', url:"p7m.html" },
    { id: 8,name: "Body Fantasies Sweet Sunrise Fantasy", imageName: '23.jpg', url: "p8m.html" },
    { id: 9,name: "ARIANA GRANDE - Cloud", imageName: '32.jpg', url: "p9m.html" },
    { id: 10,name: "Dolce & Gabbana Devotion", imageName: '37.jpg', url: "p10m.html" },
    { id: 11,name: "Paco Rabanne Fame", imageName: '38.jpg', url: "p11m.html" },
    { id: 12,name: "MOSCHINO TOY", imageName: '39.jpg', url: "p12m.html" },
    { id: 13,name: "Paco Rabanne - Spray Lady Million", imageName: '40.jpg', url: "p13m.html" },
    { id: 14,name: "Lolita Lempicka", imageName: '41.jpg', url: "p14m.html" },
    { id: 15,name: "212 Heroes Forever Young heroes", imageName: '42.jpg', url: "p15m.html" },
    { id: 16,name: "Olympea", imageName: '43.jpg', url: "p16m.html" },
    { id: 17,name: "Sì Passione", imageName: '44.jpg', url: "p17m.html" },
    { id: 18,name: "Perfume Rosé Rush", imageName: '33.jpg', url: "p18m.html" },
    { id: 19,name: "Victoria's Secret Coconut Milk and Rose", imageName: '34.jpg', url: "p19m.html" },
    { id: 20,name: "Victoria's Secret Velvet Petals Shimmer", imageName: '35.jpg', url: "p20m.html" },
    { id: 21,name: "Carolina Herrera - Spray Good Girl para mujer", imageName: '24.jpg', url:"p21m.html" },

    { id: 22,name: "Perfume Cosmos Musk De Fuller", imageName: '25.jpg', url: "p1h.html" },
    { id: 23,name: "Perfume Marca Ebc Para Hombre 365 Day Red", imageName: '26.jpg', url: "p2h.html" },
    {id: 24, name: "Perfume Armand Dupree Ice Fuller", imageName: '27.jpg', url: "p3h.html" },
    {id: 25, name: "Perfume Hombre Hero For Men Red Eau De Toilette", imageName: '28.jpg', url: "p4m.html" },
    { id: 26,name: "Perfume 365 Blue EBC Collection", imageName: '29.jpg', url: "p5h.html" },
    { id: 27,name: "Espinoza Paz Perfume Para Hombre", imageName: '30.jpg', url: "p6h.html" },
    { id: 28,name: "JF9 BLACK PERFUME PARA HOMBRE", imageName: '31.jpg', url: "p7h.html" },
    { id: 29,name: "Perry Ellis 360", imageName: '36.jpg', url: "p8h.html" },
    { id: 30,name: "Sauvage Parfum", imageName: '82.jpg', url: "p9h.html" },
    { id: 31,name: "Valentino", imageName: '83.jpg', url: "p10h.html" },
    { id: 32,name: "Intenso", imageName: '84.jpg', url: "p11h.html" },
    { id: 33,name: "Ch Men", imageName: '85.jpg', url: "p12h.html" },
    { id: 34,name: "Scandal", imageName: '86.jpg', url: "p13h.html" },
    { id:35 ,name: "Bad Boy", imageName: '87.jpg', url: "p14h.html" },
    { id: 36,name: "YSL", imageName: '88.jpg', url: "p15h.html" },
    { id: 37,name: "Bleu De Chanel", imageName: '89.jpg', url: "p16h.html" },
    { id:38 ,name: "Spirit Of The Brave", imageName: '90.jpg', url: "p17h.html" },
    { id: 39,name: "Le Beau", imageName: '91.jpg', url: "p18h.html" },
    { id: 40,name: "Tribe", imageName: '92.jpg', url: "p19h.html" },
    { id: 41,name: "Eros", imageName: '93.jpg', url: "p20h.html" },
];


const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; 

    if (query.length < 1) return; 

    const filteredProducts = productos.filter(producto =>
        producto.name.toLowerCase().includes(query)
    );

    filteredProducts.forEach(producto => {
        const productItem = document.createElement('div');
        productItem.classList.add('contenedor-producto');
        
        productItem.innerHTML = `
            <img src="${producto.imageName}" alt="Imagen de ${producto.name}" class="imagen-producto">
            <span class="nombre-producto">${producto.name}</span>
        `;
        
        // --- PASO 2: Redirección a la URL específica ---
        productItem.addEventListener('click', function() {
            window.location.href = producto.url;
        });

        resultsContainer.appendChild(productItem);
    });
});
