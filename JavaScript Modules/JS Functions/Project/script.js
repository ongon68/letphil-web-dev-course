function calcAvg(s1, s2, s3) {
    return ((s1 + s2 + s3) / 3);
}

function assignGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

// Get user input
// const s1 = parseFloat(prompt("Enter first score: "));
// const s2 = parseFloat(prompt("Enter second score: "));
// const s3 = parseFloat(prompt("Enter third score: "));
const scores = [];
for (let i = 0; i < 3; ++i) {
    const score = prompt(`Enter Score ${i + 1}`);
    scores.push(parseInt(score));
}

const average = calcAvg(scores[0], scores[1], scores[2]);
const grade = assignGrade(average);

console.log(`Average score: ${average}`);
console.log(`Final Grade: ${grade}`);