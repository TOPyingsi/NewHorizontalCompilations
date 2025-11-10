import { _decorator, Component, director, Node, Sprite, SpriteFrame } from 'cc';
import { XYMJDWY_Incident } from './XYMJDWY_Incident';
import { XYMJDWY_GameData } from './XYMJDWY_GameData';
const { ccclass, property } = _decorator;


@ccclass('XYMJDWY_Prop')
export class XYMJDWY_Prop extends Component {

    public propName: string = "";

    public propValue: number = 0;

    //白绿蓝紫红神
    public propType: string = "";

    public propIcon: Sprite = null;

    onLoad() {
        this.propIcon = this.node.getChildByName("PropIcon").getComponent(Sprite);
    }

    initData(propData: any) {
        this.propName = propData.Name;
        this.propValue = propData.value;
        this.propType = propData.type;

        XYMJDWY_Incident.LoadSprite("/Sprites/Prop/" + propData.Name).then((sp: SpriteFrame) => {
            console.log(sp);
            this.setSpriteFrame(sp);
        });
    }

    setSpriteFrame(sp: SpriteFrame) {
        if (this.propIcon) {
            this.propIcon.spriteFrame = sp;
        }

    }

    getProp() {
        this.node.getChildByName("PropIcon").active = false;
        director.getScene().emit("校园摸金_更新战获");

        console.log(XYMJDWY_GameData.Instance.KnapsackData);
    }
}


