
export class dreidel {
    public sideSymbol: string;
    public sideWord: string;

    constructor(sideArabic: number) {

        switch(sideArabic) {
            case 1: {
                this.sideSymbol = "נ";
                this.sideWord = "Nun";
                break;
            }
            case 2: {
                this.sideSymbol = "ג";
                this.sideWord = "Gimmel";
                break;
            }
            case 3: {
                this.sideSymbol = "ה";
                this.sideWord = "Hay";
                break;
            }
            case 4: {
                this.sideSymbol = "ש";
                this.sideWord = "Shin";
                break;
            }
        }
    }

}