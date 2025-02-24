// Variables for Home

let homeScoreEl = document.getElementById("home-score");
let homeScoreCount = 0;
homeScoreEl.textContent = homeScoreCount;

// Variables for Guest

let guestScoreEl = document.getElementById("guest-score");
let guestScoreCount = 0;
guestScoreEl.textContent = 0;

// Home score counting

function addOneHome() {
    homeScoreCount += 1;
    homeScoreEl.textContent = homeScoreCount;
    highlightLeader();
}

function addTwoHome() {
    homeScoreCount += 2;
    homeScoreEl.textContent = homeScoreCount;
    highlightLeader();
}

function addThreeHome() {
    homeScoreCount += 3;
    homeScoreEl.textContent = homeScoreCount;
    highlightLeader();
}

////////////////////////////////////////////////

// Guest score counting

function addOneGuest() {
    guestScoreCount += 1;
    guestScoreEl.textContent = guestScoreCount;
    highlightLeader();
}

function addTwoGuest() {
    guestScoreCount += 2;
    guestScoreEl.textContent = guestScoreCount;
    highlightLeader();
}

function addThreeGuest() {
    guestScoreCount += 3;
    guestScoreEl.textContent = guestScoreCount;
    highlightLeader();
}

////////////////////////////////////////////////

// Highlight the leader

let leaderEl = document.getElementById("leader");
let homeWrapper = document.getElementById("home-wrapper");
let guestWrapper = document.getElementById("guest-wrapper");

function highlightLeader() {
    homeWrapper.classList.remove("highlight");
    guestWrapper.classList.remove("highlight");

    if (homeScoreCount === guestScoreCount) {
        leaderEl.textContent = "So far it's a tie game.";
    } else if (homeScoreCount > guestScoreCount) {
        leaderEl.textContent = `Home is leading by ${
            homeScoreCount - guestScoreCount
        } points!`;
        homeWrapper.classList.add("highlight");
    } else if (guestScoreCount > homeScoreCount) {
        leaderEl.textContent = `Guest is leading by ${
            guestScoreCount - homeScoreCount
        } points!`;
        guestWrapper.classList.add("highlight");
    } else {
        leaderEl.textContent = "";
    }
}

////////////////////////////////////////////////

// Start a new game

function restart() {
    homeScoreCount = 0;
    guestScoreCount = 0;
    homeScoreEl.textContent = homeScoreCount;
    guestScoreEl.textContent = guestScoreCount;
    leaderEl.textContent = "";
    homeWrapper.classList.remove("highlight");
    guestWrapper.classList.remove("highlight");
}
