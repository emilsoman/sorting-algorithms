Thanks to a careless technical specialist at Neev, selection sort and quick sort just stopped working.
As a fresher, debug the program with the help of browser developer tools using breakpoints and save the day by fixing the program.

The catch - also document your steps below. 

Name : K MURALI


SELECTION SORT


Step 1: first keep the break points to know the step by step execuation of the program at the initial 	 position

Step 2: putting the break point at the selection sort function and from there i try to execute the 	 	 program step by step. I put the break point by double click on the line number on the java 	script file.

Step 3:  In the second loop j value is initialized to j=i and j is executing until j<i which leads to 	 	  execuation of compared vales. 
	 
		for (var j = 0; j < i; j++)
		{
		}
	 on debugging we will observe this on every iteration so it has to be modified.

		Arr: Array[50]
i: 0
j: 0
this: Object
		Window
		Global Breakpoints
1. script.js:21
selectionsort.sort(data);
2. script.js:220
a: null,
 	 Replace this for loop with the loop ::
		for (var j = i+1; j < this.a.length; j++) {}
Step 4: In the for loop it is iterating correctly but the max is not changing as we are max value has 	 to be updated with the j value but every time chang the max value to J instead of I.
 		Replace max=i;
			 with max=j	
Step5:   Now the Program is running successfully.


QUICK SORT
 

Step 1: quick sort will work based on the divide and conqure method. The elements has to be 	 	 divided and every time the pivot element is fixed and and again call the quicksort  function 	 for the other elements and apply the same. 

		var q = this.part(p, r);
		this.qsort(p, q);t
		his.qsort(q, r);
	
	 In this the pivot element also mentioned in the recursion calling of the qsort(p,q)  so 	modify the code as 

		
		var q = this.part(p, r);
		this.qsort(p, q-1);
        		this.qsort(q+1, r);

Step 2: 	 this.qsort(0, this.a.length); 

	 If we execute the program the qsort will excute the program as qsort(0, 50) 

		  p: 0
		q: undefined
		r: 50
		  this: Object
	but there is no element with 50 we have to inatialize until 49 so replace it with

		   this.qsort(0, this.a.length-1);

Step 3: we have to compare the elements form next to pivot to the end of the element so change the 	 i and j value 
		var i = p;
		var j = r;
	with 
		var i = p+1;
    		var j = r;
Step 4: We have to execute the while loop  until i<=j but it is executing continuesly as it is like 		 whiel(true) so replace that one. 

		whiel(true){}
 	replace with
		while (i<=j) { }

Step 5: after swaping the elements in the while loop if(i<j) we are swapping the elements and by incrementing i and decrementing the j value we are missing the next element for comprision so delete that one and return type should be after the while loop only so replace that one. 

	  while (true) 
	  {
		while (this.a[j] > v) j--;
		while (this.a[i] < v) i++;
		if (i < j)
		{
			this.a.swapVerbose(i, j);
			i++;
			j -= 1;
		} 
		else { 
		return j;
		}
	  }


replace with 
	 

 while (i<=j) 
 {
         while (this.a[j] > v) j--;
         while (this.a[i] < v) i++;
         if (i < j)
         {
        		this.a.swapVerbose(i, j);
        		//i++;
        		//j--;
        } 
        }
       this.a.swapVerbose(j,p);
    return j;
   }
