import { sleep } from "./sleep.mjs";
import { randomNum } from "./randomNum.mjs"
import { Person } from "./Info.mjs";

async function Timer() {
    console.log("Vaqt ketdi");
    await sleep(1500);
    console.log("Vaqt tugadi");
}
Timer()

//Random son topish
const getRandomNum = randomNum()

console.log(getRandomNum);

//FullInfo
const student = new Person(`Ali`,2011);
console.log(student.getInfo());
