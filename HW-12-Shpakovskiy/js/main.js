
function getTotal() {
    return this.marks.reduce((acamuletor, e) => acamuletor + e);
}

function getMinMark() {
    return Math.min(...this.marks);
}

function getMaxMark() {
    return Math.max(...this.marks);
}

function getAvgMark() {
    return this.marks.reduce((partialSum, a) => partialSum + a, 0) / this.marks.length;
}

function getInfo() {
    return `${this.name}  ${this.department}  ${this.marks}`
}

function Student(name, department, marks) {

    this.name = name;
    this.department = department;
    this.marks = marks;
    this.getAvgMark = getAvgMark;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
}

const student = new Student('Bob', 'navigation', [99, 99, 99, 99, 99]);

console.log(student.getAvgMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());