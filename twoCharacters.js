function maxLen(n, s){
    // Complete this function
    if (!(n <= 1 || n <= 1000)) return s.length;

    let uniqueLetters = findUniqueLetters(s);
    let obj = {
        s: s,
        n: n
    };
    let isStringModified = false;
    const pairs = 2;
    console.log(uniqueLetters);

    if (obj.s.length === pairs && isCreatingPairs(obj.s)) return s.length;

    uniqueLetters.forEach(attemptToRemove => {
        let regx = new RegExp(attemptToRemove, 'g');
        let matchString = s.match(regx);
        let tryRemoveString = obj.s;

        matchString.forEach(remove => {
            tryRemoveString = tryRemoveString.replace(remove, '');
        });

        if (!isCreatingPairs(tryRemoveString)) {
            console.log(`does not work for this character ${attemptToRemove}`);
            tryRemoveString = obj.s;
            isStringModified = true;
        }

        else {
            obj.s = tryRemoveString;
        }

    });

    return finalLengthResult(obj, isStringModified);
}

const finalLengthResult = (obj, isStringModified) => {
    if (isStringModified) {
        return obj.s.length === obj.n ? 0 : obj.s.length;
    }

    return obj.s.length;

};

const isCreatingPairs = (tryRemoveString) => {
    let i = 1;
    while(i < tryRemoveString.length){

        if (tryRemoveString.charAt(i - 1) === tryRemoveString.charAt(i)) {

            return false;
        }

        i++;
    }

    return true;
};

const findUniqueLetters = (s) => {
    let obj = {
        s: s,
        result: []
    };

    let i = 0;

    while (i < obj.s.length) {

        if (obj.s.includes(obj.s.charAt(i))) {

            removeItemFromTheString(obj, i);
            i = 0;
        }

        else {
            i++;
        }
    }

    return obj.result;
};

const removeItemFromTheString = (obj, i) => {

    let regx = new RegExp(obj.s.charAt(i), 'g');
    let remove = obj.s.match(regx);

    obj.result.push(obj.s.charAt(i));

    removeItems(remove, obj);
};

const removeItems = (items, obj) => {
    items.forEach(item => {
        obj.s = obj.s.replace(item, '');
    });
};

function main() {
    var n = 141;
    var s = 'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc';
    var result = maxLen(n, s);
    process.stdout.write(''+result+'\n');

}

main();
