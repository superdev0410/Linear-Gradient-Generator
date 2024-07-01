import { useState } from "react";
import { Flex, Box } from "@radix-ui/themes";

import ColorBoxList from "@/components/ColorBoxList";

const App = () => {
  const [colors, setColors] = useState(["#000000"]);

  return (
    <Flex className="gap-10 p-4">
      <Box className="w-96 h-96 border-black border-2" />
      <Flex className="flex-col gap-5">
        <ColorBoxList colors={colors} onChange={setColors} />
      </Flex>
    </Flex>
  );
};

export default App;
