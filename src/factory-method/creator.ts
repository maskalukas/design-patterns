import {IDb} from "./interface";

export abstract class CreatorDb {

    abstract createBaseDb(): IDb;

    public someOperation(): string {
        console.log("From creator - " + this.createBaseDb().printCountOfAllTables());
        return "";
    }

}