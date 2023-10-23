    public static appendTspan(
      text: SVGTextElement,
      STYLE: string,
      CHAR: string,
      dx: string,
      dy: string,
    ) {
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
      const tspan = document.createElementNS(
        SVG_NS,
        "tspan",
      ) as SVGTSpanElement;
      // tspan.setAttribute('dx', `${dx}mm`);
      // tspan.setAttribute('dy', `${dy}mm`);
      tspan.setAttribute("dx", `${dx}`);
      tspan.setAttribute("dy", `${dy}`);
      // tspan.setAttribute('rotate', rotate.toString());
      tspan.setAttribute(
        "style",
        STYLE.concat(
          "dominant-baseline:middle;text-anchor:middle;",
          CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "",
          CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
        ),
      );

      tspan.innerHTML = CHAR;
      text.appendChild(tspan);
    }