import { calcCanvasAngle } from './unitMath';
class Unit {
    constructor(name, centerX, centerY, width, height, speed, imgPath, rotationSpeed) {
        this.destinationCanvasAngle = 0;
        this.isRotating = false;
        this.name = name;
        this.centerX = centerX;
        this.centerY = centerY;
        this.width = width;
        this.height = height;
        this.x = this.centerX - (this.width / 2);
        this.y = this.centerY - (this.height / 2);
        this.speed = speed;
        this.moveToX = centerX;
        this.moveToY = centerY;
        this.imgPath = imgPath;
        this.rotationSpeed = rotationSpeed;
    }
    assignAngle() {
        this.previousCanvasAngle = this.destinationCanvasAngle;
        this.destinationCanvasAngle = calcCanvasAngle(this.centerX, this.centerY, this.moveToX, this.moveToY);
        console.log('CLASS UNIT: new desctination has been assign, angle =', this.destinationCanvasAngle);
    }
    setAngleToRemove(newAngle) {
        let angleToRemove = this.makeAnglePositive(newAngle);
        this.angleToRemove = angleToRemove;
    }
    setDestinationCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.destinationCanvasAngle = updatedAngle;
    }
    setPreviousCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.previousCanvasAngle = updatedAngle;
    }
    setIsRotatingToTrue() {
        this.isRotating = true;
    }
    setIsRotatingToFalse() {
        this.isRotating = false;
    }
    setCurrentRotation(startAngle, finishAngle) {
        let updatedStartAngle = this.makeAnglePositive(startAngle);
        let updatedFinishAngle = this.makeAnglePositive(finishAngle);
    }
    makeAnglePositive(angle) {
        if (angle < 0) {
            return angle + 360;
        }
        else if (angle >= 0) {
            return angle;
        }
    }
}
export default Unit;
//# sourceMappingURL=Unit.js.map