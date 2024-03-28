class BaseEnemy extends GameObject{
  constructor(path, z = 3){
    const p0 = path[0];
    super(new Vector3(p0.x*tileSize,p0.y*tileSize,z),new Size(64,64));
    this.path = path;
    this.hp = 1;
    this.speed = 5;
    this.rotationSpeed = 0.6;
    this.OnUpdate = true;
    this.curpathnode = 0;
    this.maxpathnode = this.path.length;
    this.GoTo(1);
    this.Rotate = this.target;
    this.moveX = Math.cos(this.Rotate)*this.speed;
    this.moveY = Math.sin(this.Rotate)*this.speed;
    this.Damage = 1;
    this.reward = 1*curmap.enemyhpmul;
    this.isDead = false;
    BaseEnemy.pool.push(this);
  }

  static pool = [];

  TakeDamage(damage){
    this.hp-=damage;
    if(this.hp <= 0){
      if(!this.isDead){
        this.OnUpdate = false;
        dim.map.splice(dim.map.indexOf(this),1);
        BaseEnemy.pool.splice(BaseEnemy.pool.indexOf(this),1);
        new Explode(this.pos,this.size);
        money = parseInt(money + this.reward);
        this.isDead = true;

        wavekills++;
        if(wavekills == 30){
          nextWave();
        }
      }
    }
  }

  Kill(){
    this.OnUpdate = false;
    dim.map.splice(dim.map.indexOf(this),1);
    BaseEnemy.pool.splice(BaseEnemy.pool.indexOf(this),1);
    new Explode(this.pos,this.size);
    this.isDead = true;
  }

  GoTo(id){
    const path = this.path;

    if(id == path.length){
      this.OnUpdate = false;
      dim.map.splice(dim.map.indexOf(this),1);
      castle.TakeDamage(this.Damage);
      BaseEnemy.pool.splice(BaseEnemy.pool.indexOf(this),1);
      return;
    }

    const cellvec = path[id];
    const nextpos = new Vector2(cellvec.x*tileSize,cellvec.y*tileSize);
    const pos = this.pos;
    this.target = Math.atan2(nextpos.y - pos.y, nextpos.x - pos.x);
    this.nextpos = nextpos;
  }

  Update(){
    const pos = this.pos;
    if (this.target != null) {
      const rotationSpeed = 0.1;
      let targetRotate = this.target;
      const targetRotate2 = targetRotate + 6.28;
      let myrot = this.Rotate;

      if(Math.abs(targetRotate - this.Rotate) > Math.abs(targetRotate2 - this.Rotate)){
        targetRotate = targetRotate2;
      }

      if (myrot < targetRotate - rotationSpeed) {
        myrot = (myrot + rotationSpeed) % 6.28;
      } else if (myrot > targetRotate + rotationSpeed) {
        myrot = (myrot - rotationSpeed) % 6.28;
      } else {
        myrot = targetRotate % 6.28;
        this.target = null;
      }

      this.Rotate = myrot < 0 ? 6.28 + myrot : myrot;
      this.moveX = Math.cos(this.Rotate)*this.speed;
      this.moveY = Math.sin(this.Rotate)*this.speed;
    }

    if(Vector3.Distance(pos, this.nextpos) < 48){
      if(this.target == null){
        this.curpathnode++;
        this.GoTo(this.curpathnode + 1);
      }
    }
    else {
      pos.x += this.moveX;
      pos.y += this.moveY;
    }
  }
}
