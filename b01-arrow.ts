type Point = {
    x: number;
    y: number;
}

const getDistance = (point1: Point, point2: Point): number =>
    Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);



function main(): void {
    const a: Point = {
        x: 1,
        y: 1,
    };

    const b: Point = {
        x: 3,
        y: 5,
    };

   

    const d = getDistance(a, b);
    console.log(d);
}

main();
