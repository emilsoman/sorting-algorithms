Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Tanoy Kumar Maity


Selection Sort
==============

## Steps

1. I kept several break points to know the step by step procedure. 
2. Two BreakPoints are kept in the line contains "for (var i = 0; i < this.a.length; i++)" and "for (var j = 0 ; j < i; j++)" to understanding the looping procdure. 
3. Executed the code through Firebug.  
4. While Executing it stops the execution at the line contains "for (var i = 0; i < this.a.length; i++)" for further execution I found 'i' value is 0 now and a.length is 50.And 'i' will increment for every loop. 
5. Then again it stops the exeecution in the line contains "for (var j = 0 ; j < i; j++)" after further execution we found that the execution happnes from zero to the value 'i'. But according to my logic it should verify from 'i' to array.length. So make changes as this.
Previous One:for (var j = 0 ; j < i; j++)
Changed One: for(var j=i; j< this.a.length;j++)
6. Afetr compleating both loop,it should give the maximum value by j (as index) but in the code maximum value is giving the 'i' which is wrong. So I change the given below code i.e
 if (this.a[j] < this.a[max])
  max = i;

To

 if (this.a[j] < this.a[max])
 max = j;

7. After all the modification I executed the program again and it shown the sorting order correctly.

QuickSort
=========

## Steps

1. The Basic idea of Quick sort is Devide and Conquere Rule. The key element is pivot. It divides all the point into two seperate groups. 
2. After inserting various Breakpoints we ran the program in firebug and started to do step by step execution. 
3. When the program went to while loop i.e while(true). It becomes infinite loop as the condition inside while is always true.
	So the code while(true) is changed to while(i<=j)
 
4. Executing further Step by Step process we found that when if condition is executing there is no return type which is an error which results for inaccurate value of 'q'.

So the given code is:
while ((this.a[i] < v)) i++;
	while (this.a[j] > v) j--;
        if (i < j)
        {
        this.a.swapVerbose(i, j);
	i=i+1;
j=j-1;
        }
else{
return j; 
    }  
} },


	The Modified code is

	while ((this.a[i] < v)) i++;
	while (this.a[j] > v) j--;
        if (i < j)
        {
        this.a.swapVerbose(i, j);
	
        } 
    }
	this.a.swapVerbose(j, p);
	return j;

    },
5. After correcting the above problem I ran again ran the program in firebug again and found that while calling the qsort() function we fail to change the pivot value as it is very neserarry for divide and conquire method. The original code is:
	this.qsort(p, q);
      this.qsort(q, r);

	Changing the code to

	this.qsort(p, q-1);
      this.qsort(q+1, r);

6. Now again while running I found that the value of j goes out of boundary. So in order to correct it I changed the the code where the qsort function is called.
The original code is:
this.qsort(0, this.a.length);
The Modifiedcode is:
this.qsort(0, this.a.length-1);

7. Now when I ran again I found myself caught in infinite loop. Then i again inserted the breakpoint and with the help of firebug i found that while running the program. The program always skips while ((this.a[i] < v)) i++; code due to which i never becomes greater then j. So to elemate this I modified the 'i' initialization to p+1. Previously it was i=p;
8. After the Correction I ran the program again and this time I got the correct Quick sort order.
