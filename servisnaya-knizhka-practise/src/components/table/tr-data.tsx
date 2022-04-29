import classNames from 'classnames';
import { Column } from './table-props';

interface TrDataPros {
  row: Record<string, unknown>;
  columns: Pick<Column, 'format' | 'id' | 'size'>[]
}
export function TrData(p: TrDataPros) {
  const { columns, row } = p;
  return (
    <tr className="table__row">
      {
        columns.map(({ format, id, size }) => (
          <td key={id} className={classNames('table__cell', { [`table__cell--${size}`]: !!size })}>
            {
              format(row)
            }
          </td>
        ))
      }
    </tr>
  );
}
