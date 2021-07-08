import {IDb} from "../interface";

export class MongoDb implements IDb {
    printCountOfAllTables(): string {
        return "Mongodb - 15 tabulek";
    }

}