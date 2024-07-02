import { Flex, Heading } from "@radix-ui/themes";

import ColorBox from "@/components/ColorBox/ColorBox";
import { ColorBoxListProps } from "@/components/ColorBoxList/ColorBoxList.type";

const ColorBoxList = ({colors, onChange}: ColorBoxListProps) => {
  const onAddColor = (newColor: string) => onChange([...colors, newColor]);
  const onChangeColor = (newColor: string, index: number) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    onChange(newColors);
  }
  const onRemoveColor = (index: number) => {

    onChange([...colors.slice(0, index), ...colors.slice(index + 1)]);
  }

  return (
    <>    
    <Heading size="4">Colors: </Heading>
    <Flex className="gap-5">
      {
        Array(5).fill(0).map((_, index) => (
          <ColorBox
            key={index}
            color={colors[index] ?? ""}
            disableRemove={index === 0}
            disabled={!colors[index] && !colors[index - 1]}
            onAddColor={onAddColor}
            onChangeColor={(newColor) => onChangeColor(newColor, index)}
            onRemoveColor={() => onRemoveColor(index)}
          />
        ))
      }
    </Flex>
    </>
  )
}

export default ColorBoxList;
