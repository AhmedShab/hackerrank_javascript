function findPangram() {
    var input = '';

    input += 'We promptly judged antique ivory buckles for the next prize'.toLocaleLowerCase();

    let alphbet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < input.length; i++) {
        alphbet = alphbet.replace(input[i], '');
    }

    return alphbet ? 'not pangram' : 'pangram';
}

console.log(findPangram());
