import { _decorator, Component, Node, input, Input, KeyCode, EventKeyboard, Animation, SkeletalAnimation, SkeletalAnimationComponent } from 'cc'
const { ccclass, property } = _decorator;

@ccclass('AnimatorController')
export class AnimatorController extends Component {
	
	onLoad() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
	}

	update(deltaTime: number) {}

	public Anim() {
		const animationComponent = this.node.getComponent(SkeletalAnimation)
        animationComponent.defaultClip = animationComponent.clips[0]
        animationComponent.play()
	}

start() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)  
    }

	onKeyDown(event: EventKeyboard) {
		switch (event.keyCode) {
			case KeyCode.KEY_A:
			case KeyCode.ARROW_LEFT: {
				this.Anim()
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


