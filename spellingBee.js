const form = document.querySelector('.spellingForm');
const wordList = ["yes", "no", "maybe", "i don't know"];

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const inputWords = [
        form.word1.value.trim().toLowerCase(),
        form.word2.value.trim().toLowerCase(),
        form.word3.value.trim().toLowerCase(),
        form.word4.value.trim().toLowerCase(),
        // Add more inputs if needed...
    ];

    const allWordsCorrect = inputWords.every(inputWord =>
        wordList.includes(inputWord)
    );

    if (allWordsCorrect) {
        alert("Good job!");
    } else {
        alert("Your spelling is wrong");
    }
});