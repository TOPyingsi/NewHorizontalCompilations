import { _decorator, Component, EventTouch, Node, NodeEventType, v3, Vec3 } from 'cc';
import { BHPD_GameMgr } from '../BHPD_GameMgr';
const { ccclass, property } = _decorator;

@ccclass('BHPD_Iron')
export class BHPD_Iron extends Component {
    private startPos: Vec3 = Vec3.ZERO;
    start() {
        this.startPos = this.node.worldPosition.clone();

        this.node.on(NodeEventType.TOUCH_START, this.touchStart, this);
        this.node.on(NodeEventType.TOUCH_MOVE, this.touchMove, this)
        this.node.on(NodeEventType.TOUCH_END, this.touchEnd, this);
    }

    touchStart(event: EventTouch) {
        const touchPos = v3(event.getUILocation().x, event.getUILocation().y);
        this.node.worldPosition = touchPos;
    }

    touchMove(event: EventTouch) {
        const touchPos = v3(event.getUILocation().x, event.getUILocation().y);
        this.node.worldPosition = touchPos;

        if (BHPD_GameMgr.instance.couldFire) {
            BHPD_GameMgr.instance.onIronMove(touchPos);
        }
    }

    touchEnd(event: EventTouch) {
        this.node.worldPosition = this.startPos;
    }
}


