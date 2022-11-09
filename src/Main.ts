/** 生成的emoji行列数 */
const MAX_NUM = 5
/** 当前关卡 */
const ACT_LEVEL = 3
/** 生成emoji的偏移量 */
const halfW = 20
/** 生成emoji的间隔 */
const offsetX = 92, offsetY = 92


/** 获取数组中随机值 */
function getAryRand<T>(ary: T[]): T {
  const randomNum = Math.ceil(Math.random() * (ary.length - 1))
  const res: T = ary[randomNum]
  ary.splice(randomNum, 1)
  return res
}

class Main extends egret.DisplayObjectContainer {
  /** emoji管理器 */
  private emojiMannager = null
  /** emoji消除栏 */
  private emojiPlayer = null

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage(event: egret.Event) {

    egret.lifecycle.addLifecycleListener((context) => {
      // custom lifecycle plugin

      context.onUpdate = () => {

      }
    })

    egret.lifecycle.onPause = () => {
      egret.ticker.pause();
    }

    egret.lifecycle.onResume = () => {
      egret.ticker.resume();
    }

    this.runGame().catch(e => {
      console.log(e);
    })



  }

  private async runGame() {
    await this.loadResource()
    this.createGameScene();
    const result = await RES.getResAsync("description_json")
  }

  private async loadResource() {
    try {
      const loadingView = new LoadingUI();
      this.stage.addChild(loadingView);
      await RES.loadConfig("resource/default.res.json", "resource/");
      await RES.loadGroup("preload", 0, loadingView);
      this.stage.removeChild(loadingView);
    }
    catch (e) {
      console.error(e);
    }
  }

  private textfield: egret.TextField;

  /**
   * 创建游戏场景
   * Create a game scene
   */
  private createGameScene() {
    const stageWidth = this.stage.stageWidth
    let sky = this.createBitmapByName("bg_png");
    sky.fillMode = egret.BitmapFillMode.REPEAT
    this.addChild(sky);
    const emojiPlayer = this.emojiPlayer = new EmojiPlayer(this.stage)
    emojiPlayer.$setX((stageWidth - emojiPlayer.width) / 2)
    emojiPlayer.$setY(1200)
    this.stage.addChild(emojiPlayer)
    this.createEmoji()
    // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
    //   console.log('test')
    // },this)
  }

  /** 创建场景的emoji */
  private createEmoji() {
    this.emojiMannager = new EmojiMannager(this.stage, this.emojiPlayer)
  }

  /**
   * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
   * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
   */
  private createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
  }
}

class EmojiMannager {
  /** 舞台 */
  private stage: egret.Stage = null
  /** emoji随机池 */
  private emojiPool: Emoji[] = []
  /** emoji消除栏 */
  private emojiPlayer: EmojiPlayer = null

  constructor(stage, emojiPlayer) {
    this.stage = stage
    this.emojiPlayer = emojiPlayer
    this.initEmojiPool()
    this.createEmoji()
  }

  /** 初始化emoji随机池 */
  private initEmojiPool() {
    /** 生成emoji的数量 */
    const emojiNum = ACT_LEVEL * MAX_NUM * MAX_NUM * 2

    for (let i = 0; i < emojiNum; i++) {
      const emoji = new Emoji(i)
      emoji.touchEnabled = true
      emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        this.emojiPlayer.launchTween(emoji)
      }, this)
      this.emojiPool.push(emoji)
    }
  }

  /** 获取随机池中的emoji */
  private getRandomEmoji() {
    return getAryRand<any>(this.emojiPool)
  }

  private createEmoji() {
    const position = {
      x: (this.stage.stageWidth - offsetX * MAX_NUM + (offsetX - 72)) * 0.5,
      y: 400
    }
    for (let i = 0; i < MAX_NUM; i++) {
      for (let j = 0; j < MAX_NUM; j++) {
        let tempX = position.x + i * offsetX, tempY = position.y + j * offsetY
        let preEmoji: Emoji = null
        for (let k = 0; k <= ACT_LEVEL; k++) {
          const emoji: Emoji = this.getRandomEmoji()
          if (!preEmoji) {
            preEmoji = emoji
          } else {
            preEmoji.nextEmoji = emoji
            preEmoji = preEmoji.nextEmoji
          }
          emoji.$setX(tempX)
          emoji.$setY(tempY)
          emoji.deep = k
          emoji.changeGrey()
          this.stage.addChildAt(emoji, this.stage.numChildren - k)

          /** 下一层偏移的位置 */
          const nextPositionMap = [
            { tempX: tempX - halfW },
            { tempX: tempX + halfW },
            { tempY: tempY + halfW },
            { tempY: tempY + halfW },
          ]
          const pos = getAryRand<{ tempX?: number, tempY?: number }>(nextPositionMap)
          tempX = pos.tempX || tempX
          tempY = pos.tempY || tempY
        }
      }
    }
  }
}

