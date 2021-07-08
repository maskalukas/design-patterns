import {ICar} from "../interfaces";

export class CarBmw implements ICar {
    turnRadioOff(): void {
        console.log("Bmw auto vyplo rádio.")
    }

    turnRadioOn(): void {
        console.log("Bmw auto zaplo rádio.");
    }

}