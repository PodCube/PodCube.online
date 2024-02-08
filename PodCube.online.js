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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(30,1,1).p("Ehc/hglMC5/AAAQBfAABDBDQBEBEAABfMAAAC5/QAABfhEBDQhDBEhfAAMi5/AAAQhfAAhEhEQhDhDAAhfMAAAi5/QAAhfBDhEQBEhDBfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ehc/BglQhfAAhEhDQhChDAAhfMAAAi5/QAAhfBChEQBEhCBfAAMC5/AAAQBfAABDBCQBDBEAABfMAAAC5/QAABfhDBDQhDBDhfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.viewMask, new cjs.Rectangle(-633.1,-633.1,1266.3000000000002,1266.3000000000002), null);


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

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var _this = this;
		
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		
		
		var control = _this.viewMask
		var container = control.viewContainer
		
		//DYNAMICALLY LOAD TRANSMISSIONS
		var T_default = [];
		var offY = 0;
		var scrollRate = 15
		var paddingY = 20
		
			function loadView() {
				var newEp;
		
				for (let i = 0; i < Transmissions.length; i++) {
					_e = new lib.T_();
					console.log(_e);
					_e.scaleX = 0.5
					_e.scaleY = 0.5
					_e.x = 0;
					_e.y = offY;
					offY = offY + (_e.nominalBounds.height * 0.5) + paddingY;
		
					_t = Transmissions[i]
					console.log(_e.height)
					_e.title.text = _t.title;
					_e.integrity.text = _t.integrity + "%";
					_e.date.text = _t.date.toLocaleDateString(undefined, options);
					_e.origin.text = _t.origin;
					_e.locale.text = _t.locale;
					_e.region.text = _t.region;
					_e.zone.text = _t.zone;
					_e.planet.text = _t.planet;
					_e.model.text = _t.model;
					_e.btn.audio = _t.audio;
		
		
					_e.btn.addEventListener('click', function (e) {
						console.log(e);
						playAudio(e.target.audio)
					});
		
					T_default.push(_e);
					container.addChild(_e);
				}
			}
		
		loadView()
		
		_this.currentView = T_default
		
		// Scroll Transmissions Box
		createjs.Touch.enable(stage);
		
		
		//control.hitArea = container;
		
		var lastY; // Variable to store the last Y position of the mouse
		var velocity = 0; // Variable to store the velocity of the drag
		var friction = 0.85; // Variable to store the friction (damping)
		var upperBoundary = container.y;
		var lowerBoundary = stage.canvas.height - container.getBounds().height * container.scaleY;
		
		control.on("mousedown", function (e) {
			lastY = stage.mouseY / stage.scaleY; // Store the initial Y position of the mouse
			velocity = 0;
		
		});
		
		control.on("pressmove", function (e) {
			var currentY = stage.mouseY / stage.scaleY; // Get the current Y position of the mouse
			velocity += (currentY - lastY) * 0.4; // Add the change in Y position to the velocity
			lastY = currentY; // Update the last Y position
		});
		
		createjs.Ticker.on("tick", function () {
			// Apply the velocity to viewContainer element
			container.y += velocity;
		
			// Check if the viewContainer has moved beyond its boundaries
			if (container.y > upperBoundary) {
				container.y = upperBoundary;
				console.log('upper boundary hit')
				velocity = 0;
			} else if (container.y < lowerBoundary) {
				console.log('lower boundary hit')
				container.y = lowerBoundary;
				velocity = 0;
			}
		
			// Apply friction to the velocity
			velocity *= friction;
		
			// If the velocity is very small, set it to 0 to stop the movement
			if (Math.abs(velocity) < 0.03) {
				velocity = 0;
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Actions
	this.viewMask = new lib.viewMask();
	this.viewMask.name = "viewMask";
	this.viewMask.setTransform(900.2,860.25);

	this.timeline.addTween(cjs.Tween.get(this.viewMask).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1227.1,1187.1,306.3000000000002,306.3000000000002);
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