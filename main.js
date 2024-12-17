import { sleep } from "./sleep.mjs";


async function Timer() {
    console.log("Vaqt ketdi");
    await sleep(1500);
    console.log("Vaqt tugadi");
}
Timer()
//Random son topish
import { randomNum } from "./randomNum.mjs"

const getRandomNum = randomNum()

console.log(getRandomNum);
