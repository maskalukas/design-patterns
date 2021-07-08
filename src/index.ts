import {IAbstractFactory} from "./abstract-factory2/interfaces";
import {FactoryBmw} from "./abstract-factory2/factory-bmw";
import {FactoryAudi} from "./abstract-factory2/factory-audi";
import {RelationalDbCreator} from "./factory-method/creator-dbs/relational-db-creator";
import {CreatorDb} from "./factory-method/creator";
import {NosqlDbCreator} from "./factory-method/creator-dbs/nosql-db-creator";


/** ABSTRACT FACTORY
const factoryTest1: IAbstractFactory = new FactoryBmw();
const car1 = factoryTest1.createCar();
car1.turnRadioOn();
car1.turnRadioOff();


const factoryTest2: IAbstractFactory = new FactoryAudi();
const motobike1 = factoryTest2.createMotorbike();
motobike1.raiseSpeed();
 **/


/** FACTORY METHOD
// mysql
const creator: CreatorDb = new RelationalDbCreator();
console.log(creator.createBaseDb().printCountOfAllTables());

// mongodb
const creator2 = new NosqlDbCreator();
console.log(creator2.createBaseDb().printCountOfAllTables());
 **/


