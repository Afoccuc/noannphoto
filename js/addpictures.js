const background = document.getElementById('show');
var delayPass = 1;

document.addEventListener('DOMContentLoaded', function () {
    fetch('get_images.php')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('pictures');
            data.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = 'Image';
                img.classList.add('image');  // Ajouter la classe 'image'
                img.onclick = function() {
                    myFunction(image);  // Appeler la fonction myFunction avec le chemin de l'image en paramètre
                };
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});

function myFunction(imagePath) {
    // La fonction à exécuter lorsqu'une image est cliquée
    console.log('Image cliquée:', imagePath);
    document.getElementById('show').style.display = "block";
    document.getElementById('show').style.backgroundImage = "url('" + imagePath + "')";
    document.getElementById('show').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    setTimeout(() => {
        delayPass=0;
    }, 500); // Ajustez le délai si nécessaire
    delayPass = 1;

    // Ajoutez ici le code que vous souhaitez exécuter lorsqu'une image est cliquée
}


window.addEventListener('scroll', function () {
    if(delayPass == 0)
    {
        const showElement = document.getElementById('show');
        showElement.style.display = 'none';
    }
      // Désactiver en masquant l'élément
});
