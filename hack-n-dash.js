// You can write code before a loop.
hero.moveRight();
// Break open the "Chest" before using the loop to escape the maze!

hero.moveUp(1);
hero.attack("Chest");
hero.moveDown();


while(true) {
    hero.moveRight(3);
    // Move 3 times more.
    hero.moveDown(3);    
}
