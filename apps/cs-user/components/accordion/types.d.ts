export interface TAccordionProps {
  title: string;
  idAccordion: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  classNameChildren?: string;
  hasImage?: boolean;
  src?: StaticImport;
  imgwidth?: number;
  imgheight?: number;
  styleImg?: string;
}
