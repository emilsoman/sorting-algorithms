Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : Sathya M


Selection Sort
==============

## Steps

1.  max = i;
#changed to : min=i;
2. for(var i=0;i<this.a.lemgth;i++)
 #changed to : for (var j = i+1; j < this.a.length; j++)
3. if (this.a[j] < this.a[max])
                   max = i;
#changed to :  if (this.a[j] < this.a[min])
                    min = j;
 4. this.a.swapVerbose(i,max);
#changed to : this.a.swapVerbose(i, min);


QuickSort
=========

## Steps
1. this.qsort(0, this.a.length);
#changed to: this.qsort(0, this.a.length­1);
2. this.qsort(q, r);
#changed to : this.qsort(q+1, r);

