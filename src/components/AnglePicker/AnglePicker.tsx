import { Heading } from '@radix-ui/themes';
import { ReactAnglePicker } from "react-angle-picker"

import { AnglePickerProps } from '@/components/AnglePicker/AnglePicker.type';

const AnglePicker = ({angle, onChange}: AnglePickerProps) => {
  return (
    <>
      <Heading size="4">Angle: {angle}</Heading>
      <ReactAnglePicker
        value={(angle + 270) % 360}
        onChange={(value) => onChange((value + 90) % 360)}
        width={100} pointerWidth={20}
      />
    </>
  )
}

export default AnglePicker;
