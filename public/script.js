// Create a function that tests the post route handler [2 pts]
console.log("Script running...")
const base = "https://ubiquitous-space-engine-5jxrq7644vx2p6qr-3000.app.github.dev"
// Task 1: Complete the code to make a fetch call to the /creatures endpoint
async function potion(){
    const response = await fetch(base +"/create-potion")
    const data = await response.json()
    console.log(data)
}

potion()


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

