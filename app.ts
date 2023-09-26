import {User} from "./interfaces"
//1--------------------------------

export const myLength = (str: string): number => {
  return str.length;
};

//2-----------------------------------
export const palindrome = (str: string): boolean => {
  const revers = str.split("").reverse().join("");
  return str === revers;
};

//3-----------------------------------

export const mySort = <T>(arr: Array<T>): Array<T> | undefined => {
  const sortArr = arr.sort();
  return sortArr;
};

//4------------------------------------
export const mySqrt = (num: number): number => {
  const sqrt = Math.sqrt(num);
  return sqrt;
};

//5---------------------------------
export const sumOfArr = (arr: number[]): number => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
};
//6-------------------------------

export const userInformation = async(ID:number) => {
    try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`)
        let user:User = await res.json();
        if(!user.address){
            throw new Error("error");
        }
        return user;

    }catch(error){
        console.log(error);
    }

  };


//7-----------------------------------------------------------------------
  export function fibonacci(arr:number[]) {

    const [a, b] = arr.slice(-2); 
    return a + b;
  }
  
  
  export function isFibonacciSeries(arr: number[]): boolean {
    if (arr.length < 3) {
        throw new Error("error");

    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] + arr[i - 1] !== arr[i]) {
            return false; 
        }
    }

    throw new Error("error");
}

