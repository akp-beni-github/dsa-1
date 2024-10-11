
//o of n O(n)
//x axis represent n
//y axis represent number of opereations, which means how many lines of code executed

function logitems(n) {
    for (let i=0; i<n; i++){
        console.log(i);
    }
}


//logitems(10);


//when it drop constants still the O(n) but O(Xn)
//simplification
function logitems(n) {
    for (let i=0; i<n; i++){
        console.log(i);
    }
    for (let j=0; j<n; j++){
        console.log(j);
    }
}    

//logitemsdropo(3);


//O(n^2)
function logitems(n) {
    for (let i=0; i<n; i++){
        //console.log(i);
        for (let j=0; j<n; j++){
            console.log(i,j);
        }
    }    
}
//logitems(10);//00-99  100 cases
//number of outputs and cases will be n*n  O(n^2)
//O(n) is better thasn O(n^2)


//O( n^2 + n )can be simplified to O(n^2)
function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j) 
        }       
    } 

    for(let k = 0; k < n; k++) {
        console.log(k)
    }
}

//logItems(10)//100+10 >>100


//O(1) O of 1: constant time
function logItems(n) { 
    return n+n+n;
}

//logItems(10)//still one case no matter how many operations n doesnt affect the case condition



//log2(n)  divided  and conquer

//different term of input (a,b) > O(a+b)