Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Syed Mohammad Ali


Selection Sort
==============
Note: for my convenience i made change in generating array elements to 5

## Steps

1. open index.html in any browser and start the debugging tool.

2. start the debugging process by Applying breakpoint at following line.
intQueue = setInterval(function(){runQueue()},0);

program working fine upto this point

3. Now Toggle the breakpoint and move further
then apply the breakpoint after the 2nd for loop
for (var j = 0; j < i; j++)

comparison is to be done from next element and not itself. so increment should be "i+1"

this looping statement will work : 
for (var j = i+1; j < this.a.length; j++)

toggle breakpoint again

4. Apply breakpoint at the end of inner for loop. 
correct max=j;

Now check output program works fine.

QuickSort
=========

## Steps

1. open index.html in browser and start debugging tool.

2. Apply breakpoint where call to sort function is made
   this.qsort(0, this.a.length);
here value of length is 50. and correct value has to be 49 because of the array indexing.
correct the above statement  to
this.qsort(0, this.a.length-1);

3. toggle breakpoint.

4. Put a breakpoint at the first while loop.
always true will not work. so add a condition to break out of the loop while(i<=j)

5. toggle breakpoint Apply breakpoint at part function

6.inside part function remove the increment and decrement statements.

7.add statement after the while looping is over
 this.a.swapVerbose(j,v);

8. after first iteration pivot element is not required to be sorted
so change following functions
 this.qsort(p, q-1);
 this.qsort(q+1, r);

Now refresh, sorting is working fine.
