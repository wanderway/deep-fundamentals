// function footballPoints(games) {
//     let i;
//     let total = 0;
//
//     for (i = 0; i < games.length; i++) {
//
//         if (games[i].charAt(0) > games[i].charAt(2)) {
//            total += 3;
//         } else if (games[i].charAt(0) === games[i].charAt(2)) {
//             total += 1;
//         } else {
//             total += 0;
//         }
//     }
//     return total;
// }
//
// console.log(footballPoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","1:1","4:3"])); // 28


function footballPoints(games) {
    let i;
    let total = 0;

    for (i = 0; i < games.length; i++) {

        [firstTeamGoals, secondTeamGoals] = games[i].split(':');

        if (firstTeamGoals > secondTeamGoals) {
            total += 3;
        } else if (firstTeamGoals === secondTeamGoals) {
            total += 1;
        } else {
            total += 0;
        }
    }

    return total;
}

console.log(footballPoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","1:1","4:3"])); // 28