class Upgrade extends GameObject{
  constructor(){
    super(new Vector3(1165,720-120,9), new Size(103,110));
    this.sp = new Vector2(this.pos.x,this.pos.y);
    this.price = 50;
    this.allowbuyTexture = getTex('upgrade');
    this.nomoneyTexture = getTex('upgrade1');
    this.r = this.OnRender;
    this.OnUpdate = true;
    this.center = new Vector2(0,0);
    this.attackRadius = 250;
    this.pal = getTex('pal');
    this.pno = getTex('pno');
    this.img = this.pno;
    this.lt = null;
    this.isUpgrade = true;
  }

  OnRenderTower(rect){
    g.drawImage(this.img, rect.x,rect.y,rect.w,rect.h);
  }

  CalcCenter(){
    this.center = new Vector2(this.pos.x+this.size.w/2,this.pos.y+this.size.h/2);
  }

  Update(){
    if(money >= this.price){
      if(AnyMouseUp && this == hooktower){
        if(this.lt == null || !this.lt.AllowUpgrade()){
          this.OnRender = this.r;
          this.pos.x = this.sp.x;
          this.pos.y = this.sp.y;
        } else {
          money-=this.price;
          this.pos.z = 2;
          this.OnRender = this.r;
          this.pos.x = this.sp.x;
          this.pos.y = this.sp.y;
          this.lt.Upgrade();
        }
        hooktower = null;
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

        const tpool = Tower.pool;
        const tlen = tpool.length;
        let img = this.pno;
        for(let i = 0; i < tlen; i++){
          const el = tpool[i];

          if(mx >= el.pos.x && mx <= el.pos.x+el.size.w && my >= el.pos.y && my <= el.pos.y+el.size.h){
            this.lt = el;
            if(el.AllowUpgrade()){
              img = this.pal;
            }
            break;
          }
        }
        this.img = img;
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
}

requireTex('upgrade');
requireTex('upgrade1')
requireTex('pal');
requireTex('pno');
