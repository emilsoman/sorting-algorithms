Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : KAMLESH KUMAR VERMA 


Selection Sort
==============

## Steps

1. First i opened my crome browser and than i opened the index.html . 
2. Than i opened the developer tools for debugging.
3. and i tested once selection sort wheather it is working or not.
4. finally it was not working.
5. than now i open the selection sort function into developer tools
6. now i select the one break point at outter for loop , for tracing the value of variable.
7. now i got the issue with that by iterating this process.
8. issue was in outer for loop , we should start the index for i is 0 and for ending with this.a.length
9. and now for inner for loop ,starting  index for j will be i+1 and ending with this.a.length
10. and in the if condition we have to assign the value of j into max variable.
11. Now it working properly.

QuickSort
=========

## Steps

1. First i opened my crome browser and than i opened the index.html .
2. Than i opened the developer tools for debugging.
3. and i tested once quick sort wheather it is working or not.
4. finally it was not working
5. than now i open the quick sort function into developer tools.
6. now i select the two break point at that place where i called the qsort function recursively.
7. now i got the issue with that by iterating this process.
8. there was one mistake is that while calling the function for sorting there we are passing the array of the length 
   this was the mistake.
9. now i edited the calling function parameters i passed the intially index of array is 0  and ending index is array.length-1.
10.and there was one more issue that is at the second time of calling recursive function qsort there should be first parameter is
   q+1 . initially it was q only.
11.purpose of editing of this is we are again cheching the pivot element in the second time calling this recursive function
   while we already taken this pivot element into first time calling recursive function.
12.Now after this it worked fine.



