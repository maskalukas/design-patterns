export class House {

    private _parts: string[] = [];

    public get parts(): string[] {
        return this._parts;
    }

    public addPart(part: string): void
    {
        this._parts.push(part);
    }

    public showParts(): void
    {
        console.log(this._parts.join(","));
    }
}