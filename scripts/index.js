
const ID_CANVAS_SOURCE = "source_canvas";
const id_canvas_operator = "operator_canvas";
const id_canvas_result = "result_canvas";

let MOUSE = createNewVector(0, 0)
document.onmousemove = function(e) {
  MOUSE.x = e.clientX
  MOUSE.y = e.clientY
}
const canvasHandler = (sketch) => {
  //this object handle drawing in the canvas
  //TODO:handle resize, when signal si recived

  sketch.setup = () => {
    sketch.createCanvas(500, 500);

  };

  sketch.draw = () => {
    sketch.clear();
    let drawingData = sketch.handler.getFrameContent();
    drawingData
    // for (let l of drawingData.lines) {
    //   sketch.line(l[0], l[1], l[2], l[3]);
    // }

  };




};


let sourceGraph = new graph2d(ID_CANVAS_SOURCE, canvasHandler);
