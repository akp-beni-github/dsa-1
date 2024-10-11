

function hasUniqueChars(string){
    const charSet = new Set();
    for(let s of string){//iterate 
        if(charSet.has(s)){//check key
            return false;
        }    
        charSet.add(s)//push if no duplicated
    }
    return true;//no duplicated at all
}

// -------------------
// All unique return true
// -------------------
const x="test";
const ans=hasUniqueChars(x);
console.log(ans);

// -------------------
// strings has duplicates return false
// -------------------

// -------------------
// return true for empty string
// -------------------




