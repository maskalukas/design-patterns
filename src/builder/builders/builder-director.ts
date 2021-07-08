import {IBuilderHouse} from "../interface";

export class BuilderDirector {

    private Builder: IBuilderHouse<any>;

    public setBuilder(Builder: IBuilderHouse<any>): void {
        this.Builder = Builder;
    }

    public buildHouseWithTwoFloors(): void{
        this.Builder.createFloor();
        this.Builder.createWorkRoom();
        this.Builder.createWorkRoom();
        this.Builder.createSwimmingPoolRoom();
        this.Builder.createFloor();
        this.Builder.createKitchen();
        this.Builder.createBedRoom();
        this.Builder.createLivingRoom();
    }

    public buildHouseWithOneFloor(): void {
        this.Builder.createFloor();
        this.Builder.createKitchen();
        this.Builder.createFitnessRoom();
    }
}