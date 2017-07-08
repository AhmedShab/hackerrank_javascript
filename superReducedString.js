function super_reduced_string(s){
    // Complete this function

    var i = 1;
    while(i < s.length){

        if (s.charAt(i - 1) === s.charAt(i)) {

            var removeS = s.substr(i - 1, 2);
            s = s.replace(removeS, '');

            i = 1;
        }

        else {
            i++;
        }
    }

    return s ? s : 'Empty String' ;
}

function main() {
    var s = 'aa';
    var result = super_reduced_string(s);

    process.stdout.write('' + result + '\n');

}

main();
