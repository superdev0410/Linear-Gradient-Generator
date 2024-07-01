export interface ColorBoxProps {
  color: string;
  disabled?: boolean;
  disableRemove?: boolean;
  onAddColor: (value: string) => void;
  onChangeColor: (value: string) => void;
  onRemoveColor: () => void;
}