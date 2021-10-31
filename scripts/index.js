// const {Complex} = require("complex.js");

const id_canvas_souce = "source_canvas";
const id_canvas_operator = "operator_canvas";
const id_canvas_result = "result_canvas";


const s = ( sketch ) => {
  let plot2d ; // handles all the mathematical aspect of the the plot

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.clear()
  };

  sketch.drawAxes(p0x,p1x,p0y,p1y){
    //draw axis lines
    //draw arrows
  }
  sketch.drawLine(l){
    for (let i =0; i<l.length-1;i++)
    {
      const p0 = l[i];
      const p1 = l[i+1];
      sketch.line(p0.re,p0.im,p1.re,p1.im);
    }
  }




};

let myp5 = new p5(s,id_canvas_souce);

