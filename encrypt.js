function encrypt(firstInitial, lastIntial, message){
    var alphabet = [' ' ,'a', "b" , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
    var letterkey = [];
    for(let i= 0; i < 27; i++){
        letterkey[alphabet[i]] = i;
        //letterkey['a'] = 1;
        
    }
    for(let j = 0; j < message.length; j++){
        let sum = letterkey[firstInitial] + letterkey[lastIntial]; 
        console.log(sum);
        let total = letterkey[message[j]] * sum;
        console.log(total);
        
    }
  
}

encrypt('r', 'f', 'this is not my dog');

