var chosenColor = 'black';
var hoverVar = 0;
var replaceVar = 0;

function setHover(){
  this.style.backgroundColor = chosenColor;
  hoverVar = 1;
}
function releaseHover(){
  hoverVar = 0;
}
function addAttributes(element, attributes){
  if(typeof attributes === "object"){
    Object.keys(attributes).forEach(function(attribute){
    element[attribute] = attributes[attribute];
  });
  }else{
    throw new TypeError('attributes must be an Object!!!');
  }
}

function setReplace(){
  replaceVar = 1;
}

function setButton(element){
  var options = {
  type:'button',
  style : 'width: 80px; background-color:' + element.dataset.chosenColor + ';height: 20px;',
  onclick:buttonColor
};
addAttributes(element, options);
}

function setColor(){
    this.style.backgroundColor = chosenColor;
}

function setColorHover(){
  if(hoverVar === 1)
    this.style.backgroundColor = chosenColor;
}
function createGrid(rows, columns, attributes){
  if(!rows)
    throw new Error("Rows is not defined");

  if(isNaN(rows))
    throw new TypeError("Rows is not a number");

  if(rows <= 0)
    throw new RangeError("Number is less than 1");
  var node = document.createElement("div");
  var columnNum = rows;
  node.setAttribute('style', 'display: flex;  flex-direction: row; flex-wrap: nowrap;');
  var columnAttribute = {
  style : 'width: 50px; border-color: black; border-style: solid; height: 50px;',
};
  if(!isNaN(columns))
    columnNum = columns;
  for(var i = 0; i < rows; i++){
    var row = document.createElement("div");
    for(var j = 0; j < columnNum; j++){
      var column = document.createElement("div");
      addAttributes(column, columnAttribute);
      column.onmousedown = setHover;
      column.onmouseup = releaseHover;
      column.onmouseover = setColorHover;
      column.onclick = setColor;
      row.appendChild(column);
    }
    node.appendChild(row);
  }
  return node;
}

function buttonColor(){
    chosenColor = this.dataset.chosenColor;
    replaceVar = 0;
}
var clearButton =  document.createElement('button');
var eraseButton = document.createElement('button');
var redButton = document.createElement('button');
var greenButton = document.createElement('button');
var blueButton = document.createElement('button');
var replaceButton = document.createElement('button');
redButton.dataset.chosenColor = 'red';
greenButton.dataset.chosenColor = 'green';
blueButton.dataset.chosenColor = 'blue';
eraseButton.dataset.chosenColor = 'white';
clearButton.dataset.chosenColor = null;
greenButton.style.backgroundColor = '#3399FF';
blueButton.style.backgroundColor = 'blue';

eraseButton.innerHTML = 'erase';
clearButton.innerHTML = 'clear';
replaceButton.innerHTML = 'replace';
setButton(eraseButton);
setButton(clearButton);
setButton(redButton);
setButton(greenButton);
setButton(blueButton);
setButton(replaceButton);


var allGrid = createGrid(10,10);

var place = document.querySelector('div');
place.appendChild(redButton);
place.appendChild(greenButton);
place.appendChild(blueButton);
place.appendChild(eraseButton);
place.appendChild(clearButton);
place.appendChild(replaceButton);

place.appendChild(allGrid);


