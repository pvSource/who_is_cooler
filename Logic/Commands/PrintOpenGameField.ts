import game_field from "../../DataLayer/GameField";


function PrintOpenGameField(): void {
    console.log(game_field, "отладка PrintOpen..."); //
    process.stdout.write("$  0  1  2  3  4  5  6  7  8  9")
    for(let i: number = 0; i < 10; i++) {
        for(let j: number = 0; j < 10; j++) {
            console.log(game_field[i][j], "отладка элемента внутри printopen..."); //
            process.stdout.write(`${i}  `);
            if (!(game_field[i][j].isOpen)) {
                process.stdout.write("?  ");
            } else if (game_field[i][j].content = 'ship') {
                process.stdout.write("X  ");
            } else {
                process.stdout.write("O  ");
            }
            process.stdout.write("\n\n")
        }
    }
}             

export default PrintOpenGameField;