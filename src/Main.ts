/** 生成的emoji行列数 */
const MAX_NUM = 4
/** 当前关卡 */
const ACT_LEVEL = 2

/** 获取数组中随机值 */
function getAryRand<T>(ary: T[]): T {
  const randomNum = Math.ceil(Math.random() * (ary.length - 1))
  const res: T = ary[randomNum]
  ary.splice(randomNum, 1)
  return res
}

class Main extends egret.DisplayObjectContainer {

  private emojiMannager = null

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
    let sky = this.createBitmapByName("bg_png");
    sky.fillMode = egret.BitmapFillMode.REPEAT
    this.addChild(sky);
    // let stageW = this.stage.stageWidth;
    // let stageH = this.stage.stageHeight;
    // sky.width = stageW;
    // sky.height = stageH;

    this.createEmoji()
  }

  /** 创建场景的emoji */
  private createEmoji() {
    this.emojiMannager = new EmojiMannager(this)
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
  private stage = null
  /** emoji随机池 */
  private emojiPool = []

  constructor(stage) {
    this.stage = stage
    this.initEmojiPool()
    this.createEmoji()
  }

  /** 初始化emoji随机池 */
  private initEmojiPool() {
    /** 生成emoji的数量 */
    const emojiNum = ACT_LEVEL * MAX_NUM * MAX_NUM * 2

    for (let i = 0; i < emojiNum; i++) {
      this.emojiPool.push(new Emoji(i))
    }
  }

  /** 获取随机池中的emoji */
  private getRandomEmoji() {
    return getAryRand<any>(this.emojiPool)
  }

  private createEmoji() {
    const position = {
      x: 200,
      y: 400
    }
    let firstEmoji = null
    // TODO特殊处理，未定位的bug
    this.stage.addChildAt(new egret.TextField(),1)
    this.stage.addChildAt(new egret.TextField(),1)
    const offsetX = 115, offsetY = 105
    for (let i = 0; i < MAX_NUM; i++) {
      for (let j = 0; j < MAX_NUM; j++) {
        let tempX = position.x + i * offsetX, tempY = position.y + j * offsetY
        for (let k = 0; k <= ACT_LEVEL; k++) {
          const emoji = this.getRandomEmoji()
          emoji.$setX(tempX)
          emoji.$setY(tempY)
          if (k == 0 && j == 0 && i == 0) {
            firstEmoji = emoji
          }
          if (k > 0) {
            emoji.changeGrey()
          }
          const deep = ACT_LEVEL * 2 - k
          this.stage.addChildAt(emoji,deep)
          // this.stage.addChild(emoji)
          // this.stage.setChildIndex(emoji, deep)
          const halfW = 13
          /** 下一层的位置 */
          const nextPositionMap = [
            // 左上角
            { tempX: tempX - halfW, tempY: tempY - halfW },
            // 右上角
            { tempX: tempX + halfW, tempY: tempY - halfW },
            // 左下角
            { tempX: tempX - halfW, tempY: tempY + halfW },
            // 右下角
            { tempX: tempX + halfW, tempY: tempY + halfW },
          ]
          const pos = getAryRand<{ tempX?: number, tempY?: number }>(nextPositionMap)
          tempX = pos.tempX
          tempY = pos.tempY

        }
      }
    }
  }
}

class Emoji extends egret.Bitmap {
  private key = 0
  public isDeep = false
  constructor(key) {
    super();
    this.key = key

    this.init()
  }

  private init() {
    let tempK = (this.key % MAX_NUM) + 1
    let texture: egret.Texture = RES.getRes(`emoji${tempK}_png`);
    this.texture = texture;
    this.width = 72
    this.height = 72
  }


  /** 底层emoji置灰 */
  public changeGrey() {
    //颜色矩阵数组
    const colorMatrix = [
      0.3, 0.6, 0, 0, 0,
      0.3, 0.6, 0, 0, 0,
      0.3, 0.6, 0, 0, 0,
      0, 0, 0, 1, 0
    ];
    const colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
    this.filters = [colorFlilter];
  }
}