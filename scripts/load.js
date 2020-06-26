function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png");
  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");

  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemVida = loadImage("imagens/assets/coracao.png");

  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemInimigoGrande = loadImage("imagens/inimigos/troll.png");

  fita = loadJSON('fita/fita.json')

  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/somPulo.mp3");
}
