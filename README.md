Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Hemant Chandak 


Selection Sort
==============

## Steps

1. Press f12 to open web developer. In the sources column, open script.js.
2. Place break point at selection sort function and start debuging using f11 and   f10.
3. After debugging few changes i did were :
	i) making 1st loop to loop from a.length-1 to 1
	ii) changing if condition in 2 loop from '<' to '>'
	iii) in the above if condition, assigning max to j

QuickSort
=========

## Steps

1. Press f12 to open web developer. In the sources column, open script.js.
2. Place break point at quick sort function and start debuging using f11 and f10.
3. After debugging few changes i did were :
	i) in the call of qsort function in  sort part: pass a.length-1 in place of a.length 
	ii) in qsort part: in place of putting q in both the qsort calls make the the 2nd qsort function call pass q+1 in place of q
