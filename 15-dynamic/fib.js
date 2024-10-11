function fib(n){
    //base case
    if (n== 0 || n==1){
        return n;
    }
    //recursive case
    return fib(n-1)+fib(n-2);

}

let memo=[]
function memo(n){
    if (memo[n] !== undefined){// if fib(n) has been store in memo[n] return that value instead of calculating thru again
        return memo[n];
    }
    if (n== 0 || n==1){
        return n;
    }
    memo[n] =fib(n-1)+fib(n-2);
    return memo[n]
}