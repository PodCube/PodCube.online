(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.viewContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("EhyDBHGQhnAAhKhJQhJhJAAhoMAAAiGXQAAhnBJhKQBKhJBnAAMDkHAAAQBnAABKBJQBJBKAABnMAAACGXQAABohJBJQhKBJhnAAg");
	this.shape.setTransform(885.0046,559.5137,1.1722,1.2297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(0.1,0,0,3).p("EiEBhXaMEIDAAAQCmAAB1B1QB1B1AACmMAAACiVQAACmh1B1Qh1B1imAAMkIDAAAQimAAh1h1Qh1h1AAimMAAAiiVQAAimB1h1QB1h1CmAAg");
	this.shape_1.setTransform(885,559.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.viewContainer, new cjs.Rectangle(-1,-1,1772,1121), null);


(lib.screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(75,75,75,0.039)","rgba(255,255,255,0.078)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(108,108,108,0.039)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.165,0.239,0.408,0.788,0.839,1],792.1,-809.7,-791.8,809.2).s().p("Eh4ACDaQk0AAjajaQjZjZAAk0MAAAjvlQAAk0DZjZQDajaE0AAMDwCAAAQEzAADZDaQDaDZAAE0MAAADvlQAAE0jaDZQjZDakzAAg");
	this.shape.setTransform(901.95,900.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.157)","rgba(75,75,75,0.157)","rgba(255,255,255,0)","rgba(173,173,173,0)","rgba(108,108,108,0.157)","rgba(255,255,255,0)","rgba(255,255,255,0.157)"],[0,0.196,0.239,0.549,0.788,0.839,1],280.2,-789.6,-327.3,922.5).s().p("Eh/5CHIQjFAAiMiMQiLiMAAjGMAAAj/UQAAjFCLiMQCMiMDFAAMD/zAAAQDFAACLCMQCMCMAADFMAAAD/UQAADGiMCMQiLCMjFAAgEiAPiAAQjZDZAAE1MAAADvlQAAE0DZDZQDaDZE0AAMDwCAAAQE0AADZjZQDZjZAAk0MAAAjvlQAAk1jZjZQjZjZk0gBMjwCAAAQk0ABjaDZg");
	this.shape_1.setTransform(902.025,900.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.318)","rgba(151,151,151,0.318)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(182,182,182,0.318)","rgba(255,255,255,0)","rgba(255,255,255,0.318)"],[0,0.196,0.239,0.408,0.788,0.839,1],-174.5,893.4,167.1,-855.8).s().p("EiD1CJsQihAAhyhyQhyhyAAihMAAAkHNQAAihByhyQByhyChAAMEHrAAAQChAAByByQByByAAChMAAAEHNQAAChhyByQhyByihAAgEiFJiE6QiMCMAADEMAAAD/VQAADGCMCLQCMCNDEgBMD/zAAAQDFABCMiNQCLiLAAjGMAAAj/VQAAjEiLiMQiMiMjFgBMj/zAAAQjEABiMCMg");
	this.shape_2.setTransform(902,900.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.318)","rgba(151,151,151,0.318)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(182,182,182,0.318)","rgba(255,255,255,0)","rgba(255,255,255,0.318)"],[0,0.196,0.239,0.408,0.788,0.839,1],-912.1,0,912.1,0).s().p("EiGrCOSQjPAAiUiTQiSiTAAjQMAAAkM3QAAjQCSiTQCUiTDPAAMENWAAAQDQAACTCTQCTCTAADQMAAAEM3QAADQiTCTQiTCTjQAAgEiGDiGXQh0B0AACjMAAAECbQAACkB0BzQB0B0CjAAMECcAAAQCjAAB0h0QB0hzAAikMAAAkCbQAAijh0h0Qh0h0ijAAMkCcAAAQijAAh0B0g");
	this.shape_3.setTransform(902.075,900.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-120,2490,2100);


(lib.PlasticPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.62)").ss(7,0,0,3).p("EiGciRTMEM5AAAQEgAADLDHQDMDHAAEZMAAAENZQAAEZjMDHQjLDHkgAAMkM5AAAQkgAAjMjHQjLjHAAkZMAAAkNZQAAkZDLjHQDMjHEgAAg");
	this.shape.setTransform(929.975,929.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B1B1B1","#FFFFFF","#ECECEC","#E9E9E9","#D6D6D6","#FFFFFF","#A2A2A2"],[0,0.039,0.204,0.702,0.906,0.973,1],-929.9,0,930,0).s().p("EiGcCRUQkgAAjMjHQjLjHAAkZMAAAkNZQAAkZDLjHQDMjHEgAAMEM5AAAQEgAADLDHQDMDHAAEZMAAAENZQAAEZjMDHQjLDHkgAAg");
	this.shape_1.setTransform(929.975,929.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,1867,1867);


(lib.orangebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56104").s().p("AmPJ2QhfAAhEhEQhDhDAAhfIAAsfQAAhfBDhEQBEhDBfAAIMfAAQBfAABDBDQBEBEAABfIAAMfQAABfhEBDQhDBEhfAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B790").s().p("AmPJ2QhfAAhEhEQhDhDAAhfIAAsfQAAhfBDhEQBEhDBfAAIMfAAQBfAABDBDQBEBEAABfIAAMfQAABfhEBDQhDBEhfAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#813302").s().p("AmPJ2QhfAAhEhEQhDhDAAhfIAAsfQAAhfBDhEQBEhDBfAAIMfAAQBfAABDBDQBEBEAABfIAAMfQAABfhEBDQhDBEhfAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-62.9,125.9,125.9);


(lib.btnback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArUPPQhnAAhKhJQhJhJAAhoIAA2pQAAhnBJhKQBKhJBnAAIWpAAQBnAABKBJQBJBKAABnIAAWpQAABohJBJQhKBJhnAAg");
	this.shape.setTransform(97.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,195);


(lib.BTN_terminaldetails = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AlbK6IgcgcQgMgMABgPQgBgQAMgLIJmpoIpmpnQgLgLAAgQQgBgPAMgMIAbgbQAMgLAQAAQAPAAALALIKfKgIAKAVIAAADIAAAEIgKAVIgCACIqdKeQgLALgPAAQgQABgLgLg");
	this.shape.setTransform(-0.726,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AltLdIgegdQgMgMABgQQgBgRAMgMIKHqHIqHqGQgLgMAAgRQgBgQAMgMIAdgdQAMgMARAAQARAAALAMILCLDIAKAWIAAADIAAAEIgLAXIgBACIrALAQgMAMgQAAQgRAAgLgMg");
	this.shape_1.setTransform(-0.776,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.357)").s().p("AltLdIgegdQgMgMABgQQgBgRAMgMIKHqHIqHqGQgLgMAAgRQgBgQAMgMIAdgdQAMgMARAAQARAAALAMILCLDIAKAWIAAADIAAAEIgLAXIgBACIrALAQgMAMgQAAQgRAAgLgMg");
	this.shape_2.setTransform(-0.776,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1768DA").s().p("AvnPoIAA/PIfPAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.BTN_terminaladd2q = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0.498)","rgba(255,255,255,0.776)","rgba(255,255,255,0.267)","rgba(255,255,255,0.639)"],[0.137,0.396,0.518,0.976],-51,0,51.1,0).ss(16,2,2).p("AAAAAIAAGvAAAAAIGvAAAAAmuIAAGuAmuAAIGuAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("AqHM5QixAAAAixIAA0PQAAixCxAAIUPAAQCxAAAACxIAAUPQAACxixAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.247)").s().p("AqHM5QixAAAAixIAA0PQAAixCxAAIUPAAQCxAAAACxIAAUPQAACxixAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.698)").s().p("AqHM5QixAAAAixIAA0PQAAixCxAAIUPAAQCxAAAACxIAAUPQAACxixAAg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1768DA").s().p("EiMnAPoIAA/PMEZPAAAIAAfPg");
	this.shape_4.setTransform(800,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,1800,200);


(lib.btn_play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0.357)","rgba(255,255,255,0.659)","rgba(255,255,255,0.369)","rgba(255,255,255,0.667)"],[0,0.478,0.553,1],-52.4,0,151,0).ss(5,1,0,3).p("Anmm4QgFhtA4gMQAggIAzAYIMVHHQBlBShlBaIs9HfQhRAPgNhSg");
	this.shape.setTransform(0.0208,0.0003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("ArUPPQhnAAhKhJQhJhJAAhoIAA2pQAAhnBJhKQBKhJBnAAIWpAAQBnAABKBJQBJBKAABnIAAWpQAABohJBJQhKBJhnAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.208)").s().p("ArUPPQhnAAhKhJQhJhJAAhoIAA2pQAAhnBJhKQBKhJBnAAIWpAAQBnAABKBJQBJBKAABnIAAWpQAABohJBJQhKBJhnAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("ArUPPQhnAAhKhJQhJhJAAhoIAA2pQAAhnBJhKQBKhJBnAAIWpAAQBnAABKBJQBJBKAABnIAAWpQAABohJBJQhKBJhnAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.447)","rgba(255,255,255,0.667)"],[0,1],-117.4,-54.3,117.5,54.2).s().p("ArUPPQhnAAhKhJQhJhJAAhoIAA2pQAAhnBJhKQBKhJBnAAIWpAAQBnAABKBJQBJBKAABnIAAWpQAABohJBJQhKBJhnAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.BSO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1768DA").s().p("EiFYCJ5QimAAh1h2Qh1h1AAilMAAAkHRQAAimB1h1QB1h1CmAAMEKxAAAQClAAB1B1QB2B1AACmMAAAEHRQAAClh2B1Qh1B2ilAAg");
	this.shape.setTransform(893.7,882.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1787.4,1765);


(lib.ViewTransmissions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		MSG.subscribe('feedReady', loadView.bind(this))
		
		var control = this
		var container = this.viewContainer
		
		var scrollArea = new createjs.Shape();
		scrollArea.graphics.beginFill("#000").drawRect(0, 0, control.nominalBounds.width*control.scaleX, control.nominalBounds.height*control.scaleY);
		scrollArea.alpha = 0.01; // Make the shape transparent
		scrollArea.on("mousewheel", handleScroll);
		
		// Add the scrollArea to the stage or a parent container
		stage.addChild(scrollArea);
		
		
		//DYNAMICALLY LOAD TRANSMISSIONS
		var offY = 0; // Offset of each transmission, initialized to 0.
		var scrollRate = 15 // the fuckin rate of teh scroll
		var paddingY = 20 // Padding between transmissions
		var lastY; // Variable to store the last Y position of the mouse
		var velocity = 0; // Variable to store the velocity of the drag
		var friction = 0.80; // Variable to store the friction (damping)
		var scale = 0.5; // scale of child elements
		var deadZone = 15;
		var speedMod = 2;
		var isMouseDown = false;
		
		
		//mobile compensation (don't like this implementation... but *shrug*)
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		var sensitivity = isMobile ? 0.4 : 0.6;
		
		function loadView()
		{
		
			for (let i = 0; i < Transmissions.length; i++)
			{
				_t = Transmissions[i]
				_e = new lib.T_2();
				_e.episode = _t
				_e.scaleX = container.scaleX
				_e.scaleY = container.scaleY
				_e.x = 0;
				_e.y = offY;
				offY = offY + (_e.nominalBounds.height * container.scaleY) + paddingY;
				container.addChild(_e);
			}
		
			//MSG.publish('T_loadEp')
		
			upperBoundary = container.y;
			lowerBoundary = (container.getBounds().height * container.scaleY) * -1;
		
		
			control.on("mousedown", function (e)
			{
				lastY = stage.mouseY / stage.scaleY; // Store the initial Y position of the mouse
				velocity = 0;
				isMouseDown = true;
		
			});
		
			control.on("pressmove", function (e)
			{
				var currentY = stage.mouseY / stage.scaleY; // Get the current Y position of the mouse
				var deltaY = currentY - lastY; // Calculate the change in Y position
		
				// Only update the velocity if the change in Y position is greater than the dead zone
				if (Math.abs(deltaY) > deadZone)
				{
					velocity = deltaY * speedMod; // Add the change in Y position to the velocity
				}
		
				lastY = currentY; // Update the last Y position
		
				container.y += deltaY
			});
		
			control.on('pressup', function (e)
			{
		
				isMouseDown = false;
			})
		
		
		
			control.on('mouseover', startScroll)
			control.on('mouseout', endScroll)
		
		
		
		
			createjs.Ticker.on("tick", doVelo);
		
			
		
		
		}
		
		var _s;
		
		function startScroll(e)
		{
			_s = MSG.subscribe('wheel', handleScroll)
		}
		
		function endScroll(e){
			_s.unsubscribe()
		}
		
		function handleScroll(e)
		{
		
			// e.delta is positive when scrolling up, negative when scrolling down.
			var deltaY = e.deltaY;
			// Update the container's position
			container.y += deltaY/speedMod;
			
			velocity += deltaY/speedMod;
		
			// Check if the viewContainer has moved beyond its boundaries
			if (container.y > upperBoundary)
			{
				container.y = upperBoundary;
			}
			else if (container.y < lowerBoundary)
			{
				container.y = lowerBoundary;
			}
		}
		
		
		function doVelo()
		{
			if (!isMouseDown)
			{
				container.y += velocity;
			}
			// Check if the viewContainer has moved beyond its boundaries
			if (container.y > upperBoundary)
			{
				container.y = upperBoundary;
				velocity = 0;
			}
			else if (container.y < lowerBoundary)
			{
				container.y = lowerBoundary;
				velocity = 0;
			}
		
			// Apply friction to the velocity
			velocity *= friction;
		
			// If the velocity is very small, set it to 0 to stop the movement
			if (Math.abs(velocity) < 0.03)
			{
				velocity = 0;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiEBBXbQilAAh2h1Qh1h2AAilMAAAiiVQAAilB1h2QB2h1ClAAMEIDAAAQClAAB1B1QB2B2AAClMAAACiVQAAClh2B2Qh1B1ilAAg");
	mask.setTransform(885,559.5);

	// viewContainer
	this.viewContainer = new lib.viewContainer();
	this.viewContainer.name = "viewContainer";
	this.viewContainer.setTransform(785,874.65,1,1,0,0,0,785,865);

	var maskedShapeInstanceList = [this.viewContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.viewContainer).wait(1));

	// hitbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.078)").s().p("EhyDBHGQhnAAhKhJQhJhJAAhoMAAAiGXQAAhnBJhKQBKhJBnAAMDkHAAAQBnAABKBJQBJBKAABnMAAACGXQAABohJBJQhKBJhnAAg");
	this.shape.setTransform(885.0046,559.5137,1.1722,1.2297);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ViewTransmissions, new cjs.Rectangle(0,0,1770,1119), null);


(lib.T_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _e = this.episode;
		var _ = this;
		
		function map(property) {
			_[property].text = _e[property];
		}
		
		['title',
		'model',
			'date',
			'integrity',
			'origin',
			'locale',
			'region',
			'zone',
			'planet'
		].forEach(map);
		
		function playEp() {
			
			MSG.publish('P_addToQueue',this.episode)
		}
		
		//MSG.subscribe('T_loadEp', loadEp)
		
		this.btn.addEventListener('click', playEp.bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhTLAzwQh7AAAAh8MAAAhesQAAh8B7AAMAxGAAAQB7AAAAB8IAAHiMB4RAAAQB7AAAAB7MAAABVPQAAB8h7AAg");
	mask.setTransform(576.2245,331.176);

	// Layer_2
	this.model = new cjs.Text("PodCube Model", "bold 60px 'Dogica Pixel'");
	this.model.name = "model";
	this.model.lineHeight = 62;
	this.model.lineWidth = 1763;
	this.model.parent = this;
	this.model.setTransform(47.7,540.7677,0.6186,0.6186);

	this.planet = new cjs.Text("PLANET", "60px 'Dogica Pixel'");
	this.planet.name = "planet";
	this.planet.textAlign = "right";
	this.planet.lineHeight = 62;
	this.planet.lineWidth = 1766;
	this.planet.parent = this;
	this.planet.setTransform(1140.4,501.15,0.6186,0.6186);

	this.zone = new cjs.Text("ZONE", "60px 'Dogica Pixel'");
	this.zone.name = "zone";
	this.zone.textAlign = "right";
	this.zone.lineHeight = 62;
	this.zone.lineWidth = 1766;
	this.zone.parent = this;
	this.zone.setTransform(1140.4,461.6,0.6186,0.6186);

	this.region = new cjs.Text("Region", "60px 'Dogica Pixel'");
	this.region.name = "region";
	this.region.textAlign = "right";
	this.region.lineHeight = 62;
	this.region.lineWidth = 1763;
	this.region.parent = this;
	this.region.setTransform(1138.4,421.95,0.6186,0.6186);

	this.locale = new cjs.Text("Locale (local context)", "bold 60px 'Dogica Pixel'");
	this.locale.name = "locale";
	this.locale.lineHeight = 62;
	this.locale.lineWidth = 1766;
	this.locale.parent = this;
	this.locale.setTransform(47.7114,312.261,0.6186,0.6186);

	this.origin = new cjs.Text("Origin (specific physical area)", "bold 60px 'Dogica Pixel'");
	this.origin.name = "origin";
	this.origin.lineHeight = 62;
	this.origin.lineWidth = 1766;
	this.origin.parent = this;
	this.origin.setTransform(47.7483,215.7,0.6186,0.6186);

	this.integrity = new cjs.Text("00.00%", "bold 66px 'Dogica Pixel'");
	this.integrity.name = "integrity";
	this.integrity.textAlign = "right";
	this.integrity.lineHeight = 68;
	this.integrity.lineWidth = 389;
	this.integrity.parent = this;
	this.integrity.setTransform(366.04,45.5,0.6186,0.6186);

	this.date = new cjs.Text("Monday, Jabrueny 32, 1804", "50px 'Dogica Pixel'");
	this.date.name = "date";
	this.date.lineHeight = 52;
	this.date.lineWidth = 1776;
	this.date.parent = this;
	this.date.setTransform(47.7459,162.45,0.6186,0.6186);

	this.title = new cjs.Text("TRANSMISSION TITLE", "bold 70px 'Dogica Pixel'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 72;
	this.title.lineWidth = 1653;
	this.title.parent = this;
	this.title.setTransform(636.8697,108.2546,0.6186,0.6186);

	var maskedShapeInstanceList = [this.model,this.planet,this.zone,this.region,this.locale,this.origin,this.integrity,this.date,this.title];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.date},{t:this.integrity},{t:this.origin},{t:this.locale},{t:this.region},{t:this.zone},{t:this.planet},{t:this.model}]}).wait(1));

	// Layer_3
	this.btn = new lib.orangebutton();
	this.btn.name = "btn";
	this.btn.setTransform(85.45,83.25,0.6186,0.6186,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.orangebutton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhVoAxSQh8AAAAh7MAAAhesQAAh8B8AAMAxFAAAQB8AAAAB8IAAHhMB4QAAAQB8AAAAB8MAAABVPQAAB7h8AAg");
	this.shape.setTransform(591.975,346.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_, new cjs.Rectangle(31.5,31.5,1121,630.9), null);


(lib.T_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//this.stop()
		
		var _e = this.episode;
		var _ = this;
		
		function map(property) {
			//console.log('mapping: '+property +"\n for: "+_e.title)
			_[property].text = _e[property];
		}
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		
		function init(){
		['title',
		'model',
			'origin',
			'locale',
			'region',
			'zone',
			'planet'
		].forEach(map);
		
		
		var _dat = _e.date.toLocaleDateString(undefined,options)
		_.date.text = _dat
		
		var _integ = _e.integrity +"%"
		_.integrity.text = _integ
		}
		
		function playEp() {
			
			MSG.publish('P_addToQueue',this.episode)
		}
		
		//MSG.subscribe('T_loadEp', loadEp)
		
		this.add2Q.addEventListener('click', playEp.bind(this))
		
		init()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiA3AQaQhVAAg9hIQg8hIAAhkIAA3mQAAhmA8hHQA9hIBVAAMEF8AAAQBVAAA9BIQA9BHAABmIAAXmQAABkg9BIQg9BIhVAAg");
	mask.setTransform(872.3841,105);

	// Layer_2
	this.instance = new lib.BTN_terminaldetails();
	this.instance.setTransform(1659.2,100.1,0.6781,0.6783,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BTN_terminaldetails(), 3);

	this.add2Q = new lib.BTN_terminaladd2q();
	this.add2Q.name = "add2Q";
	this.add2Q.setTransform(99.25,105.05,0.6786,0.6786);
	new cjs.ButtonHelper(this.add2Q, 0, 1, 2, false, new lib.BTN_terminaladd2q(), 3);

	this.model = new cjs.Text("PodCube Model", "normal 400 60px 'Silkscreen'", "#FFFFFF");
	this.model.name = "model";
	this.model.lineHeight = 77;
	this.model.lineWidth = 1763;
	this.model.parent = this;
	this.model.setTransform(-204.35,1311.65);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.model);
	}

	this.planet = new cjs.Text("PLANET", "normal 400 60px 'Silkscreen'", "#FFFFFF");
	this.planet.name = "planet";
	this.planet.textAlign = "right";
	this.planet.lineHeight = 77;
	this.planet.lineWidth = 1766;
	this.planet.parent = this;
	this.planet.setTransform(1561.95,1232.65);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.planet);
	}

	this.zone = new cjs.Text("ZONE", "normal 400 60px 'Silkscreen'", "#FFFFFF");
	this.zone.name = "zone";
	this.zone.textAlign = "right";
	this.zone.lineHeight = 77;
	this.zone.lineWidth = 1766;
	this.zone.parent = this;
	this.zone.setTransform(1561.95,1153.65);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.zone);
	}

	this.region = new cjs.Text("Region", "normal 400 60px 'Silkscreen'", "#FFFFFF");
	this.region.name = "region";
	this.region.textAlign = "right";
	this.region.lineHeight = 77;
	this.region.lineWidth = 1763;
	this.region.parent = this;
	this.region.setTransform(1561.95,1074.65);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.region);
	}

	this.origin = new cjs.Text("Origin (specific physical area)", "normal 700 60px 'Silkscreen'", "#FFFFFF");
	this.origin.name = "origin";
	this.origin.lineHeight = 77;
	this.origin.lineWidth = 1766;
	this.origin.parent = this;
	this.origin.setTransform(-201.1512,906.85);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.origin);
	}

	this.locale = new cjs.Text("Locale (local context)", "normal 700 60px 'Silkscreen'", "#FFFFFF");
	this.locale.name = "locale";
	this.locale.lineHeight = 77;
	this.locale.lineWidth = 1537;
	this.locale.parent = this;
	this.locale.setTransform(1620.6438,1143.3497);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.locale);
	}

	this.integrity = new cjs.Text("00.00%", "normal 700 58px 'Silkscreen'", "#FFFFFF");
	this.integrity.name = "integrity";
	this.integrity.lineHeight = 75;
	this.integrity.lineWidth = 298;
	this.integrity.parent = this;
	this.integrity.setTransform(1785.947,1031.2991);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.integrity);
	}

	this.date = new cjs.Text("Monday, Jabrueny 32, 1804", "normal 400 35px 'Silkscreen'", "#FFFFFF");
	this.date.name = "date";
	this.date.lineHeight = 46;
	this.date.lineWidth = 1537;
	this.date.alpha = 0.80000000;
	this.date.parent = this;
	this.date.setTransform(183.6503,135.15);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.date);
	}

	this.title = new cjs.Text("TRANSMISSION TITLE", "normal 700 58px 'Silkscreen'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 75;
	this.title.lineWidth = 2629;
	this.title.alpha = 0.80784314;
	this.title.parent = this;
	this.title.setTransform(183.6526,53.9);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.title);
	}

	var maskedShapeInstanceList = [this.instance,this.add2Q,this.model,this.planet,this.zone,this.region,this.origin,this.locale,this.integrity,this.date,this.title];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.date},{t:this.integrity},{t:this.locale},{t:this.origin},{t:this.region},{t:this.zone},{t:this.planet},{t:this.model},{t:this.add2Q},{t:this.instance}]}).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,0,0,3).p("EipnggzMFTPAAAQBlAABHBHQBIBIAABlMAAAA5/QAABkhIBIQhHBIhlAAMlTPAAAQhlAAhIhIQhHhIAAhkMAAAg5/QAAhlBHhIQBIhHBlAAg");
	this.shape.setTransform(1031,120);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("EipnAg0QhkAAhJhIQhHhIAAhkMAAAg5/QAAhkBHhJQBJhHBkAAMFTPAAAQBkAABIBHQBIBJAABkMAAAA5/QAABkhIBIQhIBIhkAAg");
	this.shape_1.setTransform(1031,120);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_2, new cjs.Rectangle(27,10,1717.8,200), null);


