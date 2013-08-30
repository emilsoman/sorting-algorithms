Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name :Anil Kumar Agrawal 


Selection Sort
==============

## Steps

1.inserted break-point at line no.206,209,212 and run the selection sort and keep an eye on variable panel.
2.i got to know that max=i is logically incorrect since at the immediate line it is swapping b/w the same indexes.so i changed it to:max=j; 
3. Also the inner loop is always executing from j=0 to j=i but it should execute from j=i+1 to j=this.a.length,so i changed it.Now it works fine.

QuickSort
=========

## Steps

1.while analysing the code by putting a breakpoint atline no.236,i knew that a[j] does not contain any value so it must point to the last elemnent of the array which is a[j-1].so i make j=r-1. 
2. after swapping we should not change the value of either i or j so just remove those two lines ie i++ and j-=1;

3. also in qsort func it is calling qsort to sort p to q and then q to r but it should be p to q and q+1 to r.

