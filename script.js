const events = [

    {
        description: "You come across a street performer. What will you do?",
        choices: [
            {
                text: "Watch the performance.",
                outcomes: [
                    {happiness: 10, health: 5, wealth: -5, description: "You enjoy the performance and feel inspired."},
                    {
                        happiness: 5,
                        health: 10,
                        wealth: -10,
                        description: "You get caught up in the excitement and accidentally break something, costing you money."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You find the performance boring and leave early."
                    }
                ]
            },
            {
                text: "Ignore the performer and keep walking.",
                outcomes: [
                    {happiness: -5, health: 0, wealth: 0, description: "You feel guilty for not supporting the arts."},
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You don't think twice about it and keep walking."
                    }
                ]
            }
        ]
    },
    {
        description: "You have a chance to invest in a new startup. What will you do?",
        choices: [
            {
                text: "Invest all your savings.",
                outcomes: [
                    {
                        happiness: 10,
                        health: 0,
                        wealth: 50,
                        description: "Your investment pays off big time and you become wealthy."
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: -50,
                        description: "The startup fails and you lose all your money."
                    },
                    {
                        happiness: 5,
                        health: 0,
                        wealth: 0,
                        description: "The startup breaks even and you get your money back."
                    }
                ]
            },
            {
                text: "Don't invest anything.",
                outcomes: [
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You don't make any money, but you also don't lose any money."
                    },
                    {
                        happiness: 5,
                        health: 0,
                        wealth: 10,
                        description: "You find a better investment opportunity later and make a small profit."
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: -10,
                        description: "You regret not taking the chance when you had it."
                    }
                ]
            }
        ]
    },
    {
        description: "You are offered a promotion at work, but it requires longer hours and more stress. What will you do?",
        choices: [
            {
                text: "Take the promotion.",
                outcomes: [
                    {
                        happiness: 10,
                        health: -5,
                        wealth: 20,
                        description: "You succeed in your new position and earn a higher salary."
                    },
                    {
                        happiness: -5,
                        health: -10,
                        wealth: 10,
                        description: "The added stress causes health problems, but you still make more money."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You realize the job isn't for you and quit after a few months."
                    }
                ]
            },
            {
                text: "Decline the promotion.",
                outcomes: [
                    {
                        happiness: 5,
                        health: 0,
                        wealth: 0,
                        description: "You are content with your current job and continue to enjoy it."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You regret not taking the opportunity, but ultimately you are happy with your decision."
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: -10,
                        description: "You are passed over for a promotion later and lose out on a raise."
                    }
                ]
            }
        ]
    },
    {
        description: "You get invited to a party. What do you do?",
        choices: [
            {
                text: "Go to the party.",
                outcomes: [
                    { happiness: 20, health: -5, wealth: -10, description: "You have a great time at the party, but wake up the next day feeling tired and with less money in your pocket." },
                    { happiness: -5, health: -10, wealth: 0, description: "You get sick at the party and spend the whole night in the bathroom. You don't spend any money, but you feel terrible." },
                    { happiness: 5, health: 5, wealth: -5, description: "You have an average time at the party. You spend a little money, but don't regret going." }
                ]
            },
            {
                text: "Stay home.",
                outcomes: [
                    { happiness: -10, health: 0, wealth: 0, description: "You spend a boring night at home and regret not going to the party." },
                    { happiness: 5, health: 10, wealth: 0, description: "You spend a quiet night at home and feel refreshed the next day." }
                ]
            }
        ]
    },

    {
        description: "You have an opportunity to travel to a new city. What will you do?",
        choices: [
            {
                text: "Book the trip and go.",
                outcomes: [
                    { happiness: 20, health: 10, wealth: -30, description: "You have an amazing time exploring the new city and making memories." },
                    { happiness: -10, health: -5, wealth: -50, description: "The trip turns out to be a disaster and you regret spending so much money on it." },
                    { happiness: 10, health: -5, wealth: -20, description: "You have a good time in the new city, but wish you had spent less money." }
                ]
            },
            {
                text: "Stay home.",
                outcomes: [
                    { happiness: -5, health: 0, wealth: 0, description: "You regret not taking the opportunity to travel and feel bored at home." },
                    { happiness: 5, health: 5, wealth: 0, description: "You have a relaxing time at home and catch up on some much needed rest." }
                ]
            }
        ]
    },

    {
        description: "You come across a lost puppy. What will you do?",
        choices: [
            {
                text: "Adopt the puppy.",
                outcomes: [
                    { happiness: 10, health: 5, wealth: -5, description: "You adopt the puppy and it brings you joy and companionship." },
                    { happiness: -5, health: -5, wealth: -10, description: "You adopt the puppy, but soon realize that you can't afford to take care of it properly." },
                    { happiness: 0, health: 0, wealth: 0, description: "You think about adopting the puppy, but decide against it." }
                ]
            },
            {
                text: "Ignore the puppy and keep walking.",
                outcomes: [
                    { happiness: -5, health: 0, wealth: 0, description: "You feel guilty for not helping the puppy." },
                    { happiness: 0, health: 0, wealth: 0, description: "You don't think twice about it and keep walking." }
                ]
            }
        ]
    },

    {
        description: "You come across a booth selling anime merchandise. What will you do?",
        choices: [
            {
                text: "Buy a limited edition figure.",
                outcomes: [
                    {
                        happiness: 10,
                        health: 0,
                        wealth: -20,
                        description: "You get the figure you've been wanting for a long time, but it puts a dent in your wallet."
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: -10,
                        description: "You get the figure you've been wanting for a long time, but it turns out to be a bootleg and falls apart shortly after."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: -10,
                        description: "You decide not to buy the figure and save your money for something else."
                    }
                ]
            },
            {
                text: "Buy a cosplay costume.",
                outcomes: [
                    {
                        happiness: 15,
                        health: 0,
                        wealth: -20,
                        description: "You find the perfect cosplay costume and feel proud to show it off at the next convention."
                    },
                    {
                        happiness: -10,
                        health: 0,
                        wealth: -20,
                        description: "The costume doesn't fit right and you end up feeling uncomfortable wearing it all day at the convention."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: -20,
                        description: "You decide not to buy the cosplay costume and save your money for something else."
                    }
                ]
            }
        ]
    },

    {
        description: "While playing FF14, you encounter a group of players looking for more members for their dungeon run. What will you do?",
        choices: [
            {
                text: "Join their party.",
                outcomes: [
                    { happiness: 15, health: 10, wealth: 0, description: "You have a successful run and make new friends along the way." },
                    { happiness: -5, health: -5, wealth: 0, description: "The run is a disaster and you end up wasting time and resources." },
                    { happiness: 5, health: 0, wealth: 0, description: "The run is average and you gain some experience, but nothing special happens." }
                ]
            },
            {
                text: "Decline the invitation.",
                outcomes: [
                    { happiness: 0, health: 0, wealth: 0, description: "You miss out on the opportunity to run the dungeon, but have more time to yourself." },
                    { happiness: 5, health: 0, wealth: 0, description: "You use the time to do other things and feel productive." },
                    { happiness: -5, health: 0, wealth: 0, description: "You regret declining and wish you had joined the party." }
                ]
            }
        ]
    },

    {
        description: "You come across a stray cat. What will you do?",
        choices: [
            {
                text: "Pet the cat.",
                outcomes: [
                    {happiness: 5, health: 0, wealth: 0, description: "The cat is friendly and enjoys your company. You feel happy for making a new friend." },
                    {happiness: 0, health: 0, wealth: 0, description: "The cat doesn't seem interested in your affection and walks away. You feel a little disappointed." }
                ]
            },
            {
                text: "Ignore the cat and keep walking.",
                outcomes: [
                    {happiness: 0, health: 0, wealth: 0, description: "You don't think twice about it and keep walking." },
                    {happiness: -5, health: 0, wealth: 0, description: "You feel a little guilty for not acknowledging the cat, but decide to keep moving." }
                ]
            }
        ]
    },

    {
        description: "While walking in the park, you meet someone sitting alone on a bench. What will you do?",
        choices: [
            {
                text: "Approach and strike up a conversation.",
                outcomes: [
                    {
                        happiness: 10,
                        health: 5,
                        wealth: 0,
                        friend: { name: "Alex", description: "A friendly and interesting person. You hit it off and exchange contact information.", avatar: "alex.jpg" },
                        description: "You have a great conversation and make a new friend."
                    },
                    {
                        happiness: 5,
                        health: 5,
                        wealth: 0,
                        description: "You have a nice chat, but ultimately don't exchange contact information.",
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: 0,
                        description: "The conversation is awkward and you both feel uncomfortable.",
                    }
                ]
            },
            {
                text: "Ignore them and keep walking.",
                outcomes: [
                    {
                        happiness: -5,
                        health: 0,
                        wealth: 0,
                        description: "You feel a little guilty for not reaching out to someone who seemed lonely."
                    },
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You continue on with your walk without giving it a second thought."
                    }
                ]
            }
        ]
    },

    {
        description: "While playing FF14, you come across a player who is incredibly skilled at the game. What will you do?",
        choices: [
            {
                text: "Send a message complimenting their skills and ask for tips.",
                outcomes: [
                    {
                        happiness: 10,
                        health: 0,
                        wealth: 0,
                        friend: { name: "Kenji", description: "An expert FF14 player who is eager to share their knowledge."},
                        description: "Kenji is happy to hear your kind words and shares valuable tips to improve your gameplay. You become friends."
                    },
                    {
                        happiness: 5,
                        health: 0,
                        wealth: 0,
                        description: "They appreciates the compliment and shares some tips but does not seem interested in becoming friends.",
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: 0,
                        description: "They seems to be annoyed by your message and does not respond well.",
                    }
                ]
            },
            {
                text: "Keep playing the game without interacting with them.",
                outcomes: [
                    {
                        happiness: 0,
                        health: 0,
                        wealth: 0,
                        description: "You continue playing the game, enjoying the experience without interacting with them."
                    },
                    {
                        happiness: -5,
                        health: 0,
                        wealth: 0,
                        description: "You feel a bit disappointed for not reaching out to them, missing an opportunity to learn from a skilled player."
                    }
                ]
            }
        ]
    }




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

