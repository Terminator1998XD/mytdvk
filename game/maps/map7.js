class Map7 extends Map{
  constructor(){
    super([
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,4,4,4,4,4,4,4,0,0,0,4,4,4,4,0,3,0,0],
      [0,0,4,1,1,1,1,1,4,0,0,0,4,1,1,1,1,1,1,4],
      [4,4,4,1,4,4,4,1,4,4,4,4,4,1,4,4,4,4,4,4],
      [2,1,1,1,4,0,4,1,1,1,1,1,1,1,4,0,0,0,0,0],
      [4,4,4,4,4,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(2*tileSize+tileSize/2,5*tileSize+tileSize/2),
      new Vector2(2*tileSize+tileSize/2,7*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 3;
    this.castleoffset = new Vector2(-tileSize,-tileSize);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [ { "x": 614, "y": 35, "tex": 7 }, { "x": 144, "y": 35, "tex": 2 }, { "x": 275, "y": 36, "tex": 3 }, { "x": 488, "y": 39, "tex": 5 }, { "x": 925, "y": 44, "tex": 1 }, { "x": 392, "y": 46, "tex": 4 }, { "x": 768, "y": 60, "tex": 0 }, { "x": 4, "y": 72, "tex": 3 }, { "x": 708, "y": 96, "tex": 13 }, { "x": 662, "y": 140, "tex": 8 }, { "x": 124, "y": 147, "tex": 21 }, { "x": 222, "y": 147, "tex": 21 }, { "x": 325, "y": 147, "tex": 21 }, { "x": 415, "y": 149, "tex": 21 }, { "x": 504, "y": 149, "tex": 21 }, { "x": -4, "y": 173, "tex": 10 }, { "x": 580, "y": 181, "tex": 2 }, { "x": 565, "y": 185, "tex": 11 }, { "x": 565, "y": 234, "tex": 11 }, { "x": 567, "y": 265, "tex": 11 }, { "x": 680, "y": 280, "tex": 14 }, { "x": 1139, "y": 355, "tex": 1 }, { "x": 962, "y": 372, "tex": 0 }, { "x": 333, "y": 377, "tex": 15 }, { "x": 328, "y": 409, "tex": 15 }, { "x": 329, "y": 438, "tex": 15 }, { "x": 341, "y": 466, "tex": 18 }, { "x": 184, "y": 488, "tex": 2 }, { "x": 316, "y": 488, "tex": 5 }, { "x": 730, "y": 491, "tex": 21 }, { "x": 809, "y": 491, "tex": 21 }, { "x": 634, "y": 491, "tex": 21 }, { "x": 889, "y": 491, "tex": 21 }, { "x": -3, "y": 492, "tex": 0 }, { "x": 542, "y": 493, "tex": 21 }, { "x": 440, "y": 494, "tex": 21 }, { "x": 413, "y": 507, "tex": 15 }, { "x": 992, "y": 508, "tex": 13 }, { "x": 1082, "y": 508, "tex": 13 }, { "x": 883, "y": 534, "tex": 4 }, { "x": 727, "y": 536, "tex": 2 }, { "x": 415, "y": 557, "tex": 17 }, { "x": 1143, "y": 567, "tex": 8 }, { "x": 1032, "y": 581, "tex": 14 }, { "x": 264, "y": 609, "tex": 13 }, { "x": 141, "y": 611, "tex": 13 }, { "x": 15, "y": 612, "tex": 13 }];
    this.waves = [
      () => {
        this.enemyhpmul = 3;
        this.fixedreward = 15;
      },
      () => {
        this.enemyhpmul = 6;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.5);
        }
      },
      () => {
        this.enemyhpmul = 7;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.2);
        }
      },
      () => {
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1);
        }
      }
    ];
  }
}
