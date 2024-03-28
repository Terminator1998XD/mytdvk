function Init(){
	if(window['lang'] != null) return;
	window.backgroundTexture = getTex('back');

	window.lang = 'ru';
	window._advprompt = [];
	window.exp = getTexs('exp/e',22);

	loadBackgroundTrackPosition();

	window.isPC = false;
	$('.overlay').show();
	hideTexts();

	EngineRun();

	sdk(() => {
        console.log('SDK initialized');

				if(isPC && myOrentation==orentations.vertical){
					$('body').css({'background-image': 'url("textures/htmlback.jpg")','background-size':'cover'});
					const neonColor = 'rgb(255, 255, 255)'; // Здесь вы можете выбрать цвет неона
					const border = '1px solid white';
					$(canvas).css({
					  'box-shadow': `0 0 10px ${neonColor}`,
					  'border-left': border,
					  'border-right': border
					});
				}

				if(lang == 'en'){
					$('#timerecord').html("not set");
				}

				MapSelector();

				translateBlocks();
				fillSettings();
				resizeCanvas();

				$('#proginf').remove();
    });
}

var _loseflag = false;
var advp0 = false;
function Lose(){
	if(_loseflag) return;
	_loseflag = true;
	OnPause = true;
	PlaySound('lose');
	pauseMusic();
	const gme = function(){
		$('.menu').show();
		advp0 = false;
	};

	if(advp0){
		gme();
		return;
	}

	advp0 = true;

	advprompt('reborn',function(){ //accept
		clearEnemies();
    timer_go(function(){
			_loseflag = false;
			OnPause = false;
      playMusic();
			castle.hp = 20;
    });
  }, gme);
}

function PlayClick(){
	banner(function(arg){
		dim.map = [];
		_loseflag = false;
		curmap.PlayClick();

		const mp = curmap.pool;
		for(let i = 0; i < mp.length; i++){
			const obj = mp[i];
			if(obj.PlayClickHendler != null){
				obj.PlayClickHendler();
			}
		}

		levelStart();
		PlayClick.flag = true;
		$('.menu').hide();
		if(isMobile) ysdk.adv.hideBannerAdv();
		OnPause = false;
		playMusic();
	});
}

PlayClick.flag = false;

function imready(){
	$('#fix').hide();
	OnPause = false;
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
		if(!OnPause){
			$('#fix').show();
			OnPause = true;
		}
		pauseMusic();
		StopAllSound();
  }
});
