const perfumes = [
    { name: "Ariana Grande - Sweet Like Candy", link: "p1m.html" },
    { name: "Versace Bright Crystal Spray", link: "p2m.html" },
    { name: "Perfume Para Mujer Marca Ebc Cloud", link: "p3m.html" },
    { name: "Adrianna Cotton Candy", link: "p4m.html" },
    { name: "NARCISO RODRIGUEZ MUSC NOIR ROSE", link: "p5m.html" },
    { name: "Body Mist Set Passionate Island", link: "p6m.html" },
    { name: "Fragancia corporal Body Fantasies vanilla", link: "p7m.html" },
    { name: "Body Fantasies Fragancia Romance & Dreams", link: "p8m.html" },
    { name: "Body Fantasies Sweet Sunrise Fantasy", link: "p9m.html" },
    { name: "Carolina Herrera - Spray Good Girl para mujer", link: "p10m.html" },
    { name: "Victoria's Secret Coconut Milk and Rose", link: "p10m.html" },
    { name: "Victoria's Secret Velvet Petals Shimmer", link: "p10m.html" },
    { name: "ARIANA GRANDE - Cloud", link: "p10m.html" },
    { name: "Perfume Rosé Rush", link: "p10m.html" },

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
