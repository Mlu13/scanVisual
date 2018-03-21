//******************************************
//Author: Maggie(Manjun) Lu
//Assignment: Scanning & Visualization
//****************************************


var portArr = []
var closedArr = []
var openArr = []
var space = 0;

function preload() {
  table = loadTable('/Users/maggie/Documents/p5/empty-example/port.csv', 'csv', 'header');
}


function setup() {
  // put setup code here
  createCanvas(2000, 720);
  background(255);
  textAlign(CENTER);
  fill('black');
  

  rowCount = table.getRowCount();
  colCount = table.getColumnCount();

  for(var i = 0; i < rowCount; i++){
  	portArr[i] = table.getNum(i, 'port')

  }
}

function draw() {
  // put drawing code here
  background(255);
  fill("blue");
  ellipse(700,100,35,35);
  fill('black');
  text("local host: 127.0.0.1", 700, 60);
  space = 1000/portArr.length;
  text("* Blue circle represent local host",98,50);
  text("* Red circle represent closed port",100,70);
  text("* Orange circle represent open port", 105,90);
  text("* The original result shows port 1-25 are closed. In order to test the code, I changed port 25 to open manually", 300, 110);

  //console.log(space);

  for(var j = 0; j < portArr.length; j++){

    if(table.getString(j, 'status') == 'closed'){
      fill('red');
      ellipse(space*j + 20, 500, 15,15);
      fill('black');
      text(portArr[j], space*j + 20, 550);
      line(700,100, space*j + 20, 500);

    }
    else if(table.getString(j, 'status') == 'open'){
      fill('orange');
      ellipse(space*j + 20, 500, 15,15 );
      fill('black');
      text(portArr[j], space*j + 20, 550);
      line(700, 100, space*j +20, 500);
    }
  }

}