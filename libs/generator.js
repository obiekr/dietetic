export function* shuffle(array){

    var i = array.length;
    var j = 0;

    while(i--){
        j=Math.floor(Math.random() * (i+1))
        yield array.splice(j, 1)[0]
    }
}