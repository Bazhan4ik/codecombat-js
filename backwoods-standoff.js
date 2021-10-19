// Munchkins are attacking!
// The swarms will come at regular intervals.
// Whenever you can, cleave to clear the mass of enemies.

while(true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement with isReady to check "cleave":
    if(enemy) {
        if(hero.isReady("cleave")) {
            hero.cleave(enemy);   
        }
        else {
            hero.attack(enemy);
        }
    }
        // Cleave!
        
    // Else, if cleave is not ready:
    
        // Attack the nearest ogre!
        
}
