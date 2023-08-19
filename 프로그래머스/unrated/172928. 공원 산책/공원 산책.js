function solution(park, routes) {
    let x = 0;
    let y = 0; 
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                x = i;
                y = j;
                break;
            }
        }
    }
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i].split(' ');
        let 방향 = route[0]; // 이동할 방향
        let 거리 = parseInt(route[1]); // 이동할 거리
        let newX = x; // 새로운 세로 방향 좌표
        let newY = y; // 새로운 가로 방향 좌표
        // 이동할 방향에 따라 새로운 좌표를 계산합니다.
        if (방향 === 'N') {
            newX -= 거리;
        } else if (방향 === 'S') {
            newX += 거리;
        } else if (방향 === 'W') {
            newY -= 거리;
        } else if (방향 === 'E') {
            newY += 거리;
        }
        if (newX >= 0 && newX < park.length && newY >= 0 && newY < park[0].length) {
            let 장애물 = false;
            if (방향 === 'N') {
                for (let j = x; j >= newX; j--) {
                    if (park[j][y] === 'X') {
                        장애물 = true;
                        break;
                    }
                }
            } else if (방향 === 'S') {
                for (let j = x; j <= newX; j++) {
                    if (park[j][y] === 'X') {
                        장애물 = true;
                        break;
                    }
                }
            } else if (방향 === 'W') {
                for (let j = y; j >= newY; j--) {
                    if (park[x][j] === 'X') {
                        장애물 = true;
                        break;
                    }
                }
            } else if (방향 === 'E') {
                for (let j = y; j <= newY; j++) {
                    if (park[x][j] === 'X') {
                        장애물 = true;
                        break;
                    }
                }
            }
            if (!장애물) {
                x = newX;
                y = newY;
            }
        }
    }
    return [x, y];
}
