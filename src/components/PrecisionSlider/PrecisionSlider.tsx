import { Heading, Slider, Flex, Text } from "@radix-ui/themes"

import { PrecisionSliderProps } from "@/components/PrecisionSlider/PrecisionSlider.type"

const PrecisionSlider = ({value, min, max, onChange}: PrecisionSliderProps) => {
  return (
    <Flex className="flex-col gap-5">
      <Heading size="4">Precision: </Heading>
      <Flex className="items-center gap-3">
        <Slider size="1" value={[value]} min={min} max={max} onValueChange={(value) => onChange(value[0])} />
        <Text>{value}</Text>
      </Flex>
    </Flex>
  )
}

export default PrecisionSlider;
