class Map9 extends Map{
  constructor(){
    super([
      [4,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,4],
      [4,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,4],
      [4,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,4],
      [4,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,4],
      [4,1,4,4,4,4,4,4,0,3,0,4,4,4,4,4,4,4,1,4],
      [4,1,1,1,1,1,1,4,4,1,4,4,1,1,1,1,1,1,1,4],
      [4,4,4,4,4,4,1,4,4,1,4,4,1,4,4,4,4,4,4,4],
      [0,0,0,0,0,0,1,4,4,1,4,4,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,4,4,1,4,4,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(2*tileSize+tileSize/2,4*tileSize+tileSize/2),
      new Vector2(17*tileSize+tileSize/2,4*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 1.2;
    this.waves = [
      () => {
        this.enemyhpmul = 1.2;
        this.fixedreward = 20;
      },
      () => {
        this.fixedreward = false;
        this.enemyhpmul = 3;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.5);
        }
      },
      () => {
        this.enemyhpmul = 6;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.0);
        }
      },
      () => {
        this.enemyhpmul = 6;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(0.5);
        }
      },
      () => {
        this.enemyhpmul = 9;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(0.2);
        }
      }
    ];
    this.castleoffset = new Vector2(-tileSize,-tileSize);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [ { "x": 986, "y": 1, "tex": 13 }, { "x": 699, "y": 2, "tex": 3 }, { "x": 191, "y": 3, "tex": 8 }, { "x": 558, "y": 3, "tex": 2 }, { "x": 353, "y": 6, "tex": 0 }, { "x": 987, "y": 70, "tex": 13 }, { "x": 275, "y": 102, "tex": 20 }, { "x": 207, "y": 107, "tex": 5 }, { "x": 897, "y": 111, "tex": 3 }, { "x": 640, "y": 126, "tex": 14 }, { "x": 506, "y": 127, "tex": 14 }, { "x": 360, "y": 128, "tex": 14 }, { "x": 1029, "y": 163, "tex": 16 }, { "x": 310, "y": 216, "tex": 21 }, { "x": 809, "y": 216, "tex": 21 }, { "x": 422, "y": 217, "tex": 21 }, { "x": 708, "y": 217, "tex": 21 }, { "x": 684, "y": 395, "tex": 11 }, { "x": 493, "y": 398, "tex": 11 }, { "x": 890, "y": 403, "tex": 1 }, { "x": 206, "y": 404, "tex": 1 }, { "x": 1188, "y": 409, "tex": 13 }, { "x": 23, "y": 418, "tex": 2 }, { "x": 1081, "y": 426, "tex": 21 }, { "x": 140, "y": 429, "tex": 13 }, { "x": 1035, "y": 434, "tex": 15 }, { "x": 996, "y": 435, "tex": 15 }, { "x": 138, "y": 480, "tex": 13 }, { "x": 494, "y": 508, "tex": 11 }, { "x": 683, "y": 511, "tex": 11 }, { "x": 65, "y": 538, "tex": 10 }, { "x": 640, "y": 539, "tex": 20 }, { "x": 546, "y": 540, "tex": 20 }, { "x": 284, "y": 543, "tex": 12 }, { "x": 902, "y": 548, "tex": 13 }, { "x": 214, "y": 548, "tex": 19 }, { "x": 235, "y": 549, "tex": 15 }, { "x": 276, "y": 550, "tex": 15 }, { "x": 1139, "y": 553, "tex": 9 }, { "x": 969, "y": 556, "tex": 8 }, { "x": 210, "y": 561, "tex": 18 }, { "x": 206, "y": 568, "tex": 6 }, { "x": 20, "y": 584, "tex": 17 }, { "x": 902, "y": 603, "tex": 13 }, { "x": 897, "y": 678, "tex": 17 }]
  }
}
