import DiceBase from "./DiceBase.ts";
import { I18nable } from "./dom.ts";

  export default class DiceFace10 extends DiceBase {
    constructor(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: { left: number; right: number; top: number; bottom: number },
      OPTIONS: object,
      mmToPxScale: number,
      infos: {
        content: (I18nable | string);
        x: number;
        y: number;
        rotate: number | "auto" | "auto-reverse";
      }[],
      CONTENTS: (I18nable | string)[],
      PASTE_WIDTH: number = 0,
      TEXT_STYLE: string | null = null,
    ) {
      const { max, min, sin, cos, tan, atan, PI, abs } = Math;

      SIDE_LENGTH = max(1, SIDE_LENGTH || 10);
      PASTE_WIDTH = max(1, PASTE_WIDTH || 5, SIDE_LENGTH);
      if (SIDE_LENGTH <= 5) { PASTE_WIDTH = max(min(3, SIDE_LENGTH), PASTE_WIDTH); }

      if (!TEXT_STYLE) { TEXT_STYLE = `font-size:${5 * SIDE_LENGTH / 10}mm`; }

      super(
        svg,
        SIDE_LENGTH,
        INNER_LINE_STYLE,
        OUTER_LINE_STYLE,
        viewBox,
        OPTIONS,
        mmToPxScale,
        infos,
        CONTENTS,
        PASTE_WIDTH,
      );
    }

    protected drawGraphs() {
      const { max, min, sin, cos, tan, atan, PI, abs } = Math;

      const {SIDE_LENGTH:SIDE, PASTE_WIDTH, drawInnerLine, drawOuterLine} = this;

      const X_O1 = SIDE * 2.55;
      const Y_O1 = SIDE * 2.55;
    
      // const ANGLE_SMALL = 50.22 * PI / 180;
      // const ANGLE_MIDDLE = 94.5 * PI / 180;
      // const ANGLE_BIG = 120.4 * PI / 180;
    
      // const ANGLE_SMALL = 50.22 * PI / 180;
      const ANGLE_SMALL_DEGREE = 50.22;
      const ANGLE_SMALL = ANGLE_SMALL_DEGREE * PI / 180;
      const HALF_ANGLE_SMALL = ANGLE_SMALL * 0.5;
      const ANGLE_MIDDLE = 94.7 * PI / 180;
      // const ANGLE_BIG = 120.4 * PI / 180;
    
      const ANGLE_BIG = (PI - HALF_ANGLE_SMALL - ANGLE_MIDDLE) * 2;
    
      const ANGLE_90 = PI * 0.5;
      // const ANGLE_EXTEND = 30 * PI / 180;  // PI * 0.25;
      const ANGLE_EXTEND = 45 * PI / 180;  // PI * 0.25;
    
      const ANGLE_B1 = ANGLE_90 - HALF_ANGLE_SMALL;
      const ANGLE_B2 = ANGLE_MIDDLE - ANGLE_B1;
      const SIDE_V1 = SIDE * sin(ANGLE_B2);
      const SIDE_H1 = SIDE * cos(ANGLE_B2);
      const SIDE_LONG = SIDE_H1 / sin(HALF_ANGLE_SMALL);
      const SIDE_V2 = SIDE_LONG * sin(ANGLE_B1);
      const SIZE_LONG_MIDLINE = SIDE_V1 + SIDE_V2;
      // const SIZE_SHORT_MIDLINE = SIDE_H1 * 2;
    
      const ANGLE_A1 = HALF_ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
      const X_B1 = X_O1, Y_B1 = Y_O1 + SIZE_LONG_MIDLINE;
      const X_A1_DELTA = SIDE_LONG * sin(ANGLE_A1);
      const Y_A1_DELTA = SIDE_LONG * cos(ANGLE_A1);
      const X_A1 = X_O1 - X_A1_DELTA, X_C1 = X_O1 + X_A1_DELTA;
      const Y_A1 = Y_O1 + Y_A1_DELTA, Y_C1 = Y_O1 + Y_A1_DELTA;
    
      const ANGLE_D1 = ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
      const X_D1 = X_O1 + SIZE_LONG_MIDLINE * sin(ANGLE_D1);
      const Y_D1 = Y_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_D1);
    
      const ANGLE_E1 = ANGLE_SMALL * 1.5; // 其实是逆时针的，但用绝对值比较方便计算
      const X_E1 = X_O1 + SIDE_LONG * sin(ANGLE_E1);
      const Y_E1 = Y_O1 + SIDE_LONG * cos(ANGLE_E1);
    
      const ANGLE_F1 = ANGLE_SMALL * 2 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_F1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_F1);
      const Y_F1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_F1);
    
      const ANGLE_G1 = ANGLE_SMALL * 2.5 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_G1 = X_O1 + SIDE_LONG * cos(ANGLE_G1);
      const Y_G1 = Y_O1 - SIDE_LONG * sin(ANGLE_G1);
    
      const ANGLE_H1 = ANGLE_SMALL * 3 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_H1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_H1);
      const Y_H1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_H1);
    
      const ANGLE_I1 = PI - ANGLE_SMALL * 3.5; // 其实是逆时针的，但用绝对值比较方便计算
      const X_I1 = X_O1 + SIDE_LONG * sin(ANGLE_I1);
      const Y_I1 = Y_O1 - SIDE_LONG * cos(ANGLE_I1);
    
      const ANGLE_J1 = ANGLE_SMALL * 4 - PI; // 其实是逆时针的，但用绝对值比较方便计算
      const X_J1 = X_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_J1);
      const Y_J1 = Y_O1 - SIZE_LONG_MIDLINE * cos(ANGLE_J1);
    
      const ANGLE_K1 = ANGLE_SMALL * 4.5 - PI; // 其实是逆时针的，但用绝对值比较方便计算
      const X_K1 = X_O1 - SIDE_LONG * sin(ANGLE_K1);
      const Y_K1 = Y_O1 - SIDE_LONG * cos(ANGLE_K1);
    
      // X_A1 + X_B1 = X_O1 + X_O2
      const X_O2 = (X_A1 + X_B1) - X_O1;
      const Y_O2 = (Y_A1 + Y_B1) - Y_O1;
    
      const X_B2 = X_A1, Y_B2 = Y_A1;
      const X_C2 = X_B1, Y_C2 = Y_B1;
      // X_C2 - X_O2 = X_O2 - X_A2 => X_A2 = X_O2 * 2 - X_C2;
      const X_A2 = X_O2 * 2 - X_C2, Y_A2 = Y_C2;
    
      const ANGLE_D2 = ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
      const X_D2 = X_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_D2);
      const Y_D2 = Y_O2 - SIZE_LONG_MIDLINE * cos(ANGLE_D2);
    
      const ANGLE_E2 = ANGLE_SMALL * 1.5; // 其实是逆时针的，但用绝对值比较方便计算
      const X_E2 = X_O2 + SIDE_LONG * sin(ANGLE_E2);
      const Y_E2 = Y_O2 - SIDE_LONG * cos(ANGLE_E2);
    
      const ANGLE_F2 = ANGLE_SMALL * 2 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_F2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_F2);
      const Y_F2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_F2);
    
      const ANGLE_G2 = ANGLE_SMALL * 2.5 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_G2 = X_O2 + SIDE_LONG * cos(ANGLE_G2);
      const Y_G2 = Y_O2 + SIDE_LONG * sin(ANGLE_G2);
    
      const ANGLE_H2 = ANGLE_SMALL * 3 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
      const X_H2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_H2);
      const Y_H2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_H2);
    
      const ANGLE_I2 = PI - ANGLE_SMALL * 3.5; // 其实是逆时针的，但用绝对值比较方便计算
      const X_I2 = X_O2 + SIDE_LONG * sin(ANGLE_I2);
      const Y_I2 = Y_O2 + SIDE_LONG * cos(ANGLE_I2);
    
      const ANGLE_J2 = ANGLE_SMALL * 4 - PI; // 其实是逆时针的，但用绝对值比较方便计算
      const X_J2 = X_O2 - SIZE_LONG_MIDLINE * sin(ANGLE_J2);
      const Y_J2 = Y_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_J2);
    
      const ANGLE_K2 = ANGLE_SMALL * 4.5 - PI; // 其实是逆时针的，但用绝对值比较方便计算
      const X_K2 = X_O2 - SIDE_LONG * sin(ANGLE_K2);
      const Y_K2 = Y_O2 + SIDE_LONG * cos(ANGLE_K2);
    
      // (QUARTER_PI + HALF_PI - HALF_ANGLE_SMALL) - HALF_PI;
      const ANGLE_A2E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
      const X_A2E = X_A2 - PASTE_WIDTH * sin(ANGLE_A2E);
      const Y_A2E = Y_A2 + PASTE_WIDTH * cos(ANGLE_A2E);
    
      const ANGLE_O2E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
      const X_O2E = X_O2 - PASTE_WIDTH * sin(ANGLE_O2E);
      const Y_O2E = Y_O2 - PASTE_WIDTH * cos(ANGLE_O2E);
    
      const ANGLE_O1E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
      const X_O1E = X_O1 - PASTE_WIDTH * sin(ANGLE_O1E);
      const Y_O1E = Y_O1 + PASTE_WIDTH * cos(ANGLE_O1E);
    
      const ANGLE_K1E = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + ANGLE_SMALL * 4.5 - PI);
      const X_K1E = X_K1 + PASTE_WIDTH * sin(ANGLE_K1E);
      const Y_K1E = Y_K1 - PASTE_WIDTH * cos(ANGLE_K1E);
    
      // (QUARTER_PI + HALF_PI - HALF_ANGLE_SMALL) - HALF_PI
      const ANGLE_A1E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
      const X_A1E = X_A1 - PASTE_WIDTH * sin(ANGLE_A1E);
      const Y_A1E = Y_A1 - PASTE_WIDTH * cos(ANGLE_A1E);
    
      const ANGLE_B1E = ANGLE_BIG * 0.5 + ANGLE_EXTEND - ANGLE_90;
      // console.log({ ANGLE_B1E });
      const X_B1E = X_B1 + PASTE_WIDTH * cos(ANGLE_B1E);
      const Y_B1E = Y_B1 + PASTE_WIDTH * sin(ANGLE_B1E);
    
      const ANGLE_C1E1 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + HALF_ANGLE_SMALL);
      const X_C1E1 = X_C1 - PASTE_WIDTH * sin(ANGLE_C1E1);
      const Y_C1E1 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E1);
    
      const ANGLE_C1E2 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE - HALF_ANGLE_SMALL);
      const X_C1E2 = X_C1 + PASTE_WIDTH * sin(ANGLE_C1E2);
      const Y_C1E2 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E2);
    
      const ANGLE_D1E1 = atan((X_D1 - X_C1) / (Y_C1 - Y_D1)) - ANGLE_EXTEND;
      const X_D1E1 = X_D1 - PASTE_WIDTH * sin(ANGLE_D1E1);
      const Y_D1E1 = Y_D1 + PASTE_WIDTH * cos(ANGLE_D1E1);
    
      const ANGLE_DE = atan((X_E1 - X_D1) / (Y_D1 - Y_E1))
      const ANGLE_D1E2 = ANGLE_DE - ANGLE_EXTEND;
      const X_D1E2 = X_D1 + PASTE_WIDTH * cos(ANGLE_D1E2);
      const Y_D1E2 = Y_D1 + PASTE_WIDTH * sin(ANGLE_D1E2);
    
      const ANGLE_E1E1 = ANGLE_EXTEND - ANGLE_DE;  //(HALF_PI - ANGLE_DE);
      const X_E1E1 = X_E1 + PASTE_WIDTH * sin(ANGLE_E1E1);
      const Y_E1E1 = Y_E1 + PASTE_WIDTH * cos(ANGLE_E1E1);
    
      const ANGLE_EF = atan((X_F1 - X_E1) / (Y_E1 - Y_F1)); // console.log(ANGLE_EF, QUARTER_PI);
      const ANGLE_E1E2 = ANGLE_EXTEND - ANGLE_EF;
      const X_E1E2 = X_E1 + PASTE_WIDTH * cos(ANGLE_E1E2);
      const Y_E1E2 = Y_E1 - PASTE_WIDTH * sin(ANGLE_E1E2);
    
      // const ANGLE_F1E1 = HALF_PI - ANGLE_EF - QUARTER_PI;
      const ANGLE_F1E1 = ANGLE_90 - (ANGLE_EF + ANGLE_EXTEND);
      const X_F1E1 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E1);
      const Y_F1E1 = Y_F1 + PASTE_WIDTH * cos(ANGLE_F1E1);
    
      // OK
      const ANGLE_FG = atan((X_F1 - X_G1) / (Y_F1 - Y_G1));
      const ANGLE_F1E2 = ANGLE_90 - (ANGLE_FG + ANGLE_EXTEND);
      const X_F1E2 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E2);
      const Y_F1E2 = Y_F1 - PASTE_WIDTH * cos(ANGLE_F1E2);
    
      // OK
      const ANGLE_G1E1 = ANGLE_FG - ANGLE_EXTEND;
      const X_G1E1 = X_G1 + PASTE_WIDTH * cos(ANGLE_G1E1);
      const Y_G1E1 = Y_G1 - PASTE_WIDTH * sin(ANGLE_G1E1);
    
      // OK
      const ANGLE_GH = atan((X_G1 - X_H1) / (Y_G1 - Y_H1));
      const ANGLE_G1E2 = ANGLE_90 - (ANGLE_GH + ANGLE_EXTEND);
      const X_G1E2 = X_G1 + PASTE_WIDTH * sin(ANGLE_G1E2);
      const Y_G1E2 = Y_G1 - PASTE_WIDTH * cos(ANGLE_G1E2);
    
      // OK
      const ANGLE_H1E1 = ANGLE_EXTEND - ANGLE_GH; //  console.log('ANGLE_H1E1', ANGLE_H1E1);
      const X_H1E1 = X_H1 + PASTE_WIDTH * cos(ANGLE_H1E1);
      const Y_H1E1 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E1);
    
      // OK
      const ANGLE_HI = atan((X_H1 - X_I1) / (Y_H1 - Y_I1));
      const ANGLE_H1E2 = ANGLE_EXTEND + ANGLE_HI;
      const X_H1E2 = X_H1 - PASTE_WIDTH * cos(ANGLE_H1E2);
      const Y_H1E2 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E2);
    
      // OK
      const ANGLE_I1E1 = ANGLE_EXTEND + ANGLE_HI;  // QUARTER_PI - ANGLE_HI;
      const X_I1E1 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E1);
      const Y_I1E1 = Y_I1 + PASTE_WIDTH * sin(ANGLE_I1E1);
    
      // OK
      const ANGLE_IJ = atan((X_I1 - X_J1) / (Y_I1 - Y_J1));
      const ANGLE_I1E2 = ANGLE_EXTEND + ANGLE_IJ;
      const X_I1E2 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E2);
      const Y_I1E2 = Y_I1 - PASTE_WIDTH * sin(ANGLE_I1E2);
    
      const ANGLE_J1E1 = ANGLE_IJ - ANGLE_EXTEND; // OK
      const X_J1E1 = X_J1 + PASTE_WIDTH * cos(ANGLE_J1E1);
      const Y_J1E1 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E1);
    
      const ANGLE_JK = atan((X_J1 - X_K1) / (Y_K1 - Y_J1)); // OK
      const ANGLE_J1E2 = ANGLE_JK - ANGLE_EXTEND;
      const X_J1E2 = X_J1 - PASTE_WIDTH * cos(ANGLE_J1E2);
      const Y_J1E2 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E2);

      
    drawOuterLine(X_B1E, X_B1, Y_B1E, Y_B1);
    drawOuterLine(X_B1E, X_C1E1, Y_B1E, Y_C1E1);
    drawOuterLine(X_C1E1, X_C1, Y_C1E1, Y_C1);

    // drawOuterLine(X_C1, X_C1E2, Y_C1, Y_C1E2);
    // drawOuterLine(X_C1E2, X_D1E1, Y_C1E2, Y_D1E1);
    // drawOuterLine(X_D1E1, X_D1, Y_D1E1, Y_D1);
    drawOuterLine(X_C1, X_C1E2, Y_C1, Y_C1E2);
    drawOuterLine(X_C1E2, X_D1E1, Y_C1E2, Y_D1E1);
    drawOuterLine(X_D1E1, X_D1, Y_D1E1, Y_D1);

    drawOuterLine(X_D1, X_D1E2, Y_D1, Y_D1E2);
    drawOuterLine(X_D1E2, X_E1E1, Y_D1E2, Y_E1E1);
    drawOuterLine(X_E1E1, X_E1, Y_E1E1, Y_E1);

    drawOuterLine(X_E1, X_E1E2, Y_E1, Y_E1E2);
    drawOuterLine(X_E1E2, X_F1E1, Y_E1E2, Y_F1E1);
    drawOuterLine(X_F1E1, X_F1, Y_F1E1, Y_F1);

    drawOuterLine(X_F1, X_F1E2, Y_F1, Y_F1E2);
    drawOuterLine(X_F1E2, X_G1E1, Y_F1E2, Y_G1E1);
    drawOuterLine(X_G1E1, X_G1, Y_G1E1, Y_G1);

    drawOuterLine(X_G1, X_G1E2, Y_G1, Y_G1E2);
    drawOuterLine(X_G1E2, X_H1E1, Y_G1E2, Y_H1E1);
    drawOuterLine(X_H1E1, X_H1, Y_H1E1, Y_H1);

    drawOuterLine(X_H1, X_H1E2, Y_H1, Y_H1E2);
    drawOuterLine(X_H1E2, X_I1E1, Y_H1E2, Y_I1E1);
    drawOuterLine(X_I1E1, X_I1, Y_I1E1, Y_I1);

    drawOuterLine(X_I1, X_I1E2, Y_I1, Y_I1E2);
    drawOuterLine(X_I1E2, X_J1E1, Y_I1E2, Y_J1E1);
    drawOuterLine(X_J1E1, X_J1, Y_J1E1, Y_J1);

    drawOuterLine(X_J1, X_J1E2, Y_J1, Y_J1E2);
    drawOuterLine(X_J1E2, X_K1E, Y_J1E2, Y_K1E);
    drawOuterLine(X_K1E, X_K1, Y_K1E, Y_K1);
    // drawOuterLine(X_J1E2, X_K1E1, Y_J1E2, Y_K1E1);
    // drawOuterLine(X_K1E1, X_K1, Y_K1E1, Y_K1);

    // drawOuterLine(X_K1, X_K1E2, Y_K1, Y_K1E2);
    // drawOuterLine(X_K1E2, X_1E1, Y_K1E2, Y_1E1);
    // drawOuterLine(X_1E1, X_1, Y_1E1, Y_1);

    drawOuterLine(X_O1, X_K1, Y_O1, Y_K1);
    drawInnerLine(X_K1, X_J1, Y_K1, Y_J1);
    drawInnerLine(X_J1, X_I1, Y_J1, Y_I1);
    drawInnerLine(X_I1, X_H1, Y_I1, Y_H1);
    drawInnerLine(X_H1, X_G1, Y_H1, Y_G1);
    drawInnerLine(X_G1, X_F1, Y_G1, Y_F1);
    drawInnerLine(X_F1, X_E1, Y_F1, Y_E1);
    drawInnerLine(X_E1, X_D1, Y_E1, Y_D1);
    drawInnerLine(X_D1, X_C1, Y_D1, Y_C1);
    drawInnerLine(X_C1, X_B1, Y_C1, Y_B1);
    drawInnerLine(X_B1, X_A1, Y_B1, Y_A1);
    drawInnerLine(X_O1, X_I1, Y_O1, Y_I1);
    drawInnerLine(X_O1, X_G1, Y_O1, Y_G1);
    drawInnerLine(X_O1, X_E1, Y_O1, Y_E1);
    drawInnerLine(X_O1, X_C1, Y_O1, Y_C1);
    drawInnerLine(X_O1, X_A1, Y_O1, Y_A1);

    drawOuterLine(X_O2, X_K2, Y_O2, Y_K2);
    drawOuterLine(X_K2, X_J2, Y_K2, Y_J2);
    drawOuterLine(X_J2, X_I2, Y_J2, Y_I2);
    drawOuterLine(X_I2, X_H2, Y_I2, Y_H2);
    drawOuterLine(X_H2, X_G2, Y_H2, Y_G2);
    drawOuterLine(X_G2, X_F2, Y_G2, Y_F2);
    drawOuterLine(X_F2, X_E2, Y_F2, Y_E2);
    drawOuterLine(X_E2, X_D2, Y_E2, Y_D2);
    drawOuterLine(X_D2, X_C2, Y_D2, Y_C2);
    drawInnerLine(X_C2, X_B2, Y_C2, Y_B2);
    drawOuterLine(X_B2, X_A2, Y_B2, Y_A2);
    drawInnerLine(X_O2, X_I2, Y_O2, Y_I2);
    drawInnerLine(X_O2, X_G2, Y_O2, Y_G2);
    drawInnerLine(X_O2, X_E2, Y_O2, Y_E2);
    drawInnerLine(X_O2, X_C2, Y_O2, Y_C2);
    drawInnerLine(X_O2, X_A2, Y_O2, Y_A2);

    drawOuterLine(X_O1, X_O1E, Y_O1, Y_O1E);
    drawOuterLine(X_O1E, X_A1E, Y_O1E, Y_A1E);
    drawOuterLine(X_A1E, X_A1, Y_A1E, Y_A1);

    drawOuterLine(X_K1E, X_K1, Y_K1E, Y_K1);

    drawOuterLine(X_O2, X_O2E, Y_O2, Y_O2E);
    drawOuterLine(X_O2E, X_A2E, Y_O2E, Y_A2E);
    drawOuterLine(X_A2E, X_A2, Y_A2E, Y_A2);
  
    this.textData = {
      X_A1,
      X_A2,
      X_C1,
      X_C2,
      X_E1,
      X_E2,
      X_G1,
      X_G2,
      X_I1,
      X_I2,
      X_K1,
      X_K2,
  
      Y_A1,
      Y_A2,
      Y_C1,
      Y_C2,
      Y_E1,
      Y_E2,
      Y_G1,
      Y_G2,
      Y_I1,
      Y_I2,
      Y_K1,
      Y_K2,
      
      ANGLE_SMALL_DEGREE,
    };
  }

  private textData:DiceFace10TextDataType | undefined;

  protected setTextsInfo() {
    const {CONTENTS} = this;
    const {
      X_A1,
      X_A2,
      X_C1,
      X_C2,
      X_E1,
      X_E2,
      X_G1,
      X_G2,
      X_I1,
      X_I2,
      X_K1,
      X_K2,
  
      Y_A1,
      Y_A2,
      Y_C1,
      Y_C2,
      Y_E1,
      Y_E2,
      Y_G1,
      Y_G2,
      Y_I1,
      Y_I2,
      Y_K1,
      Y_K2,
      
      ANGLE_SMALL_DEGREE,
    } = this.textData as DiceFace10TextDataType;
    
    [
      // { x: (X_A2 + X_C2) * 0.5, y: (Y_A2 + Y_C2) * 0.5, rotate: 0 }, // 2OABC, 1
      // { x: (X_I1 + X_K1) * 0.5, y: (Y_I1 + Y_K1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 4 }, // 1OIJK, 2

      // { x: (X_E2 + X_G2) * 0.5, y: (Y_E2 + Y_G2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 2 }, // 2OEFG, 3
      // { x: (X_C1 + X_E1) * 0.5, y: (Y_C1 + Y_E1) * 0.5, rotate: - ANGLE_SMALL_DEGREE }, // 1OCDE, 4

      // { x: (X_I2 + X_K2) * 0.5, y: (Y_I2 + Y_K2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 4 }, // 2OIJK, 5
      // { x: (X_E1 + X_G1) * 0.5, y: (Y_E1 + Y_G1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 2 }, // 1OEFG, 6

      // { x: (X_G2 + X_I2) * 0.5, y: (Y_G2 + Y_I2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 3 }, // 2OGHI, 7
      // { x: (X_A1 + X_C1) * 0.5, y: (Y_A1 + Y_C1) * 0.5, rotate: 0 }, // 1OABC, 8

      // { x: (X_C2 + X_E2) * 0.5, y: (Y_C2 + Y_E2) * 0.5, rotate: ANGLE_SMALL_DEGREE }, // 2OCDE, 9
      // { x: (X_G1 + X_I1) * 0.5, y: (Y_G1 + Y_I1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 3 }, // 1OGHI, 10

      { x: (X_A2 + X_C2) * 0.5, y: (Y_A2 + Y_C2) * 0.5, rotate: 0 }, // 2OABC, 1
      { x: (X_G1 + X_I1) * 0.5, y: (Y_G1 + Y_I1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 3 },// 1OIJK, 2

      { x: (X_E2 + X_G2) * 0.5, y: (Y_E2 + Y_G2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 2 }, // 2OEFG, 3
      { x: (X_A1 + X_C1) * 0.5, y: (Y_A1 + Y_C1) * 0.5, rotate: 0 }, // 1OCDE, 4

      { x: (X_I2 + X_K2) * 0.5, y: (Y_I2 + Y_K2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 4 }, // 2OIJK, 5
      { x: (X_C1 + X_E1) * 0.5, y: (Y_C1 + Y_E1) * 0.5, rotate: - ANGLE_SMALL_DEGREE }, // 1OEFG, 6

      { x: (X_G2 + X_I2) * 0.5, y: (Y_G2 + Y_I2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 3 }, // 2OGHI, 7
      { x: (X_I1 + X_K1) * 0.5, y: (Y_I1 + Y_K1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 4 },// 1OABC, 8

      { x: (X_C2 + X_E2) * 0.5, y: (Y_C2 + Y_E2) * 0.5, rotate: ANGLE_SMALL_DEGREE }, // 2OCDE, 9
      { x: (X_E1 + X_G1) * 0.5, y: (Y_E1 + Y_G1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 2 },// 1OGHI, 10
    ].map(({ x, y, rotate }, i) => {
      this.infos.push({ content: CONTENTS[i], x, y, rotate});
    });
  }
}
  
  type DiceFace10TextDataType  = {
    X_A1: number,
    X_A2: number,
    X_C1: number,
    X_C2: number,
    X_E1: number,
    X_E2: number,
    X_G1: number,
    X_G2: number,
    X_I1: number,
    X_I2: number,
    X_K1: number,
    X_K2: number,

    Y_A1: number,
    Y_A2: number,
    Y_C1: number,
    Y_C2: number,
    Y_E1: number,
    Y_E2: number,
    Y_G1: number,
    Y_G2: number,
    Y_I1: number,
    Y_I2: number,
    Y_K1: number,
    Y_K2: number,
    
    ANGLE_SMALL_DEGREE: number,
  };