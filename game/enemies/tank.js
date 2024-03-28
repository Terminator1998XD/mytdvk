class TankEnemy extends BaseEnemy{
  constructor(path){
    super(path);
    this.hp = 6*curmap.enemyhpmul;
    this.reward = 4*curmap.enemyhpmul;
    this.setTexture(getTex('tank'));

    if(curmap.fixedreward){
      this.reward = curmap.fixedreward;
    }
  }
}
