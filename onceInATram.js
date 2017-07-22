function onceInATram(x) {
    let firstHalf = x.substr(0, 3).split("");
    let secondHalf = x.substr(3, 3).split("");

    let totalFirstHalf = firstHalf.reduce((pre, curr) => {
        return parseInt(pre) + parseInt(curr);
    });

    // console.log(secondHalf);
    secondHalf[1] = parseInt(secondHalf[1]) + 1;
    secondHalf[2] = parseInt(secondHalf[2]) - 1;

    let test = secondHalf.reduce((pre, curr) => {
        return parseInt(pre) + parseInt(curr);
    });

    while(totalFirstHalf !== test){
        secondHalf[1] = parseInt(secondHalf[1]) + 1;
        secondHalf[2] = parseInt(secondHalf[2]) - 1;

        test = secondHalf.reduce((pre, curr) => {
            return parseInt(pre) + parseInt(curr);
        });
    }

    console.log(totalFirstHalf);

    return [firstHalf, secondHalf].reduce((pre, curr) => pre.concat(curr)).join("");
}

function main() {
    var x = "123555";
    var result = onceInATram(x);
    process.stdout.write("" + result + "\n");
}

main();
