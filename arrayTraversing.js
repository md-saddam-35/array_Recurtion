
var arr=[null,-7,63,-25,true,20,0,"",97,'Rijwan'];
console.log(arr);


var res = arr.map(function(element){

    if(Math.sign(element) === -1 && element % 5 === 0){

       return element * 10;
    }else if(!element){
       return 1;
    }else if(element === true){
        return undefined;
    }else{
        return element;
    }

});

console.log(-25*10);

console.log(Math.sign(-25));

console.log(res);
var arr = [null, -7, 63, -25, true, 20, 0, '', 97, 'Rijwan'];

