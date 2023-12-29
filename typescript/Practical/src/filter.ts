import Filter from "bad-words"

const filter: Filter = new Filter();
const profanity: boolean = filter.isProfane("boobs")
if(profanity) console.log("It is a bad word");
else console.log("It is a good word")