import { Link } from '../link/link';
import classNames from 'classnames';

interface MainNavItemProps{
  text:string;
  active: boolean;
  mod: string;
  className: string;
}
export function MainNavItem(p:Partial<MainNavItemProps>){
  const {text, active, className, mod} = p;
  return(
    <li className="main-nav__item">
      <Link
        className={classNames(className, {'link--active':active})}
        mod={mod}
        text={text}
      />
    </li>
  );
}
