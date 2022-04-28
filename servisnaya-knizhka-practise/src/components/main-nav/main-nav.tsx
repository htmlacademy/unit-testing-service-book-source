import { MainNavItem } from './main-nav-item';

interface MainNavProps {
  selected: number;
}
const settings = [
  {
    text: 'Журнал обслуживания'
  },
  {
    text: 'Сводная таблица'
  }
].map((e, id) => ({ ...e, id }));

export function MainNav(p: Partial<MainNavProps>) {
  const { selected } = p;
  return (

    <nav className="main-nav">
      <div className="main-nav__wrapper">
        <ul className="main-nav__list">
          {
            settings.map(({ id, text }) => <MainNavItem key={id} active={id === selected} text={text} />)
          }
        </ul>
      </div>
    </nav>

  );
}
