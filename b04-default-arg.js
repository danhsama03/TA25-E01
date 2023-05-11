function sum(a, b = 0, c = 0) {
    return a + b + c;
}

function main() {
    console.log(sum(1, 2));
    console.log(sum(1));
}

main();