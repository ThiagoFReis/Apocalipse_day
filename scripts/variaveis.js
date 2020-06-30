let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoVoador;
let imagemTelaInicial;
let imagemKidZombie;
let imagemZombieWalk;
let imagemRobotZombie

let imagemVida;
let fonteTelaInicial;
let somDoPulo;
let jogo;
let fita;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;
let vida;

let cenario;
let somDoJogo; 
let somGameOver;
let personagem;
let kidZombie;
let zombieWalk;
let robotZombie;
let inimigo;
let inimgoVoador;
let pontuacao;
let gameOver;
let optionGameOver;

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
     ]
const matrizKidZombie = [
  [0,0],
  [150,0],
  [300,0],
  [450,0],
  [0,200],
  [150,200],
  [300,200],
  [450,200],
  [0,400],
  [150,400]
]
const matrizZombieWalk = [
  [0,0],
  [200,0],
  [400,0],
  [0,336],
  [200,336],
  [400,336]
]
const matrizRobotZombie = [
  [0,0],
  [220,0],
  [440,0],
  [660,0],
  [880,0],
  [1100,0],
  [0,275],
  [220,275],
  [440,275],
  [660,275],
  [880,275],
  [1100,275],
  [0,550],
  [220,550],
  [440,550],
  [660,550],
  [880,550],
  [1100,550],
  [0,825],
  [220,825],
  [440,825],
  [660,825],
  [880,825],
  [1100,825],
  [0,1100],
  [220,1100],
  [440,1100],
  [660,1100]
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = []