"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameField_1 = require("../../DataLayer/GameField");
function PrintOpenGameField() {
    console.log(GameField_1.default, "отладка PrintOpen...");
    process.stdout.write("$  0  1  2  3  4  5  6  7  8  9");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(GameField_1.default[i][j], "отладка элемента внутри printopen...");
            process.stdout.write(`${i}  `);
            if (!(GameField_1.default[i][j].isOpen)) {
                process.stdout.write("?  ");
            }
            else if (GameField_1.default[i][j].content = 'ship') {
                process.stdout.write("X  ");
            }
            else {
                process.stdout.write("O  ");
            }
            process.stdout.write("\n\n");
        }
    }
}
exports.default = PrintOpenGameField;
//# sourceMappingURL=PrintOpenGameField.js.map