function capitalize(str) {

    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}

module.exports = capitalize;
