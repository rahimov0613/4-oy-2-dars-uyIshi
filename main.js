import { sleep } from "./sleep.mjs";
import { randomNum } from "./randomNum.mjs"
import { Person } from "./Info.mjs";

async function Timer() {
    console.log("Vaqt ketdi");
    const getRandomNum = randomNum()
    await sleep(getRandomNum);
    console.log("Vaqt tugadi");
    console.log(`${getRandomNum} millisekund   blocklanib turdi`);

    const student = new Person(`Ali`, 2011);
    console.log(student.getInfo());
}
Timer()

