class Map10 extends Map{
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
    this.decordata = [ { "x": 187, "y": 3, "tex": 2 }, { "x": 3, "y": 9, "tex": 2 }, { "x": 309, "y": 16, "tex": 13 }, { "x": 310, "y": 58, "tex": 13 }, { "x": 387, "y": 65, "tex": 8 }, { "x": 1073, "y": 79, "tex": 1 }, { "x": 859, "y": 89, "tex": 5 }, { "x": 1174.385377711294, "y": 110, "tex": 18 }, { "x": 310, "y": 110, "tex": 13 }, { "x": 93, "y": 113, "tex": 4 }, { "x": 243, "y": 124, "tex": 13 }, { "x": 207, "y": 130, "tex": 12 }, { "x": 208, "y": 160, "tex": 12 }, { "x": 310, "y": 170, "tex": 13 }, { "x": 243, "y": 174, "tex": 13 }, { "x": 775, "y": 179, "tex": 13 }, { "x": 507, "y": 182, "tex": 13 }, { "x": 209, "y": 192, "tex": 12 }, { "x": 385, "y": 197, "tex": 2 }, { "x": 558, "y": 217, "tex": 16 }, { "x": 764, "y": 219, "tex": 16 }, { "x": 166, "y": 224, "tex": 7 }, { "x": 1042.5828347045626, "y": 227.44587628865975, "tex": 0 }, { "x": 844, "y": 228, "tex": 0 }, { "x": 25, "y": 229, "tex": 1 }, { "x": 775, "y": 237, "tex": 13 }, { "x": 505, "y": 240, "tex": 13 }, { "x": 304, "y": 241, "tex": 13 }, { "x": 997, "y": 267, "tex": 15 }, { "x": 557, "y": 297, "tex": 16 }, { "x": 765, "y": 300, "tex": 16 }, { "x": 779, "y": 306, "tex": 13 }, { "x": 506, "y": 307, "tex": 13 }, { "x": 1195.296372475692, "y": 340.4768041237113, "tex": 21 }, { "x": 1121.579094988781, "y": 341, "tex": 21 }, { "x": 1043, "y": 341, "tex": 21 }, { "x": 964, "y": 343, "tex": 14 }, { "x": 859, "y": 344, "tex": 14 }, { "x": 830, "y": 344, "tex": 15 }, { "x": 374, "y": 346, "tex": 15 }, { "x": 412, "y": 346, "tex": 14 }, { "x": 300, "y": 346, "tex": 14 }, { "x": 932, "y": 346, "tex": 15 }, { "x": 264, "y": 347, "tex": 20 }, { "x": 486, "y": 349, "tex": 15 }, { "x": 202, "y": 481, "tex": 3 }, { "x": 608.4960732984293, "y": 487, "tex": 11 }, { "x": 2, "y": 487, "tex": 0 }, { "x": 992, "y": 490, "tex": 6 }, { "x": 358, "y": 491, "tex": 4 }, { "x": 837, "y": 492, "tex": 6 }, { "x": 703, "y": 493, "tex": 5 }, { "x": 577, "y": 497, "tex": 12 }, { "x": 319, "y": 502, "tex": 12 }, { "x": 468, "y": 503, "tex": 12 }, { "x": 526, "y": 505, "tex": 12 }, { "x": 809, "y": 513, "tex": 19 }, { "x": 154, "y": 520, "tex": 17 }, { "x": 1115, "y": 553, "tex": 9 }, { "x": 607, "y": 553, "tex": 11 }, { "x": 113, "y": 572, "tex": 10 }, { "x": 348, "y": 608, "tex": 8 }, { "x": 605, "y": 609, "tex": 11 }, { "x": 538, "y": 626, "tex": 13 }, { "x": 458, "y": 628, "tex": 13 }];
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
        this.enemyhpmul = 5;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1.2);
        }
      },
      () => {
        this.enemyhpmul = 6;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(1);
        }
      },
      () => {
        this.enemyhpmul = 7;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(0.8);
        }
      },
      () => {
        this.enemyhpmul = 10;
        const s = curmap.spawners;
        for(let i = 0; i < s.length; i++){
          const sp = s[i];
          sp.spawndtc = new DateTimeClock(0.6);
        }
      }
    ];
  }
}
