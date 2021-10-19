// Defeat the enemy hero in a duel!

while(true) {
    // Find and attack the enemy inside a loop.
    // When you're done, submit to the multiplayer ladder!

    let enemy = hero.findNearestEnemy();
    if(enemy) {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);       
        } else {
            hero.attack(enemy);   
        }
    }
    
}
