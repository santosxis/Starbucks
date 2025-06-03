const imagem = document.querySelector('.copo');
const bg = document.querySelector('.circle');
const thumbs = document.querySelectorAll('.thumb');

function trocaImagem(src) {
  imagem.classList.add('fade');
  setTimeout(() => {
    imagem.src = src;
    imagem.classList.remove('fade');
  }, 400); 
}

function trocaCor(cor) {
  bg.style.background = cor;
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    const src = `assets/img${index + 1}.png`;
    const cores = ['#017143', '#eb7495', '#d752b1'];
    trocaImagem(src);
    trocaCor(cores[index]);
  });
});