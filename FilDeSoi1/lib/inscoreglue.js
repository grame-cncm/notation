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
///<reference path="lib/inscore.d.ts"/>
///<reference path="lib/libINScore.d.ts"/>
//----------------------------------------------------------------------------
// INScore interface
//----------------------------------------------------------------------------
var INScore = /** @class */ (function () {
    function INScore() {
    }
    INScore.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        INScoreModule().then(function (module) {
                            _this.moduleInit(module);
                            success(_this);
                        });
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    INScore.prototype.moduleInit = function (module) {
        this.fInscore = new module.INScoreAdapter();
        this.fJSGlue = new module.INScoreJSGlue();
        INScore.fObjects = new module.IObjectAdapter();
        inscore = this;
    };
    INScore.objects = function () { return INScore.fObjects; };
    //------------------------------------------------------------------------
    // INScore interface
    INScore.prototype.start = function () { this.fInscoreGlue = this.fInscore.start(0, 0, 0); };
    INScore.prototype.stop = function () { this.fInscore.stop(this.fInscoreGlue); };
    INScore.prototype.loadInscore = function (script, autoparse) {
        if (autoparse === void 0) { autoparse = false; }
        return this.fInscore.loadInscore(script, autoparse);
    };
    INScore.prototype.loadInscore2 = function (script) { return this.fInscore.loadInscore2(script); };
    INScore.prototype.postMessage = function (adr, msg) { this.fInscore.postMessage(adr, msg); };
    INScore.prototype.postMessageStr = function (adr, meth) { this.fInscore.postMessageStr(adr, meth); };
    INScore.prototype.postMessageStrI = function (adr, meth, val) { this.fInscore.postMessageStrI(adr, meth, val); };
    INScore.prototype.postMessageStrF = function (adr, meth, val) { this.fInscore.postMessageStrF(adr, meth, val); };
    INScore.prototype.postMessageStrStr = function (adr, meth, val) { this.fInscore.postMessageStrStr(adr, meth, val); };
    INScore.prototype.delayMessage = function (adr, msg) { this.fInscore.delayMessage(adr, msg); };
    INScore.prototype.newMessage = function () { return this.fInscore.newMessage(); };
    INScore.prototype.newMessageM = function (meth) { return this.fInscore.newMessageM(meth); };
    INScore.prototype.delMessage = function (msg) { return this.fInscore.delMessage(msg); };
    INScore.prototype.msgAddStr = function (msg, str) { return this.fInscore.msgAddStr(msg, str); };
    INScore.prototype.msgAddF = function (msg, val) { return this.fInscore.msgAddF(msg, val); };
    INScore.prototype.msgAddI = function (msg, val) { return this.fInscore.msgAddI(msg, val); };
    INScore.prototype.version = function () { return this.fInscore.version(); };
    INScore.prototype.versionStr = function () { return this.fInscore.versionStr(); };
    INScore.prototype.guidoversion = function () { return this.fInscore.guidoversion(); };
    INScore.prototype.musicxmlversion = function () { return this.fInscore.musicxmlversion(); };
    //------------------------------------------------------------------------
    // INScore glue interface
    INScore.prototype.getRate = function () { return this.fInscoreGlue.getRate(); };
    INScore.prototype.timeTask = function () { this.fInscoreGlue.timeTask(); };
    INScore.prototype.sorterTask = function () { this.fInscoreGlue.sorterTask(); };
    return INScore;
}());
var TPenStyle;
(function (TPenStyle) {
    TPenStyle[TPenStyle["kSolid"] = 0] = "kSolid";
    TPenStyle[TPenStyle["kDash"] = 1] = "kDash";
    TPenStyle[TPenStyle["kDot"] = 2] = "kDot";
    TPenStyle[TPenStyle["kDashDot"] = 3] = "kDashDot";
    TPenStyle[TPenStyle["kDashDotDot"] = 4] = "kDashDotDot";
})(TPenStyle || (TPenStyle = {}));
var TBrushStyle;
(function (TBrushStyle) {
    TBrushStyle[TBrushStyle["kDense1"] = 0] = "kDense1";
    TBrushStyle[TBrushStyle["kDense2"] = 1] = "kDense2";
    TBrushStyle[TBrushStyle["kDense3"] = 2] = "kDense3";
    TBrushStyle[TBrushStyle["kDense4"] = 3] = "kDense4";
    TBrushStyle[TBrushStyle["kDense5"] = 4] = "kDense5";
    TBrushStyle[TBrushStyle["kDense6"] = 5] = "kDense6";
    TBrushStyle[TBrushStyle["kDense7"] = 6] = "kDense7";
    TBrushStyle[TBrushStyle["kNoBrush"] = 7] = "kNoBrush";
    TBrushStyle[TBrushStyle["kBrushHor"] = 8] = "kBrushHor";
    TBrushStyle[TBrushStyle["kBrushVer"] = 9] = "kBrushVer";
    TBrushStyle[TBrushStyle["kCross"] = 10] = "kCross";
    TBrushStyle[TBrushStyle["kBDiag"] = 11] = "kBDiag";
    TBrushStyle[TBrushStyle["kFDiag"] = 12] = "kFDiag";
    TBrushStyle[TBrushStyle["kDiagCross"] = 13] = "kDiagCross";
})(TBrushStyle || (TBrushStyle = {}));
var ArrowHead;
(function (ArrowHead) {
    ArrowHead[ArrowHead["NONE"] = 0] = "NONE";
    ArrowHead[ArrowHead["TRIANGLE"] = 1] = "TRIANGLE";
    ArrowHead[ArrowHead["DIAMOND"] = 2] = "DIAMOND";
    ArrowHead[ArrowHead["DISK"] = 3] = "DISK";
})(ArrowHead || (ArrowHead = {}));
var Effect;
(function (Effect) {
    Effect[Effect["kNone"] = 0] = "kNone";
    Effect[Effect["kBlur"] = 1] = "kBlur";
    Effect[Effect["kColorize"] = 2] = "kColorize";
    Effect[Effect["kShadow"] = 3] = "kShadow";
})(Effect || (Effect = {}));
;
var Blurhint;
(function (Blurhint) {
    Blurhint[Blurhint["kPerformance"] = 0] = "kPerformance";
    Blurhint[Blurhint["kQuality"] = 1] = "kQuality";
    Blurhint[Blurhint["kAnimation"] = 2] = "kAnimation";
})(Blurhint || (Blurhint = {}));
;
var inscore = null;
///<reference path="libGUIDOEngine.d.ts"/>
//----------------------------------------------------------------------------
// GUIDOEngine interface
//----------------------------------------------------------------------------
var GuidoEngine = /** @class */ (function () {
    function GuidoEngine() {
    }
    GuidoEngine.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module;
            var _this = this;
            return __generator(this, function (_a) {
                module = GuidoModule();
                return [2 /*return*/, new Promise(function (success, failure) {
                        module['onRuntimeInitialized'] = function () {
                            _this.moduleInit(module);
                            success(_this);
                        };
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    GuidoEngine.prototype.moduleInit = function (module) {
        this.fEngine = new module.GuidoEngineAdapter();
        this.fScoreMap = new module.GUIDOScoreMap();
        this.fPianoRoll = new module.GUIDOPianoRollAdapter();
        this.fFactory = new module.GUIDOFactoryAdapter();
        this.fEngine.init();
    };
    //------------------------------------------------------------------------
    // Guido Engine interface
    GuidoEngine.prototype.start = function () { this.fEngine.init(); };
    GuidoEngine.prototype.shutdown = function () { this.fEngine.shutdown(); };
    GuidoEngine.prototype.ar2gr = function (ar) { return this.fEngine.ar2gr(ar); };
    GuidoEngine.prototype.ar2grSettings = function (ar, settings) { return this.fEngine.ar2grSettings(ar, settings); };
    GuidoEngine.prototype.updateGR = function (gr) { return this.fEngine.updateGR(gr); };
    GuidoEngine.prototype.updateGRSettings = function (gr, settings) { return this.fEngine.updateGRSettings(gr, settings); };
    GuidoEngine.prototype.freeAR = function (ar) { this.fEngine.freeAR(ar); };
    GuidoEngine.prototype.freeGR = function (gr) { this.fEngine.freeGR(gr); };
    GuidoEngine.prototype.getDefaultLayoutSettings = function () { return this.fEngine.getDefaultLayoutSettings(); };
    GuidoEngine.prototype.resizePageToMusic = function (gr) { return this.fEngine.resizePageToMusic(gr); };
    GuidoEngine.prototype.getErrorString = function (errCode) { return this.fEngine.getErrorString(errCode); };
    GuidoEngine.prototype.showElement = function (gr, elt, status) { return this.fEngine.showElement(gr, elt, status); };
    GuidoEngine.prototype.countVoices = function (ar) { return this.fEngine.countVoices(ar); };
    GuidoEngine.prototype.getPageCount = function (gr) { return this.fEngine.getPageCount(gr); };
    GuidoEngine.prototype.getSystemCount = function (gr, page) { return this.fEngine.getSystemCount(gr, page); };
    GuidoEngine.prototype.duration = function (gr) { return this.fEngine.duration(gr); };
    GuidoEngine.prototype.findEventPage = function (gr, date) { return this.fEngine.findEventPage(gr, date); };
    GuidoEngine.prototype.findPageAt = function (gr, date) { return this.fEngine.findPageAt(gr, date); };
    GuidoEngine.prototype.getPageDate = function (gr, pageNum) { return this.fEngine.getPageDate(gr, pageNum); };
    GuidoEngine.prototype.gr2SVG = function (gr, page, embedFont, mappingMode) { return this.fEngine.gr2SVG(gr, page, embedFont, mappingMode); };
    GuidoEngine.prototype.gr2SVGColored = function (gr, page, r, g, b, embedFont) { return this.fEngine.gr2SVGColored(gr, page, r, g, b, embedFont); };
    GuidoEngine.prototype.abstractExport = function (gr, page) { return this.fEngine.abstractExport(gr, page); };
    GuidoEngine.prototype.binaryExport = function (gr, page) { return this.fEngine.binaryExport(gr, page); };
    GuidoEngine.prototype.jsExport = function (gr, page) { return this.fEngine.javascriptExport(gr, page); };
    GuidoEngine.prototype.setDefaultPageFormat = function (format) { this.fEngine.setDefaultPageFormat(format); };
    GuidoEngine.prototype.getDefaultPageFormat = function () { return this.fEngine.getDefaultPageFormat(); };
    GuidoEngine.prototype.setDrawBoundingBoxes = function (bmap) { this.fEngine.setDrawBoundingBoxes(bmap); };
    GuidoEngine.prototype.getDrawBoundingBoxes = function () { return this.fEngine.getDrawBoundingBoxes(); };
    GuidoEngine.prototype.getPageFormat = function (gr, page) { return this.fEngine.getPageFormat(gr, page); };
    GuidoEngine.prototype.unit2CM = function (val) { return this.fEngine.unit2CM(val); };
    GuidoEngine.prototype.cm2Unit = function (val) { return this.fEngine.cm2Unit(val); };
    GuidoEngine.prototype.unit2Inches = function (val) { return this.fEngine.unit2Inches(val); };
    GuidoEngine.prototype.inches2Unit = function (val) { return this.fEngine.inches2Unit(val); };
    GuidoEngine.prototype.getLineSpace = function () { return this.fEngine.getLineSpace(); };
    GuidoEngine.prototype.getVersion = function () { return this.fEngine.getVersion(); };
    GuidoEngine.prototype.getFloatVersion = function () { var v = this.fEngine.getVersion(); return parseFloat(v.major + "." + v.minor + v.sub); };
    GuidoEngine.prototype.getVersionStr = function () { return this.fEngine.getVersionStr(); };
    GuidoEngine.prototype.checkVersionNums = function (major, minor, sub) { return this.fEngine.checkVersionNums(major, minor, sub); };
    GuidoEngine.prototype.markVoice = function (ar, voicenum, date, duration, r, g, b) { return this.fEngine.markVoice(ar, voicenum, date, duration, r, g, b); };
    GuidoEngine.prototype.openParser = function () { return this.fEngine.openParser(); };
    GuidoEngine.prototype.closeParser = function (p) { return this.fEngine.closeParser(p); };
    GuidoEngine.prototype.file2AR = function (p, file) { return this.fEngine.file2AR(p, file); };
    GuidoEngine.prototype.string2AR = function (p, gmn) { return this.fEngine.string2AR(p, gmn); };
    GuidoEngine.prototype.parserGetErrorCode = function (p) { return this.fEngine.parserGetErrorCode(p); };
    GuidoEngine.prototype.openStream = function () { return this.fEngine.openStream(); };
    GuidoEngine.prototype.closeStream = function (s) { return this.fEngine.closeStream(s); };
    GuidoEngine.prototype.getStream = function (s) { return this.fEngine.getStream(s); };
    GuidoEngine.prototype.stream2AR = function (p, stream) { return this.fEngine.stream2AR(p, stream); };
    GuidoEngine.prototype.writeStream = function (s, str) { return this.fEngine.writeStream(s, str); };
    GuidoEngine.prototype.resetStream = function (s) { return this.fEngine.resetStream(s); };
    GuidoEngine.prototype.getParsingTime = function () { return this.fEngine.getParsingTime(); };
    GuidoEngine.prototype.getAR2GRTime = function () { return this.fEngine.getAR2GRTime(); };
    GuidoEngine.prototype.getOnDrawTime = function () { return this.fEngine.getOnDrawTime(); };
    //------------------------------------------------------------------------
    // Guido mappings interface
    GuidoEngine.prototype.getPageMap = function (gr, page, w, h) { return this.fScoreMap.getPageMap(gr, page, w, h); };
    GuidoEngine.prototype.getStaffMap = function (gr, page, w, h, staff) { return this.fScoreMap.getStaffMap(gr, page, w, h, staff); };
    GuidoEngine.prototype.getVoiceMap = function (gr, page, w, h, voice) { return this.fScoreMap.getVoiceMap(gr, page, w, h, voice); };
    GuidoEngine.prototype.getSystemMap = function (gr, page, w, h) { return this.fScoreMap.getSystemMap(gr, page, w, h); };
    GuidoEngine.prototype.getTime = function (date, map) { return this.fScoreMap.getTime(date, map); };
    GuidoEngine.prototype.getPoint = function (x, y, map) { return this.fScoreMap.getPoint(x, y, map); };
    GuidoEngine.prototype.getTimeMap = function (ar) { return this.fScoreMap.getTimeMap(ar); };
    GuidoEngine.prototype.getPianoRollMap = function (pr, width, height) { return this.fScoreMap.getPianoRollMap(pr, width, height); };
    //------------------------------------------------------------------------
    // Guido piano roll interface
    GuidoEngine.prototype.ar2PianoRoll = function (type, ar) { return this.fPianoRoll.ar2PianoRoll(type, ar); };
    GuidoEngine.prototype.destroyPianoRoll = function (pr) { return this.fPianoRoll.destroyPianoRoll(pr); };
    GuidoEngine.prototype.prSetLimits = function (pr, limits) { return this.fPianoRoll.setLimits(pr, limits); };
    GuidoEngine.prototype.prEnableKeyboard = function (pr, status) { return this.fPianoRoll.enableKeyboard(pr, status); };
    GuidoEngine.prototype.prGetKeyboardWidth = function (pr, height) { return this.fPianoRoll.getKeyboardWidth(pr, height); };
    GuidoEngine.prototype.prEnableAutoVoicesColoration = function (pr, status) { return this.fPianoRoll.enableAutoVoicesColoration(pr, status); };
    GuidoEngine.prototype.prSetVoiceColor = function (pr, voice, r, g, b, a) { return this.fPianoRoll.setRGBColorToVoice(pr, voice, r, g, b, a); };
    GuidoEngine.prototype.prSetVoiceNamedColor = function (pr, voice, c) { return this.fPianoRoll.setColorToVoice(pr, voice, c); };
    GuidoEngine.prototype.prRemoveVoiceColor = function (pr, voice) { return this.fPianoRoll.removeColorToVoice(pr, voice); };
    GuidoEngine.prototype.prEnableMeasureBars = function (pr, status) { return this.fPianoRoll.enableMeasureBars(pr, status); };
    GuidoEngine.prototype.prSetPitchLinesDisplayMode = function (pr, mode) { return this.fPianoRoll.setPitchLinesDisplayMode(pr, mode); };
    GuidoEngine.prototype.proll2svg = function (pr, w, h) { return this.fPianoRoll.svgExport(pr, w, h); };
    GuidoEngine.prototype.prGetMap = function (pr, width, height) { return this.fPianoRoll.getMap(pr, width, height); };
    GuidoEngine.prototype.prSvgExport = function (pr, width, height) { return this.fPianoRoll.svgExport(pr, width, height); };
    GuidoEngine.prototype.prJsExport = function (pr, width, height) { return this.fPianoRoll.javascriptExport(pr, width, height); };
    //------------------------------------------------------------------------
    // Guido factory interface
    GuidoEngine.prototype.openMusic = function () { return this.fFactory.openMusic(); };
    GuidoEngine.prototype.closeMusic = function () { return this.fFactory.closeMusic(); };
    GuidoEngine.prototype.openVoice = function () { return this.fFactory.openVoice(); };
    GuidoEngine.prototype.closeVoice = function () { return this.fFactory.closeVoice(); };
    GuidoEngine.prototype.openChord = function () { return this.fFactory.openChord(); };
    GuidoEngine.prototype.closeChord = function () { return this.fFactory.closeChord(); };
    GuidoEngine.prototype.insertCommata = function () { return this.fFactory.insertCommata(); };
    GuidoEngine.prototype.openEvent = function (name) { return this.fFactory.openEvent(name); };
    GuidoEngine.prototype.closeEvent = function () { return this.fFactory.closeEvent(); };
    GuidoEngine.prototype.addSharp = function () { return this.fFactory.addSharp(); };
    GuidoEngine.prototype.addFlat = function () { return this.fFactory.addFlat(); };
    GuidoEngine.prototype.setEventDots = function (dots) { return this.fFactory.setEventDots(dots); };
    GuidoEngine.prototype.setEventAccidentals = function (acc) { return this.fFactory.setEventAccidentals(acc); };
    GuidoEngine.prototype.setOctave = function (oct) { return this.fFactory.setOctave(oct); };
    GuidoEngine.prototype.setDuration = function (numerator, denominator) { return this.fFactory.setDuration(numerator, denominator); };
    GuidoEngine.prototype.openTag = function (name, tagID) { return this.fFactory.openTag(name, tagID); };
    GuidoEngine.prototype.openRangeTag = function (name, tagID) { return this.fFactory.openRangeTag(name, tagID); };
    GuidoEngine.prototype.endTag = function () { return this.fFactory.endTag(); };
    GuidoEngine.prototype.closeTag = function () { return this.fFactory.closeTag(); };
    GuidoEngine.prototype.addTagParameterString = function (val) { return this.fFactory.addTagParameterString(val); };
    GuidoEngine.prototype.addTagParameterInt = function (val) { return this.fFactory.addTagParameterInt(val); };
    GuidoEngine.prototype.addTagParameterFloat = function (val) { return this.fFactory.addTagParameterFloat(val); };
    GuidoEngine.prototype.setParameterName = function (name) { return this.fFactory.setParameterName(name); };
    GuidoEngine.prototype.setParameterUnit = function (unit) { return this.fFactory.setParameterUnit(unit); };
    return GuidoEngine;
}());
var GuidoMapping;
(function (GuidoMapping) {
    GuidoMapping[GuidoMapping["kNoMapping"] = 0] = "kNoMapping";
    GuidoMapping[GuidoMapping["kVoiceMapping"] = 1] = "kVoiceMapping";
    GuidoMapping[GuidoMapping["kStaffMapping"] = 2] = "kStaffMapping";
    GuidoMapping[GuidoMapping["kSystemMapping"] = 4] = "kSystemMapping";
})(GuidoMapping || (GuidoMapping = {}));
var GuidoErrCode;
(function (GuidoErrCode) {
    //! null is used to denote no error
    GuidoErrCode[GuidoErrCode["guidoNoErr"] = 0] = "guidoNoErr";
    //! error while parsing the Guido format
    GuidoErrCode[GuidoErrCode["guidoErrParse"] = -1] = "guidoErrParse";
    //! memory allocation error
    GuidoErrCode[GuidoErrCode["guidoErrMemory"] = -2] = "guidoErrMemory";
    //! error while reading or writing a file
    GuidoErrCode[GuidoErrCode["guidoErrFileAccess"] = -3] = "guidoErrFileAccess";
    //! the user cancelled the action
    GuidoErrCode[GuidoErrCode["guidoErrUserCancel"] = -4] = "guidoErrUserCancel";
    //! the music font is not available
    GuidoErrCode[GuidoErrCode["guidoErrNoMusicFont"] = -5] = "guidoErrNoMusicFont";
    //! the text font is not available
    GuidoErrCode[GuidoErrCode["guidoErrNoTextFont"] = -6] = "guidoErrNoTextFont";
    //! bad parameter used as argument
    GuidoErrCode[GuidoErrCode["guidoErrBadParameter"] = -7] = "guidoErrBadParameter";
    //! invalid handler used
    GuidoErrCode[GuidoErrCode["guidoErrInvalidHandle"] = -8] = "guidoErrInvalidHandle";
    //! required initialisation has not been performed
    GuidoErrCode[GuidoErrCode["guidoErrNotInitialized"] = -9] = "guidoErrNotInitialized";
    //! the action failed
    GuidoErrCode[GuidoErrCode["guidoErrActionFailed"] = -10] = "guidoErrActionFailed";
})(GuidoErrCode || (GuidoErrCode = {}));
var GuidoElementSelector;
(function (GuidoElementSelector) {
    GuidoElementSelector[GuidoElementSelector["kGuidoPage"] = 0] = "kGuidoPage";
    GuidoElementSelector[GuidoElementSelector["kGuidoSystem"] = 1] = "kGuidoSystem";
    GuidoElementSelector[GuidoElementSelector["kGuidoSystemSlice"] = 2] = "kGuidoSystemSlice";
    GuidoElementSelector[GuidoElementSelector["kGuidoStaff"] = 3] = "kGuidoStaff";
    /*kGuidoMeasure,*/
    GuidoElementSelector[GuidoElementSelector["kGuidoBar"] = 4] = "kGuidoBar";
    GuidoElementSelector[GuidoElementSelector["kGuidoEvent"] = 5] = "kGuidoEvent";
    GuidoElementSelector[GuidoElementSelector["kGuidoScoreElementEnd"] = 6] = "kGuidoScoreElementEnd";
})(GuidoElementSelector || (GuidoElementSelector = {}));
var GuidoElementType;
(function (GuidoElementType) {
    GuidoElementType[GuidoElementType["kNote"] = 1] = "kNote";
    GuidoElementType[GuidoElementType["kRest"] = 2] = "kRest";
    GuidoElementType[GuidoElementType["kEmpty"] = 3] = "kEmpty";
    GuidoElementType[GuidoElementType["kBar"] = 4] = "kBar";
    GuidoElementType[GuidoElementType["kRepeatBegin"] = 5] = "kRepeatBegin";
    GuidoElementType[GuidoElementType["kRepeatEnd"] = 6] = "kRepeatEnd";
    GuidoElementType[GuidoElementType["kStaff"] = 7] = "kStaff";
    GuidoElementType[GuidoElementType["kSystemSlice"] = 8] = "kSystemSlice";
    GuidoElementType[GuidoElementType["kSystem"] = 9] = "kSystem";
    GuidoElementType[GuidoElementType["kPage"] = 10] = "kPage";
})(GuidoElementType || (GuidoElementType = {}));
var PianoRollType;
(function (PianoRollType) {
    PianoRollType[PianoRollType["kSimplePianoRoll"] = 0] = "kSimplePianoRoll";
    PianoRollType[PianoRollType["kTrajectoryPianoRoll"] = 1] = "kTrajectoryPianoRoll";
})(PianoRollType || (PianoRollType = {}));
var PianoRollLineMode;
(function (PianoRollLineMode) {
    // pîano roll: pitch line display modes
    PianoRollLineMode[PianoRollLineMode["kPRCLine"] = 1] = "kPRCLine";
    PianoRollLineMode[PianoRollLineMode["kPRCSharpLine"] = 2] = "kPRCSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRDLine"] = 4] = "kPRDLine";
    PianoRollLineMode[PianoRollLineMode["kPRDSharpLine"] = 8] = "kPRDSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRELine"] = 16] = "kPRELine";
    PianoRollLineMode[PianoRollLineMode["kPRFLine"] = 32] = "kPRFLine";
    PianoRollLineMode[PianoRollLineMode["kPRFSharpLine"] = 64] = "kPRFSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRGLine"] = 128] = "kPRGLine";
    PianoRollLineMode[PianoRollLineMode["kPRGSharpLine"] = 256] = "kPRGSharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRALine"] = 512] = "kPRALine";
    PianoRollLineMode[PianoRollLineMode["kPRASharpLine"] = 1024] = "kPRASharpLine";
    PianoRollLineMode[PianoRollLineMode["kPRBLine"] = 2048] = "kPRBLine";
    PianoRollLineMode[PianoRollLineMode["kPRAutoLines"] = 0] = "kPRAutoLines";
    PianoRollLineMode[PianoRollLineMode["kPRNoLine"] = -1] = "kPRNoLine";
})(PianoRollLineMode || (PianoRollLineMode = {}));
///<reference path="libmusicxml.d.ts"/>
//----------------------------------------------------------------------------
// the libMusicXML interface
//----------------------------------------------------------------------------
var libmusicxml = /** @class */ (function () {
    function libmusicxml() {
    }
    libmusicxml.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var module;
            var _this = this;
            return __generator(this, function (_a) {
                module = MusicXMLModule();
                return [2 /*return*/, new Promise(function (success, failure) {
                        module['onRuntimeInitialized'] = function () {
                            _this.fLibrary = new module.libMusicXMLAdapter();
                            // this.moduleInit (module);
                            success(_this);
                        };
                    })];
            });
        });
    };
    //------------------------------------------------------------------------
    // async initialization
    // moduleInit ( module ) {
    // 	this.fLibrary = new module.libMusicXMLAdapter();
    // }
    //------------------------------------------------------------------------
    // libMusicXML interface
    libmusicxml.prototype.libVersion = function () { return this.fLibrary.libVersion(); };
    libmusicxml.prototype.libVersionStr = function () { return this.fLibrary.libVersionStr(); };
    libmusicxml.prototype.musicxml2guidoVersion = function () { return this.fLibrary.musicxml2guidoVersion(); };
    libmusicxml.prototype.musicxml2guidoVersionStr = function () { return this.fLibrary.musicxml2guidoVersionStr(); };
    libmusicxml.prototype.string2guido = function (xml, genBars) { return this.fLibrary.string2guido(xml, genBars); };
    libmusicxml.prototype.xmlStringTranspose = function (xml, interval) { return this.fLibrary.xmlStringTranspose(xml, interval); };
    return libmusicxml;
}());
///<reference types="@grame/libfaust"/>
//----------------------------------------------------------------------------
// the faust interface
//----------------------------------------------------------------------------
var faust = /** @class */ (function () {
    function faust() {
    }
    faust.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        FaustModule().then(function (module) {
                            _this.fModule = module;
                            _this.fLib = Faust.createLibFaust(module);
                            success(_this);
                        });
                    })];
            });
        });
    };
    faust.prototype.version = function () { return this.fLib.version(); };
    faust.prototype.module = function () { return this.fModule; };
    faust.prototype.lib = function () { return this.fLib; };
    faust.prototype.compiler = function () { return Faust.createCompiler(this.fLib); };
    return faust;
}());
///<reference path="lib/guidoengine.ts"/>
///<reference path="lib/libmusicxml.ts"/>
///<reference path="faust.ts"/>
//----------------------------------------------------------------------------
var libraries = /** @class */ (function () {
    function libraries() {
        this.fGuido = new GuidoEngine;
        this.fXMLLib = new libmusicxml;
        this.fFaust = new faust;
    }
    libraries.prototype.initialise = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.guidoinit()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.xmlinit()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.faustinit()];
                }
            });
        });
    };
    libraries.prototype.guidoinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fGuido.initialise().then(function () {
                            libraries.fGuidoVersion = _this.fGuido.getFloatVersion();
                            console.log("GuidoEngine version " + _this.fGuido.getVersionStr());
                            success(_this);
                        }, function () { _this.fGuido = null; success(_this); });
                    })];
            });
        });
    };
    libraries.prototype.xmlinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fXMLLib.initialise().then(function () {
                            libraries.fXMLVersion = _this.fXMLLib.libVersion();
                            console.log("libMusicXML version " + _this.fXMLLib.libVersionStr());
                            success(_this);
                        }, function () { _this.fXMLLib = null; success(_this); });
                    })];
            });
        });
    };
    libraries.prototype.faustinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fFaust.initialise().then(function () { console.log("Faust version " + _this.fFaust.version()); success(_this); }, function () { _this.fFaust = null; success(_this); });
                    })];
            });
        });
    };
    libraries.prototype.guido = function () { return this.fGuido; };
    libraries.prototype.xmllib = function () { return this.fXMLLib; };
    libraries.prototype.faust = function () { return this.fFaust; };
    libraries.fGuidoVersion = 0;
    libraries.fXMLVersion = 0;
    libraries.fFaustVersion = 0;
    return libraries;
}());
var inscorelibs = new libraries();
function getGuidoVersion() { return libraries.fGuidoVersion; }
function getMusicXMLVersion() { return libraries.fXMLVersion; }
function getFaustVersion() { return libraries.fFaustVersion; }
var Safari = false;
var Explorer = false;
var Edge = false;
var Firefox = false;
var Chrome = false;
var WindowsOS = false;
var MacOS = false;
var UnixOS = false;
var AndroidOS = false;
function scanNavigator() {
    var ua = window.navigator.userAgent;
    Chrome = (ua.indexOf('Chrome') >= 0);
    Safari = (ua.indexOf('Safari') >= 0) && !Chrome;
    Explorer = (ua.indexOf('MSIE ') >= 0) || (ua.indexOf('Trident') >= 0);
    Edge = (ua.indexOf('Edge') >= 0);
    Firefox = (ua.indexOf('Firefox') >= 0);
}
function scanPlatform() {
    var os = window.navigator.appVersion;
    WindowsOS = (os.indexOf('Win') >= 0);
    MacOS = (os.indexOf('Mac') >= 0) && !Chrome;
    UnixOS = (os.indexOf('X11') >= 0) || (os.indexOf('Linux') >= 0);
    AndroidOS = (os.indexOf('Android') >= 0);
}
///<reference path="lib/inscore.d.ts"/>
var AIOScanner = /** @class */ (function () {
    function AIOScanner() {
    }
    AIOScanner.init = function () {
        if (!AIOScanner.fAudioContext) {
            AIOScanner.fAudioContext = new (window.AudioContext || window.webkitAudioContext)();
            document.onreadystatechange = function () {
                if (document.readyState === 'interactive') {
                    AIOScanner.unlockAudioContext(AIOScanner.fAudioContext);
                }
            };
            // AIOScanner.unlockAudioContext(AIOScanner.fAudioContext);
        }
    };
    AIOScanner.scan = function (address) {
        AIOScanner.init();
        AIOScanner.fOutput = AIOScanner.fAudioContext.destination;
        AIOScanner.send(address, AIOScanner.kOutputName, AIOScanner.fOutput);
        // console.log ("navigator.mediaDevices " + navigator.mediaDevices);
        // try {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function (stream) {
                AIOScanner.fInput = AIOScanner.fAudioContext.createMediaStreamSource(stream);
                AIOScanner.send(address, AIOScanner.kInputName, AIOScanner.fInput);
            })
                .catch(function (err) {
                AIOScanner.send(address, AIOScanner.kInputName, null);
                // console.log("AIOScanner can't get input device: " + err);
            });
        }
        else {
            AIOScanner.send(address, AIOScanner.kInputName, null);
        }
        // }
        // catch (error) { AIOScanner.send (address, AIOScanner.kInputName, null); }
        AIOScanner.send(address, AIOScanner.kInputName, null);
    }; // Get All Physical in/out and populate finput & foutput
    AIOScanner.send = function (address, name, node) {
        var msg = inscore.newMessageM("set");
        var prefix = address.substring(0, address.lastIndexOf("/"));
        inscore.msgAddStr(msg, "audioio");
        inscore.msgAddI(msg, node ? (node.numberOfInputs ? node.channelCount : 0) : 0); // nb input
        inscore.msgAddI(msg, node ? (node.numberOfOutputs ? node.channelCount : 0) : 0); // nb output
        inscore.postMessage(prefix + "/" + name + "", msg);
    }; // can send a set audioio message for each physical input/output
    AIOScanner.unlock = function () {
        AIOScanner.fUnlockEvents.forEach(function (e) { return document.body.removeEventListener(e, AIOScanner.unlock); });
        AIOScanner.fAudioContext.resume();
    };
    AIOScanner.unlockAudioContext = function (audioCtx) {
        if (audioCtx.state !== "suspended")
            return;
        AIOScanner.fUnlockEvents.forEach(function (e) { return document.body.addEventListener(e, AIOScanner.unlock, false); });
    };
    AIOScanner.fInput = null;
    AIOScanner.fOutput = null;
    AIOScanner.kInputName = "audioInput";
    AIOScanner.kOutputName = "audioOutput";
    AIOScanner.fAudioContext = null;
    AIOScanner.fUnlockEvents = ["touchstart", "touchend", "mousedown", "keydown"];
    return AIOScanner;
}());
///<reference path="inscore.ts"/>
///<reference path="libraries.ts"/>
///<reference path="navigator.ts"/>
///<reference path="AIOScanner.ts"/>
//----------------------------------------------------------------------------
var INScoreGlue = /** @class */ (function () {
    function INScoreGlue() {
        this.fTimeTask = 0;
        this.fSorterTask = 0;
        this.fInscore = new INScore;
    }
    //------------------------------------------------------------------------
    // initialization
    INScoreGlue.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                AIOScanner.init();
                return [2 /*return*/, new Promise(function (success, failure) {
                        _this.fInscore.initialise().then(function () {
                            _this.fInscore.start();
                            inscorelibs.initialise().then(function () {
                                _this.initialise();
                                success(_this);
                            });
                        });
                    })];
            });
        });
    };
    INScoreGlue.prototype.initialise = function () {
        var _this = this;
        this.fTimeTask = window.setInterval(function () { _this.fInscore.timeTask(); }, this.fInscore.getRate());
        this.fSorterTask = window.setInterval(function () { _this.fInscore.sorterTask(); }, 10);
        scanPlatform();
        scanNavigator();
    };
    return INScoreGlue;
}());
var gGlue = new INScoreGlue();
// default function to show the log window (if any)
// should be overriden by client applications
function showlog(status) { }
// glue functions
// should be overriden by client applications
function showMouse(state) { }
function openUrl(url) {
    window.open(url);
}
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
///<reference path="../src/inscoreglue.ts"/>
///<reference path="constants.ts"/>
var INScoreDiv = /** @class */ (function () {
    function INScoreDiv(div, version) {
        this.fDiv = div;
        this.fVersion = version;
    }
    return INScoreDiv;
}());
// interface IGlue { start():Promise<any>; }
// declare var gGlue: IGlue;
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
