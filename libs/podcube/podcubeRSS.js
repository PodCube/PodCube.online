const RSS_URL = "https://pinecast.com/feed/pc";
const Transmissions = []

//define constructor for episode
function Episode(item) {

    this.guid = item.querySelector("guid").innerHTML || null;
    this.title = item.querySelector("title").innerHTML || "Data Error";
    this.pubdate = item.querySelector("pubDate").innerHTML || "Data Error";
    this.audio = item.querySelector("enclosure").getAttribute("url") || "Data Error";


    var _d = item.querySelector("description").innerHTML;

    var _mod = lookFor(_d, "PODCUBE MODEL") || "Data Error";
    var _int = lookFor(_d, "INTEGRITY") || "Data Error";
    var _ori = lookFor(_d, "ORIGIN") || "Data Error";
    var _loc = lookFor(_d, "LOCALE") || "Data Error";
    var _reg = lookFor(_d, "REGION") || "Data Error";
    var _zon = lookFor(_d, "ZONE") || "Data Error";
    var _pla = lookFor(_d, "PLANET") || "Data Error";
    var _dat = lookFor(_d, "DATE") || "Data Error";
    var _tag = lookFor(_d, "TAGS") || "Data Error";

    this.model = _mod
    this.integrity = _int
    this.origin = _ori
    this.locale = _loc
    this.region = _reg
    this.zone = _zon
    this.planet = _pla
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
            console.log(data);
            const items = data.querySelectorAll("item");
            items.forEach(el => {
                Transmissions.push(new Episode(el))
            })
        }
        );

    console.log(Transmissions);
}