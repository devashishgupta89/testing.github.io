
var game;
var Game = {};
var maxX  = 854;
var maxY  = 480;
var gameRatio = window.innerWidth/window.innerHeight;
var firstRunLandscape;

var mTex_Font, mTex_Ball=Array(12),mTex_bg=Array(4),mTex_Cannon=Array(3),mTex_Sound=Array(2),mTex_Dot=Array(2),mTex_Star=Array(2),mTex_Fire=Array(21),mTex_Cef=Array(6);
var mTex_Blast=Array(17),mTex_tBall=Array(7),mTex_Bomb; //=Array(8)
var mTex_FireBall,mTex_Logo,mTex_Splash,mTex_Achiev,mTex_Lboard,mTex_Play,mTex_Setting,mTex_Lok;
var mTex_About,mTex_Board,mTex_fb,mTex_gp,mTex_Help,mTex_Twit,mTex_Back,mTex_AboutTex,mTex_LIcn;
var mTex_MArrow,mTex_Cong,mTex_Gameover,mTex_Paused, mTex_Leaderboard,mTex_Levelclear,mTex_Menu;
var mTex_Next,mTex_PlayIcn,mTex_Retry,mTex_$,mTex_x,mTex_Cross,mTex_Ling,mTex_LingBar,mTex_Puse;
var mTex_Score,mTex_Arrow,mTex_BStone,mTex_Spiral,mTex_BarBomb,mTex_SplashT,mTex_Poped,mTex_Ter;
var mTex_SocrBar,mTex_helpscr,mTex_Board2,mTex_NexLvl,mTxt_Target;


var isReady = true;
var Leave;
var mul;
var mPage   = 0;
var mScore  = 0;
var mHScore = 0;
var mLevel  = 0;
var mULevel = 1;
var mrBomb;
var mPopedBall;
var mTargetBall;
var BestScore = new Array(60);
var NumberOfBall=0;
var mTotalBall = 5;
var BlastCount = 10;
var fireCount  = 100;
var mulCount =0;
var svx =0;

