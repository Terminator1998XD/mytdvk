function MapSelector(){
  MapSelector.mapid = storage.get('map') == null ? 0 : parseInt(storage.get('map'));
  var maplist = [new Map1(), new Map2()]

  $('#bgleft').click(function(){
    MapSelector.mapid--;
    if(MapSelector.mapid < 0){
      MapSelector.mapid = maplist.length - 1;
    }
    mapchange();
  });

  MapSelector.nextmap = function(){
    MapSelector.mapid++;
    if(MapSelector.mapid >= maplist.length){
      MapSelector.mapid = 0;
    }
    mapchange();
  }

  $('#bgright').click(function(){
    MapSelector.nextmap();
  });

  function viewData(){
    const time = storage.get('time_'+MapSelector.mapid);
    const rec = storage.get('record_'+MapSelector.mapid);
    if(rec != null){
       showBeastTime(parseInt(rec));
    } else {
      $('#timerecord').text(lang == 'ru' ? 'не установлен' : 'not set')
    }
    if(time != null){
       showCurrentTime(parseInt(time));
       $('.lasttime').show();
     } else {
       $('.lasttime').hide();
     }
  }

  function mapchange(){
    window.curmap = maplist[MapSelector.mapid];
    curmap.decorpool = [];
    curmap.Build();

    storage.set('map', MapSelector.mapid);
    storage.push();

    $('#mlevel').text(MapSelector.mapid + 1);
    viewData();
  }

  mapchange();
  viewData();
}

function showBeastTime(time){
  $('#timerecord').text(formatTime(time));
}

function showCurrentTime(time){
  $('#lasttimee').text(formatTime(time));
}

function formatTime(time){
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  // Форматируйте результат
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
