class ManEnemy extends BaseEnemy{
  constructor(path){
    super(path);
    this.hp = 3*curmap.enemyhpmul;
    this.setTexture(getTex('man'));

    if(curmap.fixedreward){
      this.reward = curmap.fixedreward;
    }
  }
}
