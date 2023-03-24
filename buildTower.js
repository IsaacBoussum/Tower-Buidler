function towerBuilder(nFloors) {
    const tower = [];
    let stars = 1;
    for (let i = 1; i <= nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i);
      const floor = spaces + '*'.repeat(stars) + spaces;
      tower.push(floor);
      stars += 2;
    }
    return tower;
  }
  
  console.log(towerBuilder(4))