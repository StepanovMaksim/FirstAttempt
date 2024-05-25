import { _decorator, Component, Node } from 'cc';
const { ccclass, property, type } = _decorator

@ccclass('SceneManager')
export class SceneManager extends Component {
	@property({ type: [Node] })
	background: Node[] = []

	private BackgroundNow: number = 0

	start() {}

	update(deltaTime: number) {}

	nextBack() {
		if (this.BackgroundNow < 5) this.BackgroundNow++
		for (let index = 0; index < this.background.length; index++) {
			if (this.BackgroundNow == index)
				this.background[index].active = true
			else this.background[index].active = false
		}
	}

	prevBack() {
		if (this.BackgroundNow > 0) this.BackgroundNow--
		for (let index = 0; index < this.background.length; index++) {
			if (this.BackgroundNow == index)
				this.background[index].active = true
			else this.background[index].active = false
		}
	}
}


