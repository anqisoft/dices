import DiceBase from './DiceBase.ts';

export default class DiceFace60 extends DiceBase {
	protected drawGraphs() {
		if (this.TEXT_STYLE.length === 0) {
			this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${
				this.SIDE_LENGTH * 0.45
			}mm;`;
		}
	}

	protected setTextsInfo() {
	}
}
