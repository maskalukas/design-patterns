import {IAbstractFactory, ICar, IMotorbike} from "./interfaces";
import {CarAudi} from "./audi-products/car-audi";
import {MotorbikeAudi} from "./audi-products/motorbike-audi";

export class FactoryAudi implements IAbstractFactory {

    public createCar(): ICar {
        return new CarAudi();
    }

    public createMotorbike(): IMotorbike {
        return new MotorbikeAudi()
    }

}