let isWordTypedCorrectly = false;
let typedKeys = [];

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

document.addEventListener('keydown', (event) => {
    const typedKey = event.key;

    if (typedKey === 'Backspace') {
        typedKeys.pop(); // Remove the most recently added element
    } else {
        typedKeys.push(typedKey);
    }

    const typedWord = typedKeys.join('');
    const currentWord = document.getElementById('typing-text').textContent;

    if (typedWord === currentWord) {
        isWordTypedCorrectly = true;
        typedKeys = [];
    }
});




// Main function to run all methods
function main() {
    fetchWords();
    setInterval(() => {
        if (isWordTypedCorrectly) {
            fetchWords();
            isWordTypedCorrectly = false;
        }
    }, 50);

}

// Call the main function
main();