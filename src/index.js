
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix==undefined||matrix.length==0) {
        return [];
    }

    let arr = [];

    for(let i=0; i<matrix.length; i++) {

        if(i%2==0) {
            for(let j=0; j<matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }  
        if(i%2>0) {
            for(let y=matrix[i].length-1; y>-1; y--) {
                arr.push(matrix[i][y]);
            }
        }    
    }
    return arr;
}
