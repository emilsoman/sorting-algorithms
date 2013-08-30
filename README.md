Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : 


Selection Sort
==============

## Steps

1. To start debugging I selected the chrome browser.
2. In chrome debugged it using developer tools;pressing F12
3. selected the source code.
4. Put the breakpoint at line where the inner for loop is there.
5. till there the programs runs and stops at the breakpoint.
6. then line by line execution done by pressing F5.
7. on the right hand side it shows the local and the global values(methods,variables).
8. according to line by line execution we can the working of the loops and statements by the change in the values.
9. putting the cursor onthis.a we get a set of values.
10. selct a value then checked line by line execution.
11. from the change in values we got to know that:in the inner loop there is an error the loop doesnt check the initial value of the array taken with rest of the array elements since the loop   runs from j=0 to i ;thus selection sort is incomplete here.
           for (var j = 0; j <i; j++)
12. made the changes.Now inner loop runs from i+1 to less than length.
          for (var j = i+1; j <this.a.length ; j++)
13. now we debug the program again.
14. now if we check for selection sort the resultant pattern comes after proper execution of selection sort.

QuickSort
=========

## Steps

1. opened the chrome and started debugging with the help of developer tools.
2. Apply breakpoint at following line
    this.qsort(0, this.a.length);
here    "a.length" is returning value as 50. and since array location start from zeroth location. so value has to be 49
change the above statement  to
 this.qsort(0, this.a.length-1);
3. put a breakpoint at the end of 'while' loop.
4. the programs executes till the breakpoint and then stops.
5. for line by line execution of program further pressed F5
6. now put a breakpoint at this.qsort(q+1, r);
7. select a value from this.a and  checked for line by line execution.
8. we see that the pivot element q is being sorted twice when the two functions are called
                 this.qsort(p, q);
                 this.qsort(q, r);
9. this is because in the two parts of the array we accessing pivot element 'q' twice as above
10. so the required changes made
               this.qsort(p, q);
               this.qsort(q+1, r);   
11. now debug the program it is giving the right output for quick sort.  
