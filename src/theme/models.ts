export type BoxSizing = 'content-box' | 'border-box';
export type PositionType = 'relative' | 'absolute';
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';
export type Position = 'top' | 'right' | 'bottom' | 'left';
export type Cursor = 'pointer' | 'none';
export type BorderVariant = { default: string };

export type CustomStyles = { [key: string]: string };
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type TextDecoration = 'overline' | 'line-through' | 'underline' | 'overline underline';
export type Order = 'asc' | 'desc';
export type Shape = 'rounded' | 'square' | 'circle';
export type HorizontalAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'bottom' | 'center';
export type Alignment = {
  x: HorizontalAlignment;
  y: VerticalAlignment;
};

export interface ICustomStyles {
  customStyles?: CustomStyles;
}

export interface InputBaseProps {
  name: string;
  value: string | number;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readonly?: boolean;
}

export interface HTMLEvents<T extends HTMLElement> {
  onMouseOver?: (ev: React.MouseEvent<T>) => void;
  onMouseEnter?: (ev: React.MouseEvent<T>) => void;
  onMouseLeave?: (ev: React.MouseEvent<T>) => void;
  onClick?: (ev: React.MouseEvent<T>) => void;
}
