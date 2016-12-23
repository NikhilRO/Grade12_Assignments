###Time Taken for (in millisecond)
* Linear search (on a worst-case basis) : 227.16 ms
      
* Binary search (typical basis)
      1. With sort time   : 1.85 ms
      2. Without sort time: 0.40 ms
      
####What situations would you use sort() + binarySearch() rather than just using linearSearch()? What about vice versa?
According to people more knowledgable than myself, sort() + binarySearch() is advantageous in cases where you do multiple searches on the same data. The rationale behind is that you have to do the `O(n log n)` sorting only once, and then you can do the `O(log n)` binary search as often as you want, whereas linear search is `O(n)` every time.

Of course, this is only an advantage if you actually do multiple searches on the same data. But "write once, read often" scenarios are quite common. **In those cases, linearSearch() *could/might* work better; really depends on the nature of data.**

At the end of the day, as with so many other things, "It depends... ;)". 

One user was also kind enough to present an analogy: 
"One phone book has the names in alphabetical order. To find the entry you want, you open in the middle, check the entry, then move forward or backward depending on whether you overshot or undershot. **sort() + binarySearch()**
The other phone book has the names in random order. To find the entry you want, you start at the beginning and continue until you find what you want. **linearSearch()**
Will the second book work in any reasonably sized city?"

#####Note that: 
* There was a lot of variation in the values I got in each repetition. WHY? Maybe, the processor but the trend was always the same.
* Linear search time includes time to push the pixels into an array as well. That might inflate the numbers but the trend should stay true.
