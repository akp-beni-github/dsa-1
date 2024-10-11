//   +=====================================================+
//   |                 WRITE YOUR CODE HERE                |
//   | Description:                                        |
//   | - This function groups anagrams from an array       |
//   |   of strings.                                       |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array of arrays where each array       |
//   |   contains anagrams.                                |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to manage   |
//   |   the groups of anagrams.                           |
//   | - Example with Map:                                 |
//   |   anagramGroups.set(canonical, group);              |
//   | - Example with object:                              |
//   |   anagramGroups[canonical] = group;                 |
//   +=====================================================+

function groupAnagrams(Strings){
    const anagramGroups = new Map();
    
    for (let alphabet of Strings){
        const SplitedAlphabet=Array.from(alphabet)//create new array not just push
        SplitedAlphabet.sort(); //sort alphabet
        const word = SplitedAlphabet.join(''); // back to sword but sorted

        //(2)
        if (anagramGroups.has(word)) {
            anagramGroups.get(word).push(alphabet);// groupofvaluesarray.push()
        }
        //(1) first loop
        else{//new set of character
            const groupofvalues = [alphabet]; 
            anagramGroups.set(word, groupofvalues) 
        
        }
    }return Array.from(anagramGroups.values());

}



// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log("Output: ", JSON.stringify(groupAnagrams(['hello', 'world', 'test'])));
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(['', '', ''])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log("---------------");


