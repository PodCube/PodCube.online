
// THE STAGE is _this
const lib = _lib; // LIBRARY CONSTRUCTOR
createjs.Touch.enable(stage);



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
    this.integrity = htmlDecode(_int)
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
            MSG.publish('feedReady',0);
        })
}


getFeed();
// #endregion


//SFX PLAYER

