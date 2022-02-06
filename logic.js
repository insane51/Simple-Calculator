console.log(`start`);

let screen = document.getElementById(`screen`);
screen.value=0;
console.log(screen.value);
let curr='';

function userInput( val ){
    if( val == '%'){
        screen.value='invalid';
    }else if(val == '='){
        console.log('==');
        let res = eval(curr);
        console.log(res);
        curr=res.toString();
        screen.value=res;
    }else if(val == 'ac'){
        curr='';
        screen.value=0;
        console.log('ac');
    }else if( val == 'pn'){
       curr=curr.slice(0, curr.length-1);
       screen.value=curr;
       console.log(curr);
    } else{
        console.log('else');
        let last= curr[curr.length-1];
        if((last== '*' || last == '/' || last =='+' || last == '-') &&
         val== '+' || val == '-' || val == '*' || val == '/'){
             curr=curr.slice(0, curr.length-1)+val;
             screen.value=curr;
             console.log(last);
             console.log(val);

        }else{
            curr+=val;
        console.log(curr);
        screen.value=curr;
        }
    }
}


