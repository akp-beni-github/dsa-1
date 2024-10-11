//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+


    function firstNonRepeatingChar(string){
        const charcount = new Map();
        for (let c of string){
            charcount.set(c, (charcount.get(c)||0) +1); //get the value then +1
        }

        
        
        for (let [key, value] of charcount){

            
            
            if (value == 1){
                return key; //return cause we just need only the first one that doesnt repeat and value was set to 1

            }
            
            
            //fail at
            //if all are none repeated (value == 1) 
            //if all character repeated
            
            
        }
     
    }   

    function firstNonRepeatingChar(string) {
        const charCount = new Map();
        let foundNonRepeating = false; // Variable to track if any non-repeating character was found
        
        for (let c of string) {
            charCount.set(c, (charCount.get(c) || 0) + 1);
        }
    
        for (let [key, value] of charCount) {
            if (value === 1) {
                foundNonRepeating = true;
                return key; // Return the first non-repeating character
            }
        }
        
        if (!foundNonRepeating) {// everything repeated
            return null; // Return null if no non-repeating character was found
        }
    }
    
    // Test cases
    console.log("All Unique:");
    console.log("Input: 'abcde'");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
    console.log("---------------");
    
    console.log("Some Duplicates:");
    console.log("Input: 'aabbccdef'");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
    console.log("---------------");
    
    console.log("All Duplicates:");
    console.log("Input: 'aabbcc'");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
    console.log("---------------");
    
    console.log("Empty String:");
    console.log("Input: ''");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
    console.log("---------------");
    
    console.log("Single Character:");
    console.log("Input: 'a'");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
    console.log("---------------");
    
    console.log("Multiple Non-Repeating Chars:");
    console.log("Input: 'abcdaef'");
    console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
    console.log("---------------");
    


// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");


