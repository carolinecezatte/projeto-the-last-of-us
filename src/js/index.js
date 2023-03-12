/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

const buttonsCarousel = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');

buttonsCarousel.forEach((button, index)=> {
    button.addEventListener('click', () => {

        disableSelectedButton();

        selectCarouselButton(button);

        hideActiveImage();

        showBackgroundImage(index);
    })
})

function showBackgroundImage(index) {
    images[index].classList.add('active');
}

function selectCarouselButton(button) {
    button.classList.add('selected');
}

function hideActiveImage() {
    const ImageActive = document.querySelector('.active');
    ImageActive.classList.remove('active');
}

function disableSelectedButton() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}
