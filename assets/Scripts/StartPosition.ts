import { _decorator, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('StartPosition')
export class StartPosition extends Component {

    public static Position: Vec2

    start() {
        StartPosition.Position = new Vec2(
					this.node.position.x,
					this.node.position.y
				) 
    }

    update(deltaTime: number) {
        
    }
}


