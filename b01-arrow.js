// 1. Hàm dùng để tính khoảng cách giữa 2 điểm (arrow function)
const getDistance = (point1, point2) => Math.sqrt(
    (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)


function main() {
    const a = {
        x: 1,
        y: 1,
    }

    const b = {
        x: 3,
        y: 5,
    }

    const d = getDistance(a, b)
    console.log(d)
}