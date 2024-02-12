
// THE STAGE is _this
const lib = _lib; // LIBRARY CONSTRUCTOR
createjs.Touch.enable(stage);



// okay.
// #endregion




function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}


// #region RSS_FEED_PARSER
/*
==============================================
============== NOTES  ==========================
================================================

    - SHOULD PARSE MARKDOWN LINKS in descriptions

===============================================*/

const RSS_URL = "https://pinecast.com/feed/pc";
Transmissions = []

//define constructor for episode
function Episode(item) {

    // UNMODIFIED PROPERTIES
    this.guid = item.querySelector("guid").innerHTML || null;
    this.pubdate = new Date(item.querySelector("pubDate").innerHTML) || "Data Error";
    this.audio = item.querySelector("enclosure").getAttribute("url") || "Data Error";

    // ITEM DESCRIPTION FIELD
    var _d = item.querySelector("description").innerHTML;

    //MODIFIED PROPERTIES
    var _tit = item.querySelector("title").innerHTML || "Data Error";
    var _mod = lookFor(_d, "PODCUBE MODEL") || "Data Error";
    var _int = lookFor(_d, "INTEGRITY") || "Data Error";
    var _ori = lookFor(_d, "ORIGIN") || "Data Error";
    var _loc = lookFor(_d, "LOCALE") || "Data Error";
    var _reg = lookFor(_d, "REGION") || "Data Error";
    var _zon = lookFor(_d, "ZONE") || "Data Error";
    var _pla = lookFor(_d, "PLANET") || "Data Error";
    var _dat = lookFor(_d, "DATE") || "Data Error";
    var _tag = lookFor(_d, "TAGS") || "Data Error";

    //process date
    var _datParts = _dat.split("/")
    _dat = new Date(_datParts[2], _datParts[0] - 1, _datParts[1])

    //process title
    _titleSplit = _tit.split(/_(.+)/)[1]
    _tit = _titleSplit ? _titleSplit.replace(/_/g, " ") : _tit.replace(/_/g, " ")

    //process tags
    _tag = _tag.split(", ")

    //process integrity
    _int = parseFloat(_int)

    this.title = htmlDecode(_tit)
    this.model = htmlDecode(_mod)
    this.integrity = htmlDecode(_int)+"%"
    this.origin = htmlDecode(_ori)
    this.locale = htmlDecode(_loc)
    this.region = htmlDecode(_reg)
    this.zone = htmlDecode(_zon)
    this.planet = htmlDecode(_pla)
    this.date = _dat
    this.tags = _tag


    return this
}

function lookFor(desc, property) {
    var regex = ":: " + property + ": (.*)<\/p>"
    prop = desc.match(new RegExp(regex));
    if (prop == null) {
        return "NULL"
    } else { return prop[1] }
}

function getFeed() {
    fetch(RSS_URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            items.forEach(el => {
                Transmissions.push(new Episode(el))
            })
        })
        .then(ok => {
            loadView();
        })
}


getFeed();
// #endregion


const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

var control = _this.viewMask
var container = _this.viewMask.viewContainer

//DYNAMICALLY LOAD TRANSMISSIONS
var T_default = [];
var offY = 0; // Offset of each transmission, initialized to 0.
var scrollRate = 15 // the fuckin rate of teh scroll
var paddingY = 20 // Padding between transmissions
var lastY; // Variable to store the last Y position of the mouse
var velocity = 0; // Variable to store the velocity of the drag
var friction = 0.90; // Variable to store the friction (damping)
var scale = 0.5; // scale of child elements
var deadZone = 15;
var speedMod = 2;
var isMouseDown = false;


//mobile compensation (don't like this implementation... but *shrug*)
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var sensitivity = isMobile ? 0.4 : 0.6;

function loadView() {

    for (let i = 0; i < Transmissions.length; i++) {
        _e = new lib.T_2();
        _e.scaleX = container.scaleX
        _e.scaleY = container.scaleY
        _e.x = 0;
        _e.y = offY;
        offY = offY + (_e.nominalBounds.height * container.scaleY) + paddingY;

        _t = Transmissions[i]
        _e.episode = _t

        T_default.push(_e);
        container.addChild(_e);
    }

    //MSG.publish('T_loadEp')

    upperBoundary = container.y;
    lowerBoundary = (container.getBounds().height * container.scaleY) * -1;

    control.on("mousedown", function (e) {
        lastY = stage.mouseY / stage.scaleY; // Store the initial Y position of the mouse
        velocity = 0;
        isMouseDown = true;

    });

    control.on("pressmove", function (e) {
        var currentY = stage.mouseY / stage.scaleY; // Get the current Y position of the mouse
        var deltaY = currentY - lastY; // Calculate the change in Y position

        // Only update the velocity if the change in Y position is greater than the dead zone
        if (Math.abs(deltaY) > deadZone) {
            velocity = deltaY * speedMod; // Add the change in Y position to the velocity
        }

        lastY = currentY; // Update the last Y position

        container.y += deltaY
    });

    control.on('pressup', function (e) {

        isMouseDown = false;
    })

    createjs.Ticker.on("tick", doVelo);


}



function doVelo() {
    if (!isMouseDown) {
        container.y += velocity;
    }
    // Check if the viewContainer has moved beyond its boundaries
    if (container.y > upperBoundary) {
        container.y = upperBoundary;
        velocity = 0;
    } else if (container.y < lowerBoundary) {
        container.y = lowerBoundary;
        velocity = 0;
    }

    // Apply friction to the velocity
    velocity *= friction;

    // If the velocity is very small, set it to 0 to stop the movement
    if (Math.abs(velocity) < 0.03) {
        velocity = 0;
    }
}
