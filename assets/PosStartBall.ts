import { _decorator, Component, Node, instantiate } from 'cc'
const { ccclass, property } = _decorator;

@ccclass('PosStartBall')
export class PosStartBall extends Component {
    

    public static positionX: number
    public static positionY: number

    start() {
        PosStartBall.positionX = this.node.position.x;
        PosStartBall.positionY = this.node.position.y;
    }

    update(deltaTime: number) {
        
    }
}


