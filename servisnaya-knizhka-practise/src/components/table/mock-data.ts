const MAX_ITEMS = 50;
const baseDate = new Date(2018,1,1);
const getRandomInt = (low:number, high:number)=>{
  if(!Number.isInteger(low)){
    throw new Error();
  }
  if(!Number.isInteger(high)){
    throw new Error();
  }
  if(low>=high){
    throw new RangeError();
  }
  if(low<0){
    throw new RangeError();
  }
  return Math.floor(low + (high-low)*Math.random());
};

const getRandomZ = (high:number) => getRandomInt(0,high);

const getRandomElement = <T>(items:T[])=>{
  const result = items[getRandomZ(items.length)];
  if(typeof result === 'undefined'){
    throw new Error();
  }
  return result;
};
const inflate = <T>(item:T)=>({item, weight:Math.random()});
const deflate = <T>({item}:{item:T})=>item;
type WithWeight = {
  weight:number;
}
const byWeight = (a:WithWeight, b:WithWeight)=>a.weight-b.weight;
const getRandomSubset = <T>(items:T[])=>items.map(inflate).sort(byWeight).map(deflate).slice(0,getRandomInt(1,3));

const cars = ['bmw x5','mercedes glc','mitsubishi outlander','toyota rav4','toyota outlander'];
const firstLetter = ['A','B','C','E','K'];

const names =[
  'Бычков Вячеслав',
  'Климов Владимир',
  'Павлова Элина',
  'Волкова Алиса',
  'Васильев Никита',
  'Носова Екатерина',
  'Кузьмина Ярослава',
  'Крылова Кристина',
  'Егоров Лев',
  'Громов Александр',
];

const streets = [
  'Центральная',
  'Молодежная',
  'Школьная',
  'Лесная',
  'Садовая',
  'Советская',
  'Новая',
  'Набережная',
  'Заречная',
  'Зеленая',
];

const operations =[
  'промыть топливный бак, трубопроводы, приборы системы питания, систему охлаждения двигателя для удаления из нее накипи и осадков',
  'проверить исправность термостата и подготовить теплый капот для двигателя;',
  'проверить действие отопителя кабины;',
  'снять карбюратор, разобрать и очистить его;',
  'отрегулировать насос-ускоритель, подогрев горючей смеси во впускном трубопроводе;',
  'снять топливный насос, разобрать его, очистить и проверить состояние деталей;',
  'промыть аккумуляторные батареи, залить электролит с плотностью, соответствующей зимней норме, утеплить батареи;',
  'произвести регулировку силы зарядного тока генератора до зимней нормы;',
  'промыть картеры всех агрегатов шасси и двигателя и сменить масло на зимние сорта;',
  'проверить надежность управления приводом жалюзи радиатора',
  'спустить отстой из топливного бака;',
  'промыть картер двигателя и картеры всех агрегатов;',
  'сменить масло на летние сорта;',
  'проверить и при необходимости довести плотность электролита до летней нормы;',
  'проверить силу зарядного тока генератора проверить и при необходимости довести до летней нормы;',
  'продуть систему смазки масляного радиатора через шланги, чтобы убедиться в исправности шлангов радиатора'
];

const getRandomDate = ()=>new Date(new Date(baseDate).setDate(getRandomZ(360))).toISOString().substring(0,10);

const createLogRecord = ()=>({

  dateBegin: getRandomDate(),
  model: getRandomElement(cars),
  year: getRandomInt(2008, 2017),
  plate: `${getRandomElement(firstLetter)}${getRandomInt(200,400)}${getRandomElement(firstLetter)}${getRandomElement(firstLetter)}97`,
  driverName: getRandomElement(names),
  businessUnit: `${getRandomElement(streets)}, ${getRandomInt(2,12)}`,
  services: getRandomSubset(operations)
});
type Item = ReturnType<typeof createLogRecord>;
const byDate = (a:Item, b:Item)=>a.dateBegin.localeCompare(b.dateBegin);

export const logRows = Array.from({length:MAX_ITEMS},(_,id)=>createLogRecord()).sort(byDate).map((e,id)=>({...e, id}));
