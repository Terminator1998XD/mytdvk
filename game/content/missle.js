class Missle extends GameObject{
  constructor(from, to_enemy, damage, texture){
    const pos = new Vector3(from.x,from.y,10);
    super(pos,new Size(texture.width/2,texture.height/2));
    this.setTexture(texture);
    this.damage = damage;
    this.e = to_enemy;
    const epos= to_enemy.pos;
    this.epos = epos;
    this.OnUpdate = true;

    const rot = Math.atan2(epos.y - pos.y, epos.x - pos.x);
    this.Rotate = rot;
    pos.x += Math.cos(rot)*40;
    pos.y += Math.sin(rot)*40;
  }

  Update(){
    const {pos, epos} = this;
    const rot = Math.atan2(epos.y - pos.y, epos.x - pos.x);
    this.Rotate = rot;
    pos.x += Math.cos(rot)*16;
    pos.y += Math.sin(rot)*16;

    if(Vector3.Distance(pos,epos) < 15){
      this.e.TakeDamage(this.damage);
      const map = dim.map;
      map.splice(map.indexOf(this),1);
    }
  }
}