class Emoji extends egret.DisplayObjectContainer {
  /** 唯一key值 */
  public key = 0
  /** emoji类型 */
  public type = 0
  /** emoji深度 */
  public deep = 0
  /** 下一层的emoji */
  public nextEmoji: Emoji = null
  constructor(key) {
    super();
    this.key = key
    this.init()
  }

  private init() {
    let result = new egret.Bitmap();
    let tempK = (this.key % MAX_NUM) + 1
    this.type = tempK
    let texture: egret.Texture = RES.getRes(`emoji${tempK}_png`);
    result.texture = texture;
    this.addChild(result)
    this.width = 72
    this.height = 72
  }
  /** 刷新deep层数 */
  public refreshDeep() {
    if (this.deep <= 0) {
      return
    }
    this.deep = 0
    this.changeGrey()
  }


  /** 底层emoji置灰 */
  public changeGrey() {
    let colorMatrix = [
      0.3, 0.6, 0, 0, 0,
      0.3, 0.6, 0, 0, 0,
      0.3, 0.6, 0, 0, 0,
      0, 0, 0, 1, 0
    ]
    if (this.deep <= 0) {
      colorMatrix = [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0
      ]
    }
    const colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
    this.filters = [colorFlilter];
  }

  /** 消除emoji */
  public destEmoji(call) {
    egret.Tween.get(this).to({ alpha: 0 }, 300).call(() => { call && call() });
  }
}

class EmojiPlayer extends egret.DisplayObjectContainer {
  /** emoji消除栈 */
  private emojiStack: Emoji[] = []
  /** emoji消除图，类型为属性名，对应栈中的key为值 */
  private emojiEliMap = {}

  public stage: egret.Stage = null
  /** tween动画的时候不让点击 */
  private isTween: boolean = false

  constructor(stage) {
    super()
    this.initEmojiPlayer()
    this.stage = stage
  }

  private initEmojiPlayer() {
    const shape: egret.Shape = new egret.Shape();
    const w: number = 7 * 72, h: number = 72

    shape.graphics.beginFill(0x000000, 0.4);
    shape.graphics.lineStyle(2, 0x000000);
    shape.graphics.drawRect(0, 0, w, h);
    shape.graphics.endFill();
    this.addChild(shape)
  }

  /**
   * 飞行动画
   * @param emoji 
   */
  public launchTween(emoji: Emoji) {
    if (this.isTween) {
      return
    }
    if (this.emojiStack.length >= 7 || emoji.deep !== 0) {
      return
    }
    // 禁用点击
    this.isTween = true
    const loc: egret.Point = new egret.Point(this.emojiStack.length * 72 + 123, 1200)
    this.emojiStack.push(emoji)
    if (!this.emojiEliMap[emoji.type]) {
      this.emojiEliMap[emoji.type] = []
    }
    this.emojiEliMap[emoji.type].push(emoji.key)
    // 刷新下一层的emoji样式
    if (emoji.nextEmoji) {
      emoji.nextEmoji.refreshDeep()
    }
    egret.Tween.get(emoji).to({ x: loc.x, y: loc.y }, 500, egret.Ease.sineIn).call(() => {
      this.isEliminateEmoji()
    });
  }

  /** 消除emoji判断 */
  private isEliminateEmoji() {
    const tempMap = Object.keys(this.emojiEliMap)
    tempMap.forEach((item, i) => {
      const ary = this.emojiEliMap[item] || []
      if (ary.length >= 3) {
        this.destEmoji(ary)
        this.emojiEliMap[item] = []
      }
    })
    this.isTween = false

    if (this.emojiStack.length >= 7) {
      setTimeout(() => {
        alert('GAME OVER')
      }, 200);
    }
  }

  /** 消除emoji */
  private destEmoji(keys) {
    const newStack = this.emojiStack.filter((emoji, i) => {
      const isDel = keys.includes(emoji.key)
      if (isDel) {
        emoji.destEmoji(() => {
          this.stage.removeChild(emoji)
        })
      }
      return !isDel
    })
    this.emojiStack = newStack
    this.refreEmojiPlayer()
  }

  /** 刷新场景中的emoji */
  private refreEmojiPlayer() {
    this.emojiStack.forEach((emoji, i) => {
      const loc: egret.Point = new egret.Point(i * 72 + 123, 1200)
      egret.Tween.get(emoji).to({ x: loc.x, y: loc.y }, 200, egret.Ease.sineIn);
    })
  }
}