import { ReactNode } from 'react';

export interface Column{
  id: number;
  size: 'small'|'middle'|'large';
  label: string;
  format: (row:Record<string,unknown>)=>ReactNode;
}
