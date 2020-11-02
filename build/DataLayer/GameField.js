"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameField {
    constructor() {
        this.field = [undefined];
        this.createEmptyField();
        this.createField();
        console.log("Поле создано");
    }
    createEmptyField() {
        for (let i = 0; i < 10; i++) {
            this.field[i] = new Array(10);
            for (let j = 0; j < 10; j++) {
                this.field[i][j] = { content: 'empty', isOpen: false };
            }
        }
        console.log("Создано пустое поле (отладка ненужного метода без которого не работает createField())");
    }
    createField() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (Math.random() < 0.2) {
                    this.field[i][j].content = 'ship';
                }
                else {
                    this.field[i][j].content = 'empty';
                }
                this.field[i][j].isOpen = false;
            }
        }
        console.log('Поле создано (отладка)');
    }
    printRealField() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                process.stdout.write(`${this.field[i][j].content} `);
            }
            process.stdout.write("\n\n");
        }
        console.log("Поле выведено в реале (отладка)");
    }
}
var game_field = new GameField();
exports.default = game_field;
//# sourceMappingURL=GameField.js.map