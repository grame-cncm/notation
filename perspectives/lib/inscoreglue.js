var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// object types
var kArcType = "arc";
var kCurveType = "curve";
var kEllipseType = "ellipse";
var kGuidoCodeType = "gmn";
var kGuidoPianoRollType = "pianoroll";
var kFaustType = "faust";
var kFaustfType = "faustf";
var kHtmlType = "html";
var kImgType = "img";
var kLineType = "line";
var kPolygonType = "polygon";
var kRectType = "rect";
var kSvgfType = "svgf";
var kSvgType = "svg";
var kSyncType = "sync";
var kTextfType = "txtf";
var kTextType = "txt";
var kMusicxmlType = "musicxml";
var kVideoType = "video";
var kVerovioType = "verovio";
var kVeroviofType = "veroviof";
var kWebSocketType = "websocket";
var kInscore = "inscore";
var kInscore2 = "inscore2";
// events types
// const kMouseEnterID 	= 1;
// const kMouseLeaveID 	= 2;
// const kMouseDownID  	= 3;
// const kMouseUpID    	= 4;
// const kMouseMoveID  	= 5;
// const kMouseDClickID	= 6;
///<reference path="../src/lib/inscore.d.ts"/>
///<reference path="constants.ts"/>
var INScoreDiv = /** @class */ (function () {
    function INScoreDiv(div, version) {
        this.fDiv = div;
        this.fVersion = version;
    }
    return INScoreDiv;
}());
//----------------------------------------------------------------------------
var INScoreBase = /** @class */ (function () {
    function INScoreBase() {
        this.fExtHandlers = {};
        this.makeExtTable();
    }
    //------------------------------------------------------------------------
    // internals
    INScoreBase.prototype.makeExtTable = function () {
        this.fExtHandlers["txt"] = kTextType;
        this.fExtHandlers["text"] = kTextType;
        this.fExtHandlers["mei"] = kVerovioType;
        this.fExtHandlers["xml"] = kMusicxmlType;
        this.fExtHandlers["musicxml"] = kMusicxmlType;
        this.fExtHandlers["svg"] = kSvgType;
        this.fExtHandlers["html"] = kHtmlType;
        this.fExtHandlers["htm"] = kHtmlType;
        this.fExtHandlers["gmn"] = kGuidoCodeType;
        this.fExtHandlers["dsp"] = kFaustType;
        this.fExtHandlers["jpg"] = kImgType;
        this.fExtHandlers["jpeg"] = kImgType;
        this.fExtHandlers["gif"] = kImgType;
        this.fExtHandlers["png"] = kImgType;
        this.fExtHandlers["bmp"] = kImgType;
        this.fExtHandlers["tiff"] = kImgType;
        this.fExtHandlers["wmv"] = kVideoType;
        this.fExtHandlers["avi"] = kVideoType;
        this.fExtHandlers["mpg"] = kVideoType;
        this.fExtHandlers["mpeg"] = kVideoType;
        this.fExtHandlers["mp4"] = kVideoType;
        this.fExtHandlers["m4v"] = kVideoType;
        this.fExtHandlers["mov"] = kVideoType;
        this.fExtHandlers["vob"] = kVideoType;
        this.fExtHandlers["inscore"] = kInscore;
        this.fExtHandlers["inscore2"] = kInscore2;
    };
    INScoreBase.prototype.getSceneAddress = function (div) {
        var scene = div.id;
        return "/ITL/" + (scene ? scene : "scene");
    };
    INScoreBase.prototype.getInscoreDivs = function () {
        this.fDivs = new Array();
        var divs = document.getElementsByClassName("inscore");
        for (var i = 0; i < divs.length; i++)
            this.addInscoreDiv(divs[i], 1);
        divs = document.getElementsByClassName("inscore2");
        for (var i = 0; i < divs.length; i++)
            this.addInscoreDiv(divs[i], 2);
    };
    INScoreBase.prototype.addInscoreDiv = function (div, version) {
        this.fDivs.push(new INScoreDiv(div, version));
    };
    //------------------------------------------------------------------------
    // initialization
    INScoreBase.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        gGlue.start().then(function () { _this.initialise(); success(_this); });
                    })];
            });
        });
    };
    INScoreBase.prototype.initialise = function () {
        this.getInscoreDivs();
        for (var i = 0; i < this.fDivs.length; i++) {
            this.initDiv(this.fDivs[i].fDiv, this.fDivs[i].fVersion == 2);
            this.allowdrop(this.fDivs[i].fDiv);
        }
        this.watchResize();
    };
    //------------------------------------------------------------------------
    // inscore div initialization
    INScoreBase.prototype.initDiv = function (div, v2) {
        // do not post the message otherwise content will be loaded before the scene is created
        inscore.loadInscore(this.getSceneAddress(div) + " new;", false);
        var content = div.innerText;
        div.innerText = "";
        if (content.length) {
            this.loadInscore(content, v2);
        }
    };
    //------------------------------------------------------------------------
    // utilities
    INScoreBase.prototype.getFileProperties = function (file) {
        var ext = file.substring(file.lastIndexOf('.') + 1, file.length).toLocaleLowerCase();
        var name = file.substring(0, file.lastIndexOf('.'));
        return { name: name, ext: ext };
    };
    INScoreBase.prototype.loadInscore = function (content, v2) {
        if (v2)
            inscore.loadInscore2(content);
        else
            inscore.loadInscore(content, true);
    };
    //------------------------------------------------------------------------
    // load an inscore file - called when an inscore file is dropped
    INScoreBase.prototype.loadFromFile = function (content, v2, name) {
        this.loadInscore(content, v2);
    };
    //------------------------------------------------------------------------
    // load an inscore script - called when text is dropped
    INScoreBase.prototype.loadFromText = function (content, v2) {
        this.loadInscore(content, v2);
    };
    //------------------------------------------------------------------------
    // load an inscore file
    INScoreBase.prototype.fetchInscore = function (file, v2) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = function (event) { _this.loadFromFile(reader.result.toString(), v2, file.name); };
    };
    //------------------------------------------------------------------------
    // build a receivable name for an INScore object
    INScoreBase.prototype.fileName2InscoreName = function (name) {
        var myRegex = /^[a-zA-Z-_][-_a-zA-Z0-9]+$/.test(name);
        if (!myRegex) {
            var first = name[0];
            var myRegex_1 = /^[0-9]$/.test(first);
            if (myRegex_1) {
                name = '_' + name;
            }
            for (var i = 1; i < name.length; i++) {
                var myRegex_2 = /^[-_a-zA-Z0-9]$/.test(name[i]);
                if (!myRegex_2) {
                    name = name.replace(name[i], "_");
                }
            }
        }
        return name;
    };
    //------------------------------------------------------------------------
    // load an arbitrary file
    INScoreBase.prototype.loadTextFile = function (file, type, dest) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = function (event) {
            var msg = inscore.newMessageM("set");
            inscore.msgAddStr(msg, type);
            inscore.msgAddStr(msg, reader.result.toString());
            inscore.postMessage(dest, msg);
        };
    };
    //------------------------------------------------------------------------
    // load an arbitrary file
    INScoreBase.prototype.loadFile = function (file, fileName, type, div) {
        var dst = this.getSceneAddress(div) + "/" + this.fileName2InscoreName(fileName);
        switch (type) {
            case kGuidoCodeType:
            case kMusicxmlType:
            case kSvgType:
            case kHtmlType:
            case kTextType:
            case kFaustType:
                this.loadTextFile(file, type, dst);
                break;
            case kVerovioType:
            case kImgType:
            case kVideoType:
                break;
        }
    };
    //------------------------------------------------------------------------
    // files drop support
    INScoreBase.prototype.filedropped = function (e) {
        var filelist = e.dataTransfer.files;
        if (!filelist)
            return;
        var filecount = filelist.length;
        for (var i = 0; i < filecount; i++) {
            var file = filelist[i];
            var fileName = filelist[i].name;
            var properties = this.getFileProperties(fileName);
            var type = this.fExtHandlers[properties.ext];
            switch (type) {
                case kInscore:
                    this.fetchInscore(file, false);
                    break;
                case kInscore2:
                    this.fetchInscore(file, true);
                    break;
                default:
                    this.loadFile(file, fileName, type, e.target);
                    break;
            }
        }
    };
    INScoreBase.prototype.drop = function (e) {
        var data = e.dataTransfer.getData("Text");
        if (data)
            this.loadFromText(data, false);
        else
            this.filedropped(e);
        var div = e.target;
        div.style.border = div.getAttribute('savedborder');
    };
    //------------------------------------------------------------------------
    // activate drag & drop on inscore divs
    INScoreBase.prototype.accept = function (event) { return event.target == event.currentTarget; };
    INScoreBase.prototype.allowdrop = function (div) {
        var _this = this;
        div.addEventListener("dragenter", function (event) { if (_this.accept(event))
            _this.dragEnter(event); }, true);
        div.addEventListener("dragleave", function (event) { if (_this.accept(event))
            _this.dragLeave(event); }, true);
        div.addEventListener("dragover", function (event) { event.preventDefault(); }, true);
        div.addEventListener("drop", function (event) { _this.dragLeave(event); _this.drop(event); }, true);
    };
    INScoreBase.prototype.dragEnter = function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    INScoreBase.prototype.dragLeave = function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    //------------------------------------------------------------------------
    // activate drag & drop on inscore divs
    INScoreBase.prototype.watchResize = function () {
        var _this = this;
        window.addEventListener("resize", function (e) {
            for (var i = 0; i < _this.fDivs.length; i++) {
                inscore.postMessageStr(_this.getSceneAddress(_this.fDivs[i].fDiv), "refresh");
            }
        });
    };
    return INScoreBase;
}());
///<reference path="inscoreBase.ts"/>
//----------------------------------------------------------------------------
var BasicGlue = /** @class */ (function (_super) {
    __extends(BasicGlue, _super);
    function BasicGlue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicGlue.prototype.accept = function (event) {
        var items = event.dataTransfer.items;
        for (var i = 0; i < items.length; i++) {
            switch (items[i].kind) {
                case "string":
                case "file":
                    break;
                default:
                    return false;
            }
        }
        return true;
    };
    BasicGlue.prototype.dragEnter = function (event) {
        event.preventDefault();
        var div = event.currentTarget;
        div.setAttribute('savedborder', div.style.border);
        div.style.border = "1px solid grey";
    };
    BasicGlue.prototype.dragLeave = function (event) {
        event.preventDefault();
        var div = event.currentTarget;
        div.style.border = div.getAttribute('savedborder');
    };
    return BasicGlue;
}(INScoreBase));
var inscoreGlue = new BasicGlue();
inscoreGlue.start();
