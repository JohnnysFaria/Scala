var a = 170;

function verMais() {
  const points = document.getElementById('points');
  const moreText = document.getElementById('more');
  a = a + 350;
  points.style.display = 'none';
  moreText.style.display = 'inline';
}

function criarTopico() {
  const criar = document.getElementById('criar');
  const teste = document.getElementById('teste');
  if (window.getComputedStyle(criar).getPropertyValue('display') === 'none') {
    criar.style.display = 'inline';
    topic.style.display = 'none';
  } else {
    criar.style.display = 'none';
    topic.style.display = 'inline';
  }
}
