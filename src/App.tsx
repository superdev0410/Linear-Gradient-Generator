import { useState } from "react";
import { Flex, Box } from "@radix-ui/themes";

import { ColorBoxList, ColorModeList, PrecisionSlider } from "@/components";
import { COLOR_MODES } from "@/utils/constants";

const App = () => {
  const [colors, setColors] = useState(["#000000"]);
  const [colorMode, setColorMode] = useState(COLOR_MODES[0]);
  const [precision, setPrecision] = useState(1);

  return (
    <Flex className="gap-10 p-4">
      <Box className="w-96 h-96 border-black border-2" />
      <Flex className="flex-col gap-5">
        <ColorBoxList colors={colors} onChange={setColors} />
        <ColorModeList colorModes={COLOR_MODES} value={colorMode} onChange={setColorMode} />
        <PrecisionSlider value={precision} min={1} max={20} onChange={setPrecision} />
      </Flex>
    </Flex>
  );
};

export default App;
