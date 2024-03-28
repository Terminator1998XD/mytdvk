const orentations = {vertical: 0, horizontal: 1};
const platforms = {yandex: 0, vkplay: 1};

const myOrentation = orentations.horizontal;
const platform = platforms.vkplay;
const gameViewport = [1280,720];

const mainLoader = new GameLoader();
mainLoader.showprogress = true;

mainLoader.reslist.push('textures/air.png');
mainLoader.reslist.push('textures/man.png');
mainLoader.reslist.push('textures/tank.png');
mainLoader.reslist.push('textures/castle.png');

mainLoader.AddTexArr('decor/',22);
mainLoader.AddTexArr('exp/e',22);

var reslist_audios = [
	"lose.wav",'s.ogg','arr.mp3','el.mp3','bomb.mp3','sh.mp3','win.wav','aaa.mp3'
];

document.addEventListener('DOMContentLoaded', function() {
	mainLoader.ready = Init;
	mainLoader.download();
});

const gameid = 33533;
const tileSize = 64;

function requireTex(tex, count=1){
	if(count == 1){
		mainLoader.reslist.push('textures/'+tex+'.png');
	} else {
		mainLoader.AddTexArr(tex,count);
	}
}
