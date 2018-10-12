
// generate
const h = 5;

const numberOfBaseTriangles = Math.pow(2, h - 2);
console.log(numberOfBaseTriangles)

let triangles = [];

for (let x = 1; x < h - 1; x++) {
    for (let i = 0; i < numberOfBaseTriangles / x; i++) {
        triangles = [...triangles, {v1: i + 1, v2: i + 2, v3: i + 3 }]
    }    
}

console.log(triangles.length);


// Recursive generate...
function buildTriangles(height) {
    return 0;
}

console.log(buildTriangles(1));


// search