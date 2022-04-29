import { Header } from '../../components/header/header';
import { Table } from '../../components/table/table';
import { Column } from '../../components/table/table-props';
import {logRows} from '../../components/table/mock-data';

const makeColumns = (parts:Omit<Column,'id'>[]) => (parts.map((e,id)=>({...e,id})));

const formatter = new Intl.DateTimeFormat('ru-RU',{dateStyle:'short'});

const formatDate = (value:unknown)=>{
  if(typeof value !== 'string'){
    return '';
  }
  const tempDate = new Date(value);
  if(!Number.isFinite(tempDate.valueOf())){
    return '';
  }
  return formatter.format(tempDate);
};

const columns:Column[] = makeColumns([
  {
    size: 'small',
    label: 'ДАТА',
    format: (row)=>formatDate(row['dateBegin']),
  },
  {
    size: 'large',
    label: 'АВТОМОБИЛЬ (МАРКА, МОДЕЛЬ, ГОС.НОМЕР)',
    format: (row)=>`${row['model']}, ${row['year']}, ${row['plate']}`,
  },
  {
    size: 'large',
    label: 'ВОДИТЕЛЬ',
    format: (row)=>`${row['driverName']}`,
  },
  {
    size: 'middle',
    label: 'ТЕХ-ЦЕНТР',
    format: (row)=>`${row['businessUnit']}`,
  },
  {
    size: 'large',
    label: 	'ОПЕРАЦИЯ',
    format: (row)=>`${row['services']}`,
  }
]);

const getKey = (row:Record<string, unknown>)=> `${row['id']}`;

export function Home() {
  return (
    <div className="wrapper">
      <Header selected={0} />
      <main className="main">
        <h1 className="title title--page visually-hidden">Журнал обслуживания</h1>
        <Table columns={columns} rows={logRows} getKey={getKey} />
      </main>
    </div>
  );
}
