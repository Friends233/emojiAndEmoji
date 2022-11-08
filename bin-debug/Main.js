var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
/** 生成的emoji行列数 */
var MAX_NUM = 4;
/** 当前关卡 */
var ACT_LEVEL = 2;
/** 获取数组中随机值 */
function getAryRand(ary) {
    var randomNum = Math.ceil(Math.random() * (ary.length - 1));
    var res = ary[randomNum];
    ary.splice(randomNum, 1);
    return res;
}
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.emojiMannager = null;
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
        var sky = this.createBitmapByName("bg_png");
        sky.fillMode = egret.BitmapFillMode.REPEAT;
        this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;
        this.createEmoji();
    };
    /** 创建场景的emoji */
    Main.prototype.createEmoji = function () {
        this.emojiMannager = new EmojiMannager(this);
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
__reflect(Main.prototype, "Main");
var EmojiMannager = (function () {
    function EmojiMannager(stage) {
        /** 舞台 */
        this.stage = null;
        /** emoji随机池 */
        this.emojiPool = [];
        this.stage = stage;
        this.initEmojiPool();
        this.createEmoji();
    }
    /** 初始化emoji随机池 */
    EmojiMannager.prototype.initEmojiPool = function () {
        /** 生成emoji的数量 */
        var emojiNum = ACT_LEVEL * MAX_NUM * MAX_NUM * 2;
        for (var i = 0; i < emojiNum; i++) {
            this.emojiPool.push(new Emoji(i));
        }
    };
    /** 获取随机池中的emoji */
    EmojiMannager.prototype.getRandomEmoji = function () {
        return getAryRand(this.emojiPool);
    };
    EmojiMannager.prototype.createEmoji = function () {
        var position = {
            x: 200,
            y: 400
        };
        var firstEmoji = null;
        this.stage.addChildAt(new egret.TextField(), 1);
        this.stage.addChildAt(new egret.TextField(), 1);
        var offsetX = 115, offsetY = 105;
        for (var i = 0; i < MAX_NUM; i++) {
            for (var j = 0; j < MAX_NUM; j++) {
                var tempX = position.x + i * offsetX, tempY = position.y + j * offsetY;
                for (var k = 0; k <= ACT_LEVEL; k++) {
                    var emoji = this.getRandomEmoji();
                    emoji.$setX(tempX);
                    emoji.$setY(tempY);
                    if (k == 0 && j == 0 && i == 0) {
                        firstEmoji = emoji;
                    }
                    if (k > 0) {
                        emoji.changeGrey();
                    }
                    var deep = ACT_LEVEL * 2 - k;
                    this.stage.addChildAt(emoji, deep);
                    // this.stage.addChild(emoji)
                    // this.stage.setChildIndex(emoji, deep)
                    var halfW = 13;
                    /** 下一层的位置 */
                    var nextPositionMap = [
                        // 左上角
                        { tempX: tempX - halfW, tempY: tempY - halfW },
                        // 右上角
                        { tempX: tempX + halfW, tempY: tempY - halfW },
                        // 左下角
                        { tempX: tempX - halfW, tempY: tempY + halfW },
                        // 右下角
                        { tempX: tempX + halfW, tempY: tempY + halfW },
                    ];
                    var pos = getAryRand(nextPositionMap);
                    tempX = pos.tempX;
                    tempY = pos.tempY;
                }
            }
        }
    };
    return EmojiMannager;
}());
__reflect(EmojiMannager.prototype, "EmojiMannager");
var Emoji = (function (_super) {
    __extends(Emoji, _super);
    function Emoji(key) {
        var _this = _super.call(this) || this;
        _this.key = 0;
        _this.isDeep = false;
        _this.key = key;
        _this.init();
        return _this;
    }
    Emoji.prototype.init = function () {
        var tempK = (this.key % MAX_NUM) + 1;
        var texture = RES.getRes("emoji" + tempK + "_png");
        this.texture = texture;
        this.width = 72;
        this.height = 72;
    };
    /** 底层emoji置灰 */
    Emoji.prototype.changeGrey = function () {
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.filters = [colorFlilter];
    };
    return Emoji;
}(egret.Bitmap));
__reflect(Emoji.prototype, "Emoji");
//# sourceMappingURL=Main.js.map