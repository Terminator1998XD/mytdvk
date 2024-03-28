class ShootBot{
  constructor(tower, missleTexture, sound, anim){
    this.tower = tower;
    this.enemy = null;
    this.sound = sound;
    this.missleTexture = missleTexture;
    anim.endcallback = this.Shoot.bind(this);
    this.anim = anim;
    this.lastrot = 0;
  }

  Shoot(){
    PlaySound(this.sound);
    dim.map.push(new Missle(this.pos, this.enemy, this.tower.damage, this.missleTexture));
  }

  OnRender(rect){

    const {pos, tower, enemy} = this;

    let idle = true;

    if(enemy == null || Vector3.Distance(enemy.pos, pos) > tower.attackRadius || enemy.hp < 1){
      const enemy2 = tower.Scan();
      if(enemy2 != null){
        this.enemy = enemy2;
      }
      else{
        this.enemy = null;
      }
    }

    g.save();

    if(this.enemy){
      const epos = this.enemy.pos;
      const rot = Math.atan2(epos.y-pos.y, epos.x-pos.x);
      this.lastrot = rot;
      g.rotate(rot);
      idle = false;
    }
    else g.rotate(this.lastrot);

    g.drawImage(idle ? this.anim.getFirst() : this.anim.nextFrame(),rect.x,rect.y,rect.w,rect.h);
    g.restore();
  }
}
