Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Rachit Aggarwal


Selection Sort
==============

## Steps

1. open index.html in browser and start debugging tool.

2. first we appplied a breakpoint at following line.
intQueue = setInterval(function(){runQueue()},0);

start debugging the program

till this point everthing seems to be working fine.

3. then apply the breakpoint after the 2nd for loop which says 
for (var j = 0; j < i; j++)

here problem is first comparison is done with the element itself which is not required
so change the looping statement to 
for (var j = i+1; j < this.a.length; j++)

toggle breakpoint

4. Apply breakpoint at the end of inner for loop. 
debug it
check the value of variable "max". which was max=i;
this is also incorrect assignment.

we have to make "max=j" because we have to swap only if "j" is less than "i".


QuickSort
=========

## Steps

1. open index.html in browser and start debugging tool.

2. Apply breakpoint at following line
    this.qsort(0, this.a.length);
here "a.length" is returning value as 50. and since array location start from zeroth location. so value has to be 49
change the above statement  to
 this.qsort(0, this.a.length-1);

3. then we put a breakpoint at the first while loop.
since it was true always and no condition was getting checked their.
so put a condition to break of the loop
while(i<=j)

4. inside part function ,  in if statement their is no need to increment and decrement the i and j. only swap is necessary.
so remove the increment and decrement statements.

5. swap of pivot is also necessary after the swapping of "i" and "j". so add statement 
this.a.swapVerbose(j,v);
after the while loops.

6. after first iteration pivot element is at its correct position. 
from next iteration we have to pass locations which doesn't include this pivot position.
so we have to pass q-1 and q+1 positions for next iterations.
so change following functions
 this.qsort(p, q-1);
 this.qsort(q+1, r);

Now refresh, sorting is working fine.

