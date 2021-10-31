class plot2d {
  constructor(sketch,size,origin) {
    this.origin = createVecor(0, 0);
    this.lines = [];
    this.sketch = sketch;
    this.scaleFactor = 1;
  }
  addPoint(p){
    const lastLine = this.lines[this.lines.length -1];
    lastLine[lastLine.length ] = p;
  }
  beginNewLine(){
    this.lines.push([]);
  }

  zoomIn(){
    this.scaleFactor += 0.1;
  }
  zoomOut(){
    this.scaleFactor -= 0.1;
  }

  drawLines(){
    for (l of this.lines){
      this.sketch.drawLine(l);
    }
  }


  


}
