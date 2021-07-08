import { IMotorbike} from "../interfaces";

export class MotorbikeBmw implements IMotorbike {
    raiseSpeed() {
        console.log("Bmw motorka dosáhla 150km/h.");
    }

}