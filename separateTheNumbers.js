function separateTheNumbers(s) {

    let smallest = -1;

    for (let i = 1; i <= s.length / 2; i++) {

        let x = parseInt(s.substring(0, i));

        smallest = x;
        let testNumber = x.toString();

        while (testNumber.length < s.length) {

            x++;
            testNumber += x.toString();

        }

        if (testNumber === s) {
            return 'YES ' + smallest;
        }

    }

    return 'NO';
}


function main() {
    var q = 1;
    for(var a0 = 0; a0 < q; a0++){
        var s = '1112';
        // your code goes here
        let result = separateTheNumbers(s);

        console.log(result);
    }
}

main();