let friends = [];

function makeChoice(choiceIndex) {
    const event = events[currentEventIndex];
    const choice = event.choices[choiceIndex];
    const outcome = choice.outcomes[Math.floor(Math.random() * choice.outcomes.length)];

    if (outcome.friend) {
        const confirmAdd = confirm(`You met ${outcome.friend.name}. Do you want to add them to your friend list?`);
        if (confirmAdd) {
            friends.push(outcome.friend);
            addLog(`${outcome.friend.name} has been added to your friend list!`);
            updateFriendsList(); // Update the friends list
        }
    }

    happiness = clampAttribute(happiness + outcome.happiness);
    health = clampAttribute(health + outcome.health);
    wealth = clampAttribute(wealth + outcome.wealth);

    updateStatsDisplay();

    if (checkForDeath()) {
        alert("Unfortunately, you didn't make it. Game over.");
        // Reset the game state
        happiness = 50;
        health = 50;
        wealth = 50;
        updateStatsDisplay();
        friends = []; // Clear the friend list

        // Show the character creation screen
        showCharacterCreationScreen();
    } else {
        addLog(`${outcome.description} You gained ${outcome.happiness} happiness, ${outcome.health} health, and ${outcome.wealth} wealth.`);
        pickRandomEvent();
    }
}


let logCounter = 0;
let currentMonth = 1;
let currentYear = 0;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function addLog(logMessage) {
    const log = document.getElementById("log");

    // Check if the log needs to be cleared
    if (logCounter >= 5) {
        log.innerHTML = "";
        logCounter = 0;
    }

    const logElement = document.createElement("p");
    const date = document.createElement("span");

    if (currentMonth > 12) {
        currentYear++;
        currentMonth = 1;
    }

    date.innerText = `Year ${currentYear}, ${months[currentMonth - 1]} | `;
    date.style.fontWeight = "bold";
    date.style.marginRight = "10px";

    logElement.appendChild(date);
    logElement.innerText += logMessage;

    log.appendChild(logElement);
    logCounter++;
    currentMonth++;
}

