//set variables

let colorPicker = $('#colorPicker');
let submit = $('input[type="submit"]');
let canvas = $('#pixelCanvas');

//define makegrid function
function makeGrid() {
  let height = $('#inputHeight').val();
  let width = $('#inputWeight').val();
  
  canvas.empty();
  for(let row=1; row<=height; row++){
  	canvas.append('<tr>');
  for(let col=1; col<=width; col++){
  		canvas.append('<td>');
  	}
  }
}

//define color picker function
canvas.on('click','td',function(){
	$(this).css('background-color',colorPicker.val()); 
})

//clear the cells

submit.click(function(e){
  e.preventDefault();
  makeGrid();
})