let btn_jogar = document.getElementById("btn_iniciar");
let btn_parar = document.getElementById("btn_parar");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//define os sprites do astronauta 
let personagem_dir = new Image();
personagem_dir.src = "img/astronauta_dir.png";
let personagem_esq = new Image();
personagem_esq.src = "img/astronauta_esq.png";

//define a velocidade do astronauta
let velX = 10;
let velY = 10;
let velX_esq = velX * -1;
let velY_cima = velY * -1;

// Coordenadas da estrela
let xEstrela = 400;
let yEstrela = 200;

// Coordenadas do astronauta
let astronautaX = 0;
let astronautaY = 0;

//tamanho do astronauta
let largura = 100; 
let altura = 150; 

function jogar(){
    //desativa o botão jogar ao iniciar o jogo e ativa o de parar
    btn_iniciar.style.display = "none";
    btn_parar.style.display = "block";

    //desenha o astronautra ao clicar no botão e ativa as funções dele
    desenhaAstronauta();
    clippingPath();
}
function parar(){
    btn_iniciar.style.display = "block";
    btn_parar.style.display = "none";

    ctx.clearRect(0,0,1000,500);
}



function desenhaAstronauta(){
    ctx.drawImage(personagem_dir, 0, 0, largura, altura);
}
function desenhaAstronauta_esq(){
    ctx.drawImage(personagem_esq, 0, 0, largura, altura);
}



class Movimentacao {
    mover_direita(){
        //se pressionar a tecla "d" move o astronauta para direita
        document.addEventListener("keydown", function(event) {
            if (event.key === "d" || event.key === "D") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //Aplica a translação para mover o astronauta
                ctx.translate(velX, 0);
    
                //Desenha o astronauta na nova posição
                desenhaAstronauta();
            }
        });    
    }

    mover_esquerda(){
        //se pressionar a tecla "a" move o astronauta para esquerda
        document.addEventListener("keydown", function(event) {
            if (event.key === "a" || event.key === "A") {   
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);

                //Aplica a translação para mover o astronauta
                ctx.translate(velX_esq, 0);

                //Desenha o astronauta na nova posição
                desenhaAstronauta_esq();
            }
        });    
    }

    mover_baixo(){
        //se pressionar a tecla "s" move o astronauta para baixo
        document.addEventListener("keydown", function(event) {
            if (event.key === "s" || event.key === "S") {   
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);

                //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
                ctx.translate(0, velY);

                //Desenha o astronauta na nova posição
                desenhaAstronauta();
            }
        });    
    }

    mover_cima(){
        //se pressionar a tecla "s" move o astronauta para baixo
        document.addEventListener("keydown", function(event) {
            if (event.key === "w" || event.key === "W") {   
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);

                //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
                ctx.translate(0, velY_cima);

                //Desenha o astronauta na nova posição
                desenhaAstronauta();
            }
        });    
    }
}
  
    

class Rotacao {
    girar(){
        //se pressionar a tecla "r" gira o astronauta em 90 graus
        document.addEventListener("keydown", function(event) {
            if (event.key === "r" || event.key === "R") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //Gira a imagem do personagem em 90 graus, ou seja, tem 4 opções de inclinação
                ctx.rotate(90 * Math.PI / 180);
    
                //Desenha o personagem na nova posição
                desenhaAstronauta();
            }
        });
    } 
}



class Escala {
    crescer(){
        document.addEventListener("keydown", function(event) {
            if (event.key === "e" || event.key === "E") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //Aumenta o astronauta 
                ctx.scale(1.1,1.1);
    
                //Desenha o personagem na nova posição
                desenhaAstronauta();
            }
        });
    }
    
    diminuir(){
        document.addEventListener("keydown", function(event) {
            if (event.key === "q" || event.key === "Q") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //Diminui o astronauta 
                ctx.scale(0.9,0.9);
    
                //Desenha o personagem na nova posição
                desenhaAstronauta();
            }
        });
    }  
}



class Transformacao {
    inclinar() {
        document.addEventListener("keydown", function(event) {
            if (event.key === "t" || event.key === "T") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //cresce 1px pixel, inclina para direita 1px, e se move em 10px na tela
                ctx.transform(1.1, 1, 0, 1.1, 10, 0);
             
                //Desenha o personagem na nova posição
                desenhaAstronauta();
            }
        });
    }

    resetar(){
        document.addEventListener("keydown", function(event) {
            if (event.key === "x" || event.key === "X") {
                // Limpa o canvas
                ctx.clearRect(0, 0, 1000, 500);
    
                //reseta o desenho na tela
                ctx.setTransform(1, 0, 0, 1, 0, 0);
    
                //Desenha o personagem na nova posição
                desenhaAstronauta();
            }
        });
    }
}



class ClippingPath {
    recortar_circulo() {
        document.addEventListener("keydown", function(event) {
            if (event.key === "c" || event.key === "C") {
                //faz o recorte de fundo do canvas ao apertar a tecla C
                ctx.beginPath();
                ctx.arc(0, 0, 230, 0, Math.PI * 2);
                ctx.closePath();
                ctx.strokeStyle = "#FFFF00";
                ctx.lineWidth = 10;
                ctx.stroke();
                ctx.clip();
            }
        });
    }
}

function InstanciaAstronauta() {
    const Instancia_mov = new Movimentacao();
    const Instancia_rot = new Rotacao();
    const Instancia_esc = new Escala();
    const Instancia_trans = new Transformacao();
    const Instancia_clip = new ClippingPath();

    Instancia_mov.mover_direita();
    Instancia_mov.mover_cima();
    Instancia_mov.mover_esquerda();
    Instancia_mov.mover_baixo();

    Instancia_rot.girar();

    Instancia_esc.crescer();
    Instancia_esc.diminuir();

    Instancia_trans.inclinar();
    Instancia_trans.resetar();

    Instancia_clip.recortar_circulo();
}

btn_jogar.addEventListener("click", InstanciaAstronauta); 


















   