function updateStatsDisplay() {
    const happinessDisplay = document.getElementById("happiness");
    happinessDisplay.innerText = happiness;

    const healthDisplay = document.getElementById("health");
    healthDisplay.innerText = health;

    const wealthDisplay = document.getElementById("wealth");
    wealthDisplay.innerText = wealth;
}

const happinessDeathCauses = ["Depression", "Loneliness", "Lack of fulfillment"];
const healthDeathCauses = ["Disease", "Accident", "Poor lifestyle choices"];
const wealthDeathCauses = ["Bankruptcy", "Debt", "Financial ruin"];

function checkForDeath() {
    let deathCause;
    if (happiness <= 0) {
        deathCause = happinessDeathCauses[Math.floor(Math.random() * happinessDeathCauses.length)];
    } else if (health <= 0) {
        deathCause = healthDeathCauses[Math.floor(Math.random() * healthDeathCauses.length)];
    } else if (wealth <= 0) {
        deathCause = wealthDeathCauses[Math.floor(Math.random() * wealthDeathCauses.length)];
    }
    if (deathCause) {
        const deathChance = Math.random();
        if (deathChance <= 0.5) {
            return deathCause;
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
    document.getElementById("friends-list").style.display = "none";
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

    // Reset the game state
    happiness = 50;
    health = 50;
    wealth = 50;
    currentEventIndex = 0;
    currentYear = 0;
    currentMonth = 1;
    logCounter = 0;
    const log = document.getElementById("log");
    log.innerHTML = "";
}

function displayPlayerName(firstName, lastName) {
    const playerNameElement = document.getElementById("player-name");
    playerNameElement.innerText = `${firstName} ${lastName}`;
}

function clampAttribute(value) {
    return Math.min(Math.max(value, 0), 100);
}

function updateFriendsList() {
    const friendsListElement = document.getElementById("friends-list-items");
    friendsListElement.innerHTML = ""; // Clear the list before updating

    for (const friend of friends) {
        const friendElement = document.createElement("li");
        friendElement.innerText = `${friend.name} - ${friend.description}`;
        friendsListElement.appendChild(friendElement);
    }
}


