export class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName
        this.birthYear = birthYear
    }

    getInfo() {
        const yearNow = new Date().getFullYear();
        const bornYear = yearNow - this.birthYear
        return `${this.fullName}ning yoshi ${bornYear}da`
    }

}
