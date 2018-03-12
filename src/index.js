class SmartCalculator {
  constructor(initialValue) {
    this.arr = [];
    this.arr.push(initialValue);
   }

  add(number) {
    this.arr.push('+',number);
    return this;

  }
  
  subtract(number) {
    this.arr.push('-',number);
    return this;
  }

  multiply(number) {
    this.arr.push('*',number);
    return this;
  }

  devide(number) {
    this.arr.push('/',number);
    return this;
  }

  pow(number) {
    this.arr.push('^',number);
    return this;
  }

  counter(){
    let arr = this.arr;

    while(arr.includes('^')){
      let ind = arr.indexOf('^');
      let res = Math.pow(arr[ind - 1],arr[ind + 1]);
      arr.splice(ind-1,3,res);
    }

     while(arr.includes('*')){
      let ind = arr.indexOf('*');
      let res = arr[ind - 1] * arr[ind + 1];
      arr.splice(ind-1,3,res);
    }

     while(arr.includes('/')){
      let ind = arr.indexOf('/');
      let res = arr[ind - 1] / arr[ind + 1];
      arr.splice(ind-1,3,res);
    }

    while(arr.includes('+') || arr.includes('-')){
      let indSum = arr.indexOf('+');
      let indMin = arr.indexOf('-');
      if (indSum < 0){
        let res = arr[indMin - 1] - arr[indMin + 1];
        arr.splice(indMin-1,3,res);
      } else if(indMin < 0){
        let res = arr[indSum - 1] + arr[indSum + 1];
        arr.splice(indSum-1,3,res);
      } else if(indSum < indMin && indSum > 0 && indMin > 0){
        let res = arr[indSum - 1] + arr[indSum + 1];
        arr.splice(indSum-1,3,res);
      } else {
      let res = arr[indMin - 1] - arr[indMin + 1];
        arr.splice(indMin-1,3,res);
    }
  }

   this.arr = +arr[0];
 

}

  toString(){
    this.counter();
    return this.arr;
  }
}

module.exports = SmartCalculator;
