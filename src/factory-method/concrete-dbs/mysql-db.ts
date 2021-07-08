import {IDb} from "../interface";

export class MysqlDb implements IDb{
    printCountOfAllTables(): string {
        return "Mysql - 25 tables";
    }

}