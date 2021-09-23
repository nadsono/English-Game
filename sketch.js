//locs
var tela, ybotao1, ybotao2, ybotao3, xMenu, xvoltar, yvoltar;
let img, img2, img3, img4;
let somFundo;
let m;

//game locs
var xquadro, yquadro, xGbotao, yGbotao, barbeador, gravata, rato, cadarco, quests;

//control s
var i, crt, score , time , maxTime, record, cronometro, cronometrOn , pontos, total, repostas;
let multiply;

function preload() {
  img = loadImage('./rummenuige.png');
  img2 = loadImage('./debone_e_oclu.png')
  img3 = loadImage('./índice.png')
  img4 = loadImage('./imgsGame/fire.png')
  
  //imagens do jogo
  gamages = [loadImage('./imgsGame/fixar-vocabulario.jpg'),
             loadImage('./imgsGame/barbeador.jpg'),
             loadImage('./imgsGame/gravata.jpg'),
             loadImage('./imgsGame/cadarço.jpg'),
             loadImage('./imgsGame/rato.jpg') ];
  
  //sons do jogo
  soundFormats('mp3', 'ogg');
  somFundo = loadSound('./sounds/somdefundo', playBacksound)
  somFundo.setVolume(0.3)
}

function setup() {
  createCanvas(500, 500);

  tela = 0;
  ybotao1 = 100;
  ybotao2 = 180;
  ybotao3 = 260;
  xMenu = 150;
  xvoltar = 10;
  yvoltar = 14;

  //game locs
  xquadro = 150;
  yquadro = 50;
  xGbotao = [30, 180, 330]
  yGbotao = 290
  barbeador = ['shaver', 'shaver', 'barber', 'gillet', 'barbeador'];
  gravata = ['tie', 'gravat', 'tie', 'dye', 'gravata']
  rato = ['mouse', 'mouse', 'ratic', 'randedor', 'rato']
  cadarco = ['shoelace', 'knot', 'cadart', 'shoelace', 'cadarço']
  quests = [0, barbeador, gravata, cadarco, rato]

  //control s
  i = 1;
  crt = 0;
  fire = 1;
  time = 0;
  maxTime = 11;
  record = 0;
  cronometro = 0;
  cronometrOn = true;
  pontos = [];
  total = 0;
  botao = 0;
  multiply = []
  xisOUnao = true;
  
  somFundo.setVolume(0.3)
}

