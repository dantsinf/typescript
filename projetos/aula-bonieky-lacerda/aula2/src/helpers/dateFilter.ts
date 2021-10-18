import { Item } from '../types/Item';

//filtros de datas e edição delas
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//o retorno é logo após : e é o array de Item. ex.: : Item[] => {
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');
  for (let i in list){
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    ){
        newList.push(list[i]);
    }
  }

  return newList;
}