var mArr;
var mBall;
var mBlast;
var mB11;
var mArrow;
var mBomb;
Game.Logo = function(game) {
	
};
Game.Logo.prototype = {

	init:function(){

	},
	preload : function() {

		firstRunLandscape = this.game.scale.isGameLandscape;
		if(!this.game.device.desktop) {
			this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			this.game.scale.forceOrientation(true,false); //Landscape,Portrait
			// window.scrollTo(0, 1);
		}
		else {
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.forceOrientation(false,false);
		}


		this.game.scale.enterIncorrectOrientation.add(handleIncorrect);
		this.game.scale.leaveIncorrectOrientation.add(handleCorrect);
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.scale.setScreenSize = true;
		this.stage.disableVisibilityChange = true;
		this.game.scale.refresh();
		this.load.image('logo'       	 ,'assets/logo.png');


		LoadImage("unlock-level-taxt.png");
		LoadImage("next-level.png");
		LoadImage("target-complete.png");	
		LoadImage("help-board.png");
		LoadImage("bombar.png");
		LoadImage("lock.png");
		LoadImage("cross.png");
		LoadImage("bar.png");
		LoadImage("fill-bar.png");
		LoadImage("arow.png");
		LoadImage("level-clear-score.png");
		LoadImage("congretulation.png");
		LoadImage("gameover.png");
		LoadImage("game-paused.png");
		LoadImage("leaderboard.png");
		LoadImage("level-clear.png");
		LoadImage("menu.png");
		LoadImage("next.png");
		LoadImage("play-icon.png");
		LoadImage("retry.png");
		LoadImage("deselect-star.png");
		LoadImage("select-satar.png");
		LoadImage("arrow.png");
		LoadImage("deselect-dot.png");
		LoadImage("select-dot.png");
		LoadImage("level-icon.png");
		LoadImage("about-text.png");
		LoadImage("back.png");
		LoadImage("About.png");
		LoadImage("board.png");
		LoadImage("facebook.png");
		LoadImage("G+.png");
		LoadImage("help.png");
		LoadImage("sound-off.png");
		LoadImage("sound-on.png");
		LoadImage("twetter.png");
		LoadImage("achievement.png");
		LoadImage("leader-board-btn.png");
		LoadImage("Play.png");
		LoadImage("setting.png");
		LoadImage("splash.jpg");
		LoadImage("splash_font.png");
		LoadImage("paused.png");
		LoadImage("popped.png");
		LoadImage("target.png");
		LoadImage("score-bar.png");
		LoadImage("level/spiral.png");
		LoadImage("level/6_0.png");
		for(var i=0;i<mTex_Ball.length;i++)
		  LoadImage("level/"+(i+1)+".png");
		
		
		for(var i=0;i<mTex_tBall.length;i++)
		   LoadImage("level/1/"+(i)+".png");

		 
		   this.game.load.spritesheet('blastAnim','assets/blast.png',128,128,8);
		   this.game.load.spritesheet('font','assets/fontstrip.png',32,32,10);
			// LoadImgfromAsset("blast.png"); 
			// for(int i=0;i<mTex_Bomb.length;i++)
			// 	mTex_Bomb[i]= addBitmap(Bitmap.createBitmap(b, i * b.getWidth()/ mTex_Bomb.length, 0, b.getWidth() / mTex_Bomb.length,b.getHeight(), null, true));
			
			
			for(var i=0;i<mTex_bg.length;i++)
			 LoadImage("bg/"+i+".png");

			 LoadImage("cannon.png");
			 LoadImage("cannon_backside.png");
			 LoadImage("cannon_frontside.png");
			 LoadImage("fire_ball.png");
			//  LoadImage("hututugames.png");
			
			for(var i=0;i<mTex_Fire.length;i++)
			  LoadImage("ani_fire/"+i+".png");
			
			for(var i=0;i<mTex_Cef.length;i++)
			   LoadImage("ani_cannon/"+i+".png");

			for(var i=0;i<mTex_Blast.length;i++)
			   LoadImage("blast/"+i+".png");

	   this.game.load.audio('bomb_blast','assets/sound/bomb_blast.mp3');
	   this.game.load.audio('bubbleblast0','assets/sound/bubbleblast0.mp3');
	   this.game.load.audio('bubbleblast1','assets/sound/bubbleblast1.mp3');
	   this.game.load.audio('bubbleblast2','assets/sound/bubbleblast2.mp3');
	   this.game.load.audio('bubbleblast3','assets/sound/bubbleblast3.mp3');
	   this.game.load.audio('bubbleblast4','assets/sound/bubbleblast4.mp3');
	   this.game.load.audio('bubbleblast5','assets/sound/bubbleblast5.mp3');
	   this.game.load.audio('cannon_bomb_shoot','assets/sound/cannon_bomb_shoot.mp3');
	   this.game.load.audio('click','assets/sound/click.mp3');
	   this.game.load.audio('extra_life','assets/sound/extra_life.mp3');
	   this.game.load.audio('gameover','assets/sound/gameover.mp3');
	   this.game.load.audio('icebubblesolid','assets/sound/icebubblesolid.mp3');
	   this.game.load.audio('level_complete','assets/sound/level_complete.mp3');
	   this.game.load.audio('metal_brick','assets/sound/metal_brick.mp3');
	   this.game.load.audio('soft_brick','assets/sound/soft_brick.mp3');
	   this.game.load.audio('sponge','assets/sound/sponge.mp3');
	   this.game.load.audio('star','assets/sound/star.mp3');
	}, 
	create :function() {
		this.game.time.advancedTiming = true;
		this.game.time.desiredFps = 33;
		this.game.time.slowMotion = 1.0;
		mTex_Logo = this.add.image(XPos(0),YPos(0),'logo');
		mTex_Logo.anchor.set(.5,.5);
		document.getElementById("loader").style.display = "none";
	},

	update : function() {
		Counter +=1;
		if(Counter>40)
		{
			this.state.start('GamePlay');			
			Counter =0;
		}
	},
}
function LoadImage(path)
{
	path = 'assets/'+path;
	var f_index = path.indexOf("/");
	var l_index = path.indexOf(".");
	var name = path.substring(f_index+1,l_index);
	// console.log("Index========= "+f_index+"     "+l_index+"     "+name+"     "+path);
	this.game.load.image(name,path);
}
function GetImage(path)
{
	path = 'assets/'+path;
	var f_index = path.indexOf("/");
	var l_index = path.indexOf(".");
	var name = path.substring(f_index+1,l_index);
	var img =  this.game.add.image(XPos(outX),YPos(outX),name);
	img.anchor.set(.5,.5);
	return img;
	// console.log("Index========= "+f_index+"     "+l_index+"     "+name+"     "+path);
}

function handleIncorrect() {
	if(!this.game.device.desktop) {
		if(GameScreen == GAMEPLAY)
		{
			StopSound();
			GameScreen = GAMEPAUSE;
		}
		document.getElementById("turn").style.display="block";
	}
}
function handleCorrect() {
	if(!this.game.device.desktop) {
		// if(firstRunLandscape)
		// {
		// 	// Counter.log("innnnnnnnnn");
		// 	this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		// 	this.game.width  = 480;
		// 	this.game.height = 854;
		// 	maxX = 480;
		// 	maxX = 854;
		// 		this.game.renderer.resize(maxX,maxY);
		// 	this.game.scale.refresh();

		// }

		document.getElementById("turn").style.display="none";
	}
}



