function rgb() {
  var redB = document.getElementById("redb").value;
  var greenB = document.getElementById("greenb").value;
  var blueB = document.getElementById("blueb").value;
  var colorB = rgb2hex(redB, greenB, blueB);

  var widthB = document.getElementById("width").value;
    document.getElementById("border").style.borderColor = colorB;
    document.getElementById("border").style.borderWidth = widthB;


  var redG = document.getElementById("redg").value;
  var greenG = document.getElementById("greeng").value;
  var blueG = document.getElementById("blueg").value;
  var colorG = rgb2hex(redG, greenG, blueG);
  document.body.style.backgroundColor = colorG;

}

rgb2hex = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(7-h.length).join("0")+h
    })(bin.toString(16).toUpperCase())
}
