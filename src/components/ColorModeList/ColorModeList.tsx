import { Flex, Heading, Button } from "@radix-ui/themes";

import { ColorModeListProps } from "@/components/ColorModeList/ColorModeList.type";

const ColorModeList = ({colorModes, value, onChange}: ColorModeListProps) => {
  return (
    <>    
    <Heading size="4">Color Mode: </Heading>
    <Flex className="gap-5">
      {
        colorModes.map((mode) => (
          <Button
            key={mode}
            onClick={() => onChange(mode)}
            className={mode === value ? "text-black" : "text-gray-500"}
            variant="outline"
            size="4"
          >
            {mode}
          </Button>
        ))
      }
    </Flex>
    </>
  )
}

export default ColorModeList;
