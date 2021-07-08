import {IAbstractFactory, ICar, IMotorbike} from "./interfaces";
import {CarBmw} from "./bmw-products/car-bmw";
import {MotorbikeBmw} from "./bmw-products/motorbike-bmw";

export class FactoryBmw implements IAbstractFactory{
    public createCar(): ICar {
        return new CarBmw();
    }

    public createMotorbike(): IMotorbike {
        return new MotorbikeBmw();
    }

}