import classNames from 'classnames';
import { Column } from './table-props';

type THeadProps = {
  columns: Pick<Column, 'label' | 'id' | 'size'>[];
}
export function THead(p: THeadProps) {
  const { columns } = p;
  return (
    <thead className="table__header" >
      <tr className="table__row">
        {columns.map(
          ({ id, size, label }) => (
            <th key={id} className={classNames('table__cell', { [`table__cell--${size}`]: !!size })}>
              {label}
            </th>
          )
        )}
      </tr>
    </thead>
  );
}
