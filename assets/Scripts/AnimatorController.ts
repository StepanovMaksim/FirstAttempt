import { _decorator, Component, Node, input, Input, KeyCode, EventKeyboard, Animation, SkeletalAnimation, SkeletalAnimationComponent, animation } from 'cc'
const { ccclass, property } = _decorator;

@ccclass('AnimatorController')
export class AnimatorController extends Component {
	
	onLoad() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
		input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
	}

	update(deltaTime: number) {}

	public Anim(value: number) {
		let animationController = this.node.getComponent(animation.AnimationController)
      //  animationComponent.defaultClip = animationComponent.clips[0]
        let variables = animationController.getVariables()
		
		animationController.setValue('Integer', value)
		
	}

start() {
		input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)  
    }

	onKeyDown(event: EventKeyboard) {
		switch (event.keyCode) {
			case KeyCode.KEY_A:
			case KeyCode.ARROW_LEFT: {
				this.Anim(1)
				break
			}
			case KeyCode.KEY_D:
			case KeyCode.ARROW_RIGHT: {
				this.Anim(1)
				break
			}
			case KeyCode.KEY_S:
			case KeyCode.ARROW_DOWN: {
				this.Anim(1)
				break
			}
			case KeyCode.KEY_W:
			case KeyCode.ARROW_UP: {
				this.Anim(1)
				break
			}
			case KeyCode.SPACE: {
				this.Anim(4)
				
				//this.hit = true
				break
			}

			case KeyCode.KEY_E: {
				this.Anim(5)
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
			case KeyCode.SPACE: {
				
				//this.hit = true
				break
			}
			default:
				break
		}
	}
}


