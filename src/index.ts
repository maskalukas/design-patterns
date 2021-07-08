import {IAbstractFactory} from "./abstract-factory2/interfaces";
import {FactoryBmw} from "./abstract-factory2/factory-bmw";
import {FactoryAudi} from "./abstract-factory2/factory-audi";
import {RelationalDbCreator} from "./factory-method/creator-dbs/relational-db-creator";
import {CreatorDb} from "./factory-method/creator";
import {NosqlDbCreator} from "./factory-method/creator-dbs/nosql-db-creator";
import {FamilyHouseBuilder} from "./builder/builders/family-house-builder";
import {IBuilderHouse} from "./builder/interface";
import {BuilderDirector} from "./builder/builders/builder-director";
import {Person} from "./prototype/Person";
import {Dog} from "./prototype/Dog";


/** ABSTRACT FACTORY PATTERN
const factoryTest1: IAbstractFactory = new FactoryBmw();
const car1 = factoryTest1.createCar();
car1.turnRadioOn();
car1.turnRadioOff();


const factoryTest2: IAbstractFactory = new FactoryAudi();
const motobike1 = factoryTest2.createMotorbike();
motobike1.raiseSpeed();
 **/


/** FACTORY METHOD PATTERN
// mysql
const creator: CreatorDb = new RelationalDbCreator();
console.log(creator.createBaseDb().printCountOfAllTables());

// mongodb
const creator2 = new NosqlDbCreator();
console.log(creator2.createBaseDb().printCountOfAllTables());
 **/

/** BUILDER PATTERN
const Builder: IBuilderHouse<any> = new FamilyHouseBuilder();
const Director = new BuilderDirector();
Director.setBuilder(Builder);
Director.buildHouseWithTwoFloors()
Builder.getHouse().showParts();
 **/


/** PROTOTYPE PATTERN
const Me = new Person("Lukáš",23);
Me.setAnimal(new Dog("Borek"));
const ClonnedMe = Me.clone();
console.log(ClonnedMe === Me, Me === Me);
 **/


