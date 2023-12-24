function* fun(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
} 

const gen = fun();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)