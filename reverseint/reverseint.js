
function reverseInt(n) {
    let result="";

    if(n<0){
        result+="-";
        n=-n;
    }
   
    if(n==0){
        return 0;
    }

    while(n>0){
        result+=n%10;
        n=parseInt(n/10);
    }
    return parseInt(result);

}

module.exports = reverseInt;
