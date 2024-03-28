class Map5 extends Map{
  constructor(){
    super([
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [4,1,4,0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,2],
      [4,1,4,0,0,0,0,0,0,0,4,4,4,4,4,4,1,4,4,4],
      [4,1,4,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,2],
      [4,1,4,0,3,0,0,0,0,0,4,1,4,4,4,4,4,4,4,4],
      [4,1,4,4,1,4,4,4,4,4,4,1,4,4,4,4,1,1,1,2],
      [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,2],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(13*tileSize+tileSize/2,6*tileSize+tileSize/2),
      new Vector2(13*tileSize+tileSize/2,7*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 1;
    this.castleoffset = new Vector2(-tileSize,-tileSize);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [ { "x": 189, "y": 155, "tex": 3 }, { "x": 297, "y": 157, "tex": 5 }, { "x": 386, "y": 166, "tex": 13 }, { "x": 633, "y": 175, "tex": 21 }, { "x": 543, "y": 176, "tex": 21 }, { "x": 883, "y": 176, "tex": 21 }, { "x": 719, "y": 177, "tex": 21 }, { "x": 800, "y": 177, "tex": 21 }, { "x": 443, "y": 182, "tex": 9 }, { "x": 387, "y": 216, "tex": 13 }, { "x": 614, "y": 239, "tex": 16 }, { "x": 389, "y": 264, "tex": 13 }, { "x": 188, "y": 279, "tex": 16 }, { "x": 406, "y": 315, "tex": 5 }, { "x": 509, "y": 414, "tex": 18 }, { "x": 385, "y": 414, "tex": 20 }, { "x": 490, "y": 603, "tex": 11 }, { "x": 795, "y": 603, "tex": 11 }, { "x": 689, "y": 603, "tex": 11 }, { "x": 266, "y": 605, "tex": 11 }, { "x": 721, "y": 626, "tex": 14 }, { "x": 300, "y": 626, "tex": 14 }, { "x": 191, "y": 626, "tex": 14 }, { "x": 825, "y": 627, "tex": 14 }, { "x": 412, "y": 627, "tex": 14 }, { "x": 85, "y": 627, "tex": 14 }, { "x": 620, "y": 627, "tex": 14 }, { "x": 524, "y": 627, "tex": 14 }, { "x": 935, "y": 627, "tex": 14 }, { "x": 6, "y": 631, "tex": 13 }, { "x": 380, "y": 632, "tex": 12 }, { "x": 160, "y": 639, "tex": 12 }, { "x": 287, "y": 662, "tex": 19 }, { "x": 189, "y": 670, "tex": 18 }];
    this.waves = [
      () => {
        this.enemyhpmul = 0.5;
        this.fixedreward = 15;
      },
      () => {
        this.fixedreward = false;
        this.enemyhpmul = 1.5;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.5);
        }
      },
      () => {
        this.enemyhpmul = 5;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.2);
        }
      },
      () => {
        this.enemyhpmul = 15;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1);
        }
      },
      () => {
        this.enemyhpmul = 20;
      },
      () => {
        this.enemyhpmul = 30;
      }
    ];
  }
}
