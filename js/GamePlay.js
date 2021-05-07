
Game.GamePlay = function (game) 
{
};
var hariScr=0;
var bmd;
var GameScreen=0,mSel=0;
var TEST=100;
var outX=-100;
var setValue=true,setMusic=true;
var Counter = 0;

var GAMEMENU	= 2;
var GAMESET		= 3;
var GAMEPLAY	= 4;
var GAMEHELP	= 5;
var GAMEOVER	= 6;
var GAMEABOUT	= 7;
var GAMELEVEL	= 8;
var GAMEWIN		= 9;
var GAMECONG	= 10;
var GAMEPUSE	= 11;
var cx = -.60;
var cy = -.40;
var dis=1;
var Inc = 10;
var lastLevelScr = 0;
var previousLev = 0;
var Snd_Bombblast,Snd_Bubbleblast0,Snd_Bubbleblast1,Snd_Bubbleblast2,Snd_Bubbleblast3,Snd_Bubbleblast4,Snd_Bubbleblast5;
var Snd_CannonBombShoot,Snd_Click,Snd_ExtraLife,Snd_Over,Snd_IceBubble,Snd_LvlComp,Snd_Metal,Snd_SoftBrick,Snd_Sponge,Snd_Star;
var mLevel1,mLevel2;
Game.GamePlay.prototype = {

	init:function() {
		GameScreen = GAMEMENU;
		// GameScreen = TEST;
	},
	preload : function() {
	},
	create : function() {
	   
		bmd = this.game.add.bitmapData(maxX,maxY);
		bmd.addToWorld();
		bmd.smoothed = false;
		this.game.stage.backgroundColor = '#FFFFFF';

		
			//mTex_Board2		= GetImage("unlock-level-taxt.png");
			mTex_NexLvl		= GetImage("next-level.png");
			mTxt_Target		= GetImage("target-complete.png");	
			mTex_helpscr	= GetImage("help-board.png");
			
			mTex_BarBomb	= GetImage("bombar.png");
			mTex_Lok 		= GetImage("lock.png");
			
			mTex_Cross 		= GetImage("cross.png");
			mTex_Ling 		= GetImage("bar.png");
			mTex_Ling.anchor.set(0,.5);
			mTex_LingBar 	= GetImage("fill-bar.png");
			mTex_LingBar.anchor.set(0,.5);
			
			mTex_Arrow		= GetImage("arow.png");
			mTex_Score		= GetImage("level-clear-score.png");
			mTex_Cong		= GetImage("congretulation.png");
			mTex_Gameover	= GetImage("gameover.png");
			mTex_Paused		= GetImage("game-paused.png");
		//	mTex_Leaderboard= GetImage("leaderboard.png");
			mTex_Levelclear	= GetImage("level-clear.png");
			mTex_Menu		= GetImage("menu.png");
			mTex_Next		= GetImage("next.png");
			mTex_PlayIcn	= GetImage("play-icon.png");
			mTex_Retry		= GetImage("retry.png");
			
			mTex_Star[0]	= GetImage("deselect-star.png");
			mTex_Star[1]	= GetImage("select-satar.png");
			
			mTex_MArrow		= GetImage("arrow.png");
			
			mTex_Dot[0]		= GetImage("deselect-dot.png");
			mTex_Dot[1]		= GetImage("select-dot.png");
			mTex_LIcn		= GetImage("level-icon.png");
		//	mTex_AboutTex	= GetImage("about-text.png");
			mTex_Back		= GetImage("back.png");
		//	mTex_About		= GetImage("About.png");
			mTex_Board		= GetImage("board.png");
		//	mTex_fb			= GetImage("facebook.png");
		//	mTex_gp			= GetImage("G+.png");
			mTex_Help		= GetImage("help.png");
			
			mTex_Sound[0]	= GetImage("sound-off.png");
			mTex_Sound[1]	= GetImage("sound-on.png");
		//	mTex_Twit		= GetImage("twetter.png");
			
			
			mTex_Achiev		= GetImage("achievement.png");
			mTex_Lboard		= GetImage("leader-board-btn.png");
			mTex_Play		= GetImage("Play.png");
			mTex_Setting	= GetImage("setting.png");
			mTex_Splash		= GetImage("splash.jpg");
			mTex_SplashT	= GetImage("splash_font.png");
			mTex_Puse		= GetImage("paused.png");
			mTex_Poped		= GetImage("popped.png");
			mTex_Ter		= GetImage("target.png");
			mTex_SocrBar	= GetImage("score-bar.png");
			
			
			mTex_Spiral		= GetImage("level/spiral.png");
			mTex_BStone		= GetImage("level/6_0.png");
			
			
			for(var i=0;i<mTex_Ball.length;i++)
				mTex_Ball[i]= GetImage("level/"+(i+1)+".png");
			
			
			for(var i=0;i<mTex_tBall.length;i++)
				mTex_tBall[i]= GetImage("level/1/"+(i)+".png");

			mTex_Bomb = this.game.add.sprite(XPos(outX),XPos(outX),'blastAnim');
			mTex_Bomb.anchor.set(.5,.5);
			mTex_Font =  this.game.add.sprite(XPos(outX),XPos(outX),'font');
			mTex_Font.anchor.set(.5,.5); 
			// LoadImgfromAsset("blast.png"); 
			// for(int i=0;i<mTex_Bomb.length;i++)
			// 	mTex_Bomb[i]= addBitmap(Bitmap.createBitmap(b, i * b.getwidth)/ mTex_Bomb.length, 0, b.getwidth) / mTex_Bomb.length,b.getheight), null, true));
			
			

			for(var i=0;i<mTex_bg.length;i++)
			 mTex_bg[i] = GetImage("bg/"+i+".png");

			mTex_Cannon[0]	= GetImage("cannon.png");
			mTex_Cannon[0].anchor.set(.5,.8); 
			mTex_Cannon[1]	= GetImage("cannon_backside.png");
			mTex_Cannon[2]	= GetImage("cannon_frontside.png");
			mTex_FireBall	=  GetImage("fire_ball.png");
			// mTex_logo		=  GetImage("hututugames.png");
			
			for(var i=0;i<mTex_Fire.length;i++)
			{
				mTex_Fire[i] = GetImage("ani_fire/"+i+".png");
				mTex_Fire[i].anchor.set(.5,1.5); 
			}
			
			for(var i=0;i<mTex_Cef.length;i++)
			mTex_Cef[i]  = GetImage("ani_cannon/"+i+".png");

			for(var i=0;i<mTex_Blast.length;i++)
			mTex_Blast[i] = GetImage("blast/"+i+".png");



			
			Snd_Bombblast 	 = this.game.add.audio('bomb_blast');
			Snd_Bubbleblast0 = this.game.add.audio('bubbleblast0');
			Snd_Bubbleblast1 = this.game.add.audio('bubbleblast1');
			Snd_Bubbleblast2 = this.game.add.audio('bubbleblast2');
			Snd_Bubbleblast3 = this.game.add.audio('bubbleblast3');
			Snd_Bubbleblast4 = this.game.add.audio('bubbleblast4');
			Snd_Bubbleblast5 = this.game.add.audio('bubbleblast5');
			Snd_CannonBombShoot = this.game.add.audio('cannon_bomb_shoot');
			Snd_Click		= this.game.add.audio('click');
			Snd_ExtraLife 	= this.game.add.audio('extra_life');
			Snd_Over 		= this.game.add.audio('gameover');
			Snd_IceBubble 	= this.game.add.audio('icebubblesolid');
			Snd_LvlComp 	= this.game.add.audio('level_complete');
			Snd_Metal 		= this.game.add.audio('metal_brick');
			Snd_SoftBrick 	= this.game.add.audio('soft_brick');
			Snd_Sponge 	  	= this.game.add.audio('sponge');
			Snd_Star  	  	= this.game.add.audio('star');

			
			
		// Snd_Start 		 	=  this.game.add.audio('start');
	
		// ScoreFont = this.add.text(XPos(outX),YPos(outX),'',{fontSize: '24px',fontWeight : 'bold',fill:'#FFFFFF',strokeThickness:3,stroke:'#000000',boundsAlignH: "center", boundsAlignV: "middle"});//stroke:'',
		// ScoreFont.anchor.set(.5,.5);
		
		  //  mArr			= Array[]Level[0].length][]Level[0][0].length];

			mLevel1 = new Level1();
			mLevel2 = new Level2();
		  	mArr	      = Array(mLevel1.Level[0].length);
			for(var i = 0;i<mArr.length;i++)
			{
				mArr[i] = new Array(mLevel1.Level[0][0].length);
				for(var j = 0;j<mArr[0].length;j++){
					mArr[i][j] = new Arry();
				}
			}
			mBall = Array(3);
			for(var i=0;i<mBall.length;i++)
				mBall[i] = new Ball();
			
			mBlast= Array(10);
			for(var i=0;i<mBlast.length;i++)
			{
				mBlast[i] = new Blast();
			}
			
			mB11 = Array(10);
			for(var i=0;i<mB11.length;i++)
			{
				mB11[i] = new Blast();
			}
			
			mArrow = Array(100);
			for(var i=0;i<mArrow.length;i++)
			{
				mArrow[i] = new Arrow();
			}
			
			mBomb = Array(5);
			for(var i=0;i<mBomb.length;i++)
			{
				mBomb[i] = new Arrow();
			}

		var isPressed=false;
		this.game.input.onDown.add(function (pointer) {
			isPressed = true;
				switch(GameScreen) {
					case GAMEMENU:
						Handle_Menu(pointer,0);
					break;
					case GAMESET:
						Handle_Setting(pointer,0);
					break;
					case GAMELEVEL:
						Handle_Level(pointer,0);
					break;
					case GAMEPUSE:
					case GAMEOVER:
					case GAMEWIN:
					case GAMECONG:
						Handle_POWC(pointer,0);
					break;
					case GAMEPLAY:
						Handle_GamePlay(pointer,0);
					break;
					
				
				}
				if(setValue && mSel>0)
					Snd_Click.play();


	    });
	    this.game.input.addMoveCallback(function (pointer) {

				if(isPressed) {
					switch(GameScreen) {
						case GAMEMENU:
							Handle_Menu(pointer,1);
						break;
						case GAMESET:
							Handle_Setting(pointer,1);
						break;
						case GAMELEVEL:
							Handle_Level(pointer,1);
						break;
						case GAMEPUSE:
						case GAMEOVER:
						case GAMEWIN:
						case GAMECONG:
							Handle_POWC(pointer,1);
						break;
						case GAMEPLAY:
							Handle_GamePlay(pointer,1);
						break;
						
					}
				}

	    });
		this.game.input.onUp.add(function (pointer) {
			switch(GameScreen) {
					
					case GAMEMENU:
						Handle_Menu(pointer,2);
						break;
					case GAMESET:
						Handle_Setting(pointer,2);
						break;
					case GAMEABOUT:
					case GAMEHELP:
						Handle_HelpAbout(pointer,2);
					break;
					case GAMELEVEL:
						Handle_Level(pointer,2);
					break;
					case GAMEPUSE:
					case GAMEOVER:
					case GAMEWIN:
					case GAMECONG:
						Handle_POWC(pointer,2);
					break;
					case GAMEPLAY:
						Handle_GamePlay(pointer,2);
					break;
				
			}
			isPressed = false;
	    });
	    this.game.input.onTap.add(function() {

	    	// console.log("22222222222222");
	    });

	},


	
	update : function() {
 		
 		bmd.cls();
 		switch(GameScreen) {
 			case TEST:
				DrawTest();
			break;
			case GAMEMENU:
				Draw_Menu();
			break;
			case GAMESET:
				Draw_Setting();
			break;
			case GAMEABOUT:
			case GAMEHELP:
				Draw_HelpAbout();
			break;
			case GAMELEVEL:
				Draw_Level();
			break;
			case GAMEPLAY:
				Draw_GamePlay();
			break;
			case GAMEPUSE:
			case GAMEOVER:
			case GAMEWIN:
			case GAMECONG:
				Draw_POWC();
			break;
			
 		}
 		Counter++;
 	}
 	
}; 

