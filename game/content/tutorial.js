class Tutorial extends GameObject{
  constructor(){
    super(new Vector3(0,0,0), new Size(512, 512));
    this.OnUpdate = true;
    this.finger = getTex('tut');
    this.p = 0;
    this.s = 0.05;
  }

  OnRender(rect){
    g.translate(-256,-256);

    const towers = Tower.pool.length;

    if(towers < 2){
      const point = curmap.tutorialPoints[towers];
      g.setLineDash([5, 5]); // задаем шаблон: [длина видимого участка, длина промежутка]
      // Начало пути
      g.beginPath();
      g.strokeStyle = 'white';
      g.lineWidth = 2;
      // Установка точки А
      const flag = hooktower == null;
      if(flag)
      {
        var p1x = 71.5;
        var p1y = 609;
      }
      else{
        const pos = hooktower.pos;
        var p1x = pos.x+hooktower.size.w/2;
        var p1y = pos.y;
      }
      g.moveTo(p1x, p1y);
      // Линия до точки Б
      g.lineTo(point.x, point.y);
      // Рисование пунктирной линии
      g.stroke();
      // Завершение пути
      g.closePath();

      if(flag){
        const percentage = this.p;
        const px = p1x + (point.x - p1x) * percentage;
        const py = p1y + (point.y - p1y) * percentage;
        g.drawImage(this.finger,px,py,64,64);
      }
    }

    g.translate(256,256);
  }

  Update(){
    if(Tower.pool.length > 1){
      ui.splice(ui.indexOf(this),1);
      this.OnUpdate= false;
    } else {
      this.p = clamp(this.p+this.s,0,1);
      if(this.p == 0 || this.p == 1){
        this.s = -this.s;
      }
    }
  }
}

requireTex('tut');
