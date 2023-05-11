function sum(): number {
    let a = arguments;
    let s = 0
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
}

function main(): void {
    console.log(sum(1, 2));
    console.log(sum(1, 2, 3));
}

main();