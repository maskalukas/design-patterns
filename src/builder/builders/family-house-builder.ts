import {IBuilderHouse} from "../interface";
import {House} from "../house";
import {FactoryBmw} from "../../abstract-factory2/factory-bmw";

export class FamilyHouseBuilder implements IBuilderHouse<FamilyHouseBuilder> {

    private house = new House();

    public createBedRoom(): FamilyHouseBuilder {
        this.house.addPart("BedRoom");
        return this;
    }

    public createFitnessRoom(): FamilyHouseBuilder {
        this.house.addPart("FitnessRoom");
        return this;
    }

    public createFloor(): FamilyHouseBuilder {
        this.house.addPart("Floor");
        return this;
    }

    public createKitchen(): FamilyHouseBuilder {
        this.house.addPart("Kitchen");
        return this;
    }

    public createLivingRoom(): FamilyHouseBuilder {
        this.house.addPart("LivingRoom");
        return this;
    }

    public createSwimmingPoolRoom(): FamilyHouseBuilder {
        this.house.addPart("SwimmingPool");
        return this;
    }

    public createWorkRoom(): FamilyHouseBuilder {
        this.house.addPart("WorkRoom");
        return this;
    }


    public getHouse(): House {
        return this.house;
    }

}