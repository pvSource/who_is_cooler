import game_field from './DataLayer/GameField';
import PrintOpenGameField from './Logic/Commands/PrintOpenGameField'

game_field.createField();
game_field.printRealField();

PrintOpenGameField();