function main() {
    var q = 1;
    let hackerrank = "hackerrank";
    var found = 0;
    for(var a0 = 0; a0 < q; a0++){
        var s = "hereiamstackerrank";
        // your code goes here
        for (let i = 0; i < s.length; i++) {
            if (s[i] === hackerrank[found]){
                found++;
            }
        }

    }
    console.log(hackerrank.length === found ? "YES": "NO");

}

main();
