class Tower extends GameObject{
  constructor(id, buystate, price, maxlevel, damage){
    super(new Vector3(20+(105*id),720-120,9), new Size(103,110));
    this.sp = new Vector2(this.pos.x,this.pos.y);
    this.price = price;
    this.level = 1;
    this.maxlevel = maxlevel;
    this.isBuy = false;
    this.allowbuyTexture = getTex(buystate);
    this.nomoneyTexture = getTex(buystate+'1');
    this.u = this.Update;
    this.r = this.OnRender;
    this.OnUpdate = true;
    this.center = new Vector2(0,0);

    this.attackRadius = 150;
    this.damage = damage;
  }

  AllowUpgrade(){
    return this.level < this.maxlevel;
  }

  Upgrade(){
    this.level++;
    this.attackRadius += 10;
    this.damage += 3;
    PlaySound('s');
    new Explode(this.pos,this.size);
  }

  CalcCenter(){
    this.center = new Vector2(this.pos.x+this.size.w/2,this.pos.y+this.size.h/2);
  }

  Scan(){
    const p = BaseEnemy.pool;
    const pl = BaseEnemy.pool.length;

    for(let i = 0; i < pl; i++){
      const e = p[i];
      if(Vector3.Distance(e.pos,this.center) <= this.attackRadius){
        return e;
      }
    }
    return null;
  }

  ScanMore(){
    const p = BaseEnemy.pool;
    const pl = BaseEnemy.pool.length;
    let more = null;

    for(let i = 0; i < pl; i++){
      const e = p[i];
      if(Vector3.Distance(e.pos,this.center) <= this.attackRadius){
        if(more == null){
          more = [e];
        } else {
          more.push(e);
        }
      }
    }
    return more;
  }

  Update(){
    if(money >= this.price){
      if(AnyMouseUp && this == hooktower){
        if(Grass.last == null || !Grass.last.isMouseEnter()){
          this.OnRender = this.r;
          this.pos.x = this.sp.x;
          this.pos.y = this.sp.y;
        } else {
          money-=this.price;
          this.Update = this.OnUpdateTower;
          this.pos.z = 2;
          ui.splice(ui.indexOf(this),1);
          curmap.decorpool.push(this);
          curmap.DecordResort();
          ui.push(new this.constructor());
          const {pos,size} = Grass.last;
          this.pos.x = pos.x+size.w/2-this.size.w/2;
          this.pos.y = pos.y-this.size.h/3;
          this.myblock = Grass.last;
          Grass.last.tower = this;
          this.CalcCenter();
          this.OnPlace();
          Tower.pool.push(this);
          PlaySound('s');

          if(Tower.pool.length == 2){
            runWave();
          }
        }
        hooktower = null;
        Grass.last = null;
        AnyMouseUp = false;
      }

      if((mx >= this.pos.x && my >= this.pos.y && this.pos.x+this.size.w >= mx && this.pos.y+this.size.h >= my && AnyMouseDown) || this == hooktower){
        AnyMouseDown = false;
        AnyMouseUp = false;

        if(hooktower == null){
          PlaySound('s');
        }

        hooktower = this;
        this.CalcCenter();
        this.OnRender = this.OnRenderTower;
        this.pos.x = clamp(mx-this.size.w/2,-10,1280-this.size.w+10);
        this.pos.y = clamp(my-this.size.h/2,-10,720-this.size.h+5);
      }
    }
  }

  OnRender(rect){
    g.save();
    g.shadowColor = 'rgba(0,0,0,0)';
    const price = this.price;
    g.drawImage(money >= price ? this.allowbuyTexture : this.nomoneyTexture, rect.x,rect.y,rect.w,rect.h);
    const textX = rect.x+13, textY = rect.y+57,textW = 77, textH=38;
    g.fillStyle = 'white';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = '28px Arial';
    g.fillText(price, textX + textW / 2, textY + textH / 2);
    g.restore();
  }

  OnPlace(){

  }

  OnRenderTower(rect){
    const {pos,size} = this;
    if(mx >= pos.x && my >= pos.y && mx <= pos.x+size.w && my <= pos.y+size.h){
      const radius = this.attackRadius;
      g.beginPath();
      g.arc(0, 0, radius, 0, 2 * Math.PI);
      g.fillStyle = 'rgba(245, 168, 157, 0.1)';
      g.fill();
      g.strokeStyle = 'rgba(249, 38, 6, 0.1)';
      g.stroke();
    }
  }

  OnUpdateTower(){
    console.log("OnUpdateTower не реализован!");
  }
}

var hooktower = null;
