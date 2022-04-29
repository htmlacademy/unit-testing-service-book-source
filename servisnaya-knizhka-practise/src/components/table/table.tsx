import classNames from 'classnames';
import { TBody } from './t-body';
import { THead } from './t-head';
import { Column } from './table-props';
interface TableProps {
  className?: string | undefined;
  columns: Column[];
  rows: Record<string,unknown>[];
  getKey: (row:Record<string,unknown>)=>string;
}
export function Table(p: TableProps) {
  const { className, columns, rows, getKey } = p;
  return (
    <div className={classNames('table', className)}>
      <table className='table__table'>
        <THead columns={columns} />
        <TBody rows={rows} columns={columns} getKey={getKey} />
      </table>
    </div>
  );
}
