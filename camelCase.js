function main() {
    var s = 'saveChangesInTheEditor';
    s = s.replace(s.charAt(0), s.charAt(0).toLowerCase());

    var count = getUperCaseLetters(s);
    count.length++;

    return console.log(count.length);

}

function getUperCaseLetters(words) {
    var count = words.split('');

    return count.filter(function(word) {
        return (/[A-Z]/.test(word));
    });
}

main();
