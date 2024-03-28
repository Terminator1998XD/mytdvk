var ShadowsEnable = true;
function fillSettings(){
  $('.settings > div').each(function() {
    var el = $(this);

    if(el.attr('isMobile') == 'false' && isMobile){
      el.remove();
      return;
    }

    if(el.attr('isPC') == 'false' && !isMobile){
      el.remove();
      return;
    }

    var varstate = el.attr('varstate');

    var enable = localStorage[varstate] !== 'disable';

    if(localStorage[varstate] == null && el.attr('default') == 'false'){
      enable = false;
    }

    window[varstate] = enable;
    var enc = el.find('.en');
    var dis = el.find('.dis');
    valueIsChanged();

    el.click(function(){
      enable = !enable;
      window[varstate] = enable;

      if(enable){
        localStorage.removeItem(varstate);
      } else {
        localStorage[varstate] = 'disable';
      }

      valueIsChanged();
    });

    function valueIsChanged(){
      if(enable){
        enc[0].style.display = 'block';
        dis[0].style.display = 'none';
      } else {
        enc[0].style.display = 'none';
        dis[0].style.display = 'block';
      }
    }
  });
}
