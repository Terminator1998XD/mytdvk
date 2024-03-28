class Road extends GameObject{
  constructor(map, i, j){
    super(new Vector3(i*tileSize,j*tileSize,0), new Size(tileSize,tileSize));
    this.ispath = true;
    this.i = i; this.j = j;
  }

  OnRender(rect){
    g.save();
    g.shadowColor = 'rgba(0,0,0,0)';
    g.fillStyle = '#698893';
    g.fillRect(rect.x,rect.y,rect.w,rect.h);
    g.restore();
  }
}
