import {ICar} from "../interfaces";

export class CarAudi implements ICar {
    turnRadioOff() {
        console.log("Audi auto vyplo rádio.");
    }

    turnRadioOn() {
        console.log("Audi auto zaplo rádio.");
    }

}