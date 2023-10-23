# Atividade de DJW 4° Bimestre - Transformações
<h2>Autores:</h2> 
Davi Nascimento e João Lucas

<h2>Elementos usados:</h2> 
HTML, Css, JavaScript

<h2>Andamento do projeto:</h2> 
Concluído

<h2>Descrição do Projeto:<h2>
Projeto se trata de um pequeno jogo de uma cena sobre um astronauta que está vagando pelo infinito espaço do universo. O jogo tem como objetivo
demonstrar algumas funções de um canvas/js para fins didáticos.

# Funções Utilizadas
<h2>Translação:</h2>
A função translate() altera a origem, ponto inicial, das coordenadas do desenho,
feito para mover o sistema de coordenadas em relação ao qual desenha elementos dentro do canvas.
No projeto foi utilizada fazer a movimentação do astronauta dentro dos limites do canvas em 4 direções
(cima, baixo, direita e esquerda).
<img src="atv joao e davi/img/astro_default.png"></img>


<h2>Rotacão:</h2>
A função rotate() é usada para aplicar uma transformação de rotação aos elementos desenhados dentro do canvas, 
essa função gira os elementos em torno do ponto de origem do sistema de coordenadas, matematicamente falando,
efetua um giro em torno de seu próprio eixo.
No projeto foi utilizado para fazer o astronauta girar em 90°, girando quatro vezes  

<h2>Escala:</h2>
A função scale() é utilizada para realizar o escalonamento ou redimensionamento de uma imagem, esta função 
permite ajustar o tamanho dos elementos em relação ao ponto de origem do sistema de coordenadas, podendo diminuir ou
aumentar o tamanho do elemento dentro do canvas.
No projeto foi utilizado para fazer o astronauta aumentar ou diminiur de tamanho, fica a escolha do usuário.

<h2>Transformação:</h2>
A função ctx.transform() realiza uma variedade de transformações, como translação, rotação, escala 
e inclinação em um único passo, sendo uma mistura de todos as funções mostradas anteriormente.
No projeto foi utilizado apenas para inclinar o astronauta, já que já foram utilizados outras
funções para o mesmo objetivo.

<h2>Clipping Path:</h2>
O Clipping Path é a função ctx.clip(), uma técnica de recorte, em combinação com a criação de um caminho (path) personalizado,
podendo ser utilizado outros métodos para esta personalização (arc, rect, line).
No projeto foi utilizado para definir um recorte circular em torno do astronauta com uma borda azul, tornando o canvas um círculo quando o usuário quiser.



<h2>Instruções de Jogo:</h2>  
<p>
      
- [Pressione o botão Jogar na tela para começar o jogo]()
      
- [Pressione as Teclas W, S, D, A para movimentar o astronauta]()
  
- [Pressione a Tecla R para girar o astronauta]()

- [Pressione a Tecla E para Aumentar ou Q para Diminuir o tamanho do astronauta]()

- [Pressione a Tecla T para inclinar o astronauta]()

- [Pressione a Tecla C para ativar uma borda circular no astronauta]()

- [Pressione a Tecla X para resetar o cenário]()

- [Ao Terminar Pressione o Botão Parar para Interromper a Cena]()
  
</p>