function DrawTest() {
	
	DrawTexture(mTex_Logo,0,0);
	
	
}
var as = 1;
var avs = .01;
function Draw_Menu() {
    DrawTexture(mTex_Splash, 0, 0);
    DrawTexture(mTex_SplashT, .47, .49);
    //DrawTextureSS(mTex_SplashT, .47, .49,as,as);
    if (as < .95) avs = .002;
    if (as > 1.05) avs = -.002;
    as += avs;
    DrawTransScal(mTex_Setting, .89, -.8, mSel == 1 ? 1.1 : 1, mSel == 1 ? 0.5 : 1);
    DrawTransScal(mTex_Play, 0, -.20, mSel == 2 ? 1.1 : 1, mSel == 2 ? 0.5 : 1);
}

function Handle_Menu(pointer,events) {
	mSel = 0;
	
	if(CircRectsOverlap(.89, -.8, floatWidth(mTex_Setting.width)*.5,floatHeight(mTex_Setting.height)*.5, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
		mSel = 1;
	}
	if(CircRectsOverlap(.0, -.20, floatWidth(mTex_Setting.width)*.5,floatHeight(mTex_Setting.height)*.5, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
		mSel = 2;
	}

	if (events == 2) {
		switch (mSel) {
		case 1:
			GameScreen = GAMESET;
			break;
		case 2:
			mPage = parseInt((mLevel/6)%9);
			GameScreen =GAMELEVEL;
			break;
		}
		mSel = 0;
	}
	return true;
}
function Draw_Setting()
	{
		DrawTexture(mTex_bg[0], 0, 0);
		DrawTexture(mTex_Board, 0, 0);
	//	DrawTransScal(mTex_About, 0, .53-.34*0,mSel==1?1.1:1,mSel==1?0.5:1);
		DrawTransScal(mTex_Help	, 0, .53-.34*1,mSel==2?1.1:1,mSel==2?0.5:1);
		DrawTransScal(mTex_Sound[setValue?1:0], 0, .53-.34*2,mSel==3?1.1:1,mSel==3?0.5:1);
//		DrawTransScal(mTex_fb	, -.27+.27*0,-.49,mSel==4?1.1:1,mSel==4?0.5:1);
//		DrawTransScal(mTex_Twit	, -.27+.27*1,-.49,mSel==5?1.1:1,mSel==5?0.5:1);
//		DrawTransScal(mTex_gp	, -.27+.27*2,-.49,mSel==6?1.1:1,mSel==6?0.5:1);
		DrawTransScal(mTex_Back	, .89,-.8,mSel==7?1.1:1,mSel==7?0.5:1);
	}
function Handle_Setting(pointer, events)
	{
		mSel = 0;
		if(CircRectsOverlap(0, .53-.34*0, floatWidth(mTex_Setting.width)*.5, floatHeight(mTex_Setting.height)*.5, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 1;
		}
		if(CircRectsOverlap(0, .53-.34*1, floatWidth(mTex_Play.width)*.4, floatHeight(mTex_Setting.height)*.4  , screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 2;
		}
		if(CircRectsOverlap(0, .53-.34*2, floatWidth(mTex_Lboard.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 3;
		}

		if(CircRectsOverlap(.89,-.8, floatWidth(mTex_Achiev.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 7;
		}
		if (events == 2) {
			switch (mSel) {
			case 1:
			//	GameScreen = GAMEABOUT;
				break;
			case 2:
				GameScreen = GAMEHELP;
				break;
			case 3:
				setValue=!setValue;
				break;
			case 4:
				// facebook();
				break;
			case 5:
				// twitter();
				break;
			case 6:
				// google();
				break;
			case 7:
				GameScreen = GAMEMENU;
				break;
			}
			mSel = 0;
		}
		return true;
	}
	function Draw_HelpAbout()
	{
		DrawTexture(mTex_bg[0], 0, 0);
		DrawTexture(mTex_Board, 0, 0);
	//	if(GameScreen == GAMEABOUT)
			//DrawTexture(mTex_AboutTex, 0, 0);
	//	else
			DrawTexture(mTex_helpscr, 0, 0);

		DrawTransScal(mTex_Back	, .89,-.8,mSel==1?1.1:1,mSel==1?0.5:1);
	}
	function Handle_HelpAbout(pointer,events)
	{
		mSel = 0;
		if(CircRectsOverlap(.89,-.8, floatWidth(mTex_Achiev.width)*.4,floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 1;
		}
		if (events == 2) {
			switch (mSel) {
			case 1:
				GameScreen = GAMESET;
			break;
			}
			// if (mSel != 0)
			// 	sound10(GameRenderer.mContext,R.raw.click);
			mSel = 0;
		}
		return true;
	}
	var mScal =1;
	var mLScal =1;
	var mLSvs =.02;
	function Draw_Level()
	{
		DrawTexture(mTex_bg[0], 0, 0);
		DrawTexture(mTex_Board, 0, 0);
		
		
		for(var i=0;i<6;i++)
		{
			if(mLevel == i+parseInt(mPage*6)){
				DrawTransScal(mTex_LIcn, -.31+.31*(i%3), .30-.45*parseInt(i/3),mSel==((i+1)+mPage*6)?1.1:mLScal,mSel==((i+1)+parseInt(mPage*6))?0.5:1);
			}
			else
				DrawTransScal(mTex_LIcn, -.31+.31*(i%3), .30-.45*parseInt(i/3),mSel==((i+1)+mPage*6)?1.1:mScal,mSel==((i+1)+parseInt(mPage*6))?0.5:1);
			if(i+parseInt(mPage*6) < parseInt(mULevel)){
				if((i+1)+parseInt(mPage*6)<10)
					drawNumberScal( (i+1)+parseInt(mPage*6) , -.305+.31*parseInt(i%3), .30-.45*parseInt(i/3),.7*mScal,1);
				else
					drawNumberScal( (i+1)+parseInt(mPage*6) , -.32+.31*parseInt(i%3), .30-.45*parseInt(i/3),.7*mScal,1);
			}
			else{
				DrawTransScal(mTex_Lok, -.31+.31*parseInt(i%3), .30-.45*parseInt(i/3),mSel==((i+1)+parseInt(mPage*6))?1.1:mScal,mSel==((i+1)+parseInt(mPage*6))?0.5:1);				
				
			}
		}
		if (parseInt(mPage) > 0)
			DrawTextureRS(mTex_MArrow, -.7, 0,180,mSel==998?1.6:1.4);
		if (parseInt(mPage) < 1)
			DrawTextureRS(mTex_MArrow, 0.7, 0,  0,mSel==997?1.6:1.4);

		for(var i=0;i<2;i++)
		{
			DrawTexture(mTex_Dot[1]		,-.050+.068*i,-.52);
			if(parseInt(mPage) == i)
				DrawTexture(mTex_Dot[0]	,-.050+.068*i,-.52);
		}
		DrawTransScal(mTex_Back	, .89,-.8,mSel==999?1.1:1,mSel==999?0.5:1);
		if(mScal<1)
			mScal*=1.5;
		if(mLScal>1.14)
		{
			mLSvs =-.02;
		}
		if(mLScal<.86)
		{
			mLSvs =0.02;
		}
		mLScal+=mLSvs;
}
function Handle_Level(pointer ,events)
	{
		mSel = 0;
		for(var i=0;i<6;i++){
			if(CircRectsOverlap(-.31+.31*parseInt(i%3), .30-.45*parseInt(i/3), floatWidth(mTex_Achiev.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y),.02)){
				mSel = (i+1)+parseInt(mPage*6);
			}	
		}
		if(CircRectsOverlap(.89,-.8, floatWidth(mTex_Achiev.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 999;
		}
		if(CircRectsOverlap(-.7, 0, floatWidth(mTex_Achiev.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 998;
		}
		if(CircRectsOverlap(0.7, 0, floatWidth(mTex_Achiev.width)*.4, floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
			mSel = 997;
		}
		//if(CircRectsOverlap(0.0,.75,floatWidth(mTex_Board2.width)*.4, floatHeight(mTex_Board2.height)*.3, screen2worldX(pointer.x), screen2worldY(pointer.y), .02)){
		//	mSel = 996;
	//	}
		if (events == 2) {
			switch (mSel) {
			
			case 999:
				GameScreen = GAMEMENU;
			break;
			case 998:
				if (mPage>0) {
					mPage-=1;
					mScal=.1;
				}
				break;
			case 997:
				if (mPage<1) {
					mPage+=1;
					mScal=.1;
				}
				break;
				default:

					if((mSel-1)< mULevel){
						mLevel = (mSel-1);
					  	GameScreen = GAMEPLAY;
					    gameReset();
					}
					  
					break;
				case 0:	
				break;
			}
			mSel = 0;
		}
		return true;
}
function gameReset()
{
		mrBomb =20;
		mScore = 0;
		NumberOfBall = mTotalBall;
		for(var i=0;i<mBall.length;i++){
			mBall[i].ang = parseFloat(DegreeToRadian(-50));
			mBall[i].set(cx- parseFloat(Math.sin(mBall[i].ang)*.42), cy+ parseFloat(Math.cos(mBall[i].ang)*.70), 0,0);
			mBall[i].set(-100,-100, 0,0);
			mBall[i].ang = -50;
		}
		Leave = 4;
		mul = 1;
		mPopedBall = 0;
		mTargetBall = 0;

		
		for(var i =0;i<mArr.length;i++)
		{
			for(var j =0;j<mArr[i].length;j++)
			{
				if(mLevel<26)
					mArr[i][j].set(mLevel1.Level[mLevel][i][j],RandomInt(0,mTex_tBall.length-1));
				else
				{
					// console.log("        "+mLevel+"           "+(mLevel%Level2.Level.length));
					var tmp = mLevel-26;
					mArr[i][j].set(mLevel2.Level[tmp][i][j],RandomInt(0,mTex_tBall.length-1));
				}

				if(mLevel<26)
				{
					if(mLevel1.Level[mLevel][i][j]==1)
						mTargetBall++;
				}
				else{
					var tmp = mLevel-26;
					if(mLevel2.Level[tmp][i][j]==1)
						mTargetBall++;
				}

			}
		}
		mTargetBall = parseInt(mTargetBall*70)/100;
		for(var i=0;i<mBlast.length;i++)
		{
			mBlast[i].set(0, 0, 100);
		}
		for(var i=0;i<mB11.length;i++)
		{
			mB11[i].set(-100, -100, 100);
		}
		for(var i=0;i<mArrow.length;i++)
		{
			mArrow[i].set(-100, -100, 0);
		}
		
		for(var i=0;i<mBomb.length;i++)
		{
			mBomb[i].set(-100,-100,-1);
		}
//		gameCounter =0;
		svx =-.3;
//		adsCount++;
//		if(adsCount%3==0)
//			{try {handler5.sendEmptyMessage(AdView.VISIBLE);} catch (Exception e) {}}
}
function setB11( i,j) {
    mArr[i][j].val = 0;

	mScore += 5;//Inc;
	Inc += 5 + RandomInt(0,5-1);
	for(var m=0;m<mB11.length;m++) {
		if (mB11[m].x < -1 || mB11[m].x > 1 || mB11[m].y < -1 || mB11[m].y > 1){
			mB11[m].set(bx+bdx*j,by-bdy*i, 0);
			break;
		}
	}
}

function setBalst( i, j) {
	mArr[i][j].val = 0;
	mScore += .5;//Inc;
	Inc += 5 + RandomInt(0,5-1);
	for(var m=0;m<mBlast.length;m++) {
		if (mBlast[m].blast >= mTex_Blast.length) {
			mBlast[m].set(bx+bdx*j,by-bdy*i, 0);
			break;
		}
	}
	if(BestScore[mLevel%BestScore.length]<mScore)
	{
		BestScore[mLevel%BestScore.length]=mScore;
	}
}
function setArroW(i,j) {
	var k =0;
	for(var m=0;m<mArrow.length && k<4;m++) {
		if (mArrow[m].x < -1 || mArrow[m].x > 1 || mArrow[m].y < -1 || mArrow[m].y > 1) {
			mArrow[m].set(bx+bdx*j,by-bdy*i,k);k++;
		}
	}
}

function CallBoumb( i, j, k)
{
	// sound1(GameRenderer.mContext, R.raw.bomb_blast);
	setBalst(i, j);
	for( var p=0;p<mBomb.length;p++)
	{
		if(mBomb[p].dir<0 || mBomb[p].dir >= mTex_Bomb.length)
		{
			mBomb[p].set(bx+bdx*j,by-bdy*i,(mTex_Bomb.length-1));
			break;
		}
	}
	for(var m=i-2;m<i+3;m++)
	{
		for(var n=j-2;n<j+3;n++)
		{
			if(m>=0 && m<mArr.length && n>=0 && n<mArr[0].length)
			{
				if(mArr[m][n].val != 0)
				{
					//setBalst(m, n);
					CommonAction(m, n, k);
				}
				
			}
		}
	}
}

function checkDirection( x,  y, bc)
{
	var lastposx = mBall[bc].x-mBall[bc].vx;
	var lastposy = mBall[bc].y-mBall[bc].vy+.01;
	var dire	= new Array (4);
	var k =0;
	dire[0] /*Top*/ = parseFloat(Math.sqrt(((lastposx - x)*(lastposx - x))+((lastposy-y+floatHeight(mTex_Ball[0].height)*.5)*(lastposy-y+floatHeight(mTex_Ball[0].height)*.5))));
	dire[1] /*Bot*/ = parseFloat(Math.sqrt(((lastposx - x)*(lastposx - x))+((lastposy-y-floatHeight(mTex_Ball[0].height)*.5)*(lastposy-y-floatHeight(mTex_Ball[0].height)*.5))));
	dire[2] /*Left*/= parseFloat(Math.sqrt(((lastposx - x - floatWidth(mTex_Ball[0].width)*.5)*(lastposx - x - floatWidth(mTex_Ball[0].width)*.5))+((lastposy-y)*(lastposy-y))));
	dire[3] /*Righ*/= parseFloat(Math.sqrt(((lastposx - x + floatWidth(mTex_Ball[0].width)*.5)*(lastposx - x + floatWidth(mTex_Ball[0].width)*.5))+((lastposy-y)*(lastposy-y))));
	
	for(var i=1;i<dire.length;i++)
	{
		if(dire[k]>dire[i])
		{
			k =i;
		}
	}
	
	/*
	mBall[bc].x = lastposx;
	mBall[bc].y = lastposy;
	if (mLevel == 14) {
		if (k == 0 || k == 1)
			mBall[bc].vy = -mBall[bc].vy;
		if (k == 2 || k == 3)
			mBall[bc].vx = -mBall[bc].vx;
	} else {
		mBall[bc].vx = -mBall[bc].vx;

	}
	*/
	mBall[bc].x = lastposx;
	mBall[bc].y = lastposy;
	mBall[bc].SolidCount++;
	
	if (mLevel == 22 || mLevel == 39) 
	{
		mBall[bc].vx = -mBall[bc].vx;
	}
	else
	{
		if (k == 0 || k == 1){
			mBall[bc].vy = -mBall[bc].vy/2;
		}
		if (k == 2 || k == 3)
			mBall[bc].vx = -mBall[bc].vx;
		
	}
		
	if(mBall[bc].SolidCount>5)
		mBall[bc].set(-100, -100, 0, 0);
	return k;
}

function CommonAction( i, j, k)
{

	switch (mArr[i][j].val) {
	case 1:
		BlastCount++;
		mPopedBall++;
		setBalst(i, j);
		if(setValue && !Snd_Bubbleblast0.isPlaying)
			Snd_Bubbleblast0.play();

		// sound2(GameRenderer.mContext, R.raw.bubbleblast0);
		break;
	case 2:
		mArr[i][j].val = 0;
		setArroW(i, j);
		break;
	case 3:case 12:
		if (mBall[k].gayab == 0)
			mBall[k].gayab = 10;
		if(setValue)
		{
		  if(mArr[i][j].val==12)
		  {
			if(!Snd_IceBubble.isPlaying)
				Snd_IceBubble.play();
		  }
		 	
		 	// sound13(GameRenderer.mContext,R.raw.icebubblesolid);
		 else
		 {
			if(!Snd_Metal.isPlaying)
				Snd_Metal.play();
		 }
		 	// sound15(GameRenderer.mContext,R.raw.metal_brick);
		}
		 
		break;
	case 4:
		mul = 3;
		mulCount = 3;
		setBalst(i, j);
		break;
	case 5:
		if(setValue && !Snd_SoftBrick.isPlaying)
			Snd_SoftBrick.play();
		// sound16(GameRenderer.mContext,R.raw.soft_brick);
		setBalst(i, j);
		if (mBall[k].gayab == 0)
			mBall[k].gayab = 10;
		break;
	case 6:
		if(setValue && !Snd_Sponge.isPlaying)
			Snd_Sponge.play();
	
		// sound17(GameRenderer.mContext,R.raw.sponge);
		checkDirection(bx + bdx * j, by - bdy * i, k);
		mArr[i][j].col = 53;
		break;
	case 7:
		mArr[i][j].val = 0;
		for(var m=i-1;m<i+2;m++)
		{
			for(var n=j-1;n<j+2;n++)
			{
				if(m>=0 && m<mArr.length && n>=0 && n<mArr[0].length)
				{
					if(mArr[m][n].val == 1)
					{
						mArr[m][n].val = 12;
					}
				}
			}
		}
		break;
	case 8:
		mrBomb++;
		// sound11(GameRenderer.mContext,R.raw.extra_life);
		if(setValue && !Snd_ExtraLife.isPlaying)
			Snd_ExtraLife.play();
		setBalst(i, j);
		break;
	case 9:
		mulCount = 9;
		setBalst(i, j);
		break;
	case 10:
		CallBoumb(i, j,k);
		break;
	case 11:
		setB11(i, j);
		break;
	
	}

}
function gamelogic() {
		
	for(var k=0;k<mBall.length&&k<mul;k++)
		mBall[k].update();
	var isWin = true;
	for(var i=0;i<mArr.length;i++) {
		for(var j=0;j<mArr[i].length;j++)
		{
			if(mArr[i][j].val!=0) {
				for (var k = 0; k < mBall.length && k < mul; k++) {
					if (CirCir(bx + bdx * j, by - bdy * i,floatWidth(mTex_Ball[0].width) * .5, mBall[k].x, mBall[k].y,floatWidth(mTex_Ball[0].width) * .5)) 
					{
						CommonAction(i, j, k);
					}
				}
				
			}
			if(mArr[i][j].val!=0)
			{
				for(var m=0;m<mArrow.length;m++) {
					if (mArrow[m].x >= -1 && mArrow[m].x <= 1 && mArrow[m].y >= -1 && mArrow[m].y <= 1) {
						if(CirCir(bx+bdx*j,by-bdy*i,floatWidth(mTex_Ball[0].width)*.3,mArrow[m].x,mArrow[m].y,floatWidth(mTex_Arrow.width)*.3))
						{
							if(mArr[i][j].val != 3)
								CommonAction(i, j, 0);
						}
					}
				}
				for(var m=0;m<mB11.length;m++) {
					if (mB11[m].x >= -1 && mB11[m].x <= 1 && mB11[m].y >= -1 && mB11[m].y <= 1){
						if(CirCir(bx+bdx*j,by-bdy*i,floatWidth(mTex_Ball[0].width)*.3,mB11[m].x,mB11[m].y,floatWidth(mTex_Arrow.width)*.3)){
							if(mArr[i][j].val == 3 || mArr[i][j].val == 12|| mArr[i][j].val == 7)
							{
								mB11[m].set(-100, -100, 0);
								if(mArr[i][j].val == 7)
									CommonAction(i, j, 0);
							}
							else if(mArr[i][j].val == 5 || mArr[i][j].val == 6)
							{
								mB11[m].set(-100, -100, 0);
								setBalst(i, j);
							}
							else{
								CommonAction(i, j, 0);
							}
						}
					}
				}
				
			}
			if(mArr[i][j].val==1)
				isWin =  false;
		}
	}
	if(isWin){
		gameWinOver();
	}
	if(mScore>mHScore){
		mHScore = mScore;
	}
	for(var m=0;m<mArrow.length;m++) {
		if (mArrow[m].x >= -1 && mArrow[m].x <= 1 && mArrow[m].y >= -1 && mArrow[m].y <= 1) {
			mArrow[m].update();
		}
	}
	if(NumberOfBall<1)
	{
		gameWinOver();
	}
	
}
function gameWinOver()//1,0
	{

		if(mBall[0].y>-1)
			return;
		var isIn = false;
		for(var k=0;k<mBall.length&&k<mul;k++)
		{
			if(mBall[k].x>-1 && mBall[k].x<1&&mBall[k].y>-1&& mBall[k].y<1 )
			{
				isIn = true;
			}
		}
		if(!isIn || NumberOfBall<1)
		{
			if(mTargetBall<=mPopedBall)
			{
				if(mLevel == 11)
					GameScreen = GAMECONG;
				else
				    GameScreen = GAMEWIN;
			    /////////////////////////////

				var url_string = window.location.href;
			    // "http://gameneeti.com/gakk/ReverseGravity?user_id=17&game_id=2";;// //window.location.href;
				console.log("url_string " + url_string);
				var url = new URL(url_string);
				var c = url.searchParams.get("user_id");
				console.log("user_id " + c);
				var game_id = url.searchParams.get("game_id");
				console.log("game_id " + game_id);

			    //gamescore=10&level=5&game_status=0&user_id=17&game_id=2
				sendData(Math.floor(mScore) + "", mLevel + "", "1", "" + c, "" + game_id);
				console.log("uid222 " + c);

			    //////////////////////////////
			//	previousLev = mScore;
				scal=10;scount=0;
				if(mULevel < mLevel+2)
				{
				    mULevel = mLevel+2;
				}
				if(setValue && !Snd_LvlComp.isPlaying)
					Snd_LvlComp.play();
				// sound14(GameRenderer.mContext,R.raw.level_complete);
			}
			else
			{
			    GameScreen = GAMEOVER;
			    /////////////////////////////

			    var url_string = window.location.href;
			    // "http://gameneeti.com/gakk/ReverseGravity?user_id=17&game_id=2";;// //window.location.href;
			    console.log("url_string " + url_string);
			    var url = new URL(url_string);
			    var c = url.searchParams.get("user_id");
			    console.log("user_id " + c);
			    var game_id = url.searchParams.get("game_id");
			    console.log("game_id " + game_id);

			    //gamescore=10&level=5&game_status=0&user_id=17&game_id=2
			    sendData(Math.floor(mScore) + "", mLevel + "", "0", "" + c, "" + game_id);
			    console.log("uid222 " + c);

			    //////////////////////////////
			  
				if(setValue && !Snd_Over.isPlaying)
					Snd_Over.play();
				// sound12(GameRenderer.mContext,R.raw.gameover);
			}
		}
//		Systeout.println("  ~~~~~~~~~~~~~~~ " +gameCounter);
		// CheckAchiv();
	}
var bx = -.16,bdx=.07,by=0.91,bdy=.13;
function Draw_GamePlay()
{
	DrawTexture( mTex_bg[mLevel%mTex_bg.length], 0, 0);
	
	
	DrawTransScal( mTex_Retry,-.92+.20*0,.82,mSel==1?1.1:1,mSel==1?0.5:1);
	DrawTransScal( mTex_Menu	,-.92+.20*1,.82,mSel==2?1.1:1,mSel==2?0.5:1);
	DrawTransScal( mTex_Puse	,-.92+.20*2,.82,mSel==3?1.1:1,mSel==3?0.5:1);
	DrawTexture( mTex_Poped	,-.75,.57);
	drawNumberScal( mPopedBall, -.73,.555,.8,.30,.05,.63);//164,4,132//0.003921569
	DrawTexture( mTex_Ter	,-.75,.36);
	drawNumberScal(parseInt(mTargetBall), -.73,.345,.8);//164,4,132//0.003921569
	
	DrawTexture( mTex_SocrBar,-.75,-.69);
	drawNumberScal(Math.floor(hariScr)+Math.floor(mScore), -.75, -.705, .64, .30, .05, .63);//164,4,132//0.003921569
	
	DrawTexture( mTex_BarBomb,-.81,-.90);
	drawNumberScal(NumberOfBall ,-.80,-.91,.64,.01,.21,.21);//1,56,56//0.003921569
	
	
	DrawTextureSS(mTex_Ling,-.058-.61,-.88, .7, 1.0);//10
	DrawTextureSS(mTex_LingBar,-.645,-.938, dis*5.6, 1.3);//10
	
	
	
	DrawTextureSS( mTex_Cannon[1], cx+0, cy-.02,1.00);
	DrawTextureR(mTex_Cannon[0],mBall[0].ang,cx, cy);
	DrawTextureSS( mTex_Cannon[2], cx-.05, cy-.07,1.00);
	if(mTex_Fire.length>fireCount)
	DrawTextureR(mTex_Fire[fireCount%mTex_Fire.length],mBall[0].ang,cx, cy);
	if(mTex_Cef.length>fireCount)
	DrawTextureR(mTex_Cef[fireCount%mTex_Cef.length],mBall[0].ang,cx, cy);
	fireCount++;
	
	for (var k = 0; k < mBall.length && k < mul; k++) {
		// console.log("^^^^^^^^^^^^Balll "+mBall[k].x+"    "+mBall[k].y);
		if (mBall[k].gayab > 0)
			DrawTransScal( mTex_FireBall, mBall[k].x, mBall[k].y, 1, mBall[k].gayab * .1);
		else if (mulCount == 10)
			DrawTextureR(mTex_Spiral,-Counter*10,mBall[k].x, mBall[k].y);
		else
			DrawTexture( mTex_FireBall, mBall[k].x, mBall[k].y);
	}
	
	
	
	for(var i=0;i<mBlast.length;i++)
	{
		if (mBlast[i].blast < mTex_Blast.length) {
			DrawTexture( mTex_Blast[mBlast[i].blast],mBlast[i].x, mBlast[i].y);
			mBlast[i].blast++;
		}
	}
	for(var m=0;m<mArrow.length;m++) {
		if (mArrow[m].x >= -1 && mArrow[m].x <= 1 && mArrow[m].y >= -1 && mArrow[m].y <= 1) {
			DrawTextureR(mTex_Arrow,mArrow[m].dir*90, mArrow[m].x,mArrow[m].y);
		}
	}
	
	
	for(var i=0;i<mArr.length;i++) {
		for(var j=0;j<mArr[i].length;j++) {
			if(mArr[i][j].val>0){
				if(mArr[i][j].val == 1)
					DrawTexture( mTex_tBall[mArr[i][j].col], bx+bdx*j,by-bdy*i);
				else if(mArr[i][j].val == 6 && mArr[i][j].col > 49 && mArr[i][j].col < 55){
					DrawTexture( mTex_BStone, bx+bdx*j,by-bdy*i);
					mArr[i][j].col--;
				}
				else
					DrawTexture( mTex_Ball[mArr[i][j].val-1], bx+bdx*j,by-bdy*i);
			}
			
		}
	}
	
	for(var m=0;m<mB11.length;m++) {
		if (mB11[m].x >= -1 && mB11[m].x <= 1 && mB11[m].y >= -1 && mB11[m].y <= 1){
			DrawTexture( mTex_Ball[10], mB11[m].x,mB11[m].y);
			mB11[m].uodate();
		}
		}
		
	for(var m=0;m<mBomb.length;m++) {
		if (mBomb[m].dir> -1 && mBomb[m].dir <mTex_Bomb.length) {
			DrawTexture( mTex_Bomb[mBomb[m].dir], mBomb[m].x,mBomb[m].y);
			if(Counter%3==0)
				mBomb[m].dir--;
		}
	}
	if(mTargetBall<=mPopedBall)
	{
	//	DrawTransScal( mTex_NexLvl,0.78,svx-.9,mSel==4?1.1:1,mSel==4?0.5:1);
		// DrawTransScal( mTxt_Target,.40,svx-.94,mSel==2?1.1:1,mSel==2?0.5:1);
	//	DrawTexture( mTxt_Target,.40,svx-.94);
		if(svx<0)
			svx+=.01;
	}
	gamelogic();
}

function Handle_GamePlay(pointer ,events)
{
		mSel = 0;
		for(var i=0;i<3;i++)
		{
			if(CircRectsOverlap(-.92+.20*i,.82,floatWidth(mTex_Menu.width)*.4, floatHeight(mTex_Menu.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y), .03))
			{
				mSel = i+1;
			}
		}
		if(CircRectsOverlap(0.78,-.9, floatWidth(mTex_NexLvl.width)*.5, floatHeight(mTex_NexLvl.height)*.4, screen2worldX(pointer.x), screen2worldY(pointer.y),.03))
		{
			//mSel = 4;
		}
		
		// console.log("    Handle_GamePlay   "+mSel);
		switch (events) {
		case 0:
			if(NumberOfBall <1)
				return false;
			var isIn = false;
			for(var k=0;k<mBall.length&&k<mul;k++)
			{
				if(mBall[k].x>-1 && mBall[k].x<1&&mBall[k].y>-1&& mBall[k].y<1 )
				{
					isIn = true;
				}
			}
			if(!isIn)
			{
				isReady = true ;
				if((mulCount == 2 && mul == 3)||mulCount == 10){
				mulCount = 0 ;
				mul = 1;
				}
			}
			break;
		case 1:
			if(!isReady || NumberOfBall <1)
				return false;
			var x = XPos(cx) - pointer.x;
			var y = YPos(cy) - pointer.y;
			
			var n = parseFloat((GetAngle(-y,-x)));
			n = n.toFixed(2);
			// console.log("&&&&&&&&&     movreee"+"    "+n);
//			Systeout.println("!!!!!Angle Moveee!!!!!  "+Math.toDegrees(n));
			if (n < 0 || n > 4.5) 
			{
				for(var k = 0; k < mBall.length && k < mul; k++){
					mBall[k].set((cx - parseFloat(Math.sin(n)*.231)),(cy + parseFloat(Math.cos(n) * .385)), 0, 0);
  				//    console.log("       "+n+"      "+Math.cos(n)* .385+"     "+Math.sin(n)*.231+"       "+mBall[k].x+"   "+mBall[k].y);

					mBall[k].ang = parseFloat( RadianToDegree(n));
									dis = 5 *  parseFloat(Math.sqrt(((cx - screen2worldX(pointer.x)) * (cx - screen2worldX(pointer.x)))
					  	 			+((cy - screen2worldY(pointer.y)) * (cy - screen2worldY(pointer.y)))));
				}
				
			}
			break;
		case 2:
			if(mSel!=0)
			{
				switch (mSel) {
				case 1:
					gameReset();
					break;
				case 2:
					mPage = parseInt((mLevel/6)%9);
					GameScreen = GAMELEVEL;
					break;
				case 3:
					GameScreen = GAMEPUSE;
					break;
				case 4:
					gameWinOver();
					break;
					
				}
				// if (mSel != 0)
				// 	sound10(GameRenderer.mContext,R.raw.click);
				mSel = 0;
			}
			else
			{
				var s =.7;
				if(!isReady || NumberOfBall <1)
					return false;
				
				var x1 = XPos(cx)- pointer.x;
				var y1 = YPos(cy) - pointer.y;
				var ng = parseFloat( (GetAngle(-y1, -x1)));
				// Systeout.println("!!!!!Angle Upppppp!!!!!  "+Math.toDegrees(ng));
				if (ng < 0 || ng > 4.5){
					isReady = false;
					NumberOfBall--;
					dis = 5 * parseFloat(Math .sqrt(((cx - screen2worldX(pointer.x)) * (cx - screen2worldX(pointer.x)))
							+ ((cy - screen2worldY(pointer.y)) * (cy - screen2worldY(pointer.y)))));
					
	//				if(mulCount ==9)
	//					dis = 2;
					mBall[0].set((cx - parseFloat(Math.sin(ng) * .231)), (cy + parseFloat( Math.cos(ng) * .385)),
							-parseFloat( Math.sin(ng) * .06 * dis * s),	parseFloat( Math.cos(ng) * .1 * dis*s));
					
					if(mul == 3)
					{
						mBall[1].set((cx - parseFloat( Math.sin(ng) * .231)), (cy + parseFloat( Math.cos(ng) * .385)),
									    -parseFloat( Math.sin(ng+.3) * .06 * dis*s),parseFloat( Math.cos(ng+.3) * .1 * dis*s));
						mBall[2].set((cx - parseFloat( Math.sin(ng) * .231)), (cy + parseFloat( Math.cos(ng) * .385)),
										-parseFloat(Math.sin(ng-.3) * .06 * dis*s),	parseFloat(Math.cos(ng-.3) * .1 * dis*s));
					}
					if (Inc == 10 && Leave > 1 && mul == 1)
						Leave--;
					Inc = 10;
					fireCount =0;
					if(mulCount ==9) {
						mul = 1;
						mulCount = 10;
					}
					if(mul == 3){
						mulCount =2;
					}
					if(setValue && !Snd_CannonBombShoot.isPlaying)
						Snd_CannonBombShoot.play();
					// sound8(GameRenderer.mContext,R.raw.cannon_bomb_shoot);
				}
//				Systeout.println(dis);
			}
			break;
		}
		return true;
}
var scal=10,scount=0;
function Draw_POWC()
{
	DrawTexture(mTex_bg[0], 0, 0);
	DrawTexture(mTex_Board, 0, 0);
	
	if (GameScreen == GAMEPUSE) {
		DrawTexture(mTex_Paused, 0, .35);
		DrawTexture(mTex_Score	, 0.00, .02);
		drawNumberScal(mScore	, -.02, .01,1,1);//81,62,8//0.003921569
		DrawTransScal(mTex_PlayIcn,-.25+.25*1, -.37,mSel==2?1.1:1,mSel==2?0.5:1);
	}
	if(GameScreen == GAMEOVER){
		DrawTexture(mTex_Gameover,0.00, .35);
		DrawTexture(mTex_Score	, 0.00, .02);
		drawNumberScal(Math.floor(hariScr) + Math.floor(mScore), -.02, .01, 1, 1);//81,62,8//0.003921569
//			DrawTransScal(mTex_Leaderboard,-.25f+.25f*1, -.37f,mSel==2?1.1f:1,mSel==2?0.5f:1);
	}
	if (GameScreen == GAMEWIN) {
		DrawTexture(mTex_Levelclear, 0, .50);
		for (var i = 0; i < 3; i++){
			DrawTexture(mTex_Star[0], -.22 + .22 * i, .25);
		}
		for (var i = 0; i < 3 && i< Leave ; i++){
			if(scount>i)
				DrawTexture(mTex_Star[1], -.22 + .22 * i, .25);
			if(scount==i)
				DrawTextureSS(mTex_Star[1], -.22 + .22 * i, .25, scal);
		}
		if (scount < 4) {
			scal *= .7;
			if (scal < 1) {
				scal = 10;
				scount++;
				if(scount<Leave){
					// Systeout.println(scount);
					// sound18(GameRenderer.mContext,R.raw.star);
					if(setValue && !Snd_Star.isPlaying)
						Snd_Star.play();
				}
			}
		}
		DrawTexture(mTex_Score , 0.00,-.06);
		drawNumberScal(Math.floor(hariScr) + Math.floor(mScore), -.02, -.06, 1, 1);//81,62,8//0.003921569
		DrawTransScal(mTex_Next, -.25+.25*1, -.37,mSel==2?1.1:1,mSel==2?0.5:1);
	}
	if(GameScreen == GAMECONG){
		DrawTexture(mTex_Cong, 0, .35);
		for (var i = 0; i < 3; i++)
			DrawTexture(mTex_Star[0], -.22 + .22 * i, .02);
		for (var i = 0; i < 3 && i< Leave ; i++){
			if(scount>i)
				DrawTexture(mTex_Star[1], -.22 + .22 * i, .02);
			if(scount==i)
				DrawTextureSS(mTex_Star[1], -.22 + .22 * i, .02, scal);
		}
		if (scount < 4) {
			scal *= .7;
			if (scal < 1) {
				scal = 10;
				scount++;
			}
		}
	}
	DrawTransScal(mTex_Menu, -.25+.25*0, -.37,mSel==1?1.1:1,mSel==1?0.5:1);
	DrawTransScal(mTex_Retry,-.25+.25*2, -.37,mSel==3?1.1:1,mSel==3?0.5:1);
}
function Handle_POWC(pointer ,events)
{
	mSel = 0;
	for(var i=0;i<3;i++){
		if(CircRectsOverlap(-.25+.25*i, -.37,floatWidth(mTex_Achiev.width)*.4,floatHeight(mTex_Setting.height)*.4, screen2worldX(pointer.x),screen2worldY(pointer.y), .02)){
			mSel = i+1;
		}
	}
	if (events == 2) {
		switch (mSel) {
		case 1:
			mPage = parseInt(mLevel/6)%9;
			GameScreen = GAMELEVEL;
		break;
		case 2:
			if (GameScreen == GAMEPUSE) {
				//continue
				GameScreen = GAMEPLAY;
//					gameReset();
			}
			if (GameScreen == GAMEOVER) {
			 //   lastLevelScr = lastLevelScr - previousLev;
				//Leader-board
//					GameRenderer.mStart.onShowLeaderboardsRequested();
			}
			if (GameScreen == GAMEWIN) {
				//Next
				console.log("             Nexttt   "+mLevel1.Level.length+"   "+mLevel2.Level.length);
				if(mLevel<(mLevel1.Level.length-1+mLevel2.Level.length-1))
				    mLevel += 1;
				
				    GameScreen = GAMEPLAY;
				hariScr += mScore;
			//	mScore = hariScr;
				gameReset();
			}
			break;
		case 3:
			//Retry
		    
		    if (GameScreen == GAMEOVER) {
		        //previousLev = lastLevelScr;;
		        //  lastLevelScr = mScore;
		       /* if (mLevel == 0) {
		            mScore = 0;
		            lastLevelScr = 0;
		        }
		        lastLevelScr = mScore - lastLevelScr;*/
		    }
		    else {
		       /* if (mLevel == 0)
		            lastLevelScr = 0;//mScore - previousLev;
                else
		            lastLevelScr = mScore - lastLevelScr;*/
		    }
		    GameScreen = GAMEPLAY;
			gameReset();
			break;
		}
		// if (mSel != 0)
		// 	sound10(GameRenderer.mContext,R.raw.click);
		mSel = 0;
	}
	return true;
	
}
function drawNumberScal(no, x,  y, scal)
{
	var dx = floatWidth(32)*scal*.5;
		var strs = ""+no;
	for(var i =0;i<strs.length;i++)
	{
		var k = (strs.charCodeAt(i))-48;
		
		if(k>=0 && k<10)
		{
			mTex_Font.frame = k;
			DrawTextureSS(mTex_Font,x+i*dx,y,scal,scal);
		}
		//mTex_Font[k].drawSRGB(x+i*dx,y,scal,t,t,t);
	}
}
function DrawTexture2(img,x,y) {
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
	img.tint = hex;
	img.alpha = 1;
	img.scale.setTo(-1,1);
	bmd.draw(img,XPos(x),YPos(y));
 }

function DrawTexture(img,x,y) {
   var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
   img.tint = hex;
   img.scale.set(1);
   img.alpha = 1;
   bmd.draw(img,XPos(x),YPos(y));
}
function DrawTexColor(img,x,y,r,g,b) {
 //Tex.DrawColor(_x, _y, r, g, b, sx, sy);
  var hex = (r*0x010000)+(g*0x000100)+(b*0x000001);
  img.tint = hex;
  img.alpha = 1;
  img.scale.set(1);
  bmd.draw(img,XPos(x),YPos(y));
  
}
function DrawTexColorScal(img,x,y,r,g,b,sx,sy) {
 //Tex.DrawColor(_x, _y, r, g, b, sx, sy);
   bmd.draw(img,XPos(x),YPos(y));
   var hex = (r*0x010000)+(g*0x000100)+(b*0x000001);
   img.tint = hex;
   img.alpha = 1;
   img.scale.setTo(sx,sy);
  
}
function DrawTransScal(img,x,y,s,t) {
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
    img.tint = hex;
	img.alpha = t;
	img.scale.set(s);
	bmd.draw(img,XPos(x),YPos(y));
}
function DrawTextureRS(img,x,y,r,s) {
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
	img.tint = hex;
	img.alpha = 1;
	img.angle = r;
	img.scale.set(s);
	bmd.draw(img,XPos(x),YPos(y));
}
function DrawTextureRTS(img,x,y,s,ang,r,g,b,alpha) {
	var hex = ((r*255)*0x010000)+((g*255)*0x000100)+((b*255)*0x000001);
	img.tint = hex;
	img.alpha = alpha;
	img.angle = ang;
	img.scale.set(s);
	bmd.draw(img,XPos(x),YPos(y));
}
function DrawTextureR(img,r,x,y) {
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
	img.tint = hex;
	img.alpha = 1;
   	img.scale.set(1);
	img.angle = -r;
	bmd.draw(img,XPos(x),YPos(y));
}
function DrawTextureSS(img,x,y,sx,sy) {
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
	img.tint = hex;
	img.alpha = 1;
	img.scale.setTo(sx,sy);
	bmd.draw(img,XPos(x),YPos(y));
}
function DrawTextureFlip(img,x,y)
{
	var hex = (255*0x010000)+(255*0x000100)+(255*0x000001);
	img.tint = hex;
	img.alpha = 1;
	img.scale.setTo(-1,1);
	bmd.draw(img,XPos(x),YPos(y));
}
function DegreeToRadian(d) {
	var r = d*(Math.PI/180);
	return r;
}
function RadianToDegree(r) {
	var d = r*(180/Math.PI);
	return d;
}
function GetAngle(d,e) {

	  if(d==0)
		  return e>=0 ? Math.PI/2 : -Math.PI/2;
	  else if (d > 0)
		  return Math.atan(e/d);
	  else
		  return Math.atan(e/d) + Math.PI;
	
}
function randomBoolean() {
	var r = Math.abs(RandomInt(0,1)%2);
	if (r < 1)
		return false;
	else
		return true;
}  
function RandomInt(min, max) {
	// return Math.floor(Math.random() * (max - min + 1) + min);
	return game.rnd.integerInRange(min,max);
}

function Randomfloat(min, max) {
	var rand = game.rnd.frac();
		max = max-min;
		max  = rand%max;
	return (max+min);
}

// game.rnd.Integer(), style);
// game.add.text(32, 60, 'Frac: ' + game.rnd.frac(), style);
// game.add.text(32, 90, 'Real: ' + game.rnd.real(), style);
function checkOverlap(spriteA, spriteB) {

	var boundsA = spriteA.getBounds();
	var boundsB = spriteB.getBounds();

	return Phaser.Rectane.varersects(boundsA, boundsB);
}
function CirCir(cx1,cy1,r1,cx2,cy2,r2) {
	var bVectMag = Math.sqrt(((cx1-cx2)*(cx1-cx2)) + ((cy1-cy2)*(cy1-cy2)));
	if (bVectMag<(r1+r2))
		return true;
	return false ;
}
function XPos(x) {
	return (((1 + x)*maxX)/2);
}	
function YPos(y) {
	return (((1-(y))*maxY)/2);
}
function floatHeight(Height) {
	return(Height/maxY)*2;
}
function floatWidth(Width) {
	return(Width/maxX)*2;
}
function screen2worldX(a) {
	c = ((a/maxX)- 0.5)*2;
    return c;
}
function screen2worldY(a) {
	c = ((a/maxY)-0.5)*(-2);
    return c;
}
function Rect2Rectvarersection(ax,ay,adx,ady,bx,by,bdx,bdy) {
	ax -= adx/2;
	ay += ady/2;
	bx -= bdx/2;
	by += bdy/2;
	if( ax+adx > bx  && ay-ady < by && bx+bdx > ax && by-bdy< ay) {
		return true;
	}
	return false;
}
function CircRectsOverlap(CRX,CRY,CRDX,CRDY,centerX,centerY,radius) {
	if((Math.abs(centerX - CRX) <= (CRDX + radius)) && (Math.abs(centerY - CRY) <= (CRDY + radius)))
		return true;

    return false ;
}

