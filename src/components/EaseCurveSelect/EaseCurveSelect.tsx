import { Select, Heading } from "@radix-ui/themes";

import { EaseCurveSelectProps } from "@/components/EaseCurveSelect/EaseCurveSelect.type";
import { EASE_CURVE } from "@/utils/constants";

const EaseCurveSelect = ({curve, onChange}: EaseCurveSelectProps) => {
  return (
    <>
      <Heading size="4">Easing Curve:</Heading>
      <Select.Root onValueChange={onChange} value={curve}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value={EASE_CURVE.Linear}>Linear</Select.Item>
          <Select.Item value={EASE_CURVE.Ease}>Ease</Select.Item>
          <Select.Item value={EASE_CURVE.Fun}>Fun</Select.Item>
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default EaseCurveSelect;

