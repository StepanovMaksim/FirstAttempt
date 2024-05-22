import { _decorator, BoxCollider2D, CircleCollider2D, Component, Contact2DType, IPhysics2DContact, Node, RigidBody2D, Vec2, Vec3,} from 'cc';
import {positionX, positionY, Ball} from './Ball';
import { StartPosition } from './StartPosition';
const { ccclass, property } = _decorator;

@ccclass('PC')
export class PC extends Component {
	@property({ type: Number })
	private speed: number
	private collider: any

	private rigidbody: any
	vector: Vec2 = new Vec2(0, 0)
	start() {
		this.rigidbody = this.node.getComponent(RigidBody2D)

		this.collider = this.node.getComponent(CircleCollider2D)
		if (this.collider) {
			this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
		}
	}

	update(deltaTime: number) {
		if (Ball.stepNow) {
			if (positionY < this.node.position.y) {
				if (this.node.position.y > 115) {
					if (this.node.position.x < positionX - 20)
						this.rigidbody.applyForceToCenter(new Vec2(this.speed*2000, -this.speed*100), true)
					else if (this.node.position.x > positionX + 20)
						this.rigidbody.applyForceToCenter(new Vec2(-this.speed*2000, -this.speed*100), true)
					else if (
						this.node.position.x > positionX - 20 &&
						this.node.position.x < positionX + 20
					)
						this.rigidbody.applyForceToCenter(
							new Vec2(0, -this.speed * 1000),
							true
						)

					if (
						this.node.position.x - positionX < 50 &&
						this.node.position.x - positionX > -50 &&
						this.node.position.y - positionY < 80 &&
						Ball.hitNow
					) {
						this.rigidbody.applyLinearImpulse(
							new Vec2(0, -this.speed * 150),
							new Vec2(this.node.worldPosition.x, this.node.worldPosition.y)
						)
						Ball.hitNow = !Ball.hitNow
					}
				} else {
					if (this.node.position.x < positionX)
						this.rigidbody.applyForceToCenter(new Vec2(this.speed*1000, 0), true)
					else this.rigidbody.applyForceToCenter(new Vec2(-this.speed*1000, 0), true)
				}
			}
		} else {
			if (this.node.position.x < StartPosition.Position.x - 20) {
				if (this.node.position.y < StartPosition.Position.y - 20)
					this.rigidbody.applyForceToCenter(
						new Vec2(this.speed * 1000, this.speed * 500),
						true
					)
			} else if (this.node.position.x > StartPosition.Position.x + 20) {
				if (this.node.position.y < StartPosition.Position.y - 20)
					this.rigidbody.applyForceToCenter(new Vec2(-this.speed * 1000, this.speed * 500),
						true
					)
			} else if (
				this.node.position.x >= StartPosition.Position.x - 20 &&
				this.node.position.x <= StartPosition.Position.x + 20
			) {
				if (this.node.position.y < StartPosition.Position.y - 20)
					this.rigidbody.applyForceToCenter(new Vec2(0, this.speed*500), true)
			}
		}

		console.log(StartPosition.Position.y)
	}

	onBeginContact(
		selfCollider: CircleCollider2D,
		otherCollider: CircleCollider2D,
		contact: IPhysics2DContact | null
	) {}
}


