import { _decorator, BoxCollider2D, Component, EventKeyboard, Input, input, KeyCode, Node, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Racket')
export class Racket extends Component {
    onLoad() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
	}

    private rigidbody: any
    private collider: any
    start() {
        this.rigidbody = this.node.getComponent(RigidBody2D);
        this.collider = this.node.getComponent(BoxCollider2D);
        console.log(this.rigidbody)
    }

    update(deltaTime: number) {
        
    }

    ColliderOn () {
        
        this.collider.enabled = true;
    }

    ColliderOff () {
        
        this.collider.enabled = false;
    }

    onKeyDown(event: EventKeyboard) {
		switch (event.keyCode) {
			case KeyCode.KEY_A:
			case KeyCode.ARROW_LEFT: {
                this.ColliderOff();
				break
			}
			case KeyCode.KEY_D:
			case KeyCode.ARROW_RIGHT: {
                this.ColliderOff();
				break
			}
			case KeyCode.KEY_S:
			case KeyCode.ARROW_DOWN: {
                this.ColliderOff();
				break
			}
			case KeyCode.KEY_W:
			case KeyCode.ARROW_UP: {
                this.ColliderOff();
				break
			}
			case KeyCode.SPACE:
            case KeyCode.KEY_E: {
				this.ColliderOn();

				
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

				break
			}
			case KeyCode.KEY_D:
			case KeyCode.ARROW_RIGHT: {

				break
			}
			case KeyCode.KEY_S:
			case KeyCode.ARROW_DOWN: {

				break
			}
			case KeyCode.KEY_W:
			case KeyCode.ARROW_UP: {

				break
			}
			default:
				break
		}
	}

}


