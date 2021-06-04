var c = document.getElementById("canvasWork");
var ctx = c.getContext("2d");
//Line Left
dibujarLineas("black",320, 25, 2, 25);
dibujarLineas("black",320, 15, 320, 25);
dibujarLineas("black",2, 15, 2, 25);
//Line Center
dibujarLineas("#FFC32D", 330, 25, 670, 25);
dibujarLineas("#FFC32D", 330, 15, 330, 25);
dibujarLineas("#FFC32D", 670, 15, 670, 25);
//Line Rigth
dibujarLineas("black", 680, 25, 999, 25);
dibujarLineas("black", 680, 15, 680, 25);
dibujarLineas("black", 999, 15, 999, 25);


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xinicial, yinicial);
    ctx.lineTo(xfinal, yfinal);
    ctx.stroke();
    ctx.closePath();
}
