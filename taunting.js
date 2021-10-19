// Attack munchkins, call brawlers and ignore burls.

// This function defines the hero's behaviour about enemies.
function dealEnemy(e) {
    // If enemy.type is "munchkin":
    if(e.type == "munchkin") {
        hero.attack(e);       
    }

    if(e.type == "brawler") {
        hero.say("Brawler Lox ! C:");   
    }
        // Then say something to call the brawler
}

while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        dealEnemy(enemy);
    }
    else {
        hero.moveXY(30, 34);
    }
}
