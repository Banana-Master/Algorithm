function solution(message, spoiler_ranges) {
    let answer = 0;
    
    // 1. 메시지에서 각 단어의 [텍스트, 시작인덱스, 끝인덱스]를 추출합니다.
    const words = [];
    let i = 0;
    while (i < message.length) {
        if (message[i] === ' ') {
            i++;
            continue;
        }
        let start = i;
        while (i < message.length && message[i] !== ' ') {
            i++;
        }
        let end = i - 1;
        let text = message.slice(start, i);
        words.push({ text, start, end });
    }
    
    console.log(words);

    // 2. 가림막 바깥(일반 구간)에 완전히 노출된 안전한 단어들을 모읍니다.
    const safeWords = new Set();
    
    for (const word of words) {
        let isSpoiler = false;
        // 단어가 하나라도 스포 구간과 겹치는지 체크
        for (const [rStart, rEnd] of spoiler_ranges) {
            if (word.start <= rEnd && word.end >= rStart) {
                isSpoiler = true;
                break;
            }
        }
        // 어떤 스포 구간과도 겹치지 않는 단어는 안전한 단어 리스트에 추가
        if (!isSpoiler) {
            safeWords.add(word.text);
        }
    }
    
    console.log(safeWords);

    // 3. 이미 중요한 단어로 카운트한 단어들을 기록할 셋
    const checkedWords = new Set();

    // 4. 스포일러 가림막(구간)을 왼쪽부터 하나씩 순서대로 열어봅니다.
    for (const [rStart, rEnd] of spoiler_ranges) {
        // 이번 가림막에 걸쳐진 단어들을 '왼쪽 순서대로' 찾습니다.
        for (const word of words) {
            if (word.start <= rEnd && word.end >= rStart) {
                
                // [조건 검사] 
                // 1. 안전한 단어 리스트에 없어야 함 (일반 구간 등장 이력 X)
                // 2. 이전에 이미 체크한 단어가 아니어야 함 (중복 X)
                if (!safeWords.has(word.text) && !checkedWords.has(word.text)) {
                    answer++;
                    checkedWords.add(word.text); // 이제 확인했으므로 중복 목록에 추가
                }
            }
        }
    }
    
    console.log(checkedWords);

    return answer;
}