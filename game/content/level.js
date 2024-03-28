var money = 100;

function levelStart(){
  money = 100;
  window.startTime = new Date();
  const towers = [Archer, Electric, Bomber, Sniper];
  Tower.pool = [];
  BaseEnemy.pool = [];

  for(let i = 0; i < towers.length; i++){
    ui.push(new towers[i]());
  }

  ui.push(new Tutorial());
}

function Win(){
  const endTime = new Date();
  // Вычислите разницу в миллисекундах
  const time = endTime - startTime;
  // Преобразуйте разницу в формат "00:00"
  showCurrentTime(time);
  let rec = storage.get("record_"+MapSelector.mapid);

  if(rec == null || time < parseInt(rec)){
    rec = time;
    storage.set('record_'+MapSelector.mapid, parseInt(rec));
  }

  storage.set('time_'+MapSelector.mapid, parseInt(time));
  storage.push();

  showBeastTime(rec);

  if(lb != null){
    let levelComplites = 0;
    const rd = storage.getraw();
    for (let key in rd) {
      if (key.includes('record_')) {
        levelComplites++;
      }
    }
    lb.setLeaderboardScore('lead', parseInt(levelComplites));
  }

  OnPause = true;
  PlaySound('win');
  pauseMusic();
  clearEnemies();

  if(malert(TXT('win') + '<br>' + TXT('time') + formatTime(time) + '<br>' + TXT('rec') + formatTime(rec),function(){
    $('.menu').show();
    MapSelector.nextmap();
  }));
}

var wave = 0;

function runWave(){
  wave = 0;
  window.wavekills = 0;
  const s = curmap.spawners;
  for(let i = 0; i < s.length; i++){
    const sp = s[i];
    sp.OnUpdate = true;
  }
  curmap.waves[0]()
  showWaveInfo(wave + 1,curmap.waves.length);
  ui.push(new Upgrade());
}

function nextWave(){
  clearEnemies();
  wave++;

  if(wave >= curmap.waves.length){
    Win();
    return;
  }

  window.wavekills = 0;
  curmap.waves[wave]();
  showWaveInfo(wave + 1,curmap.waves.length);
}

function showWaveInfo(wave,count){
  malert(TXT('wave') + wave + "/" + count);
}

function malert(text, hidefunc=null){
  const inf = $('<div class="waveinfo">').html(text).hide();
  $('body').append(inf);
  inf.show(300);
  setTimeout(function(){
    inf.hide(500);
    setTimeout(function(){
      inf.remove();
      if(hidefunc != null){
        hidefunc();
      }
    },600);
  },3000);
}

function clearEnemies(){
  const e = [...BaseEnemy.pool];
  const l = e.length;
  for(let i = 0; i < l; i++){
    const c = e[i];
    c.Kill();
  }
}
