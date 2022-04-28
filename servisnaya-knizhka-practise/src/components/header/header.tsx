import classNames from 'classnames';
import { Container } from '../container/container';
import { Link } from '../link/link';

import {ReactComponent as IconInfo} from '../../img/sprite/icon-info.svg';
import { MainNav } from '../main-nav/main-nav';

const ICON_SIZE = 22;

interface HeaderProps {
  mod: string;
  selected: number;
}

export function Header(p: Partial<HeaderProps>) {
  const { mod, selected } = p;
  return (
    <header
      className={classNames('header', { [`header--${mod}`]: !!mod })}
    >
      <Container className=' header__wrapper'>
        <MainNav selected={selected} />
        <div className='header__terms'>
          <Link
            icon={<IconInfo width={ICON_SIZE} height={ICON_SIZE}/>}
            text={'Условия использования'}
          />
        </div>
      </Container>
    </header>
  );
}
