class complexPlane {
  constructor() {
    this.lines = [];                  // lines inside the plane
    this.realAxe = new axe();
    this.imgAxe = new axe();
  }
  //begins a new line
  beginNewLine() {
    this.lines.push([]);
  }

  //addPoint to a lines
  addPoint(p) {
    //TODO: handle sacling
    const lastLine = this.lines[this.lines.length - 1];
    lastLine[lastLine.length] = p;
  }
  //handling scale factor

  //return axes labels and lines correctly scaled to be drawn
  getDrawingData(bounds) {
    let data = new Object();
    let realLabels = this.realAxe.getLabels(bounds.left, bounds.right);
    let imLabels = this.imgAxe.getLabels(bounds.bottom, bounds.top);

    //
    data.xticks = []
    data.yticks = []

    for (let rl of realLabels) data.xticks.push(new tick(rl, rl + ""));
    for (let il of imLabels) data.yticks.push(new tick(il, il + "i"));
    // drawingData = new Object();
    // drawingData.lines = this.lines;
    // drawingDate.axesTicksLablel =[ this.realAxe.getTicksLabels(bounds),this.imgAxe.getTicksLabels(bounds)]
    return data;
  }


}
