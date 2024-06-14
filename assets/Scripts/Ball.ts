import { _decorator, BoxCollider2D, CircleCollider2D, Component, Contact2DType, IPhysics2DContact, Node, RigidBody2D, Vec2, Label, PolygonCollider2D, random } from 'cc';
import { PosStartBall } from './PosStartBall';
const { ccclass, property } = _decorator;

export var positionX = 10;
export var positionY = 10

@ccclass('Ball')
export class Ball extends Component {
	@property({ type: Label })
	private scoreLabel: Label | null = null
	@property({ type: Node })
	private WindowWin: Node | null = null
	@property({ type: Node })
	private WindowLose: Node | null = null
	@property({type: Number})
	private MaxSpeed: number
	@property({ type: [Node] })
	background: Node[] = []

	private BackgroundNow: number = 0
	private scorePlayer: number = 0
	private scoreEnemy: number = 0
	public static stepNow: boolean
	public static hitNow: boolean
	private collider: any
	private contactLose: boolean = false
	private timeContactLose: number = 0
	private rigidbody: any
	private startGame: boolean = false

	private timeFly: number = 0
	vector: Vec2 = new Vec2(0, 0)
	speedX: number = 0
	speedY: number = 2
	start() {
		this.rigidbody = this.node.getComponent(RigidBody2D)

		this.collider = this.node.getComponent(CircleCollider2D)
		if (this.collider) {
			this.collider.on(Contact2DType.BEGIN_CONTACT, this.begin, this)
		}
		if (this.collider) {
			this.collider.on(Contact2DType.BEGIN_CONTACT, this.CheckLose, this)
		}
		this.vector = new Vec2(this.speedX, this.speedY)
		Ball.stepNow = false
		Ball.hitNow = true
		
	}

	update(deltaTime: number) {
		positionX = this.node.position.x
		positionY = this.node.position.y
		
		if (this.contactLose) {
			this.timeContactLose += deltaTime
			this.rigidbody.linearDamping = 1000
			if (this.timeContactLose > 3) {
				this.contactLose = false
				this.timeContactLose = 0
				if (this.scoreEnemy < 3 && this.scorePlayer < 3)
					this.node.setPosition(PosStartBall.positionX, PosStartBall.positionY, 75)
				else this.node.setPosition(10000, 10000)
				this.rigidbody.linearDamping = 0.5
				this.timeFly = 0
			}
		}
		if (this.startGame) {
			this.timeFly += deltaTime
			if (this.timeFly > 5) {
				this.contactLose = true
				this.timeContactLose = 2
				this.startGame = false
				Ball.stepNow = false
				this.timeFly = 0
			}
		}
		if (this.rigidbody.linearVelocity.x > this.MaxSpeed)
			this.rigidbody.linearVelocity = new Vec2(this.MaxSpeed, this.rigidbody.linearVelocity.y)
		if (this.rigidbody.linearVelocity.y > this.MaxSpeed)
			this.rigidbody.linearVelocity = new Vec2(this.rigidbody.linearVelocity.x, this.MaxSpeed)
		if (this.rigidbody.linearVelocity.x < -this.MaxSpeed)
			this.rigidbody.linearVelocity = new Vec2(-this.MaxSpeed, this.rigidbody.linearVelocity.y)
		if (this.rigidbody.linearVelocity.y < -this.MaxSpeed)
			this.rigidbody.linearVelocity = new Vec2(this.rigidbody.linearVelocity.x, -this.MaxSpeed)
		
	}

	begin(
		selfCollider: CircleCollider2D,
		otherCollider: BoxCollider2D,
		contact: IPhysics2DContact | null
	) {
		if (otherCollider.name == 'B1<BoxCollider2D>') {
			Ball.stepNow = true
			Ball.hitNow = true
			this.startGame = true
			this.timeFly = 0
		}
		if (otherCollider.name == 'Enemy<BoxCollider2D>') {
			Ball.stepNow = false
			this.timeFly = 0
		}
	}

	CheckLose(
		selfCollider: CircleCollider2D,
		otherCollider: PolygonCollider2D,
		contact: IPhysics2DContact | null
	) {
		if (otherCollider.name == 'LosePlayer<PolygonCollider2D>') {
			this.scoreEnemy++
			this.scoreLabel.string = this.scorePlayer + ' : ' + this.scoreEnemy
			this.contactLose = true
			Ball.stepNow = false
			Ball.hitNow = true
			if (this.scoreEnemy == 3) this.WindowLose.active = true
		}
		if (otherCollider.name == 'LoseEnemy<PolygonCollider2D>') {
			this.scorePlayer++
			this.scoreLabel.string = this.scorePlayer + ' : ' + this.scoreEnemy
			this.contactLose = true
			Ball.stepNow = false
			Ball.hitNow = true
			if (this.scorePlayer == 3) this.WindowWin.active = true
		}
	}

	refreshRound() {
		this.scoreEnemy = 0
		this.scorePlayer = 0
		this.node.setPosition(PosStartBall.positionX, PosStartBall.positionY)
		this.WindowLose.active = false
		this.WindowWin.active = false
		this.scoreLabel.string = this.scorePlayer + ' : ' + this.scoreEnemy
		this.BackgroundNow = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(0)) + Math.ceil(0))
		for (let index = 0; index < this.background.length; index++) {
			if (this.BackgroundNow == index) this.background[index].active = true
			else this.background[index].active = false
		}
	}
}


