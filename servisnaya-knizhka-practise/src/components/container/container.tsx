import classNames from 'classnames';
import { ReactNode } from 'react';
interface ContainerProps {
  className: string;
  children: ReactNode;
}
export function Container(p: ContainerProps) {
  const { children, className } = p;
  return (
    <div className={classNames('container', className)}>
      {children}
    </div>
  );
}
