class Spawner extends Road{
  constructor(map, i, j){
    super(map, i,j);
    this.map = map;
    map.spawners.push(this);
    this.spawndtc = new DateTimeClock(2);
  }

  PlayClickHendler(){
    this.path = FindPath(this.i,this.j,castle.i,castle.j);
  }

  Update(){
    if(this.spawndtc.check()){
      const fromlist = this.map.enemylist;
      const enemy = new fromlist[getrand(0,fromlist.length)](this.path);
      dim.addGameObject(enemy);
    }
  }
}
