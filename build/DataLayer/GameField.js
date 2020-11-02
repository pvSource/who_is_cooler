"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameField {
    constructor() {
        this.field = null;
        if (GameField.instance != null) {
            throw new Error('Attempt to create second GameField object');
        }
        this.createField();
        console.log("Поле создано");
    }
    static getInstance() {
        if (GameField.instance == null) {
            GameField.instance = new GameField();
        }
        return GameField.instance;
    }
    createField() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (Math.random() < 0.2) {
                    this.field[i][j] = 'ship';
                }
                else {
                    this.field[i][j] = 'empty';
                }
            }
        }
        console.log('Поле создано (отладка)');
    }
    printRealField() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                process.stdout.write(`${this.field[i][j]} `);
            }
            process.stdout.write("\n\n");
        }
        console.log("Поле выведено в реале (отладка)");
    }
}
exports.default = GameField;
GameField.instance = null;
//# sourceMappingURL=GameField.js.map