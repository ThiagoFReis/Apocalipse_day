function preload () {  
  imagemCenario = loadImage('imagens/assets/cenario/cenario.png');
  imagemPersonagem = loadImage('imagens/assets/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/assets/inimigos/gotinha.png');
  imagemKidZombie = loadImage('imagens/assets/inimigos/kid.png');
  imagemZombieWalk = loadImage('imagens/assets/inimigos/Zombie-Walk.png');
  imagemRobotZombie = loadImage('imagens/assets/inimigos/RobotZombie.png');
  imagemInimigoVoador = loadImage('imagens/assets/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/assets/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/gameOver.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  gameOverSom = loadSound('sons/gameOverSound.mp3');
  somDoPulo = loadSound('sons/pulo.mp3');
  
}