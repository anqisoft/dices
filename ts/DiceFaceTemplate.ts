import DiceBase from './DiceBase.ts';

export default class DiceFaceSubClass extends DiceBase {
	protected drawGraphs() {
		this.fixTextStyle(0.45);
	}

	protected setTextsInfo() {
	}
}
