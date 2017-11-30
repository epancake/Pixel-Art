function createGame() {
  addCanvas();
  addColorInput();
  addClear();
}

function addCanvas() {
  const pixelSize = 10;
  var canvas = document.createElement('div');
  canvas.className += 'canvas';
  console.log('create game fired off');
  document.getElementsByClassName('wrapper')[0].appendChild(canvas);
  let numberOfPixelsAcross = (canvas.offsetWidth / pixelSize).toPrecision(2);
  let numberOfPixelsHigh = (canvas.offsetHeight / pixelSize).toPrecision(2);
  let canvasArea = numberOfPixelsAcross * numberOfPixelsHigh;
  for (var i = 0; i < canvasArea; i++) {
    var pixel = document.createElement('div');
    pixel.className += 'pixel';
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`;
    addClickListener(pixel);
    addClickListener2(pixel);
    canvas.appendChild(pixel);
  }
}

function addColorInput() {
  colorpicker = document.createElement('input');
  colorpicker.type = 'color';
  colorpicker.id = 'colorpick';
  colorpicker.value = '#92AF74';
  var colorLabel = document.createElement('p');
  colorLabel.textContent = 'Pick a color:';
  document.getElementsByClassName('wrapper')[0].appendChild(colorLabel);
  document.getElementsByClassName('wrapper')[0].appendChild(colorpicker);
}

function addClear() {
  var clearButton = document.createElement('input');
  clearButton.value = 'Clear Canvas';
  clearButton.id = 'clear';
  addClickListenerClear(clearButton);
  document.getElementsByClassName('wrapper')[0].appendChild(clearButton);
}

function addClickListener(element){
  element.addEventListener('mouseover', function(){
    colorpicker = document.getElementById('colorpick');
    colorvalue = colorpicker.value;
    if (event.buttons == 1) {
      element.style.background = colorvalue;
    }
  });
}

function addClickListener2(element){
  element.addEventListener('click', function(){
    colorpicker = document.getElementById('colorpick');
    colorvalue = colorpicker.value;
    element.style.background = colorvalue;
  });
}

function addClickListenerClear(element){
  element.addEventListener('click', function(){
    if (window.confirm('Are you sure you want to clear this masterpiece?')) {
      var pixelArray = document.getElementsByClassName('pixel');
      [].forEach.call(pixelArray, item => item.style['background-color'] = 'white');
    }
  });
}

window.onload = createGame();
