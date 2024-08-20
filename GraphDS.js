function findCenter(edges) {
    const [u1, v1] = edges[0];  
    const [u2, v2] = edges[1];  

    if (u1 === u2 || u1 === v2) {
        return u1;
    } else {
        return v1;
    }
}

const edges = [[1, 2], [5, 1], [1, 3], [1, 4]];
console.log(findCenter(edges)); // 1
