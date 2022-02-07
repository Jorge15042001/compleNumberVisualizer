class graph2d {
  constructor(containingElementId, canvasHandler) {
    this.containingElementId = containingElementId;
    this.containingElement = document.getElementById(containingElementId);
    this.plane2d = new complexPlane();//mathematical backed for the complex plane
    this.dragableZone = new dragableZone(this.containingElement);//handles moving around the canvas
    this.zoomableZone = new zoomableZone();//hadles zoomin in and out

    this.canvas = new p5(canvasHandler, this.containingElement);
    this.canvas.handler = this;// canvas needs a referece to handler in order to get the data
  }
  getBounds() {
    //compute que bounding rectangle to be drawn
    const scaleFactor = this.zoomableZone.scaleFactor;
    const offset = this.dragableZone.offset;
    const h = this.canvas.height / scaleFactor;
    const w = this.canvas.width / scaleFactor;
    return new BoundingBox(offset.y + h / 2, offset.y - h / 2, offset.x - w / 2, offset.x + w / 2);
  }
  getFrameContent() {
    let response = new Object();
    const graphData = this.plane2d.getDrawingData(this.getBounds());
    //TODO: improve design, this should not be a simple point, it must be a line;
    // response.lines
    // this.plane2d.
    return response;
  }

}