(lib.T__1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiK/BfPQhgAAhDhEQhEhDAAhfMAAAi3RQAAhfBEhEQBDhDBgAAMEWAAAAQBfAABDBDQBEBEAABfMAAAC3RQAABfhEBDQhDBEhfAAg");
	mask.setTransform(944.1,628.375);

	// Layer_2
	this.model = new cjs.Text("PodCube Model", "bold 60px 'Dogica Pixel'");
	this.model.name = "model";
	this.model.lineHeight = 62;
	this.model.lineWidth = 1763;
	this.model.parent = this;
	this.model.setTransform(50.8,913.5);

	this.planet = new cjs.Text("EARTH", "60px 'Dogica Pixel'");
	this.planet.name = "planet";
	this.planet.lineHeight = 62;
	this.planet.lineWidth = 1766;
	this.planet.parent = this;
	this.planet.setTransform(50.8,849.5);

	this.zone = new cjs.Text("USA", "60px 'Dogica Pixel'");
	this.zone.name = "zone";
	this.zone.lineHeight = 62;
	this.zone.lineWidth = 1766;
	this.zone.parent = this;
	this.zone.setTransform(50.8,785.5);

	this.region = new cjs.Text("Iowa", "60px 'Dogica Pixel'");
	this.region.name = "region";
	this.region.lineHeight = 62;
	this.region.lineWidth = 1763;
	this.region.parent = this;
	this.region.setTransform(50.8,721.5);

	this.locale = new cjs.Text("Interstate 35", "bold 60px 'Dogica Pixel'");
	this.locale.name = "locale";
	this.locale.lineHeight = 62;
	this.locale.lineWidth = 1766;
	this.locale.parent = this;
	this.locale.setTransform(50.8,583.25);

	this.origin = new cjs.Text("Inside a 2026 Kia Sorento", "bold 60px 'Dogica Pixel'");
	this.origin.name = "origin";
	this.origin.lineHeight = 62;
	this.origin.lineWidth = 1766;
	this.origin.parent = this;
	this.origin.setTransform(50.8,424);

	this.integrity = new cjs.Text("99.99%", "bold 66px 'Dogica Pixel'");
	this.integrity.name = "integrity";
	this.integrity.textAlign = "right";
	this.integrity.lineHeight = 68;
	this.integrity.lineWidth = 389;
	this.integrity.parent = this;
	this.integrity.setTransform(1829.45,52.05);

	this.date = new cjs.Text("00/00/0000", "50px 'Dogica Pixel'");
	this.date.name = "date";
	this.date.textAlign = "center";
	this.date.lineHeight = 52;
	this.date.lineWidth = 1776;
	this.date.parent = this;
	this.date.setTransform(941.65,360);

	this.title = new cjs.Text("ROAD TRIP SCRIPT", "bold 70px 'Dogica Pixel'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 72;
	this.title.lineWidth = 1772;
	this.title.parent = this;
	this.title.setTransform(940.1,178);

	var maskedShapeInstanceList = [this.model,this.planet,this.zone,this.region,this.locale,this.origin,this.integrity,this.date,this.title];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.date},{t:this.integrity},{t:this.origin},{t:this.locale},{t:this.region},{t:this.zone},{t:this.planet},{t:this.model}]}).wait(1));

	// Layer_3
	this.btn = new lib.orangebutton();
	this.btn.name = "btn";
	this.btn.setTransform(111.75,113);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.orangebutton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiK/BfPQhgAAhDhEQhEhDAAhfMAAAi3RQAAhfBEhEQBDhDBgAAMEWAAAAQBfAABDBDQBEBEAABfMAAAC3RQAABfhEBDQhDBEhfAAg");
	this.shape.setTransform(944.1,628.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T__1, new cjs.Rectangle(31.5,18.9,1825.3,1219), null);


