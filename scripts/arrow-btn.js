// buttons show text

const btnShowText = document.querySelectorAll('.btn__show-text');

btnShowText.forEach((btnShowText) =>{
    btnShowText.addEventListener('click', function(){
         // Encontrar el párrafo correspondiente al botón actual
        const parentDiv = this.parentElement; // Elemento padre (div) del botón actual
        const descriptionParagraph = parentDiv.querySelector('.conections__description');

        if (descriptionParagraph.style.display === 'none') {
          descriptionParagraph.style.display = 'block';
        } else {
          descriptionParagraph.style.display = 'none';
        }
    })
})