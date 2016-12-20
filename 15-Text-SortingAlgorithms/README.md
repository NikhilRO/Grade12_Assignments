# 15-Text-SortingAlgorithms

### Create a program to use sorting algorithm on a text  
* bubbleSort() for the numbers array
* insertionSort() for the words array

After sorting the arrays, the program displays the information of both arrays in ascending order on the screen.

####Resources:
  * [Bubble Sort (C++/Java)](http://cathyatseneca.github.io/DSAnim/web/bubble.html)
  * [Insertion Sort (C++/Java)](http://cathyatseneca.github.io/DSAnim/web/insertion.html)
  * [Sorting Presentation](https://prezi.com/_c5eer8nslnm/sorting/)

### Note for self
* By default comparison is based on strings because regex gives you strings for everything.
   1. To compare with numbers use parseInt( ) to convert all Array elements to numbers. 
   2. But there still a issue [`.sort()`](http://www.w3schools.com/jsref/jsref_sort.asp) compares everything as a string. You need parameter for number comparsion

* `split()` using regex creates an element at the start and the end that is empty. WHY?
   1.  So, remove them using `splice()` 

* Arrays like objects will point to the same memory location; so, to do a operation on an array and get a new array without changing the original array, you need to copy each element of the array into a temporary array. [Should I use slice? I am confused](http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript)
