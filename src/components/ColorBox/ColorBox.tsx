import { memo } from "react"
import { Box, Heading, Popover } from "@radix-ui/themes"
import { HexColorPicker } from "react-colorful"

import { ColorBoxProps } from "@/components/ColorBox/ColorBox.type"

const ColorBox = ({color, onAddColor, onChangeColor, onRemoveColor}: ColorBoxProps) => {
  const handleChangeColor = (newColor: string) => {
    if (!color) {
      onAddColor(newColor);
    } else {
      onChangeColor(newColor);
    }
  }

  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          <Box
            className="w-10 h-10 border-2 border-black flex items-center justify-center"
            style={{backgroundColor: color}}
          >
            {
              !color &&
              <Heading>+</Heading>
            }
          </Box>
        </Popover.Trigger>
        <Popover.Content>
          <HexColorPicker color={color} onChange={handleChangeColor} />
        </Popover.Content>
      </Popover.Root>
      {
        color &&
        <Heading
          className="w-10 text-center cursor-pointer"
          size="2"
          onClick={onRemoveColor}
        >
          X
        </Heading>
      }
    </>
  )
}

export default memo(ColorBox);