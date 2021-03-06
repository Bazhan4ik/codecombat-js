// You are trapped. Don't move, it'll be painful.

// This function checks if the enemy is in your attack range.
function inAttackRange(enemy) {
    var distance = hero.distanceTo(enemy);
    // Almost all swords have attack range of 3.
    if (distance <= 3) {
        return true;
    } else {
        return false;
    }
}

// Attack ogres only when they're within reach.
while (true) {
    // Find the nearest enemy and store it in a variable.
    if(inAttackRange(hero.findNearestEnemy())) {
        hero.attack(hero.findNearestEnemy());    
    }
    // Call inAttackRange(enemy), with the enemy as the argument
    // and save the result in the variable canAttack.
    
    // If the result stored in canAttack is true, then attack!
    
}
