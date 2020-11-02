import CellContent from './CellContent';
import Cell from './Cell';

class GameField {
    public field: Array<Array<Cell>>;
    //public open_cells: Array<Cell>;

    constructor() {
        this.field = [undefined]; //Это всё временные решения
        this.createEmptyField(); //потому что иначе не включается
        this.createField();
        console.log("Поле создано");
    }

    createEmptyField(): void {
        for(let i: number = 0; i < 10; i++) {
            this.field[i] = new Array(10);
            for(let j: number = 0; j < 10; j++) {
                this.field[i][j] = {content: 'empty', isOpen: false};
            }
        }
        console.log("Создано пустое поле (отладка ненужного метода без которого не работает createField())"); //
    }

    createField(): void {
        for(let i: number = 0; i < 10; i++) {
            for(let j: number = 0; j < 10; j++) {
                if (Math.random() < 0.2) {
                    this.field[i][j].content = 'ship';
                } else {
                    this.field[i][j].content = 'empty';
                }
                this.field[i][j].isOpen = false;
            }
        }
        console.log('Поле создано (отладка)'); //отладка
    }

    printRealField(): void {    
        for(let i: number = 0; i < 10; i++) {
            for(let j: number = 0; j < 10; j++) {
                process.stdout.write(`${this.field[i][j].content} `);
            }
            process.stdout.write("\n\n");
        }
        console.log("Поле выведено в реале (отладка)"); //отладка
    }
}

var game_field: GameField = new GameField();
export default game_field;