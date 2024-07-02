import { useState, useMemo, useCallback } from "react";
import { Flex, Box, Code, Button } from "@radix-ui/themes";
import chroma, { InterpolationMode } from "chroma-js";

import { ColorBoxList, ColorModeList, PrecisionSlider, AnglePicker, EaseCurveSelect } from "@/components";
import { COLOR_MODES, EASE_CURVE } from "@/utils/constants";
import { ease, linear, fun } from "@/utils/helper";

const App = () => {
  const [colors, setColors] = useState(["#000000"]);
  const [colorMode, setColorMode] = useState(COLOR_MODES[0]);
  const [precision, setPrecision] = useState(1);
  const [angle, setAngle] = useState(0);
  const [curve, setCurve] = useState<string>(EASE_CURVE.Linear);

  const gradient = useMemo(() => {
    const data = chroma.scale(colors).mode(colorMode.toLowerCase() as InterpolationMode).colors(precision + colors.length);
    const colorString = data.map((color, step) => {
      let percent;
      switch (curve) {
        case EASE_CURVE.Linear:
          percent = linear(step / (data.length - 1));
          break;
        case EASE_CURVE.Ease:
          percent = ease(step / (data.length - 1));
          break;
        case EASE_CURVE.Fun:
          percent = fun(step / (data.length - 1));
          break;
        default:
          percent = 0;
      }
      return `${chroma(color).css('hsl')} ${percent}%`;
    }).join(",\n\t");
    return `linear-gradient(\n\t${angle}deg,\n\t${colorString}\n)`;
  }, [colors, colorMode, precision, angle, curve]);

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(gradient);
  }, [gradient]);

  return (
    <Flex className="gap-10 p-4">
      <Box className="w-96 h-96 border-black border-2 flex shrink-0" style={{backgroundImage: gradient}} />
      <Flex className="flex-col gap-5 grow">
        <ColorBoxList colors={colors} onChange={setColors} />
        <ColorModeList colorModes={COLOR_MODES} value={colorMode} onChange={setColorMode} />
        <PrecisionSlider value={precision} min={1} max={20} onChange={setPrecision} />
        <AnglePicker angle={angle} onChange={setAngle} />
        <EaseCurveSelect curve={curve} onChange={setCurve} />
        <Code lang="css">
          <pre>
            background-image: {gradient}
          </pre>
        </Code>
        <Button onClick={onCopy}>Copy CSS</Button>
      </Flex>
    </Flex>
  );
};

export default App;
