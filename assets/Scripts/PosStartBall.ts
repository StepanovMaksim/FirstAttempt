import { _decorator, Component, Node, instantiate, Vec2 } from 'cc'
const { ccclass, property } = _decorator;

@ccclass('PosStartBall')
export class PosStartBall extends Component {
	@property({ type: Node })
	private StartPosEnemy: Node | null = null

	public static positionX: number
	public static positionY: number
	public static StartPosEnemyBall: Vec2
	start() {
		PosStartBall.positionX = this.node.position.x
		PosStartBall.positionY = this.node.position.y
		PosStartBall.StartPosEnemyBall = new Vec2(
			this.StartPosEnemy.position.x,
			this.StartPosEnemy.position.y
		)
	}

	update(deltaTime: number) {}
}


