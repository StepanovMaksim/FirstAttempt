import { _decorator, Component, Node,  EventKeyboard, macro, Vec2, RigidBody2D, Contact2DType, IPhysics2DContact, Label, Collider2D, BoxCollider2D, CircleCollider2D, input, Input, KeyCode, math, Quat } from 'cc';
import { Ball } from './Ball';

const { ccclass, property } = _decorator;



@ccclass('Hit')
export class Hit extends Component {
	@property({ type: Number })
	private walk_force: number
	@property({ type: Number })
	private hit_force: number

	private score: number = 0

	private collider: any
	private collider1: any
	private rotateZ: number = 0
	private rigidbody: any
	private directionH: number = 0
	private directionV: number = 0
	//	private walk_force: number = 2000
	private jump_force: number = 3500
	hit: Boolean = false

	onLoad() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
	}

	start() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
		this.rigidbody = this.node.getComponent(RigidBody2D)

		this.collider = this.node.getComponent(CircleCollider2D)
		this.collider1 = this.node.getComponent(BoxCollider2D)
		if (this.collider) {
			this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
		}
	}

	update(deltaTime: number) {
		if (this.node.position.y < -40)
			this.rigidbody.applyForceToCenter(
				new Vec2(
					this.directionH * this.walk_force * 1000,
					this.directionV * this.walk_force * 1000
				),
				true
			)
		else
			this.rigidbody.applyForceToCenter(
				new Vec2(0, -this.walk_force * 500),
				true
			)

		// if (this.hit) {
		// 	this.node.setRotation(new Quat(0, 0, this.rotateZ))
		// 	this.rotateZ -=0.1
		// }
		// if (this.node.rotation.z < -0.2)
		// 	this.hit = false;
		// if (this.node.rotation.z < 0.1 && !this.hit)	{
		// 	this.node.setRotation(new Quat(0, 0, this.rotateZ))
		// 	this.rotateZ += 0.01
		// }
		//this.collider.restitution = 0
	}

	onBeginContact(
		selfCollider: CircleCollider2D,
		otherCollider: CircleCollider2D,
		contact: IPhysics2DContact | null
	) {
		if (otherCollider.name == 'ball<CircleCollider2D>') {
		}
	}

	onKeyDown(event: EventKeyboard) {
		switch (event.keyCode) {
			case KeyCode.KEY_A:
			case KeyCode.ARROW_LEFT: {
				this.directionH = -1
				break
			}
			case KeyCode.KEY_D:
			case KeyCode.ARROW_RIGHT: {
				this.directionH = 1
				break
			}
			case KeyCode.KEY_S:
			case KeyCode.ARROW_DOWN: {
				this.directionV = -1
				break
			}
			case KeyCode.KEY_W:
			case KeyCode.ARROW_UP: {
				this.directionV = 1
				break
			}
			case KeyCode.SPACE: {
				this.rigidbody.applyLinearImpulse(
					new Vec2(0, this.hit_force*100),
					new Vec2(this.node.worldPosition.x, this.node.worldPosition.y)
				)

				//this.hit = true
				break
			}
			default:
				break
		}
	}
	onKeyUp(event: EventKeyboard) {
		switch (event.keyCode) {
			case KeyCode.KEY_A:
			case KeyCode.ARROW_LEFT: {
				this.directionH = 0
				break
			}
			case KeyCode.KEY_D:
			case KeyCode.ARROW_RIGHT: {
				this.directionH = 0
				break
			}
			case KeyCode.KEY_S:
			case KeyCode.ARROW_DOWN: {
				this.directionV = 0
				break
			}
			case KeyCode.KEY_W:
			case KeyCode.ARROW_UP: {
				this.directionV = 0
				break
			}
			default:
				break
		}
	}
}


