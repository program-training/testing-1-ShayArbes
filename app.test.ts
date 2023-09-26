import { it, expect, test, describe } from 'vitest' 

import { myLength, palindrome ,mySqrt ,mySort ,sumOfArr ,userInformation,fibonacci ,isFibonacciSeries } from "./app"


//--------------1--------------------------------------------------
describe("should return the length of the string",()=>{
  it('length of the string hello', () => {

    const result = myLength('hello')
  
    expect(result).toBe(5)
  })
  

})
//--------------2--------------------------------------------------
describe("Returns if a palindrome string",()=>{

  it('Checking for a normal double philander', () => {

    let result = palindrome('112211')
  
    expect(result).toBeTruthy
  })
  it('Checking for a normal odd philander', () => {
    let result = palindrome('1125211')
  
    expect(result).toBeTruthy
  })
  it('Incorrect philander test', () => {
   let result = palindrome('1122151')
  
    expect(result).toBeFalsy
  })

  })
//--------------3--------------------------------------------------
  describe("Checks if an array is sorted",()=>{
    it('Checks if an array is sorted', () => {
      const arr = [2,1,4,3]
      const result = mySort(arr)
      expect(result).toEqual([1,2,3,4])
    })
  })
//--------------4--------------------------------------------------
  describe("Returns the root of a number",()=>{
    it('Checks the integrity of 4', () => {
  
      const result = mySqrt(4)
    
      expect(result).toBe(2)
    })
    it('Checks the integrity of -4', () => {
  
      const result = mySqrt(-4)
    
      expect(result).toBeNaN()
    })
  })
  //5-----------------------------------

  describe("Returns the sum of the array",()=>{
    it('The sum of the array', () => {
      const arr = [2,1,4,3]
      const result = sumOfArr(arr)
      expect(result).toEqual(10)
    })

    it('greater than 9', () => {
      const arr = [2,1,4,3]
      const result = sumOfArr(arr)
      expect(result).toBeGreaterThan(9)
    })

    it('If we have the digit 1', () => {
      const arr = [2,1,4,3]
      expect(arr).toContain(1);
    })

  })


//6------------------------------------------------
  describe("User integrity check server request",()=>{
    it('Equality check to use number 1', async () => {
      let obj ={
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
      const result =await userInformation(1)
      expect(result).toEqual(obj)
    })

    test("Checker throws an error", async () => {
      let user = await userInformation(50);
      expect(user).toThrow;
    });
  })

//7-------------------------------------------


  describe('fibonacci', () => {
  
    it('returns the next fibonacci number', () => {
      const arr = [1, 1, 2, 3, 5, 8];
      const result = fibonacci(arr)
      expect(result).toBe(13); 
    });
  
    it('throws on invalid sequence', () => {
      expect(() => isFibonacciSeries([1,2,3])).toThrow();
      expect(() => isFibonacciSeries([1,2])).toThrow();
    });
  
  });