import { MouseEvent, memo, useCallback, useState, useEffect } from "react"
import { Box, Heading, Popover, Flex } from "@radix-ui/themes"
import { HexColorInput, HexColorPicker } from "react-colorful"

import { ColorBoxProps } from "@/components/ColorBox/ColorBox.type"

const ColorBox = ({
  color,
  disabled = false,
  disableRemove = false,
  onAddColor,
  onChangeColor,
  onRemoveColor
}: ColorBoxProps) => {
  const [curColor, setCurColr] = useState(color);

  const handleChangeColor = (newColor: string) => {
    if (!color) {
      onAddColor(newColor);
    } else {
      onChangeColor(newColor);
    }
  }

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (disabled)  {
      e.preventDefault();
      e.stopPropagation();
    } else if (!color) {
      setCurColr("#000000");
    }
  }, [disabled, color]);

  useEffect(() => {
    setCurColr(color);
  }, [color]);

  return (
    <Flex className="flex-col">
      <Popover.Root>
        <Popover.Trigger>
          <Box
            className="w-10 h-10 border-2 border-black flex items-center justify-center"
            style={{backgroundColor: curColor}}
            onClick={handleClick}
          >
            {
              !curColor && !disabled &&
              <Heading>+</Heading>
            }
          </Box>
        </Popover.Trigger>
        <Popover.Content className="flex flex-col gap-4">
          <HexColorInput color={curColor} onChange={handleChangeColor} />
          <HexColorPicker color={curColor} onChange={handleChangeColor} />
        </Popover.Content>
      </Popover.Root>
      {
        color && !disableRemove &&
        <Heading
          className="w-10 text-center cursor-pointer"
          size="2"
          onClick={onRemoveColor}
        >
          X
        </Heading>
      }
    </Flex>
  )
}

export default memo(ColorBox);