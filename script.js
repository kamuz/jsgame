var dragndrop = (function() {
  var myX = '';
  var myY = '';
  var whichArt = '';

  function moveStart(e){
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetX === undefined ? e.layerY : e.offsetY;
    whichArt.style.zIndex = 10;
  }

  document.querySelector('body').addEventListener('dragstart', moveStart, false);
})();