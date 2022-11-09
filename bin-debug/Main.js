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
var MAX_NUM = 5;
/** 当前关卡 */
var ACT_LEVEL = 3;
/** 生成emoji的偏移量 */
var halfW = 20;
/** 生成emoji的间隔 */
var offsetX = 92, offsetY = 92;
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
__reflect(Main.prototype, "Main");
var EmojiMannager = (function () {
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
__reflect(EmojiMannager.prototype, "EmojiMannager");
var Emoji = (function (_super) {
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
__reflect(Emoji.prototype, "Emoji");
var EmojiPlayer = (function (_super) {
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
__reflect(EmojiPlayer.prototype, "EmojiPlayer");
//# sourceMappingURL=Main.js.map