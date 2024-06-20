
// Helper function to get a random word from an array
function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to fetch a random word from the file
async function fetchWords() {
    try {
        const response = await fetch('words.txt');
        const text = await response.text();
        const words = text.split('\n');
        const randomWord = getRandomWord(words);
        document.getElementById('typing-text').textContent = randomWord;
    } catch (error) {
        console.error('Error fetching words:', error);
    }
}

// Call the fetchWords function to fetch and display a random word
fetchWords();