function draw() {
  textStyle(NORMAL);
  
  //tela do menu
  if (tela == 0 ) {
    
  somFundo.setVolume(0.3)
    
  image(img3, 0, 0, 500, 500)
  
  textSize(44)
  stroke(255);
  strokeWeight(3);
  fill(0)
  text('Menu', 250, 50)
  text('English Game', 250, 420)
  noStroke()
  
  //button 1
  textAlign(CENTER);
  textSize(26);
  
  stroke(255, 204, 0)
    if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao1 && mouseY < ybotao1+50){
      fill(255, 204, 0)
      
      if(mouseIsPressed){
        tela = 1;
        cronometrOn = true;
      }
      
    }else{
      fill(20)
    }
  rect(xMenu, ybotao1, 200, 50, 30);
      if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao1 && mouseY < ybotao1+50){
      fill(20)
    }else{
      fill(240)
    }
  noStroke();
  text("Jogar", xMenu+100, 130);
    
  //button 2
  stroke(200)
      if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao2 && mouseY < ybotao2+50){
      fill(240)
              
      if(mouseIsPressed){
        tela = 2;
      }
      
    }else{
      fill(20)
    }
  rect(xMenu, ybotao2, 200, 50, 30);
  
      if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao2 && mouseY < ybotao2+50){
      fill(20)
    }else{
      fill(240)
    }
  noStroke();
  text("Créditos", xMenu+100, ybotao2+30);
    
  //button 3
  stroke(200)
      if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao3 && mouseY < ybotao3+50){
      fill(240)
              
      if(mouseIsPressed){
        tela = 3;
      }
      
    }else{
      fill(20)
    }
  rect(xMenu, ybotao3, 200, 50, 30);
  
      if(mouseX > xMenu && mouseX < xMenu+200 && mouseY > ybotao3 && mouseY < ybotao3+50){
      fill(20)
      
    }else{
      fill(240)
    }
  noStroke();
  text("Instruções", xMenu+100, ybotao3+30);
  }  
  
  //Em jogo
  if (tela == 1){
    
    somFundo.setVolume(0.1)
    
    background(50)
    image(gamages[0], 0, 0)
      
      stroke(255, 204, 0)
      rect(xquadro, yquadro, 200, 150)
      image(gamages[i], xquadro, yquadro, 200, 150)
      textSize(16)
      noStroke()
      text('Qual palavra em Inglês representa a imagem:', 250, 275)
    
      //pontuação
      fill(250)
      stroke(255, 204, 0)
      rect(20, 80, 100, 110, 30)
      noStroke()
      textSize(18)
      fill(0)
      text("score:", 70, 110)
      textSize(28)
      text(total, 70, 150)
      
      //fire
      fill(250)
      stroke(255, 204, 0)
      rect(380, 80, 100, 110, 30)
      noStroke()
      textSize(18)
      fill(0)
      text("on fire:", 430, 100)
      textSize(20)
      text(fire+'x', 430, 180 )
      image(img4, 405, 105, 55, 55)
    
      //tempo
         time++
         cronometro = parseInt((-time/100)+maxTime)
       
    if(cronometrOn){
       
        if(cronometro > 0){
         if(cronometro<4){
           fill(255,0,0)
         }  else if(cronometro<7) {
           fill(255,80,0)
         }  else if(cronometro<9) {
           fill(255,204,0)
         }  else  {
           fill(0,255,0)
         }

              noStroke()
              textSize(50)
              text(cronometro, 250, 420)
              textSize(18)
              text('time:', 250, 370)
              noFill()             
              record = cronometro;
          }  
           else if (cronometro <= 0){ //se o tempo acabar
           textSize(30)

          fill(0)
          text('Time Out!', 250, 400)

          textSize(12)
          text(`Seu tempo acabou! Tente acertar sem pontuar \n ou continue.`, 250, 420)
          textSize(20)
          
          fill(20)
          stroke(255, 204, 0)
          rect(400, 400, 50, 20, 30)
          noStroke()
          fill(255, 204, 0)
          textSize(12)
        
          if(i==4){
          text('End', 425, 415)
          } else{
          text('Next', 425, 415)            
          }
          textSize(20)
          
          if(mouseX > 400 && mouseX <400+50 && mouseY >400 && mouseY < 400+20){

            if(mouseIsPressed && i == 4){
              console.log(pontos)
              tela = 4;

            }else if (mouseIsPressed){
              i++        
              crt=0
              time = 0;
              cronometro = 0;
              cronometrOn = true;
              maxTime --;
            }
          }
        }                           
        } 
    
      //questões
      textSize(20)
      //for para gerar as opções/botões de resposta
      for(a=0; a<4 && i<=4; a++){

        if(mouseX > xGbotao[a] && mouseX < xGbotao[a]+120 && mouseY > yGbotao && mouseY < yGbotao+50){
        fill(240)

          if(mouseIsPressed){
  
            botao = a;
            
            if(quests[i][a+1] == quests[i][0]){
              crt = 1
              cronometrOn = false;
              pontos[i-1] = record
              if(xisOUnao){
                multiply[i] = 1                
              }            
              fire = multiply.reduce((fire, currentElement) => fire + currentElement)
              total = pontos.reduce((total, currentElement) => total + currentElement)
            }
            if(quests[i][a+1] != quests[i][0] && crt !=1){
              fill(255, 0, 0)
              multiply[i] = 0;
              crt = 2
              xisOUnao= false;
            }
          }
          
        }  else  {
          fill(20)
        }
      //se acertar a tentativa
      if(quests[i][a+1] == quests[i][0] && crt == 1){
                  
          fire = multiply.reduce((fire, currentElement) => fire + currentElement) + 1
        
          textSize(30)
          //fill(50)
          //rect(150, 350, 200, 100)
          fill(0)
          text('Congratulations!', 250, 400)

          textSize(12)
          text(`Você acertou!  ${quests[i][4]} = ${quests[i][0]}.`, 250, 420)
          textSize(20)
          
          fill(20)
          stroke(255, 204, 0)
          rect(400, 400, 50, 20, 30)
          noStroke()
          fill(255, 204, 0)
          textSize(12)
        
          if(i==4){
          text('End', 425, 415)
          } else{
          text('Next', 425, 415)            
          }
          textSize(20)
          
        if(mouseX > 400 && mouseX <400+50 && mouseY >400 && mouseY < 400+20){

          if(mouseIsPressed && i == 4){
            //console.log(pontos)
            tela = 4;
            xisOUnao = true;
          }else if (mouseIsPressed){
            i++        
            crt=0
            time = 0;
            cronometro = 0;
            cronometrOn = true;
            maxTime --;
            xisOUnao = true;
          }
        }         
          fill(50, 205, 50)//cor verde ao acerto
      }
      //se fizer a tentativa errada
      if(quests[i][a+1] != quests[i][0] && crt == 2 && cronometro>0){
        
          textSize(30)
          fill(50)
          rect(150, 350, 200, 100)
          fill(0)
          text('Sorry! Try Again.', 250, 400)
          textSize(14)
          text(`Você errou! Tente acertar ou continue o jogo. \n Faltam:`, 250, 420)
          textSize(16)
          text(record + ' segundos', 250, 455  )
          textSize(20)
          
          fill(20)
          stroke(255, 204, 0)
          rect(400, 400, 50, 20, 30)
          noStroke()
          fill(255, 204, 0)
          textSize(12)
          
        
          if(i==4){
          text('End', 425, 415)
          } else{
          text('Next', 425, 415)            
          }
          textSize(20)
          
        if(mouseX > 400 && mouseX <400+50 && mouseY >400 && mouseY < 400+20){

          if(mouseIsPressed && i == 4){
            console.log(pontos)
            tela = 4;
          
          }else if (mouseIsPressed){
            i++        
            crt=0
            time = 0;
            cronometro = 0;
            cronometrOn = true;
            maxTime --;
          }
        }
        
        if(botao == a){
          fill(255,0,0) //cor vermelha ao erro
          //cronometrOn = false;
        } else {
          fill(20)
        }
      }
        
       rect(xGbotao[a], yGbotao, 120, 50, 30);       
       noFill()
      if(mouseX > xGbotao[a] && mouseX < xGbotao[a]+120 && mouseY > yGbotao && mouseY < yGbotao+50){
        fill(20)
        }else{
          fill(240)
        }

      noStroke();
      text(quests[i][a+1], xGbotao[a]+60, yGbotao+30);

    //botao voltar
    fill(20)
    stroke(255, 204, 0)
    rect(10, 10, 50, 20, 30)
    noStroke()
    fill(255, 204, 0)
    textSize(12)
    text('voltar', 35, 24)
    textSize(20)

      if(mouseX > xvoltar && mouseX < xvoltar+50 && mouseY >yvoltar && mouseY < yvoltar+20){

        if(mouseIsPressed){
            tela = 0;
            i = 1;
            crt = 0;
            fire = 1;
            time = 0;
            maxTime = 11;
            record = 0;
            cronometro = 0;
            cronometrOn = true;
            pontos = [];
            total = 0;
            botao = 0;
            multiply = []
            xisOUnao = true;
        }

      }
      }
    
    }
    
  //Créditos
  if(tela == 2){
    
    somFundo.setVolume(0.2)
    
    background(50)
    textSize(36)
    stroke(255, 204, 0);
    strokeWeight(3);
    text('Créditos', 240, 50)
    noStroke()
    
    //Orientador
    image(img, 50, 90)
    textSize(28)
    fill(255)
    text('Orientador', 235, 120)
    stroke(255, 204, 0)
    line(170, 125, 310, 125);
    noStroke()
    textSize(16)
    text('RUMMENIGGE RUDSON DANTAS', 300, 150)
    textSize(12)
    text('Escola de Ciencias e Tenologia / ECT-UFRN', 300, 180)
    
    //Aluno
    image(img2, 50, 310, 100, 120)
    textSize(28)
    fill(255)
    text('Desenvolvedor', 260, 330)
    textSize(12)
    text(' / aluno', 380, 330)
    stroke(255, 204, 0)
    line(170, 335, 360, 335);
    noStroke()
    textSize(16)
    text('NADSON VINICIUS SILVA BARBOSA', 310, 360)
    textSize(12)
    text('Aluno da Escola de Ciencias e Tenologia / ECT-UFRN', 325, 390)
  
    //botao voltar
    fill(20)
    stroke(255, 204, 0)
    rect(10, 10, 50, 20, 30)
    noStroke()
    fill(255, 204, 0)
    text('voltar', 35, 24)
    if(mouseX > xvoltar && mouseX < xvoltar+50 && mouseY >yvoltar && mouseY < yvoltar+20){
      
      if(mouseIsPressed){
        tela = 0
      }
    }
    
    
  }
  
  //Instruções
  if(tela == 3){
    
    somFundo.setVolume(0.2)
    
    background(50)
    stroke(250,205,0)
    fill(250)
    textSize(40)
    text('Instruções', 250, 80)
    noStroke()
    textSize(20)    
    
    text('Acerte rápido a palavra que representa a imagem\n para ganhar mais pontos. \n Sempre que você erra deixa de ganhar um "fire"\n para ter mais pontos no final.', 250, 150)
    text('Pensado para alunos que estão \n chegando no fundamental e começando \n a estudar Inglês, com ajuda  de um jogo \n de palavras para explorar o vocabulário. ', 250, 300)
    
    stroke(255, 204, 0)
    line(100, 250, 400, 250)
    
    
    
    //botao voltar
    fill(20)
    stroke(255, 204, 0)
    rect(10, 10, 50, 20, 30)
    noStroke()
    fill(255, 204, 0)
    textSize(12)
    text('voltar', 35, 24)
    if(mouseX > xvoltar && mouseX < xvoltar+50 && mouseY >yvoltar && mouseY < yvoltar+20){
      
      if(mouseIsPressed){
        tela = 0
      }
    }
  }
  
  //GameOver
  if(tela == 4){
    
    somFundo.setVolume(0.2)
    
    background(50)
    //stroke(250,205,0)
    fill(250)
    textSize(40)
    text('GAME OVER', width/2, height/4)
    textSize(18)
    text('Parabéns por concluir o jogo!\n Agora você já conhece mais algumas palavras em Inglês.', width/2, 320)
    
    if(mouseX > 180 && mouseX < 320 && mouseY > 375 && mouseY < 415){
        if(mouseIsPressed){
            tela = 0;
            i = 1;
            crt = 0;
            fire = 1;
            time = 0;
            maxTime = 11;
            record = 0;
            cronometro = 0;
            cronometrOn = true;
            pontos = [];
            total = 0;
            botao = 0;
            multiply = []
            xisOUnao = true;
        }
      }

    
      if(mouseX > 190 && mouseX < 310 && mouseY > 430 && mouseY < 460){
        if(mouseIsPressed){
            tela = 2;
            i = 1;
            crt = 0;
            fire = 1;
            time = 0;
            maxTime = 11;
            record = 0;
            cronometro = 0;
            cronometrOn = true;
            pontos = [];
            total = 0;
            botao = 0;
            multiply = []
            xisOUnao = true;
        }
      }
    
      fill(20)
      stroke(255, 204, 0)
      rect(180, 375, 140, 40, 30)
      stroke(255, 204, 0)
      rect(180, 375, 140, 40, 30)
      rect(190, 430, 120, 30, 30)
      noStroke()
      fill(255, 204, 0)
      textSize(16)
      text('Menu Principal', width/2, 400)
      text('Créditos',width/2, 450)
      textSize(20)
    
      text('Total de Pontos:', width/2, 200)
      textSize(50)
      text((total*fire), width/2, 260)
      

  } //tela04
  
  //fim
}

function playBacksound() {
  somFundo.play()
}
