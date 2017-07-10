function main() {
    var n = 12;
    var s = 'Hello_World!';
    var k = 4;

    let encode = s.split('');

    console.log(encode);

    encode = encode.map(item => {

        if (/[A-Z]/i.test(item)) {
            return String.fromCharCode(getValidUnicode(item));
        }

        return item;
    });

    function getValidUnicode(item) {

        const base = /[a-z]/.test(String.fromCharCode(item.charCodeAt(0))) ? 97 : 65;

        return (item.charCodeAt(0) + k - base) % 26 + base;
    }

    encode = encode.join('');

    console.log(encode);

}

main();
