const solution = (input) => {
    const name = [];
    const 필요한사탕 = [];
    const 가지고있는사탕 = [];
    for(let i = 0; i < input.length; i += 2) {
        name.push(input[i]);
        필요한사탕.push(Number(input[i + 1].split(' ')[0]));
        가지고있는사탕.push(Number(input[i + 1].split(' ')[1]));
    }
    const 포켓몬 = new Map();
    for(let i = 0; i < name.length; i++) {
        let 진화가능 = 0;
        while(가지고있는사탕[i] / 필요한사탕[i] >= 1) {
            진화가능 += Math.floor(가지고있는사탕[i] / 필요한사탕[i]);
            let num = Math.floor(가지고있는사탕[i] / 필요한사탕[i]);
            가지고있는사탕[i] -= (num * 필요한사탕[i]) - (num * 2);
        }
        포켓몬.set(name[i], 진화가능);
    }

    const 합 = [...포켓몬.values()].reduce((x, y) => x + y);
    const 최대 = [...포켓몬.values()].sort((x, y) => y - x)[0];
    let result = '';
    for(const [key, value] of 포켓몬.entries()) {
        if(최대 === value) {
            result = key
            break;
        }
    }
	return `${합}\n${result}`;
}

const readline = require("readline");
const rl = readline.createInterface({

	input: process.stdin,
    output: process.stdout

});

 
const pokemon = [];
let count = 0;
rl.on("line", function (line) {
    if(count === 0) {
        count = Number(line);
    } else {
        pokemon.push(line)
    }
    if(pokemon.length === count * 2) {
       rl.close(); 
    }
    
}).on("close", function () {
    console.log(solution(pokemon));
    process.exit();
});