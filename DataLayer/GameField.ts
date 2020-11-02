import CellContent from './CellContent';

class GameField {
    public field: Array<Array<CellContent>>;

    constructor() {
        this.createField();
        console.log("Поле создано")
    }

    createField(): void {
        for(let i: number = 0; i < 10; i++) {
            for(let j: number = 0; j < 10; j++) {
                if (Math.random() < 0.2) {
                    this.field[i][j] = 'ship';
                } else {
                    this.field[i][j] = 'empty';
                }
            }
        }
        console.log('Поле создано (отладка)'); //отладка
    }

    printRealField(): void {    
        for(let i: number = 0; i < 10; i++) {
            for(let j: number = 0; j < 10; j++) {
                process.stdout.write(`${this.field[i][j]} `);
            }
            process.stdout.write("\n\n");
        }
        console.log("Поле выведено в реале (отладка)"); //отладка
    }
}

var game_field: GameField = new GameField();
export default game_field;