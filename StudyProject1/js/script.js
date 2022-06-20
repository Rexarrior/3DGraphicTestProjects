let canvas = document.getElementById("Canvas")
Cw = 600;
Ch = 400;
Vw = 100;
Cw = 100;

function CanvasToViewport(x, y) {
    return (x*Vw/Cw, y*Vh/Ch, d)
}


function Trace (){
    O = (0,0,0)
for (let x = -Cw/2; x <  Cw/2; x++)
{
    for y in [-Ch/2, Ch/2] {
        D = CanvasToViewport(x, y)
        color = TraceRay(O, D, 1, inf)
        canvas.PutPixel(x, y, color)
    }
}
}