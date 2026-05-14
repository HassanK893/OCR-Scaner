
export type Option = {
value: string,
label: string
}


export interface ICustomSelect {
  options: Option[];
  placeholder?: string;
  clickAction: (option: Option) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: Option;
}
