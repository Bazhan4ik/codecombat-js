// Your hero doesn't know the names of these enemies!
// Use the findNearestEnemy method on your new glasses.

// Assign the result of hero.findNearestEnemy() to the variable enemy1:
var enemy1 = hero.findNearestEnemy();
// enemy1 now refers to the nearest enemy. Use the variable to attack!
hero.attack(enemy1);
hero.attack(enemy1);

// Now that enemy1 is defeated, calling hero.findNearestEnemy() again will result in finding the new nearest enemy.
var enemy2 = hero.findNearestEnemy();
hero.attack(enemy2);
hero.attack(enemy2);

// Assign the result of hero.findNearestEnemy() to the variable enemy3:
const e3 = hero.findNearestEnemy();
hero.attack(e3);
hero.attack(e3);
// Now attack using the enemy3 variable:
