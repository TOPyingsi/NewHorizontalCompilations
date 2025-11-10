import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('XYMJDWY_SellPanel')
export class XYMJDWY_SellPanel extends Component {
    start() {

    }

    OnExit() {
        this.node.active = false;
    }
}


