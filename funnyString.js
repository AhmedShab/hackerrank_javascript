function funnyString(s, r){
    for (let i = 1; i < s.length; i++) {
        let text = s.charAt(i).charCodeAt(0);
        let textToCompare = s.charAt(i - 1).charCodeAt(0);

        let reverse = r.charAt(i).charCodeAt(0);
        let reverseToCompare = r.charAt(i - 1).charCodeAt(0);

        // console.log(`text ${text} textTwo ${textToCompare}`);
        // console.log(`reverse ${reverse} reverseTwo ${reverseToCompare}`);

        if (Math.abs(text - textToCompare) !== Math.abs(reverse - reverseToCompare)) {
            return 'Not Funny';
        }
    }

    return 'Funny';
}

function main() {
    var q = 1;
    for(var a0 = 0; a0 < q; a0++){
        var s = 'acxz';
        var r = s.split('').reverse().join('');

        var result = funnyString(s, r);
        process.stdout.write('' + result + '\n');
    }

}

main();
