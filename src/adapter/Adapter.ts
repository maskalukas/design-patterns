import {BinarySystem} from "./BinarySystem";
import {DecimalSystem} from "./DecimalSystem";

export class Adapter extends BinarySystem{
    private DecimalSystem: DecimalSystem;

    public constructor(DecimalSystem: DecimalSystem) {
        super();
        this.DecimalSystem = DecimalSystem;
    }

    public checkIfCurrentYearsAreEqual(): void {
        const convertedBinaryYear = Adapter.convertBinaryToDecimal(this.sendCurrentYear());
        console.log(convertedBinaryYear);

        if(convertedBinaryYear === this.DecimalSystem.getCurrentYear()) {
            console.log("Rok se rovná v obou systémech.");
        } else {
            console.log("Něco je špatně..");
        }
    }

    private static convertBinaryToDecimal(binary: number): number {
        const numString = binary.toString();
        let decimalNumber = 0;

        for(let i = 0; i < numString.length; i++) {
            const multipler = numString.length - i - 1;
            decimalNumber += Number(numString[i]) * Math.pow(2, multipler);
        }

        return decimalNumber;
    }
}