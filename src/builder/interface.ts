import {House} from "./house";

export interface IBuilderHouse<T> {
    createFitnessRoom(): T;
    createSwimmingPoolRoom(): T;
    createWorkRoom(): T;
    createKitchen(): T;
    createLivingRoom(): T;
    createBedRoom(): T;
    createFloor(): T;
    getHouse(): House;
}