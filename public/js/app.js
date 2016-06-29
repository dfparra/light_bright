
$(document).ready(function(){
  var buildBtn = $('#build');
  var container = $('.container');
  var numOfRows = 10; //Default values
  var numOfCols = 10; //Default values

  buildBtn.on('click',getValues);


  initGrid();
  addClickHandlers();
  // addClickHandlersV2();

  function getValues(){
    numOfRows = document.getElementById("rowsInput").value;
    numOfCols = document.getElementById("columnInput").value;
    console.log("THE NUMBER OF ROWS IS "+numOfRows+" THE NUMBER COLUMNS IS "+numOfCols);
    removeGrid();
    initGrid();
    addClickHandlers();

  }

  function addClickHandlersV2(){
    var cells = $('.cells');
    cells.on('click',changeColor);
  }
  function changeColor(){
    // console.log('im changing!1!!!');
    // $(this).toggleClass('red');
    var colorClasses = ['white','red','green','blue'];
    var colorCycle = Math.round(Math.random() * (colorClasses.length-1));
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(color);
  }

  function addClickHandlers(){
    var cells = $('.cell');
    console.log(cells);
    for(var counter=0;counter < cells.length;counter+=1){
      var cell = cells[counter];
      $(cell).on('mouseenter', changeColor);

    }
  }

  function removeGrid(){
      container.html('');
  }

  function initGrid(){
    for(var i = 0; i< numOfRows; i+= 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < numOfCols; j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }

});
