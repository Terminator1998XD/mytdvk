class Map8 extends Map{
  constructor(){
    super([
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4],
      [2,1,1,1,1,1,1,1,1,1,1,4,0,0,0,0,0,4,1,4],
      [4,4,4,4,4,4,4,4,4,4,1,4,0,0,0,0,0,4,1,4],
      [0,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,1,4],
      [0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
      [0,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [0,4,1,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0],
      [0,4,1,1,1,1,1,1,1,1,1,1,1,3,0,0,0,0,0,0],
      [0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(9*tileSize+tileSize/2,2*tileSize+tileSize/2),
      new Vector2(4*tileSize+tileSize/2,4*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 1;
    this.castleoffset = new Vector2(0,0);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [ { "x": 776, "y": 185, "tex": 4 }, { "x": 1028, "y": 185, "tex": 13 }, { "x": 972, "y": 185, "tex": 13 }, { "x": 878, "y": 188, "tex": 2 }, { "x": 971, "y": 214, "tex": 13 }, { "x": 1027, "y": 214, "tex": 13 }, { "x": 992, "y": 281, "tex": 19 }, { "x": 1045, "y": 282, "tex": 19 }, { "x": 867, "y": 284, "tex": 18 }, { "x": 765, "y": 287, "tex": 20 }, { "x": 15, "y": 327, "tex": 16 }, { "x": 13, "y": 457, "tex": 16 }, { "x": 1172, "y": 485, "tex": 21 }, { "x": 1075, "y": 485, "tex": 21 }, { "x": 985, "y": 485, "tex": 21 }, { "x": 895, "y": 486, "tex": 21 }, { "x": 840, "y": 491, "tex": 15 }, { "x": 868, "y": 492, "tex": 15 }, { "x": 826, "y": 498, "tex": 16 }, { "x": 1043, "y": 519, "tex": 3 }, { "x": 1156, "y": 521, "tex": 6 }, { "x": 13, "y": 594, "tex": 16 }, { "x": 1142, "y": 630, "tex": 18 }];
    this.waves = [
      () => {
        this.enemyhpmul = 2;
        this.fixedreward = 20;
      },
      () => {
        this.enemyhpmul = 4;
        this.fixedreward = false;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.5);
        }
      },
      () => {
        this.enemyhpmul = 10;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.2);
        }
      },
      () => {
        this.enemyhpmul = 20;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1);
        }
      }
    ];
  }
}
