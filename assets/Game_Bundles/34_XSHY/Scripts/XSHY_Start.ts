import { _decorator, Component, director, EventTouch, Node, Sprite, Texture2D } from 'cc';
import { XSHY_GameManager } from './XSHY_GameManager';
import { XSHY_AudioManager } from './XSHY_AudioManager';
const { ccclass, property } = _decorator;

@ccclass('XSHY_Start')
export class XSHY_Start extends Component {
    @property(Node)
    Bg: Node = null;

    start() {




    }



    OnbuttonClick(Btn: EventTouch) {
        XSHY_AudioManager.globalAudioPlay("按钮点击");
        switch (Btn.target.name) {
            case "对战":
                this.Bg.getChildByName("模式选择").active = true;
                break;
            case "商店":
                this.Bg.getChildByName("商店界面").active = true;
                break;
            case "演练":
                XSHY_GameManager.GameMode = "演练";
                this.Bg.getChildByName("角色选择").active = true;
                break;
            case "无尽试炼":
                this.Bg.getChildByName("无尽试炼界面").active = true;
                break;
            case "强者挑战":
                this.Bg.getChildByName("强者挑战界面").active = true;
                break;
        }
    }

}


