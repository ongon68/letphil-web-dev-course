const tasks = []; // Where todo items will go

while(true) {
    // Prompting user for input
    let task = prompt("Enter a tasks or type 'done' to finish");

    // Check if user input is "Done" in any way
    if (task.toLowerCase() === 'done') {
        break; // If done, break out of the while loop
    }

    tasks.push(task); // add
};

// display tasks
console.log("Your Todo List:");
tasks.forEach((task, index) => {
    console.log(`${index + 1}, ${task}`)
});