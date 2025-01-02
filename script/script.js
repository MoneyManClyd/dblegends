document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById("status");
    const voteButton = document.getElementById("vote-button");

    const BOT_ID = "YOUR_BOT_ID";  // Replace with your bot ID
    const API_KEY = "YOUR_DBL_API_KEY";  // Replace with your DBL API key
    const DBL_API_URL = `https://discord.bots.gg/api/v1/bots/${BOT_ID}`;

    // Fetch stats from DBL API
    fetch(DBL_API_URL, {
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.bot) {
            const botName = data.bot.username;
            const botUpvotes = data.bot.upvotes;

            // Display the bot stats
            statusElement.innerHTML = `Bot Name: ${botName}<br>Upvotes: ${botUpvotes}`;
        } else {
            statusElement.innerHTML = "Failed to load bot data.";
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        statusElement.innerHTML = "Error fetching bot data.";
    });

    // Button to redirect to voting page (link to DBL)
    voteButton.addEventListener("click", function() {
        window.open(`https://discord.bots.gg/bots/${BOT_ID}/vote`, "_blank");
    });
});
