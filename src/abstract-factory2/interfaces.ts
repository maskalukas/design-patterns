export  interface IAbstractFactory {
    createCar(): ICar;
    createMotorbike(): IMotorbike;
}

export interface ICar {
    turnRadioOn(): void;
    turnRadioOff(): void;
}

export interface IMotorbike {
    raiseSpeed(): void
}