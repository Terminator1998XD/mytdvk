class Grass extends GameObject{
  constructor(map,i, j){
    super(new Vector3(i*tileSize,j*tileSize,1), new Size(tileSize,tileSize));
    this.dropshadow = false;
    this.map = map; this.i = i; this.j = j;
    this.tower = null;
  }

  PostInit(){
    this.dropshadow = this.map.grid[[this.i, this.j+1]] instanceof Road;
  }

  isMouseEnter(){
    return mx >= this.pos.x && my >= this.pos.y && this.pos.x+this.size.w >= mx && this.pos.y+this.size.h >= my;
  }

  OnRender(rect){
    g.save()
    g.shadowBlur = 0;
    if(!this.dropshadow){
      g.shadowColor = 'rgba(0,0,0,0)';
    }

    if(hooktower != null && !hooktower.isUpgrade && this.tower == null){
      g.fillStyle = '#b0f14b';

      if(this.isMouseEnter()){
        Grass.last = this;
        g.fillStyle = '#e6f1d6';
      }
    }
    else g.fillStyle = '#ABE058';

    g.fillRect(rect.x,rect.y,rect.w,rect.h);
    g.restore();
  }

  static last = null;
}
