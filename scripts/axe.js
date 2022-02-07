class axe {
  constructor() {
    this.ticksDensity = 10;
    this.tickHeight = 10;
    this.arrowWidth = 10;
    this.arrowHeight = 10;
  }
  findTicksDistance(upperBound, lowerBound, ticksDensity) {
    const almostDX = (upperBound - lowerBound) / ticksDensity;
    //aproximate dx to the form c1*10^c2, where c1 is an naturalNumber between 1 and 9 and c2 is an integer number
    const c2 = Math.floor(Math.log10(almostDX));
    const c1 = Math.floor(almostDX / Math.pow(10, c2));

    return c1 * Math.pow(10, c2);
  }
  getLabels(lowerBound, upperBound) { //get the list of ticks that shouldbe placed in the drawing
    let ticks = [];
    const dx = sketch.findTicksDistance(upperBound, lowerBound, this.ticksDensity);
    const firstTick = Math.round(lowerBound / dx) * dx;
    for (let tickPosition = firstTick; tickPosition < upperBound; tickPosition += dx) {
      ticks.push(tickPosition);
    }

    return ticks;
  }
  getAxesLines(bounds, offset) {
    console.error("needs fixing");
    let response = new Object();
    response.lines = []

    //get the axis lines
    const originX = offset.x;
    const originY = offset.y;
    response.lines.push([0, originY, sketch.width, originY])
    response.lines.push([originX, 0, originX, sketch.height])
    //draw arrows
    const arrowHeight = 10;
    const arrowWidth = 10;
    response.arrows = [];
    //positive y arrow
    arrows.push([originX, 0, originX + arrowWidth, arrowHeight, originX - arrowWidth, arrowHeight])
    //negative y arrow
    arrows.push([originX, sketch.height, originX + arrowWidth, sketch.height - arrowHeight, originX - arrowWidth, sketch.height - arrowHeight])
    //positive x arrow
    arrows.push([sketch.width, originY, sketch.width - arrowHeight, originY - arrowWidth, sketch.width - arrowHeight, originY + arrowWidth])
    //negative x arrow
    arrows.push([0, originY, arrowHeight, originY - arrowWidth, arrowHeight, originY + arrowWidth])

    return response;
  }
  setTicksDensity(td) {
    this.ticksDensity = td;
  }
  setTicksHeight(th) {
    this.tickHeight = th;
  }
  setArrowHeight(ah) {
    this.arrowHeight = ah;
  }
  setArrowWidth(aw) {
    this.arrowWidth = aw;
  }
}
