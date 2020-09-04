//to search for a particular character in a string 
let kal = "Hello";
let n = kal.search("o");
if (n == -1)
{
    console.log("character not availbale");
}
else{
    console.log("character is available")
}

//to convert minutes to seconds
let min = 4.5;
let sec = (min * 60);
console.log(`you have to complete the task in ${sec} seconds`);

//to search for a element in a array of strings
let s = ["sunday", "monday", "tuesday"];
let ele = "monday";
let k = 0;
for (i=0 ; i<=s.length ; i++)
{
   if (s[i] == ele)
   {
      k++; 
   }   
}
if (k != 0)
{
    console.log("Element available");
}
else{
    console.log("Element not available")
}

//program to find element containing 'a' in array
let arr = ["saw", "data", "kind", "forest"]

for(let i = 0; i<arr.length; i++)
 {
     let t = arr[i];
     if(t.includes("s"))
     {
         console.log(arr[i]);  
     }
 }

//print an array in reverse order
let a = [20, 30, 40, 50]
console.log(a.reverse())
