// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
const msToDays = 84600000;

let timeToday = Date.now()

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

let recentVisit = Number(window.localStorage.getItem("lastVisit-ls") || timeToday);
// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits == 0) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else{
    let timeDifference = (timeToday - recentVisit)
    if (timeDifference < msToDays){
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else{
        let daysSinceVisit = Math.floor(timeDifference / msToDays)
        visitsDisplay.textContent = `You last visited n days ago.`
    }
}

// 4️⃣ increment the number of visits by one.
numVisits++;


// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", timeToday)
// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// today's date











console.log(lastVisit)
const lastVisit = Date.now()