class ManEnemy extends BaseEnemy{
  constructor(path){
    super(path);
    this.hp = 3*curmap.enemyhpmul;
    this.setTexture(getTex('man'));
  }
}
