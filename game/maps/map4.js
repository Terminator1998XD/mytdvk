class Map4 extends Map{
  constructor(){
    super([
      [4,2,4,4,4,4,0,0,0,0,0,0,0,0,4,4,4,4,2,4],
      [4,1,1,1,1,4,0,0,0,0,0,0,0,0,4,1,1,1,1,4],
      [4,4,4,4,1,4,0,0,0,0,0,0,0,0,4,1,4,4,4,4],
      [4,4,4,4,1,4,4,4,4,4,0,0,0,0,4,1,4,4,4,4],
      [4,1,1,1,1,4,1,1,1,4,0,0,0,0,4,1,1,1,1,4],
      [4,1,4,4,4,4,1,4,1,4,0,3,0,0,4,4,4,4,1,4],
      [4,1,4,4,4,4,1,4,1,4,4,1,4,0,0,4,4,4,1,4],
      [4,1,1,1,1,1,1,4,1,1,1,1,4,0,0,4,1,1,1,4],
      [4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,1,4,4,4],
      [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(3*tileSize+tileSize/2,2*tileSize+tileSize/2),
      new Vector2(14*tileSize+tileSize/2,2*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 1.5;
    this.castleoffset = new Vector2(-tileSize,-tileSize);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [ { "x": 871, "y": 11, "tex": 16 }, { "x": 391, "y": 47, "tex": 3 }, { "x": 711, "y": 48, "tex": 1 }, { "x": 515, "y": 58, "tex": 0 }, { "x": 666, "y": 87, "tex": 12 }, { "x": 381, "y": 91, "tex": 16 }, { "x": 872, "y": 112, "tex": 16 }, { "x": 666, "y": 124, "tex": 12 }, { "x": 722, "y": 148, "tex": 13 }, { "x": 785, "y": 151, "tex": 13 }, { "x": 651, "y": 152, "tex": 13 }, { "x": 766, "y": 196, "tex": 12 }, { "x": 797, "y": 197, "tex": 12 }, { "x": 736, "y": 198, "tex": 12 }, { "x": 666, "y": 199, "tex": 12 }, { "x": 699, "y": 200, "tex": 12 }, { "x": 873, "y": 204, "tex": 16 }, { "x": 873, "y": 296, "tex": 16 }, { "x": 816, "y": 371, "tex": 11 }, { "x": 928, "y": 372, "tex": 15 }, { "x": 845, "y": 374, "tex": 5 }, { "x": 933, "y": 398, "tex": 15 }, { "x": 817, "y": 416, "tex": 11 }, { "x": 935, "y": 421, "tex": 15 }, { "x": 934, "y": 444, "tex": 15 }, { "x": 819, "y": 459, "tex": 11 }, { "x": 932, "y": 474, "tex": 15 }, { "x": 243, "y": 542, "tex": 21 }, { "x": 627, "y": 542, "tex": 21 }, { "x": 142, "y": 543, "tex": 21 }, { "x": 331, "y": 543, "tex": 21 }, { "x": 428, "y": 543, "tex": 21 }, { "x": 526, "y": 543, "tex": 21 }, { "x": 36, "y": 544, "tex": 21 }, { "x": -1, "y": 546, "tex": 10 }, { "x": 294, "y": 547, "tex": 9 }, { "x": 158, "y": 550, "tex": 7 }, { "x": 434, "y": 554, "tex": 3 }, { "x": 559, "y": 558, "tex": 2 }, { "x": 1147, "y": 579, "tex": 8 }, { "x": 983, "y": 620, "tex": 14 }, { "x": 880, "y": 621, "tex": 14 }, { "x": 790, "y": 621, "tex": 14 }, { "x": 701, "y": 621, "tex": 14 }];
    this.waves = [
      () => {
        this.enemyhpmul = 1.25;
      },
      () => {
        this.enemyhpmul = 2;
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
