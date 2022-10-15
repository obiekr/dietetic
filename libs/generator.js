export default function* shuffle(array, max=0) {
    console.log(array);
    var i = max > 0? max : array.length;

    while(i--){
        yield array.splice(Math.floor(Math.random() * (i+1)), i)[0]
    }
}