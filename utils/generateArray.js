
//generates random Array of  numbers from 0,99 depending on size 
export default function generateArray(size) {
    const len = size==='small'? 20 : size==='big'? 60 : 40;
    var newArr = [];
    for(var i = 0 ;i<len;i++){
      do{
        var randomNum = Math.floor(Math.random()*99+1);
      
        
      }while(newArr.indexOf(randomNum)!=-1)
      newArr.push(randomNum);
    }
    
  return newArr;
}


