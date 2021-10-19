// Use a while-true loop to both move and attack.

while(true) {
    hero.moveRight(1);
    hero.moveUp();
    hero.attack(hero.findNearestEnemy());
    hero.attack(hero.findNearestEnemy());
    hero.moveRight();
    hero.moveDown(2);
    hero.moveUp();
}
