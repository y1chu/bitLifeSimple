const events = [
    {
        description: "You found a wallet on the street. What will you do?",
        choices: [
            { text: "Return it to the owner.", happiness: 10, health: 0, wealth: -10 },
            { text: "Keep the money.", happiness: -5, health: 0, wealth: 20 },
        ],
    },
    // Add more events here
    {
        description: "You are feeling stressed. What will you do?",
        choices: [
            { text: "Go for a walk in nature.", happiness: 10, health: 5, wealth: 0 },
            { text: "Play video games all night.", happiness: 5, health: -5, wealth: 0 },
        ],
    },
    {
        description: "A friend invites you to join a gym membership. What will you do?",
        choices: [
            { text: "Sign up and commit to a healthier lifestyle.", happiness: 5, health: 10, wealth: -20 },
            { text: "Decline the offer and stay at home.", happiness: 0, health: -5, wealth: 0 },
        ],
    },
    {
        description: "You've been offered a high-paying job with longer hours. What will you do?",
        choices: [
            { text: "Take the job for the higher salary.", happiness: -5, health: -10, wealth: 30 },
            { text: "Stay in your current job for a better work-life balance.", happiness: 5, health: 5, wealth: 0 },
        ],
    },
    {
        description: "You're feeling unwell. What will you do?",
        choices: [
            { text: "Visit the doctor and get treated.", happiness: 0, health: 10, wealth: -10 },
            { text: "Ignore it and hope it goes away.", happiness: -5, health: -10, wealth: 0 },
        ],
    },
    {
        description: "Your friend is starting a business and asks for your investment. What will you do?",
        choices: [
            { text: "Invest in the business and hope for the best.", happiness: 0, health: 0, wealth: -20 },
            { text: "Politely decline and keep your savings.", happiness: 0, health: 0, wealth: 0 },
        ],
    },



];

let currentEventIndex;
let happiness = 50;
let health = 50;
let wealth = 50;

function initializeGame() {
    // Hide the game elements at the start
    document.querySelector("h1").style.display = "none";
    document.getElementById("event-description").style.display = "none";
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.querySelectorAll("p").forEach((element) => {
        element.style.display = "none";
    });
}

function pickRandomEvent() {
    currentEventIndex = Math.floor(Math.random() * events.length);
    displayCurrentEvent();
}

function startGame() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const gender = document.getElementById("gender").value;

    if (!firstName || !lastName || !gender) {
        alert("Please enter your first name, last name, and gender.");
        return;
    }

    displayPlayerName(firstName, lastName);
    document.getElementById("player-name").style.display = "block";

    // Show the game elements
    document.querySelector("h1").style.display = "block";
    document.getElementById("event-description").style.display = "block";
    document.getElementById("choice1").style.display = "inline-block";
    document.getElementById("choice2").style.display = "inline-block";
    document.querySelectorAll("p").forEach((element) => {
        element.style.display = "block";
    });

    // Hide the input fields and start button
    document.querySelectorAll("label").forEach((element) => {
        element.style.display = "none";
    });
    document.getElementById("first-name").style.display = "none";
    document.getElementById("last-name").style.display = "none";
    document.getElementById("gender").style.display = "none";
    document.querySelector("button").style.display = "none";

    pickRandomEvent();
    updateStatsDisplay();
}

function displayCurrentEvent() {
    const eventDescription = document.getElementById("event-description");
    eventDescription.innerText = events[currentEventIndex].description;

    const choice1Button = document.getElementById("choice1");
    choice1Button.innerText = events[currentEventIndex].choices[0].text;

    const choice2Button = document.getElementById("choice2");
    choice2Button.innerText = events[currentEventIndex].choices[1].text;
}

function makeChoice(choiceIndex) {
    const choice = events[currentEventIndex].choices[choiceIndex];
    happiness = clampAttribute(happiness + choice.happiness);
    health = clampAttribute(health + choice.health);
    wealth = clampAttribute(wealth + choice.wealth);

    updateStatsDisplay();

    if (checkForDeath()) {
        alert("Unfortunately, you didn't make it. Game over.");
        // Reset the game state
        happiness = 50;
        health = 50;
        wealth = 50;
        updateStatsDisplay();

        // Show the character creation screen
        showCharacterCreationScreen();
    } else {
        pickRandomEvent();
    }
}



function updateStatsDisplay() {
    const happinessDisplay = document.getElementById("happiness");
    happinessDisplay.innerText = happiness;

    const healthDisplay = document.getElementById("health");
    healthDisplay.innerText = health;

    const wealthDisplay = document.getElementById("wealth");
    wealthDisplay.innerText = wealth;
}

function checkForDeath() {
    if (happiness <= 0 || health <= 0 || wealth <= 0) {
        const deathChance = Math.random();
        if (deathChance <= 0.5) {
            return true;
        }
    }
    return false;
}

function showCharacterCreationScreen() {
    // Hide the game elements
    document.querySelector("h1").style.display = "none";
    document.getElementById("event-description").style.display = "none";
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.querySelectorAll("p").forEach((element) => {
        element.style.display = "none";
    });

    // Hide the player's name
    document.getElementById("player-name").style.display = "none";

    // Show the input fields and start button
    document.querySelectorAll("label").forEach((element) => {
        element.style.display = "inline";
    });
    document.getElementById("first-name").style.display = "inline";
    document.getElementById("last-name").style.display = "inline";
    document.getElementById("gender").style.display = "inline";
    document.querySelector("button").style.display = "inline";
}


function displayPlayerName(firstName, lastName) {
    const playerNameElement = document.getElementById("player-name");
    playerNameElement.innerText = `${firstName} ${lastName}`;
}

function clampAttribute(value) {
    return Math.min(Math.max(value, 0), 100);
}


