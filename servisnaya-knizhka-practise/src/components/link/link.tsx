import classNames from 'classnames';
import { ReactNode } from 'react';
interface LinkProps {
  href: string;
  mod: string;
  className: string;
  icon: ReactNode;
  text: string;
}
export function Link(p: Partial<LinkProps>) {
  const { href, mod, className, icon, text } = p;
  return (
    <a href={href}
      className={classNames('link', { [`link--${mod}`]: !!mod }, className)}
    >
      {icon}

      <span>{text}</span>
    </a>

  );
}
