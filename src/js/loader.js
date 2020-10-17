import GameSavingLoader from './gameSavingLoader';


export function loader(){
 return GameSavingLoader.load().then((saving) => {
    console.log(saving);
    return saving;
  })
} 
loader();