class AirEnemy extends BaseEnemy{
  constructor(path){
    super(path,4);
    this.hp = 8*curmap.enemyhpmul;
    this.reward = 7*curmap.enemyhpmul;
    this.setTexture(getTex('air'));

    if(curmap.fixedreward){
      this.reward = curmap.fixedreward;
    }
  }
}
