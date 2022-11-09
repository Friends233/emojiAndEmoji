

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
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

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Platform.ts");
/** 生成的emoji行列数 */
var MAX_NUM = 5;
window["MAX_NUM"] = MAX_NUM;
/** 当前关卡 */
var ACT_LEVEL = 3;
window["ACT_LEVEL"] = ACT_LEVEL;
/** 生成emoji的偏移量 */
var halfW = 20;
window["halfW"] = halfW;
/** 生成emoji的间隔 */
var offsetX = 92, offsetY = 92;
window["offsetX"] = offsetX;
window["offsetY"] = offsetY;
/** 获取数组中随机值 */
function getAryRand(ary) {
    var randomNum = Math.ceil(Math.random() * (ary.length - 1));
    var res = ary[randomNum];
    ary.splice(randomNum, 1);
    return res;
}
window["getAryRand"] = getAryRand;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        /** emoji管理器 */
        _this.emojiMannager = null;
        /** emoji消除栏 */
        _this.emojiPlayer = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var stageWidth = this.stage.stageWidth;
        var sky = this.createBitmapByName("bg_png");
        sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.addChild(sky);
        var emojiPlayer = this.emojiPlayer = new EmojiPlayer(this.stage);
        emojiPlayer.$setX((stageWidth - emojiPlayer.width) / 2);
        emojiPlayer.$setY(1200);
        this.stage.addChild(emojiPlayer);
        this.createEmoji();
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
        //   console.log('test')
        // },this)
    };
    /** 创建场景的emoji */
    Main.prototype.createEmoji = function () {
        this.emojiMannager = new EmojiMannager(this.stage, this.emojiPlayer);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 
var EmojiMannager = /** @class */ (function () {
    function EmojiMannager(stage, emojiPlayer) {
        /** 舞台 */
        this.stage = null;
        /** emoji随机池 */
        this.emojiPool = [];
        /** emoji消除栏 */
        this.emojiPlayer = null;
        this.stage = stage;
        this.emojiPlayer = emojiPlayer;
        this.initEmojiPool();
        this.createEmoji();
    }
    /** 初始化emoji随机池 */
    EmojiMannager.prototype.initEmojiPool = function () {
        var _this = this;
        /** 生成emoji的数量 */
        var emojiNum = ACT_LEVEL * MAX_NUM * MAX_NUM * 2;
        var _loop_1 = function (i) {
            var emoji = new Emoji(i);
            emoji.touchEnabled = true;
            emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.emojiPlayer.launchTween(emoji);
            }, this_1);
            this_1.emojiPool.push(emoji);
        };
        var this_1 = this;
        for (var i = 0; i < emojiNum; i++) {
            _loop_1(i);
        }
    };
    /** 获取随机池中的emoji */
    EmojiMannager.prototype.getRandomEmoji = function () {
        return getAryRand(this.emojiPool);
    };
    EmojiMannager.prototype.createEmoji = function () {
        var position = {
            x: (this.stage.stageWidth - offsetX * MAX_NUM + (offsetX - 72)) * 0.5,
            y: 400
        };
        for (var i = 0; i < MAX_NUM; i++) {
            for (var j = 0; j < MAX_NUM; j++) {
                var tempX = position.x + i * offsetX, tempY = position.y + j * offsetY;
                var preEmoji = null;
                for (var k = 0; k <= ACT_LEVEL; k++) {
                    var emoji = this.getRandomEmoji();
                    if (!preEmoji) {
                        preEmoji = emoji;
                    }
                    else {
                        preEmoji.nextEmoji = emoji;
                        preEmoji = preEmoji.nextEmoji;
                    }
                    emoji.$setX(tempX);
                    emoji.$setY(tempY);
                    emoji.deep = k;
                    emoji.changeGrey();
                    this.stage.addChildAt(emoji, this.stage.numChildren - k);
                    /** 下一层偏移的位置 */
                    var nextPositionMap = [
                        { tempX: tempX - halfW },
                        { tempX: tempX + halfW },
                        { tempY: tempY + halfW },
                        { tempY: tempY + halfW },
                    ];
                    var pos = getAryRand(nextPositionMap);
                    tempX = pos.tempX || tempX;
                    tempY = pos.tempY || tempY;
                }
            }
        }
    };
    return EmojiMannager;
}());
window["EmojiMannager"] = EmojiMannager;
__reflect(EmojiMannager.prototype,"EmojiMannager",[]); 
var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji(key) {
        var _this = _super.call(this) || this;
        /** 唯一key值 */
        _this.key = 0;
        /** emoji类型 */
        _this.type = 0;
        /** emoji深度 */
        _this.deep = 0;
        /** 下一层的emoji */
        _this.nextEmoji = null;
        _this.key = key;
        _this.init();
        return _this;
    }
    Emoji.prototype.init = function () {
        var result = new egret.Bitmap();
        var tempK = (this.key % MAX_NUM) + 1;
        this.type = tempK;
        var texture = RES.getRes("emoji" + tempK + "_png");
        result.texture = texture;
        this.addChild(result);
        this.width = 72;
        this.height = 72;
    };
    /** 刷新deep层数 */
    Emoji.prototype.refreshDeep = function () {
        if (this.deep <= 0) {
            return;
        }
        this.deep = 0;
        this.changeGrey();
    };
    /** 底层emoji置灰 */
    Emoji.prototype.changeGrey = function () {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        if (this.deep <= 0) {
            colorMatrix = [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0
            ];
        }
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.filters = [colorFlilter];
    };
    /** 消除emoji */
    Emoji.prototype.destEmoji = function (call) {
        egret.Tween.get(this).to({ alpha: 0 }, 300).call(function () { call && call(); });
    };
    return Emoji;
}(egret.DisplayObjectContainer));
window["Emoji"] = Emoji;
__reflect(Emoji.prototype,"Emoji",[]); 
var EmojiPlayer = /** @class */ (function (_super) {
    __extends(EmojiPlayer, _super);
    function EmojiPlayer(stage) {
        var _this = _super.call(this) || this;
        /** emoji消除栈 */
        _this.emojiStack = [];
        /** emoji消除图，类型为属性名，对应栈中的key为值 */
        _this.emojiEliMap = {};
        _this.stage = null;
        /** tween动画的时候不让点击 */
        _this.isTween = false;
        _this.initEmojiPlayer();
        _this.stage = stage;
        return _this;
    }
    EmojiPlayer.prototype.initEmojiPlayer = function () {
        var shape = new egret.Shape();
        var w = 7 * 72, h = 72;
        shape.graphics.beginFill(0x000000, 0.4);
        shape.graphics.lineStyle(2, 0x000000);
        shape.graphics.drawRect(0, 0, w, h);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    /**
     * 飞行动画
     * @param emoji
     */
    EmojiPlayer.prototype.launchTween = function (emoji) {
        var _this = this;
        if (this.isTween) {
            return;
        }
        if (this.emojiStack.length >= 7 || emoji.deep !== 0) {
            return;
        }
        // 禁用点击
        this.isTween = true;
        var loc = new egret.Point(this.emojiStack.length * 72 + 123, 1200);
        this.emojiStack.push(emoji);
        if (!this.emojiEliMap[emoji.type]) {
            this.emojiEliMap[emoji.type] = [];
        }
        this.emojiEliMap[emoji.type].push(emoji.key);
        // 刷新下一层的emoji样式
        if (emoji.nextEmoji) {
            emoji.nextEmoji.refreshDeep();
        }
        egret.Tween.get(emoji).to({ x: loc.x, y: loc.y }, 500, egret.Ease.sineIn).call(function () {
            _this.isEliminateEmoji();
        });
    };
    /** 消除emoji判断 */
    EmojiPlayer.prototype.isEliminateEmoji = function () {
        var _this = this;
        var tempMap = Object.keys(this.emojiEliMap);
        tempMap.forEach(function (item, i) {
            var ary = _this.emojiEliMap[item] || [];
            if (ary.length >= 3) {
                _this.destEmoji(ary);
                _this.emojiEliMap[item] = [];
            }
        });
        this.isTween = false;
        if (this.emojiStack.length >= 7) {
            setTimeout(function () {
                alert('GAME OVER');
            }, 200);
        }
    };
    /** 消除emoji */
    EmojiPlayer.prototype.destEmoji = function (keys) {
        var _this = this;
        var newStack = this.emojiStack.filter(function (emoji, i) {
            var isDel = keys.includes(emoji.key);
            if (isDel) {
                emoji.destEmoji(function () {
                    _this.stage.removeChild(emoji);
                });
            }
            return !isDel;
        });
        this.emojiStack = newStack;
        this.refreEmojiPlayer();
    };
    /** 刷新场景中的emoji */
    EmojiPlayer.prototype.refreEmojiPlayer = function () {
        this.emojiStack.forEach(function (emoji, i) {
            var loc = new egret.Point(i * 72 + 123, 1200);
            egret.Tween.get(emoji).to({ x: loc.x, y: loc.y }, 200, egret.Ease.sineIn);
        });
    };
    return EmojiPlayer;
}(egret.DisplayObjectContainer));
window["EmojiPlayer"] = EmojiPlayer;
__reflect(EmojiPlayer.prototype,"EmojiPlayer",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ })

/******/ });