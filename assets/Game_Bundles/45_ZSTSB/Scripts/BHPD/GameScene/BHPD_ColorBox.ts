import { _decorator, Color, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BHPD_ColorBox')
export class BHPD_ColorBox extends Component {


    colorSprite: Sprite = null;
    color: Color = new Color();
    colorIndex: number = 0;

    Finish: boolean = false;
    start() {

    }

    update(deltaTime: number) {

    }

    initData(color: Color, colorIndex: number) {
        this.color = color;
        this.colorIndex = colorIndex;

        this.colorSprite = this.node.getChildByName("圈堆").getComponent(Sprite);

        this.colorSprite.color = color;

    }

    isFinish() {
        this.node.getChildByName("bg").getComponent(Sprite).grayscale = true;
        this.colorSprite.grayscale = true;
        this.Finish = true;
        this.node.getChildByName("完成").active = true;
    }
}


