var a = 170;

function verMais() {
  const points = document.getElementById('points');
  const moreText = document.getElementById('more');
  const teste = document.getElementById('teste');
  a = a + 350;

  if (points.style.display === 'none') {
    points.style.display = 'inline';
    moreText.style.display = 'none';
  } else {
    points.style.display = 'none';
    moreText.style.display = 'inline';
    teste.style.height = a + 'px';
  }
}

function criarTopico() {
  const criar = document.getElementById('criar');
  const teste = document.getElementById('teste');

  if (criar.style.display === 'none') {
    criar.style.display = 'inline';
    teste.style.display = 'none';
  } else {
    criar.style.display = 'none';
    teste.style.display = 'flex';
  }
}
