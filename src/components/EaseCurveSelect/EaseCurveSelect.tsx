import { Select, Heading } from "@radix-ui/themes";

import { EaseCurveSelectProps } from "@/components/EaseCurveSelect/EaseCurveSelect.type";

const EaseCurveSelect = ({curve, onChange}: EaseCurveSelectProps) => {
  return (
    <>
      <Heading size="4">Easing Curve:</Heading>
      <Select.Root onValueChange={onChange} value={curve}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="Linear">Linear</Select.Item>
          <Select.Item value="Ease">Ease</Select.Item>
          <Select.Item value="Fun">Fun</Select.Item>
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default EaseCurveSelect;

