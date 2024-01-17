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


(lib.PodCubePLogo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("At5VcMAAAgq3IOpAAQF6AADpDdQDnDbAAFoQAADshwDWQh0DSjlBoQjnBpiiAEIlWAJIAAQlgAk2iwIDlAAQCmgGBmhhQBnhhABilQAAilhqhfQhqhgkBALIiEAAg");
	this.shape.setTransform(10.35,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.286)").s().p("At5V4MAAAgq4IAtg3IAAA3IN8AAQF6AADpDeQDnDbAAFoQAADshwDVQh0DSjlBpQjnBoiiAFIlWAIIAAPvIAtAAIgtA3gAk2iUIDlAAQCmgGBmhhQBnhhABimQAAikhqhgQhqhfkBAKIiEAAg");
	this.shape_1.setTransform(5.85,2.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1768DA").s().p("A5YdTQhnAAhKhJQhJhKAAhnMAAAgyxQAAhnBJhKQBKhJBnAAMAyxAAAQBnAABKBJQBJBKAABnMAAAAyxQAABnhJBKQhKBJhnAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,104,218,0.286)").s().p("A5YdaQhnAAhKhKQhJhIAAhoMAAAgyxQAAglAJghQAQg6Aqg0QAqg1A9gfIgmArQA1gdBBAAMAyxAAAQBoAABIBJQBKBJAABoMAAAAyxQAAAQgCAPQgFArgSAlIATACQghAng4AsQgRAOgSAKQg2AehCAAg");
	this.shape_3.setTransform(-6.5,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PodCubePLogo, new cjs.Rectangle(-194,-187.5,381.5,381), null);


(lib.LASERSPARKLE = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","#1768DA"],[0,0.682],1,3.6,0,1,3.6,20.1).s().p("AhKBkQAyhQgpgmQBsBjAgi5QgKBOgSBCQAXAhAFAgQhLhphKBkg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#1768DA"],[0,0.682],-1.7,0,0,-1.7,0,20.1).s().p("AgeAiQgmAOgggDQB5gthNhiQA+BFAwgdQh7BOCqBPQhIgdg7gkg");
	this.shape_1.setTransform(0.525,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#1768DA"],[0,0.682],5.3,-3.4,0,5.3,-3.4,23.6).s().p("AhDgKQA6AEAfgUQAIARAmgKQgVAOgKAgIgQABQgVgchDgKg");
	this.shape_2.setTransform(-0.125,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#1768DA"],[0,0.682],2.5,-7.8,0,2.5,-7.8,23.6).s().p("AgHgQIAPgBQgFAQgCATQABgTgJgPg");
	this.shape_3.setTransform(-2.8125,6.4125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-10.5,20.299999999999997,21);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(23,104,218,0.067)","rgba(23,104,218,0)"],[0,0.361],-397.7,-0.2,0,-397.7,-0.2,843.1).s().p("EhCtAENQibiXAAh6QAAj3JjiPUAOXgDZByXgE/IAAdFUiAkgDUgHSgHCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-442.5,-93,885.1,186.1);


(lib.HoleMask = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1D").s().p("ApcQ0QilAAh+h1Qh9h1gLimIhg2UQgJiIBIhnQBkhUCMAAIWVAAQClAAB9B1QB+B1ALCmIBgWUQAJCIhIBnQhkBUiMAAg");
	this.shape.setTransform(-3.475,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(29,29,29,0.749)").s().p("AQlNCIhg2VQgLilh+h1Qh8h1imAAI2VAAQiMgBhkBVQAQgXATgWQBShXBxgWQAngHApgBIWVAAQAqABAoAHQBzAWBdBXQB+B2ALCmIBgWUQALClhuB2QgQARgSAPQBIhmgJiIg");
	this.shape_1.setTransform(3.2002,-4.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HoleMask, new cjs.Rectangle(-116.3,-111.5,232.7,223), null);


(lib.BTNSMSQFLOATERTOP = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","#D4D4D4"],[0.231,1],41,-60.6,0,41,-60.6,209.4).s().p("Ap/RbQilAAh+h2Qh9h1gLilIhg2VQgLilBth2QBuh1ClAAIWVAAQClAAB9B1QB+B2ALClIBgWVQALClhuB1QhtB2ilAAg");
	this.shape.setTransform(0.0248,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BTNSMSQFLOATERTOP, new cjs.Rectangle(-116.3,-111.5,232.7,223), null);


(lib.BTNSMSQFLOATERBOTTOM = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#282828","#454545"],[0,1],41,-78.6,0,41,-78.6,223.8).s().p("Ap/RbQilAAh+h2Qh9h1gLilIhg2VQgLilBth2QBuh1ClAAIWVAAQClAAB9B1QB+B2ALClIBgWVQALClhuB1QhtB2ilAAg");
	this.shape.setTransform(-0.0252,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BTNSMSQFLOATERBOTTOM, new cjs.Rectangle(-116.4,-111.5,232.8,223), null);


(lib.LASERSM = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#3C3C3C","#1E1E1E","#303030"],[0,0.529,1],-0.2,-11.1,0.4,19.9).s().p("AgSBzQgagWgEghIgOhtQgEghAVgZQAUgYAggCIAZgCIAgENIgXABIgGABQgeAAgXgVg");
	this.shape.setTransform(49.3423,8.0583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#1E1E1E","#303030"],[0,0.529,1],-0.6,-9.6,1.1,24.1).s().p("AgSB0QgagXgFggIgNhuQgEghAUgZQAVgYAggCIAYgCIAhENIgYABIgGABQgdAAgXgUg");
	this.shape_1.setTransform(44.6173,-31.8915);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191919").s().p("AlIgDIJZgiIARgCQAZgFAOgPIgqA2QgKAMgLAIQgRAMgeACIofAfg");
	this.shape_2.setTransform(21.7625,36.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AlnmVIIlgfQBFgEARA7IgYABQghACgVAZQgUAZAEAhIANBuQAFAhAaAWQAaAWAhgCIAYgCIAPCBIgZACQghACgUAYQgVAZAEAhIAOBuQAEAhAaAWQAbAWAhgCIAXgBIADAgQAFAogSAVIAAABIgBABQgNAOgaAFIgRACIpYAig");
	this.shape_3.setTransform(20.1168,-7.2128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.LASERSPARKLE();
	this.instance.setTransform(56.7,-2.3,2.0095,2.0095,0,135.0009,-44.9991,0.1,-0.1);
	this.instance.alpha = 0.4609;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LASERSM, new cjs.Rectangle(-15.9,-50.9,98,93.8), null);


(lib.BTNLASERTEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ANOIXIgKgYMAx3AAAIAJAZgEg5YAIXIgIgZMA/4AAAIAKAZgEA9uAHqIgJgYIBHAAIAJAYgEAvXAHqIgKgYIKPAAIAKAYgEg5oAHpIgIgZMBlDAACIAJAYgA5rG8IgKgZMBYSAABIAIAZgEglkAG8IgKgZIH+AAIAKAZgEg53AG8IgIgZINvAAIAKAZgEA3eAGQIgKgZIG6AAIAIAZgEg6GAGOIgJgYMBjQAABIAKAZgEg6WAFhIgIgZMB4cAABIAIAZgEAmeAE1IgJgZIXaAAIAIAZgAFME0IgKgZIcmABIAJAZgAg7E0IgKgZID1AAIAKAZgEg6lAE0IgJgZMAsoAAAIAKAZgEg60AEGIgJgZMB4cAACIAJAZgEA5QADaIgJgZIEJAAIAIAZgEg7EADZIgIgZMBr1AABIAJAZgEg7TACsIgJgZMB4cAABIAJAZgEAp5AB/IgJgZITBABIAJAYgAWRB/IgKgZILCAAIAKAZgA5MB/IgJgZMAnsAAAIAKAZgEg7jAB+IgIgZIcvABIAJAZgEg7yABRIgIgZMB4cAABIAIAZgEA40AAlIgJgZIDoAAIAIAZgEg8CAAkIgIgZMBxNAABIAJAZgEg8agAjMAyXAAAIAJAZMgyXAAAgAjXgjMA/ZgABIAIAZMg/YAAAgEgo0gBQMBkmgABIAJAYMhklAACgEg20gA3IgJgZIKPAAIAJAZgEg8hgA3IgIgZIBjAAIAKAZgEg84gB+MBYpAAAIAJAYMhYqAABgEAuMgB+INXgBIAJAZItXAAgAf1hmIgJgYIH+AAIAJAYgEgnmgCrMBi6gABIAIAZMhi6AABgEg9AgCSIgIgZIHPAAIAIAZgEg9YgDYMB4cgACIAJAZMh4cAACgEghSgEGIcmAAIAJAZI8lAAgEg9egDtIgJgZIXoAAIAKAZgAOckGMAsZgABIAIAZMgsZAABgAiSjtIgIgZID1AAIAIAZgEg92gEzMB4cgABIAIAZMh4bAABgEgxXgFgMBrtgACIAIAZMhrsAABgEg99gFIIgIgYIEQAAIAJAYgEg+VgGOMB4cgABIAIAZMh4bAABgEg+kgG7ITBAAIAKAYIzDABgAwKm8MAnrAAAIAKAZMgnsAAAgEgizgGjIgJgYILCgBIAJAZgAdIm8IcvAAIAJAZI8uAAgEg+zgHpMB4bgABIAJAZMh4cAABgEg37gIWMBxUgABIAIAZMhxSAABgEg+7gH9IgIgZIDhAAIAJAZg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg5sAH+MAx3AAAIAHAZMgx2AAAgAhJH9MA/4AAAIAIAZMg/5AAAgEgmhAHRMBlCgABIAIAYMhlDAACgEg0jAHqIgHgZIKPAAIAHAZgEg5yAHqIgIgZIBHAAIAHAZgEg6IAGjMBYQAAAIAHAYMhYPAABgEAwkAGjINvgBIAIAZItxAAgEAiKAG7IgHgYIH+AAIAHAYgEglKAF2MBjPgABIAIAZMhjRAABgEg6PAGPIgIgZIG6AAIAGAZgEg6lAFJMB4bgABIAIAZMh4bAABgA+tEbIcmAAIAHAZI8mAAgEg6sAE0IgIgYIXagBIAHAZgARBEbMAsngABIAIAZMgspAABgAAQE0IgGgZID2AAIAGAZgEg7CADuMB4cgABIAHAZMh4bAABgEgupADBMBr0gABIAIAZMhr1AABgEg7IADaIgIgZIEJAAIAHAZgEg7eACUMB4bgABIAIAYMh4bAACgEg7tABmITCAAIAGAZIzAAAgAtTBmMAnsAAAIAHAYMgnsAABgA/+B/IgHgZILCAAIAHAZgEAgAABmIcvgBIAIAZI8wAAgEg77AA5MB4bgABIAIAZMh4bAABgEg06AAMMBxMgABIAIAZMhxNAABgEg8CAAlIgIgZIDoAAIAHAZgAJ0gKIgHgZMAyWAAAIAIAZgEg8RgALIgIgZMA/aAABIAGAYgEA6ZgA3IgHgZIBjAAIAIAZgEAsBgA3IgHgZIKPAAIAHAZgEg8fgA4IgIgZMBknAABIAHAZgA88hlIgHgZMBYqAABIAIAYgEgo1gBlIgHgZIH+AAIAHAZgEg8ugBmIgIgZINXABIAIAZgEA0RgCSIgHgZIHPAAIAHAZgEg88gCTIgIgZMBi7AABIAHAZgEg9KgDAIgIgZMB4cAABIAIAZgEAjbgDsIgHgaIXoABIAIAZgACIjtIgHgZIcmAAIAHAagAj+jtIgIgZID2AAIAIAZgEg9ZgDuIgHgYMAsZAAAIAIAZgEg9ngEbIgIgZMB4cAABIAIAZgEA2WgFHIgHgZIEQAAIAIAZgEg91gFIIgIgZMBruAABIAHAZgEg+EgF1IgIgZMB4dAABIAIAZgEAnIgGiIgHgZITCABIAHAYgATfmiIgHgZILCAAIAHAZgA79miIgHgZMAnsAAAIAHAZgEg+SgGjIgIgZIcvABIAHAZgEg+ggHQIgIgZMB4cAABIAIAZgEA2MgH8IgHgZIDhAAIAIAZgEg+vgH9IgHgZMBxTAABIAHAZg");
	var mask_graphics_2 = new cjs.Graphics().p("EgycAIWIgHgZMBxTAABIAHAZgEg5lAIWIgIgZIDiAAIAHAZgEg5zAHpIgIgZMB4cAABIAIAZgEAhsAG8IgHgZIcuABIAIAZgArnG8IgHgZMAnsAAAIAHAZgA+aG8IgGgZILCAAIAHAZgEg6CAG7IgHgYITCAAIAHAZgEg6QAGOIgIgZMB4dAABIAIAZgEgtwAFhIgHgZMBrtAABIAIAZgEg6eAFhIgIgZIERAAIAHAZgEg6sAE0IgIgZMB4cAABIAIAZgARIEHIgIgZMAsaAABIAHAYgAAREHIgIgZID2AAIAIAZgA+mEHIgHgaIcmABIAHAZgEg67AEGIgIgZIXpAAIAHAagEg7JADZIgIgZMB4cAABIAIAZgEgl2ACsIgHgZMBi6AABIAIAZgEg7YACsIgHgZIHPAAIAHAZgEAvgAB/IgIgZINXABIAIAZgEAg/AB/IgHgZIH+AAIAHAZgEg7mAB+IgIgYMBYrAAAIAHAZgEgn/ABRIgHgZMBkmAABIAIAZgEg2IABRIgHgZIKPAAIAHAZgEg70ABRIgIgZIBkAAIAHAZgAjAAkIgHgYMA/ZAAAIAIAZgEg8CAAkIgIgZMAyXAAAIAHAZgEg8ZgAjMBxNgABIAHAZMhxMAABgEA4jgALIgHgZIDnAAIAIAZgEg8ngBQMB4bgABIAIAZMh4bAABgEg82gB9IcwAAIAHAYI8vABgA6fh9MAnsgABIAHAZMgnsAAAgAU9h+ILCAAIAHAZIrCAAgEAomgB+ITAAAIAIAZIzCAAgEg9EgCqMB4bgACIAIAZMh4bAABgEg9SgDYMBr1gABIAHAZMhr0AABgEA3IgDAIgHgZIEIAAIAIAZgEg9ggEFMB4bgABIAIAZMh4cAABgEg9vgEyMAspgABIAGAZMgsnAABgACBkzIcmAAIAHAZI8mAAgAj/kaIgGgZID2AAIAGAZgEAjUgEzIXZAAIAIAYI3aABgEg99gFgMB4bgABIAIAZMh4bAABgEg+MgGNMBjRgABIAGAZMhjPAABgEAzegF1IgGgZIG4AAIAIAZgEg+agG6INxAAIAGAYItvABgA+Om6MBYPgABIAIAZMhYQAAAgEgqAgGiIgHgYIH+AAIAHAYgEg+ogHnMBlDgACIAHAZMhlCAABgEA40gHQIgHgZIBGAAIAIAZgEAqcgHQIgHgZIKPAAIAHAZgEg+2gIVMA/5AAAIAHAZMg/4AAAgAHvoWMAx2AAAIAIAZMgx3AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg5iAH+MBxSgABIAJAZMhxTAABgEA7hAIWIgJgZIDiAAIAIAZgEg5xAHRMB4bgABIAJAZMh4cAABgEg6AAGkIcugBIAJAZI8vABgA3rGjMAnrAAAIAJAZMgnrAAAgAXwGjILCAAIAKAZIrDAAgEArZAGjITCAAIAJAYIzCABgEg6QAF2MB4cgABIAJAZMh4cAABgEg6fAFJMBrtgABIAJAZMhrtAABgEA51AFhIgKgZIESAAIAIAZgEg6uAEcMB4bgABIAJAZMh4cAABgEg69ADvMAsZgABIAIAZMgsZAAAgAEjDuIclgBIAKAaI8mAAgAhbEHIgIgZID1AAIAIAZgEAl1ADtIXpAAIAJAZI3oABgEg7NADBMB4cgABIAJAZMh4cAABgEg7cACUMBi6gABIAJAZMhi6AABgEA16ACsIgJgZIHPAAIAIAZgEg7rABnINWgBIAJAZItXABgA75BmMBYqAAAIAIAYMhYpAABgEgnpAB/IgJgZIH+AAIAJAZgEg76AA5MBklgABIAJAZMhkmAABgEA7GABRIgJgZIBlAAIAIAZgEAsvABRIgJgZIKPAAIAJAZgEg8JAAMMA/YAAAIAJAYMg/ZAABgAJ7ALMAyXAAAIAIAZMgyWAAAgEg1CgALIgJgZMBxOAABIAIAZgEg8RgALIgJgZIDnAAIAKAZgEg8ggA4IgJgZMB4cAABIAJAZgAe9hlIgJgYIcwAAIAJAZgAuVhlIgKgZMAnsAABIAJAYgEghIgBlIgJgZILCAAIAKAZgEg8wgBlIgIgZITAAAIAKAZgEg8/gCTIgIgZMB4cAACIAIAYgEgwngDAIgKgZMBr3AABIAIAZgEg9OgDAIgJgZIEJAAIAJAZgEg9dgDtIgJgZMB4cAABIAJAZgAOIkaIgKgZMAspAABIAJAZgAiukaIgKgZID1AAIAKAZgEghmgEaIgJgZIcmAAIAJAZgEg9tgEbIgIgYIXZAAIAJAZgEg98gFIIgIgZMB4cAABIAIAZgEgo/gF1IgJgZMBjRAABIAIAZgEg+LgF1IgIgZIG4AAIAJAZgEAsTgGiIgKgYINwAAIAJAZgAdymiIgKgYIH+AAIAKAYgEg+agGiIgIgZMBYPAABIAKAYgEgrQgHQIgJgZMBlEAACIAIAYgEg5agHQIgJgZIKPAAIAJAZgEg+qgHQIgIgZIBHAAIAJAZgAmVn8IgKgZMA/6AAAIAIAZgEg+5gH9IgIgZMAx2AAAIAKAZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-73.8026,y:3.65}).wait(1).to({graphics:mask_graphics_1,x:-73.8705,y:3.65}).wait(1).to({graphics:mask_graphics_2,x:-74.0295,y:3.85}).wait(1).to({graphics:mask_graphics_3,x:-73.7472,y:3.85}).wait(1));

	// TEXT
	this.Field = new cjs.Text("TRANSMISSIONS", "normal 700 96px 'Pixelify Sans'", "#117BD6");
	this.Field.name = "Field";
	this.Field.textAlign = "center";
	this.Field.lineHeight = 116;
	this.Field.lineWidth = 762;
	this.Field.parent = this;
	this.Field.setTransform(-89.2706,-51.7,0.9865,1.3023,0,-17.0666,0);
	if(!lib.properties.webfonts['Pixelify Sans']) {
		lib.webFontTxtInst['Pixelify Sans'] = lib.webFontTxtInst['Pixelify Sans'] || [];
		lib.webFontTxtInst['Pixelify Sans'].push(this.Field);
	}

	var maskedShapeInstanceList = [this.Field];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Field).wait(4));

	// haze
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-506.7,3.3,1,1,-1.9929,0,0,-448.3,0.6);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-511.85,7.45,1,1,3.2277,0,0,-448.3,0.6);

	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(-63.9,2.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-506.4,-121.3,893.3,271.2);


(lib.BTNLASER = function(mode,startPosition,loop,reversed) {
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
	this.Label = new lib.BTNLASERTEXT();
	this.Label.name = "Label";
	this.Label.setTransform(88.4,-44,1.4354,1.4358,0,-1.333,0.039,0.1,0.1);

	this.Clone = new lib.BTNLASERTEXT();
	this.Clone.name = "Clone";
	this.Clone.setTransform(88.4,-44,1.4354,1.4358,0,-1.333,0.039,0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,104,218,0.969)").s().p("Eg7NAT0IAAjRMgq6AAAMAAAgkXMAmPAAAIAALrIKvAAIAAEMMCbRAAAIAAXxg");
	this.shape.setTransform(-235.7125,-58.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Label,p:{regX:0.1,regY:0.1,skewX:-1.333,skewY:0.039,x:88.4,y:-44}}]}).to({state:[{t:this.Label,p:{regX:0.1,regY:0.1,skewX:-1.333,skewY:0.039,x:88.4,y:-44}},{t:this.Clone,p:{regX:0.1,regY:0.1,skewX:-1.333,skewY:0.039,x:88.4,y:-44}}]},1).to({state:[{t:this.Label,p:{regX:-495.9,regY:0.3,skewX:-0.6254,skewY:0.7462,x:-623.6,y:-44.2}},{t:this.Clone,p:{regX:-493.6,regY:7.7,skewX:-2.1073,skewY:-0.7352,x:-620.1,y:-33.55}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-889.3,-234.7,1535.9,421.5);


(lib.BTNSMSQ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ASCENCE:0,hoverLoop:16,DESENCE:75};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.up = true;
		this.wasClicked = false;
		
		
		BTN.push(this);
	}
	this.frame_74 = function() {
		var _this = this;
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('hoverLoop');
	}
	this.frame_80 = function() {
		if (this.wasClicked) {
			console.log(this.name);
			this.up = false;
			this.dispatchEvent(
				new CustomEvent("btn_complete", {
					bubbles: true,
					detail: {
						nav: this.name
					},
				})
			);
		}
	}
	this.frame_90 = function() {
		this.stop()
		this.up = false;
		this.wasClicked = false;
		this.dispatchEvent(
			new CustomEvent("btn_down", {
				bubbles: true,
			})
		);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(6).call(this.frame_80).wait(10).call(this.frame_90).wait(1));

	// FL_TOP
	this.instance = new lib.BTNSMSQFLOATERTOP();
	this.instance.setTransform(13.2,3.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).to({x:52.5,y:-59.85},5).to({x:61.95,y:-88.15},4).to({x:66.3,y:-100.35},5).to({x:63.3,y:-116.15},26).to({x:66.3,y:-100.35},33).to({x:71.95,y:-101.75},3).to({x:61.5,y:-90.75},3).to({x:13.2,y:3.6},5).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(1));

	// FL_LASER
	this.instance_1 = new lib.LASERSM();
	this.instance_1.setTransform(63.35,5.4,1,1,3.247,0,0,0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:96.45,y:-50.25},5).to({x:147.25,y:-73.8},4).to({x:135,y:-82.55},2).to({x:148.1,y:-87.25},3).to({x:145.1,y:-103.05},26).to({x:148.1,y:-87.25},33).to({x:153.75,y:-88.65},3).to({x:107.3,y:-77.65},3).to({x:22.95,y:-7.75},5).to({_off:true},1).wait(4));

	// TEXT
	this.BTN = new lib.BTNLASER();
	this.BTN.name = "BTN";
	this.BTN.setTransform(836.85,-16.75,1,1,0,0,0,-0.4,0);
	this.BTN._off = true;
	new cjs.ButtonHelper(this.BTN, 0, 1, 2, false, new lib.BTNLASER(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(16).to({_off:false},0).to({x:848.45,y:-30.45},26).to({x:836.85,y:-16.75},33).to({_off:true},1).wait(15));

	// FL_BOT
	this.instance_2 = new lib.BTNSMSQFLOATERBOTTOM();
	this.instance_2.setTransform(13.25,3.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:16.75,y:-5.2},2).to({x:45.2,y:-51.1},3).to({x:53.3,y:-77.95},4).to({x:56.65,y:-89.05},5).to({x:54.65,y:-105.85},26).to({x:56.65,y:-89.05},33).to({x:62.3,y:-90.45},3).to({x:51.85,y:-79.45},3).to({x:13.25,y:3.6},5).to({_off:true},1).wait(4));

	// HOLE
	this.instance_3 = new lib.HoleMask();
	this.instance_3.setTransform(13.2,3.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(14).to({_off:true},71).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-265.1,1598.5,435.20000000000005);


// stage content:
(lib.PodCubeSitev2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {MAIN_MENU:0,TRANSMISSIONS:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9,10];
	// timeline functions:
	this.frame_0 = function() {
		window.BTN = []; //array that all buttons autojoin
	}
	this.frame_9 = function() {
		this.stop();
		
		var _this = this;
		var nav = '';
		
		_this.addEventListener("btn_complete", (e) => {
			nav = e.detail.nav;
			BTN.forEach(closeButtons);
		});
		
		_this.addEventListener("btn_down", (e) => {
			console.log('down');
			
			if (checkClear) {
					this.gotoAndPlay(nav);
				};
		});
		
		function checkClear(btn) {
			for (i=0;i<BTN.length;i++){
				if (BTN[i].up == true){
					return false;
				}
			};
			return true;
		}
		
		BTN.forEach(el => el.addEventListener("click", (e) => {
			doButton(el);
		}));
		
		BTN.forEach(el =>
			MakeLabel(el, el.name));
		
		
		function doButton(btn) {
			btn.wasClicked = true;
			btn.navTarget = btn.name;
			btn.gotoAndPlay('DESENCE');
		
		};
		
		
		function closeButtons(btn) {
			if (btn.up == true) {
				btn.gotoAndPlay('DESENCE');
			};
		};
		
		function MakeLabel(ele, txt) {
		
			ele.BTN.Label.Field.text = txt;
			ele.BTN.Clone.Field.text = txt;
		};
		
		
		/*
		_this.B_Trans.BTN.on('click', function () {
				_this.B_Trans.wasClicked = true;
				_this.B_Trans.gotoAndPlay('DESENCE');
		
		});
		
		_this.B_About.BTN.on('click', function () {
				_this.B_About.wasClicked = true;
				_this.B_About.gotoAndPlay('DESENCE');
		});
		
		*/
	}
	this.frame_10 = function() {
		this.stop();
		var _this = this;
		
		var nav = '';
		
		_this.addEventListener("btn_complete", (e) => {
			nav = e.detail.nav;
			BTN.forEach(closeButtons);
		});
		
		_this.addEventListener("btn_down", (e) => {
			console.log('down');
			
			if (checkClear) {
					this.gotoAndPlay(nav);
				};
		});
		
		function checkClear(btn) {
			for (i=0;i<BTN.length;i++){
				if (BTN[i].up == true){
					return false;
				}
			};
			return true;
		}
		
		BTN.forEach(el => el.addEventListener("click", (e) => {
			doButton(el);
		}));
		
		BTN.forEach(el =>
			MakeLabel(el, el.name));
		
		
		function doButton(btn) {
			btn.wasClicked = true;
			btn.navTarget = btn.name;
			btn.gotoAndPlay('DESENCE');
		
		};
		
		
		function closeButtons(btn) {
			if (btn.up == true) {
				btn.gotoAndPlay('DESENCE');
			};
		};
		
		function MakeLabel(ele, txt) {
		
			ele.BTN.Label.Field.text = txt;
			ele.BTN.Clone.Field.text = txt;
		};
		
		
		/*
		_this.B_Trans.BTN.on('click', function () {
				_this.B_Trans.wasClicked = true;
				_this.B_Trans.gotoAndPlay('DESENCE');
		
		});
		
		_this.B_About.BTN.on('click', function () {
				_this.B_About.wasClicked = true;
				_this.B_About.gotoAndPlay('DESENCE');
		});
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(18));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1768DA").s().p("AiJD/IBdjGIick3IBrAAIBjDWIBijWIBhAAIjtH9g");
	this.shape.setTransform(1341.1,418.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1768DA").s().p("AhbCcQgmgYgWgpQgXgpgBgxQABgyAXgoQAXgpAmgZQAmgXAvgBQAPAAAQAEQARAEAOAHQAOAIAIAIIAAgYIBhAAIAAFZIhhAAIAAgZQgIAKgOAIQgOAHgQADQgRAFgPAAQgwgBgmgYgAgkhHQgSAKgLATQgLATAAAYQAAAZALASQALATASALQASAKAWAAQAigBAWgXQAWgWABglQgBgkgWgXQgWgYgiAAQgWAAgSALg");
	this.shape_1.setTransform(1300.425,410.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1768DA").s().p("AhbDqQgmgYgWgpQgXgogBgyQABgzAXgnQAXgpAmgYQAmgYAvgBQAPAAAQAFQARAEAOAHQAOAHAIAIIAAi8IBhAAIAAH9IhhAAIAAgYQgIAKgOAHQgOAHgQAEQgRAEgPAAQgwgBgmgYgAgkAGQgSALgLASQgLATAAAZQAAAZALASQALATASALQASAKAWAAQAiAAAWgXQAWgWABgmQgBglgWgXQgWgWgigBQgWAAgSAKg");
	this.shape_2.setTransform(1259.925,402.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1768DA").s().p("AhiCxIAAlZIBhAAIAAAYQAQgRAUgHQATgIAVAAIALABIANABIAABkIgPgDIgQgBQgdAAgUAVQgTAUgBApIAACtg");
	this.shape_3.setTransform(1229.6,409.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1768DA").s().p("AhSCcQgrgYgZgpQgYgpgBgxQABgyAXgoQAYgpApgZQAogXAygBQArAAAiARQAkARAYAbQAYAcALAgIjACKQAGACAIACIAOAAQAWAAAUgIQAUgJANgSIBNA8QgPAWgYAQQgYAQgdAJQgdAIgfABQgzgBgrgYgAgkhHQgTAKgKATQgLATAAAYIABALIABALIB+hZQgLgHgMgEQgLgFgOAAQgWAAgSALg");
	this.shape_4.setTransform(1197.25,410.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1768DA").s().p("AAWDYQgngTgXgiQgWgigBgtIAAhwIg0AAIAAhaIA0AAIAAgtIBhhGIAABzIBSAAIAABaIhSAAIAABuQAAAcAXAOQAWAOAjAAIAABhQg0AAgogTg");
	this.shape_5.setTransform(1165.125,404.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1768DA").s().p("AhJCnQgdgNgXgZIBSg8QAIAIAJAEQAJADAMAAQAMAAAGgHQAHgGAAgLQAAgJgHgIQgIgGgPgDQgwgHgdgcQgegdgBgtQABgeASgYQARgXAagOQAagNAaAAQAhAAAZANQAaAOASAbIhFAyQgHgGgIgEQgHgEgJAAQgKAAgFAFQgFAFAAAIQgBAIAIAFQAIAGAVACQAgAEAZAOQAZANAPAWQAOAXABAkQgBAkgRAaQgSAbgdAPQgeAPglAAQgmAAgdgOg");
	this.shape_6.setTransform(1138.925,410.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1768DA").s().p("AhSCcQgrgYgYgpQgZgpgBgxQABgyAYgoQAXgpApgZQAogXAygBQArAAAiARQAkARAYAbQAYAcALAgIjACKQAGACAIACIAOAAQAWAAAUgIQAUgJAMgSIBOA8QgPAWgYAQQgYAQgdAJQgdAIgfABQgzgBgrgYgAgkhHQgTAKgKATQgLATAAAYIABALIABALIB9hZQgKgHgLgEQgMgFgOAAQgWAAgSALg");
	this.shape_7.setTransform(1106.45,410.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1768DA").s().p("AgwD/IAAibIjZliIB6AAICUD6ICVj6IBvAAIjQFZIAACkg");
	this.shape_8.setTransform(1060.75,401.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1768DA").s().p("AhJCnQgdgNgXgZIBSg8QAIAIAJAEQAJADAMAAQAMAAAGgHQAHgGAAgLQAAgJgHgIQgIgGgPgDQgwgHgdgcQgegdgBgtQABgeASgYQARgXAagOQAagNAaAAQAhAAAZANQAaAOASAbIhFAyQgHgGgIgEQgHgEgJAAQgKAAgFAFQgFAFAAAIQgBAIAIAFQAIAGAVACQAgAEAZAOQAZANAPAWQAOAXABAkQgBAkgRAaQgSAbgdAPQgeAPglAAQgmAAgdgOg");
	this.shape_9.setTransform(991.725,410.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1768DA").s().p("AgwECIAAlZIBgAAIAAFZgAgnikQgRgQAAgYQAAgUARgRQAQgPAXgBQAYABAQAPQAQAQABAVQgBAYgQAQQgQAPgYABQgXgBgQgPg");
	this.shape_10.setTransform(970.025,401.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1768DA").s().p("AhNBOIAuibIBtAAIhfCbg");
	this.shape_11.setTransform(922.425,430.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1768DA").s().p("AhSCcQgrgYgZgpQgYgpgBgxQABgyAXgoQAZgpAogZQAogXAxgBQArAAAkARQAjARAYAbQAYAcALAgIjACKQAHACAHACIANAAQAYAAATgIQAUgJANgSIBNA8QgPAWgYAQQgXAQgeAJQgdAIggABQgzgBgqgYgAgkhHQgSAKgLATQgLATAAAYIAAALIADALIB9hZQgLgHgMgEQgMgFgOAAQgVAAgSALg");
	this.shape_12.setTransform(894.55,410.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1768DA").s().p("AhiCxIAAlZIBhAAIAAAYQAQgRATgHQAVgIAUAAIAMABIAMABIAABkIgPgDIgQgBQgdAAgUAVQgTAUgBApIAACtg");
	this.shape_13.setTransform(864.25,409.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1768DA").s().p("AhjCZQgjgXgTgoQgUgnAAgwIAAizIBhAAIAACsQABAmAUAWQAUAXAeABQAVAAATgIQATgIAMgTQALgSABgfIAAisIBgAAIAAFZIhgAAIAAgZQgLAMgQAGQgQAIgSADQgSAEgRAAQgugBgjgXg");
	this.shape_14.setTransform(830.125,410.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1768DA").s().p("AAWDYQgngTgXgiQgWgigBgtIAAhwIg0AAIAAhaIA0AAIAAgtIBhhGIAABzIBSAAIAABaIhSAAIAABuQAAAcAXAOQAWAOAjAAIAABhQg0AAgogTg");
	this.shape_15.setTransform(797.175,404.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1768DA").s().p("AhjCZQgjgXgTgoQgUgnAAgwIAAizIBhAAIAACsQABAmAUAWQAUAXAeABQAVAAATgIQATgIAMgTQALgSABgfIAAisIBgAAIAAFZIhgAAIAAgZQgLAMgQAGQgQAIgSADQgSAEgRAAQgugBgjgXg");
	this.shape_16.setTransform(764.225,410.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1768DA").s().p("AiUD/IAAn9IEOAAIAABgIikAAIAABfIC/AAIAABeIi/AAIAADgg");
	this.shape_17.setTransform(726.925,401.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1768DA").s().p("AhSCcQgrgYgZgpQgYgpgBgxQABgyAXgoQAZgpAogZQAogXAxgBQAsAAAiARQAjARAZAbQAYAcALAgIjACKQAHACAHACIANAAQAXAAAUgIQAUgJANgSIBNA8QgPAWgYAQQgXAQgeAJQgdAIggABQgzgBgqgYgAgkhHQgSAKgLATQgLATAAAYIABALIACALIB9hZQgLgHgMgEQgMgFgOAAQgVAAgSALg");
	this.shape_18.setTransform(659.3,410.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1768DA").s().p("ABOD/IAAisQgBgqgUgVQgVgUgeAAQgVAAgTAKQgSAKgMATQgMATAAAZIAACsIhhAAIAAn9IBhAAIAAC9QAJgLAQgIQAPgGASgEQARgDAPAAQAwABAkAXQAkAZAUApQAUAnAAAzIAACsg");
	this.shape_19.setTransform(619.375,401.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1768DA").s().p("Ag4D/IAAmdIh+AAIAAhgIFtAAIAABgIiGAAIAAGdg");
	this.shape_20.setTransform(578.9,401.85);

	this.text = new cjs.Text("PodCube", "bold 96px 'Advent Pro'", "#1768DA");
	this.text.textAlign = "center";
	this.text.lineHeight = 117;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(960,94,2.4614,2.4614);

	this.instance = new lib.PodCubePLogo();
	this.instance.setTransform(259.5,258.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},12).wait(16));

	// Layer_2
	this.LORE = new lib.BTNSMSQ2();
	this.LORE.name = "LORE";
	this.LORE.setTransform(299.55,1388.4,1,1,0,0,0,13.2,3.6);

	this.TRANSMISSIONS = new lib.BTNSMSQ2();
	this.TRANSMISSIONS.name = "TRANSMISSIONS";
	this.TRANSMISSIONS.setTransform(286.35,709.7);

	this.MAIN_MENU = new lib.BTNSMSQ2();
	this.MAIN_MENU.name = "MAIN_MENU";
	this.MAIN_MENU.setTransform(647.75,1072.1,1,1,0,0,0,13.2,3.6);

	this.text_1 = new cjs.Text("FUK", "bold 96px 'Advent Pro'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 117;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(1099.75,609.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.TRANSMISSIONS},{t:this.LORE}]},4).to({state:[{t:this.text_1},{t:this.MAIN_MENU}]},6).to({state:[]},2).wait(16));

	// Layer_3
	this.ABOUT = new lib.BTNSMSQ2();
	this.ABOUT.name = "ABOUT";
	this.ABOUT.setTransform(286.35,1726.05);

	this.PREMIUM = new lib.BTNSMSQ2();
	this.PREMIUM.name = "PREMIUM";
	this.PREMIUM.setTransform(299.55,1049.75,1,1,0,0,0,13.2,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.PREMIUM},{t:this.ABOUT}]},8).to({state:[]},2).to({state:[]},2).wait(16));

	// Layer_4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#EEEEEF"],[0,0.243],296.3,-152.6,0,296.3,-152.6,1678.2).s().p("EiV/CWAMAAAkr/MEr/AAAMAAAEr/g");
	this.shape_21.setTransform(960.025,960.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(10).to({_off:true},2).wait(16));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920.1,1920.1);
// library properties:
lib.properties = {
	id: '46A5D1D197A275448B5D0C6F2A17AD0E',
	width: 1920,
	height: 1920,
	fps: 24,
	color: "#EEEEEF",
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