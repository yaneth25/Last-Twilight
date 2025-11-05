const perfumes = [
    { name: "Ariana Grande - Sweet Like Candy", link: "p1m.html" },
    { name: "Versace Bright Crystal Spray", link: "p2m.html" },
    { name: "Perfume Para Mujer Marca Ebc Cloud", link: "p3m.html" },
    { name: "Adrianna Cotton Candy", link: "p4m.html" },
    { name: "NARCISO RODRIGUEZ MUSC NOIR ROSE", link: "p5m.html" },
    { name: "Body Mist Set Passionate Island", link: "p6m.html" },
    { name: "Fragancia corporal Body Fantasies vanilla", link: "p7m.html" },
    { name: "Body Fantasies Sweet Sunrise Fantasy", link: "p8m.html" },
    { name: "ARIANA GRANDE - Cloud", link: "p9m.html" },
    { name: "Dolce & Gabbana Devotion", link: "p10m.html" },
    { name: "Paco Rabanne Fame", link: "p11m.html" },
    { name: "MOSCHINO TOY", link: "p12m.html" },
    { name: "Paco Rabanne - Spray Lady Million", link: "p13m.html" },
    { name: "Lolita Lempicka", link: "p14m.html" },
    { name: "212 Heroes Forever Young heroes", link: "p15m.html" },
    { name: "Olympea", link: "p16m.html" },
    { name: "Sì Passione", link: "p17m.html" },
    { name: "Perfume Rosé Rush", link: "p18m.html" },
    { name: "Victoria's Secret Coconut Milk and Rose", link: "p19m.html" },
    { name: "Victoria's Secret Velvet Petals Shimmer", link: "p20m.html" },
    { name: "Carolina Herrera - Spray Good Girl para mujer", link: "p21m.html" },

    { name: "Perfume Cosmos Musk De Fuller", link: "p1h.html" },
    { name: "Perfume Marca Ebc Para Hombre 365 Day Red", link: "p2h.html" },
    { name: "Perfume Armand Dupree Ice Fuller", link: "p3h.html" },
    { name: "Perfume Hombre Hero For Men Red Eau De Toilette", link: "p4m.html" },
    { name: "Perfume 365 Blue EBC Collection", link: "p5h.html" },
    { name: "Espinoza Paz Perfume Para Hombre", link: "p6h.html" },
    { name: "JF9 BLACK PERFUME PARA HOMBRE", link: "p7h.html" },
    { name: "Perry Ellis 360", link: "p8h.html" },
];

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = ''; // Limpiar resultados previos

    if (query) {
        const filteredPerfumes = perfumes.filter(perfume => perfume.name.toLowerCase().includes(query));
        
        filteredPerfumes.forEach(perfume => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = `<a href="${perfume.link}" target="_blank">${perfume.name}</a>`;
            resultsDiv.appendChild(div);
        });
        
        if (filteredPerfumes.length === 0) {
            resultsDiv.innerHTML = '<div class="result-item">No se encontraron resultados.</div>';
        }
    }
});
