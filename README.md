Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Prashant Singla


Selection Sort
==============

## Steps

1. Put breakpoint on line no 206,208,211,212 in script.js
	at when i=0
		max=0 too
	and according to the logic
	inner loop iterates from j=0 to j<i
	logical err j=0;j<i
	modified it to
	from j=i+1 to j<this.a.length

2. In line 211
	when i=0
	
	this.a[j] i.e this.a[0+1] is 44 which is less than this.a[max] i.e this.a[0] is 155
	so the variable max sholud be =j;
	logical err max=i
	changed to 
	max=j
3. ...

QuickSort
=========

## Steps

1. Put breakpoint on the line where call to quick.sort functions is made i.e line no 33
	then step into next function call
2. Put breakpoint on line no 232,233,234,236,237

3. found in line 236 trying to access this.a[50]
	so its a logical err because length is itself 50.
	logical err line 227 
	this.qsort(0, this.a.length);
	modified to 
	this.qsort(0, (this.a.length-1));

4. in line 253 &254 
	this.qsort(p, q); second parameter is wrong ,its supposed to be q-1 
        this.qsort(q, r); here first parameter is wrong,its supposed to be q+1 
		
	because the element at "q" position is supposed to be fixed.

5.return statement was only in else block
its supposed to be either in both if & else block or
outside of if&else block

6.it was running in infinite loop
logical err in line 235 i.e while(true)
modified to while(i<j)

