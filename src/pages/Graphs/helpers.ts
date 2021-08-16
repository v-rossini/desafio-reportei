import { ChartItem } from '../Graphs/types';

export function getQuantity(data): ChartItem[]{
  var output = [];
  

  Object.keys(data).map(key => {
      var entry: ChartItem = {x: undefined, y: undefined};
      entry.x = key;
      entry.y = data[key].length
      output = output.concat(entry);
    })
                                                      
  return output;
  }

  
  export function MostXinY (data: {}, param1: string, param2: string, num: number) {

    var dataCopy = Object.assign(data);
    var output = []
    
    dataCopy[param1].sort((a: {}, b: {}) => {return b[param2].length-a[param2].length}).slice(0,num)
            .map(individual => {
              var entry: ChartItem = {x: undefined, y: undefined}
              entry.x = individual.name;
              entry.y = individual[param2].length
              output = output.concat({entry})})
    
    return output

  }




  export function MostXinY_Names (data: {}, param1: string, param2: string, num: number) {

    var dataCopy = Object.assign(data);
    var output = []
    
    dataCopy[param1].sort((a: {}, b: {}) => {return b[param2].length-a[param2].length}).slice(0,num)
            .map(individual => {output = output.concat(individual.name)})
    
    return output

  }


  export function MostXinY_Values (data: {}, param1: string, param2: string, num: number) {

    var dataCopy = Object.assign(data);
    var output = []
    
    dataCopy[param1].sort((a: {}, b: {}) => {return b[param2].length-a[param2].length}).slice(0,num)
            .map(individual => {output = output.concat(individual[param2].length)})
    
    return output

  }





  export function biggestXinY (data: {}, param1: string, param2: string, num: number) {

    var dataCopy = data;
    var output: ChartItem[]

    output = []
    
    dataCopy[param1].sort((a: number, b: number) => {return b[param2]-a[param2]}).slice(0,num)
            .map(individual => {
              var entry: ChartItem = {x: undefined, y: undefined}  
              output = output.concat({x: individual.name,
                                    y: individual[param2]})})
        
    return output;
                                    
  }