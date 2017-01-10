### Task: [Do this](https://www.mindomo.com/mindmap/ics4u-culminating-assignment-2016-2017-1fe7a3d114ec488ba5fd9a23c9d3725f) using [this data](http://bit.ly/seidel-bigdata)

   *  I used Algae.
   *  Summary of task: Create a visualization on Big Data. 


#### Learning Moments
* Check [Issue #6](https://github.com/NikhilRO/Grade12_Assignments/issues/6)
    * Two useful sources
          1. [Stack exchange](http://stackoverflow.com/questions/8317982/access-javascript-object-with-space-in-key)
          2. [Mozilla developer site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
    * Summary: instead of the usual `object.variableName`, do `object["variable name"]`. **Note: NO DOT** 
    
* Check [Issue #7](https://github.com/NikhilRO/Grade12_Assignments/issues/7)
      * Two useful sources                                                
         1.  [Stack exchange: Array length not working](http://stackoverflow.com/questions/13541965/array-length-not-working)
         2.  [Stack exchange: Length of a JavaScript object](http://stackoverflow.com/questions/5223/length-of-a-javascript-object)
      * Summary: some/most objects don't have `.length` property so you need to build a function to calculate the length in these cases.  
* Sorting an array of objects
       * [lesson-ish](http://www.javascriptkit.com/javatutors/arraysort2.shtml)
       * [Stack overflow: Sorting an array of JavaScript objects](http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects)
* How to pass a label/property/object name to a function?
       * [The problem](https://github.com/NikhilRO/Grade12_Assignments/blob/9f0e442cfc69ce9feb6f68eb5898de72fa2fbb21/Culminating/sketch.js#L25): you can't pass `kingdom` to a function, you need to send `"kingdom"`. So, how to you do `object.kingdom`
       * The solution: You can send `"kingdom"` and use `object["kingdom"]`
* How to determine the scope of variable(this seems like advanced stuff)? 
       * [The problem](
https://github.com/NikhilRO/Grade12_Assignments/blob/8e878c095da56dae2922bd727863ecbe7c7fac37/Culminating/Bubble.js#L1): I wish to create different arrays depending on how many types of things there are at the level. For example, there are three types of Kingdoms; so, I would want three arrays. I want to continue to do this at each level. I don't how many types there will be; so, array generation has to be automatic. But I want these arrays to be accessible to the whole object and not just that function.
       * The solution: Can I use this.variableName anywhere in the constructor function/object to declare variables. It might be easier to just use an Array. this array can contain other arrays as elements.
* I discovered a minor challenge. yay.
       * [The problem](https://github.com/NikhilRO/Grade12_Assignments/blob/164d693e508a5904f4a00948cf13f458a2cd02cc/Culminating/Bubble.js#L48) As you can see from the algorithm, it only creates an array when something is different. If all the data belong to the same phylum then it displays nothing. 
       * The solution: Add option at end for last case. If all are same, then last case becomes the only case.
* Check [Issue #8](https://github.com/NikhilRO/Grade12_Assignments/issues/8)
      * [The problem](https://github.com/NikhilRO/Grade12_Assignments/blob/164d693e508a5904f4a00948cf13f458a2cd02cc/Culminating/Bubble.js#L89) As you can see from the code, I was calling `this.nextProperty`; I expected it to call the object that the function is built in but due to the way it works in javascript, it ended up going to global scope within the function rather than object. So, I was calling the `window` and it returned undefined on nextProperty.
      * Resource: [Stack Exchange question: "“this” in a function in an object in a function"](https://stackoverflow.com/questions/21837269/this-in-a-function-in-an-object-in-a-function)
         * Suggestion: `... you can bind the function:
     sort(function(a,b) {
       //stuff
        }.bind(this))
   }`
      * [The solution](https://github.com/NikhilRO/Grade12_Assignments/blob/master/Culminating/Bubble.js#L110)
       