(lib.btn_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0.357)","rgba(255,255,255,0.659)","rgba(255,255,255,0.369)","rgba(255,255,255,0.667)"],[0,0.478,0.553,1],-69.7,0,69.8,0).ss(5,1,0,3).p("AAEktQgDhLAngIQAWgFAiAQIIeE4QBFA4hFA+Io5FIQg4ALgJg5gAqfktQgDhLAmgIQAWgFAjAQIIeE4QBEA4hEA+Io5FIQg4ALgJg5g");
	this.shape.setTransform(6.0892,-0.0022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.instance = new lib.btnback("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,97.5,97.5);
	this.instance.alpha = 0.0781;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.2617},0).wait(1).to({alpha:0.6094},0).wait(1).to({alpha:0.5117},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.P_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this
		var nowPlaying = null;
		var queue = []
		
		// WHEN A TRANSMISSION WANTS TO BE ADDED TO THE QUEUE
		
			function readyPlayer()
			{
				if (nowPlaying == null)
				{
					nowPlaying = new Audio();
					nowPlaying.addEventListener('ended', playNext)
					playNext()
				}
			}
		
		
			function addToQueue(_e)
			{
				// ADD TO QUEUE
				queue.push(_e)
				updatePlayer()
			}
		
		
			function updatePlayer()
			{
				readyPlayer();
				var queueString = "";
				for (var i = 0; i < queue.length; i++)
				{
					queueString += "🔸" + queue[i].title + "\n";
				}
				_this.queue.text = queueString;
			}
		
			function playNext()
			{
				if (queue.length > 0)
				{
					var nextEp = queue.shift()
					playEp(nextEp)
				}
		
			}
		
			function playPause()
			{
				readyPlayer()
				nowPlaying.paused ? nowPlaying.play() : nowPlaying.pause()
			}
		
		
		
			function playEp(_e)
			{
		
				_this.label.text = _e.title
		
				nowPlaying.src = _e.audio;
				nowPlaying.load();
				nowPlaying.addEventListener("canplaythrough", (e) =>
				{
					//ready to play
					nowPlaying.play()
				});
				updatePlayer()
			}
		
		_this.btn_play.addEventListener('click', playPause)
		_this.btn_next.addEventListener('click', playNext)
		MSG.subscribe('P_addToQueue', addToQueue)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text_buttons
	this.label = new cjs.Text("CURRENT TRANSMISSION", "normal 400 57px 'Silkscreen'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 73;
	this.label.lineWidth = 1081;
	this.label.alpha = 0.66666667;
	this.label.parent = this;
	this.label.setTransform(40,38.4);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.label);
	}

	this.btn_play = new lib.btn_play();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(230.6,339.8,1,1,0,0,0,104,104);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btn_play(), 3);

	this.btn_next = new lib.btn_next();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(439.95,339.85,1,1,0,0,0,104,104);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.btn_next(), 3);

	this.queue = new cjs.Text("QUEUE", "normal 400 38px 'Silkscreen'", "#FFFFFF");
	this.queue.name = "queue";
	this.queue.lineHeight = 50;
	this.queue.lineWidth = 738;
	this.queue.alpha = 0.52549020;
	this.queue.parent = this;
	this.queue.setTransform(449.5,145.8);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.queue);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.queue},{t:this.btn_next},{t:this.btn_play},{t:this.label}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.078)").s().p("Eg2FAPEQhoAAhJhKQhJhJAAhnIAA2TQAAhnBJhKQBJhJBoAAMBsLAAAQBoAABJBJQBJBKAABnIAAWTQAABnhJBJQhJBKhoAAg");
	this.shape.setTransform(816.225,237.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("EhdXAHCQhVAAg8g8Qg7g7AAhVIAAnrQAAhUA7g9QA8g7BVAAMC6vAAAQBVAAA7A7QA8A9AABUIAAHrQAABVg8A7Qg7A8hVAAg");
	this.shape_1.setTransform(610.3256,77.4,0.9439,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.078)").s().p("Eh53AcIQhoAAhJhJQhJhJAAhoMAAAgwbQAAhoBJhJQBJhJBoAAMDzvAAAQBoAABJBJQBJBJAABoMAAAAwbQAABohJBJQhJBJhoAAg");
	this.shape_2.setTransform(805.025,180.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P_, new cjs.Rectangle(0,0,1610.1,360.1), null);


// stage content:
(lib.PodCubeSitev2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		_this = this;
		_lib = lib;
		var q = new createjs.LoadQueue(true);
		
		//this has to be here otherwise the canvas doesnt exist in time
		q.loadFile('/libs/podcube/podcube.js');
		document.getElementById("canvas").addEventListener("mousewheel",pubScroll,{passive:true})
		document.getElementById("canvas").addEventListener("DOMMouseScroll",pubScroll,{passive:true})
		
		function pubScroll (e) {
		MSG.publish('wheel',e)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// SUPERlay
	this.instance = new lib.screen("synched",0);
	this.instance.setTransform(962.45,952.3,0.9784,0.9745,0,0,0,902.1,900.6);
	var instanceFilter_1 = new cjs.ColorFilter(0.62,0.62,0.62,1,0,67.64,83.98,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-272,-122,2494,2104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	// working
	this.instance_1 = new lib.P_();
	this.instance_1.setTransform(960.5,1576.45,1,1,0,0,0,805,180);

	this.instance_2 = new lib.ViewTransmissions();
	this.instance_2.setTransform(960.6,868,0.9072,0.9072,0,0,0,885.1,559.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bg
	this.instance_3 = new lib.BSO("synched",0);
	this.instance_3.setTransform(953.95,956.3,0.9756,0.9861,0,0,0,885.5,885.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.instance_4 = new lib.PlasticPanel("synched",0);
	this.instance_4.setTransform(960.55,960.2,1,1,0,0,0,930,930);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(987.6,1076.7,906.4,817);
// library properties:
lib.properties = {
	id: '46A5D1D197A275448B5D0C6F2A17AD0E',
	width: 1921,
	height: 2100,
	fps: 24,
	color: "#323232",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['46A5D1D197A275448B5D0C6F2A17AD0E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;