const background = document.getElementById('show');
var delayPass = 1;



document.addEventListener('DOMContentLoaded', function () {
    fetch('get_images.php')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('pictures');
            data.forEach(image => {
                const img = document.createElement('img');
                img.src = image.path;  // Utiliser la propriété 'path' de l'objet image
                img.alt = 'Image';
                img.classList.add('image');  
                // Supprimer les espaces du titre et ajouter l'attribut data-title
                const sanitizedTitle = image.title.replace(/\s+/g, '');  // Enlève tous les espaces
                img.setAttribute('data-title', sanitizedTitle);
                
                img.onclick = function() {
                    myFunction(image.path);  // Appeler la fonction myFunction avec le chemin de l'image en paramètre
                };
                
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});


function myFunction(imagePath) {
    // Vérifier si l'élément 'show' existe avant de l'utiliser
    const showElement = document.getElementById('show');
    if (showElement) {
        console.log('Image cliquée:', imagePath);
        
        // Afficher l'élément 'show' et définir l'image de fond
        showElement.style.display = "block";
        showElement.style.backgroundImage = "url('" + imagePath + "')";

        // Récupérer le titre de l'image
        const img = document.querySelector(`img[src="${imagePath}"]`);
        if (img) {
            const imageTitle = img.getAttribute('data-title');
            console.log('Titre de l\'image:', imageTitle);  // Imprimer le titre de l'image dans la console
        }
        document.getElementById("imgTitle").innerHTML = img.getAttribute('data-title');
        

        // Faire défiler jusqu'à l'élément 'show'
        showElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        // Après un certain délai, permettre de masquer 'show'
        setTimeout(() => {
            delayPass = 0;
        }, 500); // Ajustez le délai si nécessaire
        delayPass = 1;
    } else {
        console.error("L'élément avec l'ID 'show' n'a pas été trouvé dans le DOM.");
    }
}


window.addEventListener('scroll', function () {
    if (delayPass === 0) {
        const showElement = document.getElementById('show');
        showElement.style.display = 'none';
    }
});
