// hate you javascript, 
let that;
class dragableZone {
  constructor(dragableElement) {
    this.offset = createNewVector(0, 0);
    this.dragableElement = dragableElement;
    this.enableDragging();

    this.mouseStart = createNewVector(0, 0);
    that = this;//i really hate javascript
    this.dragableElement.ondragstart = that.onDragStart;
    this.dragableElement.ondrag = that.onDrag;
  }
  onDragStart() {
    that.mouseStart = MOUSE.copy();
  }
  onDrag() {
    const movement = MOUSE.sub(that.mouseStart);
    that.drag(movement);
    that.mouseStart = MOUSE.copy();
  }

  drag(movement) {
    this.offset.addSelf(movement);
    console.log(movement, this.offset);
  }
  disableDraggin() {
    this.dragableElement.draggable = false;
  }
  enableDragging() {
    this.dragableElement.draggable = true;

  }
}
