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
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Ehc/hglMC5/AAAQBfAABDBEQBEBDAABfMAAAC5/QAABfhEBDQhDBEhfAAMi5/AAAQhfAAhDhEQhEhDAAhfMAAAi5/QAAhfBEhDQBDhEBfAAg");
	this.shape.setTransform(618.15,618.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.viewContainer, new cjs.Rectangle(-1,-1,1238.3,1238.3), null);


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


(lib.FXGlassOverlaynoMouse = function(mode,startPosition,loop,reversed) {
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
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.267)","rgba(255,255,255,0.067)","rgba(255,255,255,0.2)","rgba(255,255,255,0.267)","rgba(255,255,255,0.267)"],[0,0.282,0.463,0.69,1],584.7,-592.3,-550,557.1).s().p("Ehc/BglQhfAAhEhDQhChDAAhfMAAAi5/QAAhfBChEQBEhCBfAAMC5/AAAQBfAABDBCQBDBEAABfMAAAC5/QAABfhDBDQhDBDhfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FXGlassOverlaynoMouse, new cjs.Rectangle(-618.1,-618.1,1236.3000000000002,1236.3000000000002), null);


(lib.BTN_PodCube = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(236,92,3,0.557)").s().p("AWlYEQADgRg7AAMgqdAAAQjIAAAAjIMAAAgqdQAAgdAEgcQglARgbAjIBdh+IgBADQAwhIB4AAMAqdAAAQDIAAAADIMAAAAqdQAAATgBARQgHA/gfAnIAAAAIhkCGQAEgxgJgGg");
	this.shape.setTransform(158.925,159.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(236,92,3,0.557)").s().p("A1HYXQjIAAAAjIMAAAgqdQAAgcAEgdIgSgdIAQgZQBOhZB4AAMAqdAAAQDIAAAADIMAAAAqdQAAATgBARQgHA/gfAnIAAAAQg2AxgqAHQgGAGg7AAg");
	this.shape_1.setTransform(155.725,165.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(2));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AsKSxMAAAglhIM0AAQFMAADKDCQDLDAAAE6QAADQhjC6QgkBCgxA2QhYBgiBA7QjJBciOADIkrAIIAAAvIAANygAkQrXIAAI+IDKAAQCQgGBahUIAEgEQBWhVAAiOQABiQhdhTQhdhTjhAIIh0AAg");
	this.shape_2.setTransform(167.775,161.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.286)").s().p("ArCTJMAAAglgIAogxMAAAAlhIICAAIgoAwgAiYD4IErgHQCOgEDJhcQCBg6BYhfQhhCBifBIQjJBciOAEIkEAHgAFHnBQAAiQhdhUQhchTjhAJIhNAAIAAgwIB0AAQDhgJBdBTQBdBTgBCRQAACOhWBUQAvhJAAhpg");
	this.shape_3.setTransform(156.575,163.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBE9B").s().p("AsKSxMAAAglhIM0AAQFMAADKDCQDLDAAAE6QAADQhjC6QgkBCgxA2QhYBgiBA7QjJBciOADIkrAIIAAAvIAANygAkQrXIAAI+IDKAAQCQgGBahUIAEgEQBWhVAAiOQABiQhdhTQhdhTjhAIIh0AAg");
	this.shape_4.setTransform(167.775,161.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsKSxMAAAglhIM0AAQFMAADKDCQDLDAAAE6QAADQhjC6QgkBCgxA2QhYBgiBA7QjJBciOADIkrAIIAAAvIAANygAkQrXIAAI+IDKAAQCQgGBahUIAEgEQBWhVAAiOQABiQhdhTQhdhTjhAIIh0AAg");
	this.shape_5.setTransform(167.775,161.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).wait(2));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.259)").ss(5,2,1).p("A3t3tQgaAjgFBQMAAAAqqQAEBwA7AyQAxAlBFABMAqwAAAQCSABAbhQ");
	this.shape_6.setTransform(151.8318,171.3771);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C54D03").s().p("A1OYXQjIAAAAjIMAAAgqdQAAjIDIAAMAqdAAAQDIAAAADIMAAAAqdQAADIjIAAg");
	this.shape_7.setTransform(152.85,168.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,0,323.59999999999997,326.7);


(lib.viewMask = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FXGlassOverlaynoMouse();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Ehc/hglMC5/AAAQBfAABDBDQBEBEAABfMAAAC5/QAABfhEBDQhDBEhfAAMi5/AAAQhfAAhEhEQhDhDAAhfMAAAi5/QAAhfBDhEQBEhDBfAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehc/BglQhfAAhEhDQhChDAAhfMAAAi5/QAAhfBChEQBEhCBfAAMC5/AAAQBfAABDBCQBDBEAABfMAAAC5/QAABfhDBDQhDBDhfAAg");

	// Layer_1
	this.viewContainer = new lib.viewContainer();
	this.viewContainer.name = "viewContainer";
	this.viewContainer.setTransform(-618.15,-618.15);

	var maskedShapeInstanceList = [this.viewContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.viewContainer).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.227)").ss(30,1,1).p("Ehc/hglMC5/AAAQBfAABDBDQBEBEAABfMAAAC5/QAABfhEBDQhDBEhfAAMi5/AAAQhfAAhEhEQhDhDAAhfMAAAi5/QAAhfBDhEQBEhDBfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3_copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ehc/BglQhfAAhEhDQhChDAAhfMAAAi5/QAAhfBChEQBEhCBfAAMC5/AAAQBfAABDBCQBDBEAABfMAAAC5/QAABfhDBDQhDBDhfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.viewMask, new cjs.Rectangle(-633.1,-633.1,1266.3000000000002,1266.3000000000002), null);


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

}).prototype = getMCSymbolPrototype(lib.T_2, new cjs.Rectangle(31.5,31.5,1121,630.9), null);


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

}).prototype = getMCSymbolPrototype(lib.T_, new cjs.Rectangle(31.5,18.9,1825.3,1219), null);


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

	// Layer_2
	this.queue = new cjs.Text("QUEUE", "normal 400 51px 'Silkscreen'", "#2F2F2F");
	this.queue.name = "queue";
	this.queue.lineHeight = 66;
	this.queue.lineWidth = 738;
	this.queue.parent = this;
	this.queue.setTransform(654.75,134.8);
	if(!lib.properties.webfonts['Silkscreen']) {
		lib.webFontTxtInst['Silkscreen'] = lib.webFontTxtInst['Silkscreen'] || [];
		lib.webFontTxtInst['Silkscreen'].push(this.queue);
	}

	this.label = new cjs.Text("CURRENT TRANSMISSION", "normal 400 48px 'Sixtyfour'", "#2F2F2F");
	this.label.name = "label";
	this.label.lineHeight = 49;
	this.label.lineWidth = 1051;
	this.label.parent = this;
	this.label.setTransform(393.15,18.65);
	if(!lib.properties.webfonts['Sixtyfour']) {
		lib.webFontTxtInst['Sixtyfour'] = lib.webFontTxtInst['Sixtyfour'] || [];
		lib.webFontTxtInst['Sixtyfour'].push(this.label);
	}

	this.btn_next = new lib.BTN_PodCube();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(405.4,330.15,0.6397,0.6397,0,0,0,-3,324.2);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.BTN_PodCube(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.label},{t:this.queue}]}).wait(1));

	// Layer_4
	this.btn_play = new lib.BTN_PodCube();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(201.65,165.45,1,1,0,0,0,158.9,159.5);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.BTN_PodCube(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.227)").ss(27,1,1).p("Ehuygb6MDdlAAAQDIAAAADIMAAAAxlQAADIjIAAMjdlAAAQjIAAAAjIMAAAgxlQAAjIDIAAg");
	this.shape.setTransform(729.05,178.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("EhuyAb7QjIAAAAjIMAAAgxlQAAjIDIAAMDdlAAAQDIAAgBDIMAAAAxlQABDIjIAAg");
	this.shape_1.setTransform(729.05,178.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P_, new cjs.Rectangle(-13.5,-13.5,1485.1,384.5), null);


// stage content:
(lib.PodCubeSitev2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {MAIN_MENU:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		_this = this;
		_lib = lib;
		var q = new createjs.LoadQueue(true);
		q.loadFile('/libs/podcube/podcube.js');
		
		// #region EVENT BUS
		function pubSub() {
		
		    const subscriptions = {}
		    const getNextUniqueId = getIdGenerator()
		
		
		    function subscribe(eventName, callback) {
		        const id = getNextUniqueId()
		        if (!subscriptions[eventName]) {
		            subscriptions[eventName] = {}
		        }
		        subscriptions[eventName][id] = callback
		
		        return {
		            unsubscribe: () => {
		                delete subscriptions[eventName][id]
		                if (Object.keys(subscriptions[eventName]).length === 0) delete subscriptions[eventName]
		            }
		        }
		
		    }
		
		
		    function publish(eventName, data) {
		        if (!subscriptions[eventName])
		            return
		        Object.keys(subscriptions[eventName]).forEach(key => subscriptions[eventName][key](data))
		        console.log(eventName)
		    }
		
		
		
		    function getIdGenerator() {
		        let lastId = 0
		
		        return function getNextUniqueId() {
		            lastId += 1
		            return lastId
		        }
		    }
		
		
		    return {
		        publish,
		        subscribe,
		    }
		}
		MSG = pubSub()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Actions
	this.instance = new lib.P_();
	this.instance.setTransform(944.75,1562.95,1,1,0,0,0,729.1,178.7);

	this.viewMask = new lib.viewMask();
	this.viewMask.name = "viewMask";
	this.viewMask.setTransform(954.85,735.3,0.9203,0.9203,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.viewMask},{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("EiepCnMQjiAAigigQigigAAjiMAAAk9TQAAjiCgigQCgigDiAAME9TAAAQDiAACgCgQCgCgAADiMAAAE9TQAADiigCgQigCgjiAAgEiS1iDNMAAACLcIAAAAMAAAB34QAjQdQSAwMEGKAAAQOWgkAZwRMAAAiL1IgBAAMAAAh4PQgZwSuWgkMkGKAAAQwSAwgiQeg");
	this.shape.setTransform(960,970.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","#FFFFFF"],[0,0.902,1],0,0,0,0,0,1293.9).s().p("EiCBCS4QwSgwgjweMAAAh33IAAAAMAAAiLcQAiweQSgwMEGKAAAQOWAjAZQSMAAAB4QIABAAMAAACL1QgZQRuWAkgEiFoiIjQgkAUghAcQgUAQgSARQgRATgRATQgZAfgTAhIgPAcIgyDYIAAABMAAAB3vIABAAMAAACMAIAAABIBTEQQAMASAOARQAQAUASASQASASATAQQAiAbAkAVIDuA9IACAAMEDxAAAIDug9QAkgVAhgbQAVgQARgSQByhzAXiXQADgcACgdIABgWMAAAh3wIgBAAMAAAiMAIAAgWQgCgdgEgcQgOhZgshMQggg2gvgwQgRgRgUgQIgLgJIgQgNQgVgPgWgMIjug+MkDxAAAIgCAAg");
	this.shape_1.setTransform(960.1,960.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(850,860.1,1180,1180);
// library properties:
lib.properties = {
	id: '46A5D1D197A275448B5D0C6F2A17AD0E',
	width: 1920,
	height: 1920,
	fps: 24,
	color: "#1768DA",
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