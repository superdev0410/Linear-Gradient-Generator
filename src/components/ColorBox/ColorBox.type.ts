export interface ColorBoxProps {
  color: string;
  onAddColor: (value: string) => void;
  onChangeColor: (value: string) => void;
  onRemoveColor: () => void;
}