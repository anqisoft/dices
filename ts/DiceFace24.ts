import DiceBase from './DiceBase.ts';

export default class DiceFace24 extends DiceBase {
	protected drawGraphs() {
		if (this.TEXT_STYLE.length === 0) {
			this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${
				this.SIDE_LENGTH * 0.8
			}mm;`;
		}

		const ANGLE = 48.275;
		const { SIDE_LENGTH } = this;
		const { getSinByAngle, getCosByAngle } = this;
		const SIDE_SCALE = SIDE_LENGTH / 25;
		const TEXT_OFFSET_SCALE = 0.2;
		const BIGER_ANGLE = 180 - ANGLE * 2;
		const SMALL_ANGLE_COS = Math.cos(ANGLE * Math.PI / 180);
		const HALF_LONG_SIDE_LENGTH = SIDE_LENGTH;
		const SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;

		let ax = 0,
			ay = 0,
			bx = 0,
			by = 0,
			cx = 0,
			cy = 0,
			dx = 0,
			dy = 0,
			ex = 0,
			ey = 0,
			fx = 0,
			fy = 0;
		let aax = 0,
			aay = 0,
			bbx = 0,
			bby = 0,
			ddx = 0,
			ddy = 0,
			eex = 0,
			eey = 0,
			ffx = 0,
			ffy = 0,
			fffx = 0,
			fffy = 0;

		let content_offset_top = -3, content_offset_left = -2;
		content_offset_top *= 1.5, content_offset_left *= 1.5;
		const OFFSET_X = -23.0805019730301175 * SIDE_SCALE;
		// 080501973030115 1.7763568394002505e-14mm
		// 08050197303012 -1.0658141036401503e-14mm
		const X_VALUE = SIDE_LENGTH * 6;
		// const ax1 = SIDE_LENGTH * 6, ay1 = 0;
		const ax1 = X_VALUE + OFFSET_X, ay1 = 0;
		const bx1 = ax1 + SIDE_LENGTH * 2, by1 = 0;
		const cx1 = ax1 + HALF_LONG_SIDE_LENGTH,
			cy1 = SHORT_SIDE_LENGTH * getSinByAngle(ANGLE);
		const angle_cd1 = BIGER_ANGLE - ANGLE;
		const dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1),
			dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
		const angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
		const ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1),
			ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
		const angle_cf1 = BIGER_ANGLE - angle_ce1;
		const fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1),
			fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
		// const c_mirror_ad_x1 = X_VALUE + dx1 - cx1;
		// const c_mirror_ad_y1 = 0 + dy1 - cy1;
		const c_mirror_ad_x1 = ax1 + dx1 - cx1;
		const c_mirror_ad_y1 = ay1 + dy1 - cy1;
		// const aax1 = X_VALUE + (c_mirror_ad_x1 - X_VALUE) * 0.3 + OFFSET_X,
		// 	aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
		const aax1 = ax1 + (c_mirror_ad_x1 - ax1) * 0.3, aay1 = ay1 + (c_mirror_ad_y1 - ay1) * 0.3;
		const bbx1 = 0, bby1 = 0;
		const ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3,
			ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
		const ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
		const c_mirror_ef_x1 = ex1 + fx1 - cx1;
		const c_mirror_ef_y1 = ey1 + fy1 - cy1;
		const eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3,
			eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
		const fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3,
			fffy1 = fy1 + (c_mirror_ef_y1 - fy1) * 0.3;
		ax = ax1,
			ay = ay1,
			bx = bx1,
			by = by1,
			cx = cx1,
			cy = cy1,
			dx = dx1,
			dy = dy1,
			ex = ex1,
			ey = ey1,
			fx = fx1,
			fy = fy1;
		aax = aax1,
			aay = aay1,
			bbx = bbx1,
			bby = bby1,
			ddx = ddx1,
			ddy = ddy1,
			eex = eex1,
			eey = eey1,
			ffx = ffx1,
			ffy = ffy1,
			fffx = fffx1,
			fffy = fffy1;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			dx,
			ay,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			dx,
			ex,
			dy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			aax,
			ay,
			aay,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			dx,
			ddx,
			dy,
			ddy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			aax,
			ddx,
			aay,
			ddy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			eex,
			fffx,
			eey,
			fffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ex,
			eex,
			ey,
			eey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			fffx,
			fy,
			fffy,
			this.viewBox,
		);

		const cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
		const ax4 = ex1, ay4 = ey1;
		const dx4 = dx1, dy4 = dy1;
		const angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 / Math.PI;
		const angle_ce4 = BIGER_ANGLE - angle_cd4;
		const angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
		const angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
		const angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
		const ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
		const ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
		const fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
		const fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
		const bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
		const by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
		const ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
		ax = ax4,
			ay = ay4,
			bx = bx4,
			by = by4,
			cx = cx4,
			cy = cy4,
			dx = dx4,
			dy = dy4,
			ex = ex4,
			ey = ey4,
			fx = fx4,
			fy = fy4;
		ffx = ffx4, ffy = ffy4;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			dx,
			ex,
			dy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);

		const cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
		const dx5 = ax4, dy5 = ay4;
		const ex5 = bx4, ey5 = by4;
		const angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 / Math.PI;
		const angle_ce5 = BIGER_ANGLE - angle_cd5;
		const angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
		const angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
		const angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
		const ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
		const ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
		const bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
		const by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
		const fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
		const fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
		const ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
		const c_mirror_ab_x5 = ax5 + bx5 - cx5, c_mirror_ab_y5 = ay5 + by5 - cy5;
		const aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3,
			aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
		const bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3,
			bby5 = by5 + (c_mirror_ab_y5 - by5) * 0.3;
		ax = ax5,
			ay = ay5,
			bx = bx5,
			by = by5,
			cx = cx5,
			cy = cy5,
			dx = dx5,
			dy = dy5,
			ex = ex5,
			ey = ey5,
			fx = fx5,
			fy = fy5;
		aax = aax5, aay = aay5, bbx = bbx5, bby = bby5, ffx = ffx5, ffy = ffy5;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			dx,
			ay,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			dx,
			ex,
			dy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			aax,
			ay,
			aay,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			bbx,
			by,
			bby,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			aax,
			bbx,
			aay,
			bby,
			this.viewBox,
		);

		const cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
		const dx6 = fx4, dy6 = fy4;
		const ex6 = ex4, ey6 = ey4;
		const angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 / Math.PI;
		const angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 / Math.PI;
		const angle_ca6 = BIGER_ANGLE - angle_cd6;
		const angle_cf6 = BIGER_ANGLE - angle_ce6;
		const angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
		const ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
		const ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
		const bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
		const by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
		const fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
		const fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
		const ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
		const c_mirror_ad_x6 = ax6 + dx6 - cx6, c_mirror_ad_y6 = ay6 + dy6 - cy6;
		const aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3,
			aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
		const ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3,
			ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
		const c_mirror_ef_x6 = ex6 + fx6 - cx6, c_mirror_ef_y6 = ey6 + fy6 - cy6;
		const eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3,
			eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
		const fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3,
			fffy6 = fy6 + (c_mirror_ef_y6 - fy6) * 0.3;
		ax = ax6,
			ay = ay6,
			bx = bx6,
			by = by6,
			cx = cx6,
			cy = cy6,
			dx = dx6,
			dy = dy6,
			ex = ex6,
			ey = ey6,
			fx = fx6,
			fy = fy6;
		aax = aax6,
			aay = aay6,
			ddx = ddx6,
			ddy = ddy6,
			eex = eex6,
			eey = eey6,
			ffx = ffx6,
			ffy = ffy6,
			fffx = fffx6,
			fffy = fffy6;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			dx,
			ay,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			aax,
			ay,
			aay,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			dx,
			ddx,
			dy,
			ddy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			aax,
			ddx,
			aay,
			ddy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			eex,
			fffx,
			eey,
			fffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ex,
			eex,
			ey,
			eey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			fffx,
			fy,
			fffy,
			this.viewBox,
		);

		const cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
		const fx3 = dx4, fy3 = dy4;
		const ex3 = ex4, ey3 = ey4;
		const angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 / Math.PI;
		const angle_ce3 = BIGER_ANGLE - angle_cf3;
		const angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
		const angle_ca3 = BIGER_ANGLE - angle_cd3;
		const angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
		const ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
		const ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
		const bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
		const by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
		const dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
		const dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
		const ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
		ax = ax3,
			ay = ay3,
			bx = bx3,
			by = by3,
			cx = cx3,
			cy = cy3,
			dx = dx3,
			dy = dy3,
			ex = ex3,
			ey = ey3,
			fx = fx3,
			fy = fy3;
		ffx = ffx3, ffy = ffy3;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			dx,
			ay,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			dx,
			ex,
			dy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);

		const cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
		const fx2 = ax3, fy2 = ay3;
		const ex2 = dx3, ey2 = dy3;
		const angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 / Math.PI;
		const angle_ce2 = BIGER_ANGLE - angle_cf2;
		const angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
		const angle_ca2 = BIGER_ANGLE - angle_cd2;
		const angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
		const ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
		const ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
		const bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
		const by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
		const dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
		const dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
		const ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
		const c_mirror_ab_x2 = ax2 + bx2 - cx2, c_mirror_ab_y2 = ay2 + by2 - cy2;
		const aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3,
			aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
		const bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3,
			bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
		const c_mirror_de_x2 = dx2 + ex2 - cx2, c_mirror_de_y2 = dy2 + ey2 - cy2;
		const ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3,
			ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
		const eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3,
			eey2 = ey2 + (c_mirror_de_y2 - ey2) * 0.3;
		ax = ax2,
			ay = ay2,
			bx = bx2,
			by = by2,
			cx = cx2,
			cy = cy2,
			dx = dx2,
			dy = dy2,
			ex = ex2,
			ey = ey2,
			fx = fx2,
			fy = fy2;
		aax = aax2,
			aay = aay2,
			bbx = bbx2,
			bby = bby2,
			ddx = ddx2,
			ddy = ddy2,
			eex = eex2,
			eey = eey2,
			ffx = ffx2,
			ffy = ffy2;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			bx,
			ay,
			by,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			dx,
			ay,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ax,
			cx,
			ay,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			cx,
			by,
			cy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			dx,
			cy,
			dy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			ex,
			cy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			cx,
			fx,
			cy,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			dx,
			ex,
			dy,
			ey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			ex,
			fx,
			ey,
			fy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			fx,
			ffx,
			fy,
			ffy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ax,
			aax,
			ay,
			aay,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			bx,
			bbx,
			by,
			bby,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			aax,
			bbx,
			aay,
			bby,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			dx,
			ddx,
			dy,
			ddy,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ex,
			eex,
			ey,
			eey,
			this.viewBox,
		);
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			ddx,
			eex,
			ddy,
			eey,
			this.viewBox,
		);
	}

	protected setTextsInfo() {
		const { infos, SIDE_LENGTH, setSvgTextInfo } = this;
		const SIZE_SCALE = SIDE_LENGTH / 25;
		[
			// 1-4
			{ x: 195, y: 70.0, angle: 180 },
			{ x: 85, y: 44, angle: 180 },
			{ x: 132.0, y: 138.0, angle: -70.35 },
			{ x: 171.0, y: 36.0, angle: -70.35 },

			// 5-8
			{ x: 158.0, y: 84.0, angle: -83.45 },
			{ x: 12, y: 61.0, angle: 83.45 },
			{ x: 26.0, y: 38, angle: 166.9 },
			{ x: 143.0, y: 63.0, angle: 193.1 },

			// 9-12
			{ x: 148.0, y: 45.0, angle: 13.1 },
			{ x: 125.0, y: 115.0, angle: 206.2 },
			{ x: 105.0, y: 70.0, angle: -70.35 },
			{ x: 175.0, y: 85.0, angle: 96.55 },

			// 13-16
			{ x: 66.0, y: 63.0, angle: 96.55 },
			{ x: 215.5, y: 88.0, angle: 263.45 },
			{ x: 153.0, y: 7.5, angle: 180 },
			{ x: 108, y: 152, angle: 13.1 },

			// 17-20
			{ x: 30.0, y: 78.0, angle: 0 },
			{ x: 130.0, y: 100.0, angle: 26.2 },
			{ x: 122.0, y: 75.0, angle: 109.65 },
			{ x: 52.0, y: 59.0, angle: -83.45 },

			// 21-24
			{ x: 97.5, y: 121.0, angle: 122.75 },
			{ x: 131.0, y: 28.0, angle: 96.55 },
			{ x: 191.0, y: 110.0, angle: 13.1 },
			{ x: 81.5, y: 83.5, angle: 13.1 },
		].forEach(({ x, y, angle }, n) => {
			setSvgTextInfo(infos[n], SIZE_SCALE * x, SIZE_SCALE * y, angle);
		});
	}
}
