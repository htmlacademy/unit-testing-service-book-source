import {Column} from './table-props';
import { TrData } from './tr-data';

interface TBodyProps {
  columns:Pick<Column,'format'|'id'|'size'>[];
  rows: Record<string,unknown>[];
  getKey: (row:Record<string,unknown>)=>string;
}
export function TBody(p:TBodyProps){
  const {
    columns,
    rows,
    getKey,
  } = p;
  return (
    <tbody>
      {
        rows.map((row)=>(
          <TrData key={getKey(row)} columns={columns} row={row} />
        ))
      }
    </tbody>
  );
}
