class Map{
  constructor(mapdata){
    this.mapdata = mapdata;
    this.castleoffset = new Vector2(0,0);
    this.decorpool = [];
    this.decordata = null;
  }

  PlayClick(){
    ui = [];
    if(this.grid != null){
      this.decorpool = [];
      this.Build();
    }
  }

  Build(){
    dim.map = [];
    this.grid = [];
    this.spawners = [];
    const pool = [];
    this.pool = pool;
    const mapdata = this.mapdata;
    const objID = [null, Road, Spawner, Castle, Grass];

    const mdl = mapdata.length;
    const mdll = mapdata[0].length;

    for(let i = 0; i < mdl; i++){
      const row = mapdata[i];
      for(let j = 0; j < mdll; j++){
        const cell = row[j];
        this.Place(objID[cell],j,i);
      }
    }

    this.size = new Size(mdll,mdl);

    const pl = pool.length;
    for(let i = 0; i < pl; i++){
      const o = pool[i];
      if(o.PostInit != null)o.PostInit();
    }

    const dd = this.decordata.length;
    for(let i = 0; i < dd; i++){
      this.decorpool.push(Decor.Deserilize(this.decordata[i]));
    }
    dim.addGameObjectYSort(this.decorpool);
  }

  Place(obj, i, j){
    if(obj == null) return;
    const o = new obj(this,i,j);
    dim.addGameObject(o);
    this.grid[[i,j]] = o;
    this.pool.push(o);
  }

  DecordResort(){
    const dp = this.decorpool;
    const dd = dp.length;
    const map = dim.map;
    for(let i = 0; i < dd; i++){
      const index = map.indexOf(dp[i]);
      if(index >= 0) map.splice(index,1);
    }
    dim.addGameObjectYSort(dp);
  }

  DecorSerilize(){
    const dd = this.decorpool.length;
    const data = [];
    for(let i = 0; i < dd; i++){
      const z = this.decorpool[i];
      if(z.Serilize != null) data.push(z.Serilize());
    }
    console.log(data);
  }
}
