import {IMotorbike} from "../interfaces";

export class MotorbikeAudi implements IMotorbike {
    raiseSpeed() {
        console.log("Audi motorka dosáhla 100 km/h.");
    }

}