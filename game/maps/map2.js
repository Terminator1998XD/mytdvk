class Map2 extends Map{
  constructor(){
    super([
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,0,0],
      [4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0]
    ]);
    this.tutorialPoints = [
      new Vector2(9*tileSize+tileSize/2,6*tileSize+tileSize/2),
      new Vector2(11*tileSize+tileSize/2,6*tileSize+tileSize/2)
    ];
    this.enemyhpmul = 1;
    this.castleoffset = new Vector2(-tileSize,-tileSize);
    this.enemylist = [ManEnemy,TankEnemy,AirEnemy];
    this.decordata = [];
    this.waves = [
      () => {
        this.enemyhpmul = 1;
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
        this.enemyhpmul = 4;
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
