/** import {IAbstractFactory} from "./abstract-factory2/interfaces";
import {FactoryBmw} from "./abstract-factory2/factory-bmw";
import {FactoryAudi} from "./abstract-factory2/factory-audi";


const factoryTest1: IAbstractFactory = new FactoryBmw();
const car1 = factoryTest1.createCar();
car1.turnRadioOn();
car1.turnRadioOff();


const factoryTest2: IAbstractFactory = new FactoryAudi();
const motobike1 = factoryTest2.createMotorbike();
motobike1.raiseSpeed();

 **/