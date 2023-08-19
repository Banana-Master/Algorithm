function solution(park, routes) {
    let x = 0; // 로봇 강아지의 세로 방향 좌표
    let y = 0; // 로봇 강아지의 가로 방향 좌표
    // 공원에서 로봇 강아지의 시작 위치를 찾습니다.
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                x = i;
                y = j;
                break;
            }
        }
    }
    // 각 경로에 대해 반복합니다.
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i].split(' ');
        let direction = route[0]; // 이동할 방향
        let distance = parseInt(route[1]); // 이동할 거리
        let newX = x; // 새로운 세로 방향 좌표
        let newY = y; // 새로운 가로 방향 좌표
        // 이동할 방향에 따라 새로운 좌표를 계산합니다.
        if (direction === 'N') {
            newX -= distance;
        } else if (direction === 'S') {
            newX += distance;
        } else if (direction === 'W') {
            newY -= distance;
        } else if (direction === 'E') {
            newY += distance;
        }
        // 새로운 좌표가 공원 내부에 있는지 확인합니다.
        if (newX >= 0 && newX < park.length && newY >= 0 && newY < park[0].length) {
            let blocked = false; // 장애물이 있는지 여부
            // 이동하는 경로에 장애물이 있는지 확인합니다.
            if (direction === 'N') {
                for (let j = x - 1; j >= newX; j--) {
                    if (park[j][y] === 'X') {
                        blocked = true;
                        break;
                    }
                }
            } else if (direction === 'S') {
                for (let j = x + 1; j <= newX; j++) {
                    if (park[j][y] === 'X') {
                        blocked = true;
                        break;
                    }
                }
            } else if (direction === 'W') {
                for (let j = y - 1; j >= newY; j--) {
                    if (park[x][j] === 'X') {
                        blocked = true;
                        break;
                    }
                }
            } else if (direction === 'E') {
                for (let j = y + 1; j <= newY; j++) {
                    if (park[x][j] === 'X') {
                        blocked = true;
                        break;
                    }
                }
            }
            // 장애물이 없다면 로봇 강아지를 새로운 위치로 이동시킵니다.
            if (!blocked) {
                x = newX;
                y = newY;
            }
        }
    }
    // 최종 위치를 반환합니다.
    return [x, y];
}
