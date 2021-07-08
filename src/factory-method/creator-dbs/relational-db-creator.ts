import {CreatorDb} from "../creator";
import {IDb} from "../interface";
import {MysqlDb} from "../concrete-dbs/mysql-db";

export class RelationalDbCreator extends CreatorDb {

    createBaseDb(): IDb {
        return new MysqlDb();
    }



}