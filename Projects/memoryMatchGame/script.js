const categories = {
    fruits: ["🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥝", "🍑"],
    emojis: ["😀", "😂", "😎", "😍", "🤩", "😜", "🥳", "😇"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"],
    planets: ["🌍", "🪐", "🌕", "☀️", "⭐", "🌑", "🌛", "🌌"],
    flags: ["🇺🇸", "🇬🇧", "🇮🇳", "🇨🇦", "🇫🇷", "🇩🇪", "🇯🇵", "🇧🇷"]
};

let selectedCategory = [];
let score = 0;
let timeLeft = 30;
let flippedCards = [];
let matchedCards = [];
let timer;

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        startGame(event.target.dataset.category);
    });
});

function startGame(category) {
    document.querySelector(".landing").classList.add("hidden");
    document.querySelector(".game-container").classList.remove("hidden");
    // document.querySelector(".top-bar").classList.remove("hidden");

    selectedCategory = [...categories[category], ...categories[category]];
    selectedCategory.sort(() => Math.random() - 0.5);

    document.getElementById("game-board").innerHTML = selectedCategory.map((emoji, index) => `
        <div class="card" data-index="${index}" data-value="${emoji}">❓</div>
    `).join("");

    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", flipCard));
    resetGame();
    startTimer();
}

function flipCard(event) {
    let card = event.target;
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.innerText = card.dataset.value;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    let [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards.push(card1, card2);
        score += 10;
    } else {
        card1.innerText = "❓";
        card2.innerText = "❓";
    }

    flippedCards = [];
    document.getElementById("score").innerText = score;

    if (matchedCards.length === selectedCategory.length) {
        endGame("You Win! 🎉");
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            endGame("Game Over! ⏳");
        }
    }, 1000);
}

function endGame(message) {
    clearInterval(timer);
    alert(message + ` Final Score: ${score}`);
}

document.getElementById("restart-btn").addEventListener("click", () => {
    // location.reload();
    // startGame(Object.keys(categories)[0]);
    location.reload()
});

// Back to home function
document.getElementById("back-home").addEventListener("click", () => {
    location.reload(); // Reload page to go back to home
});

// Reset game function
function resetGame() {
    score = 0;
    matchedCards = [];
    flippedCards = [];
    document.getElementById("score").innerText = score;
    clearInterval(timer);
}
