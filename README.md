Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

---DOCUMENTATION---

All the bugs has been fixed by putting the break points in the code
and then moving the break points line by line and checking the output at every step. If the desired output is not there there is something wrong in the code and need to be changed.



Selection Sort
==============

## Steps

1. Step 1
 value of j in second loop will start from i+1 i.e. j=i+1
because it will check the value from i+1 to the end of the array.

2. Step 2
value of j will go to the end of the array
so j is less than this.a.length

3. Step 3
after the if condition max will be j
i.e. max=j
 

QuickSort
=========

## Steps
In this sorting a[p] indicates the pivot value where p=0
We are trying to bring the values smaller than a[p] to the left of it and values greater than a[p] to the right of it and then again assigning a[p] as the pivot value and so on.

1. Step 1
 Since j is the index of the array,therefore it will be one less than the length of the array.
 so change j=r-1

2. Step 2

commenting i++ and j-=1
3. Step 3
change this.qsort(q,r) to this.qsort(q+1,r)
