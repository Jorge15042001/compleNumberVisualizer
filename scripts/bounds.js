class BoundingBox {
  constructor(top, bottom, left, right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
  isInside(p) {
    return p.x > this.left && p.x < this.right && p.y > this.bottom && p.y < this.top;
  }
  areInside(ponints) {
    for (let p of ponints) {
      if (!this.isInside(p)) return false;
    }
    return true;
  }
}
