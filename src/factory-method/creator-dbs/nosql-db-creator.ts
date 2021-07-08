import {CreatorDb} from "../creator";
import {IDb} from "../interface";
import {MongoDb} from "../concrete-dbs/mongo-db";

export class NosqlDbCreator extends CreatorDb {
    createBaseDb(): IDb {
        return new MongoDb();
    }
}