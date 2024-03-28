class Decor extends GameObject{
  constructor(id, x, y){
    const tex = getTex('decor/'+id);
    super(new Vector3(x,y,5), new Size(tex.width/2,tex.height/2));
    this.tex = id;
    this.setTexture(tex);
  }

  Update(){

    if(AnyMouseUp && this.select){
      this.select = false;
      curmap.DecordResort();
    }

    if((mx >= this.pos.x && my >= this.pos.y && this.pos.x+this.size.w >= mx && this.pos.y+this.size.h >= my && AnyMouseDown) || this.select){
      this.select = true;
      AnyMouseDown = false;
      AnyMouseUp = false;
      cdec = this;
      this.pos.x = mx-this.size.w/2;
      this.pos.y = my-this.size.h/2;
    }
  }

  Serilize(){
    return {x: this.pos.x, y: this.pos.y, tex: this.tex};
  }

  static Deserilize(data){
    return new Decor(data.tex,data.x,data.y);
  }
}

function CreateDecor(id=1){
  window.cdec = new Decor(id,512,512);
  pauseMusic();
  cdec.OnUpdate = true;
  curmap.decorpool.push(cdec);
  curmap.DecordResort();
}

function SetDecTex(id){
  const tex = getTex('decor/'+id);
  cdec.size = new Size(tex.width/2,tex.height/2);
  cdec.setTexture(tex);
  cdec.tex = id;
}
