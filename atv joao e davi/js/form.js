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

//define a velociade oposta da declarada acima
let velX_esq = velX*-1;
let velY_cima = velY*-1;

//tamanho do sprite
let largura = 100; 
let altura = 150; 


function jogar(){
    btn_iniciar.style.display = "none";
    btn_parar.style.display = "block";

    //desenha o astronautra ao clicar no botão
    ctx.drawImage(personagem_dir, 0, 0, largura, altura);

    movimentacao();
    girar();
    tamanho();
    transform();
}

function parar(){
    btn_iniciar.style.display = "block";
    btn_parar.style.display = "none";

    ctx.clearRect(0,0,1000,500);
}



function movimentacao(){
    //se pressionar a tecla "d" move o astronauta para direita
    document.addEventListener("keydown", function(event) {
        if (event.key === "d" || event.key === "D") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
            ctx.translate(velX, 0);

            //Desenha o astronauta na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });

    //se pressionar a tecla "a" move o astronauta para esquerda
    document.addEventListener("keydown", function(event) {
        if (event.key === "a" || event.key === "A") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
            ctx.translate(velX_esq, 0);

            //Desenha o astronauta na nova posição
            ctx.drawImage(personagem_esq, 0, 0, largura, altura);
        }
    });

    //se pressionar a tecla "s" move o astronauta para baixo
    document.addEventListener("keydown", function(event) {
        if (event.key === "s" || event.key === "S") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
            ctx.translate(0, velY);

            //Desenha o astronauta na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });
    
    //se pressionar a tecla "w" move o qstronauta para cima
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "W") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Aplica a translação para mover o astronauta, atualizando a sua posição horizontal
            ctx.translate(0, velY_cima);

            //Desenha o astronauta na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });
}
    
    

function girar(){
    //se pressionar a tecla "r" gira o astronauta em 90 graus
    document.addEventListener("keydown", function(event) {
        if (event.key === "r" || event.key === "R") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Gira a imagem do personagem em 90 graus, ou seja, tem 4 opções de inclinação
            ctx.rotate(90 * Math.PI / 180);

            //Desenha o personagem na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });
} 



function tamanho(){
    document.addEventListener("keydown", function(event) {
        if (event.key === "q" || event.key === "Q") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Diminui o astronauta em 0.1px
            ctx.scale(0.9,0.9);

            //Desenha o personagem na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "e" || event.key === "E") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Aumenta o astronauta em 0.1px
            ctx.scale(1.1,1.1);

            //Desenha o personagem na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });   
}



function transform(){
    document.addEventListener("keydown", function(event) {
        if (event.key === "t" || event.key === "T") {
            // Limpa o canvas
            ctx.clearRect(0, 0, 1000, 500);

            //Reseta o personagem no centro do canvas
            ctx.transform(1, 0, 0, 1, 500, 250);
         
            //Desenha o personagem na nova posição
            ctx.drawImage(personagem_dir, 0, 0, largura, altura);
        }
    });   
}









   


