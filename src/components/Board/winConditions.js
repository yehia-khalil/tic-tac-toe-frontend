export function checkRows(grid){
    for(let i = 0 ; i < 3 ; i ++){
        if(grid[i].every(elem=>elem==='X')){
            return true;
        }else if(grid[i].every(elem=>elem==='O')){
            return true;
        }
    }
    return false;
}

export function checkColumns(grid){
    for(let col = 0 ; col < 3 ; col ++){
        if(grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col] && grid[0][col] !=null){
            return true;
        }
    }
    return false;
}

export function checkDiagonals(grid){
    if(((grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] != null) || (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[0][2] !=null ))){
        return true;
    }
    return false;
}

export function checkWin(grid,move){
    if( checkRows(grid)||
        checkColumns(grid)||
        checkDiagonals(grid)
        ){
            console.log(move);
        alert (move + " WINNNNN")
        return true;
    }
    return false;
}