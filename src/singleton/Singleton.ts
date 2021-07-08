export class MemorySingleton {

    private static Instance: MemorySingleton;

    private _dataNames: string[] = [];

    private constructor() {}

    public static getInstance(): MemorySingleton {
        if(!MemorySingleton.Instance) {
            MemorySingleton.Instance = new MemorySingleton();
        }

        return MemorySingleton.Instance;
    }

    public addName(name: string): void {
        this._dataNames.push(name);
    }

    public printNames(): void {
        console.log(this._dataNames.join(","));
    }


}