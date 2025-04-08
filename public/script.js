// Create a function that tests the post route handler [2 pts]
console.log("Script running...")
const base = "https://glorious-adventure-qjp4q5r99p6h9746-3000.app.github.dev"
// Task 1: Complete the code to make a fetch call to the /creatures endpoint
async function potion(){
    const response = await fetch(base +"/creatures")
    const data = await response.json()
    console.log(data)
}

potion()


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

