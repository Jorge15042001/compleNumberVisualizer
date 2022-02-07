class vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  //non variants operattion
  add(v) {
    let result = this.copy();//createNewVector(this.x, this.y);
    result.x += v.x;
    result.y += v.y;
    return result;
  }
  scale(c) {
    let result = this.copy();//createNewVector(this.x, this.y);
    result.x *= c;
    result.y *= c;
    return result;
  }
  sub(v) {
    let result = this.copy();
    return result.add(v.scale(-1));
  }
  getNormalizedVecotor() {
    let result = this.copy();
    result.scale(1 / result.norm());
    return result;
  }
  //variants operattions
  addSelf(v) {
    this.x += v.x;
    this.y += v.x;
  }
  subSelf(v) {
    this.x -= v.x;
    this.y -= v.x;
  }
  scaleSelf(c) {
    this.x *= c;
    this.y *= c;
  }
  normalizeSelf() {
    const norm = this.norm();
    this.scaleSelf(1 / norm);
  }
  // adition operattions
  normSquared() {
    return this.x * this.x + this.y * this.y;
  }
  norm() {
    return Math.sqrt(this.normSquared());
  }
  copy() {
    return createNewVector(this.x, this.y);
  }


}
function createNewVector(x, y) {
  return new vector2d(x, y);

}
