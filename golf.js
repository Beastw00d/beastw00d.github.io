angular.module('app', []);
angular.module('app').controller("golf", golf);


function golf() {
    var vm = this;

    vm.players = [{
            name: 'BP',
            picks: [{
                    id: 1,
                    name: 'Justin Thomas',
                    rounds: [
                        {score: -6, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 2,
                    name: 'Patrick Reed',
                    rounds: [
                        {score: -4, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}
                    ]
                },
                {
                    id: 3,
                    name: 'Patrick Cantlay',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 4,
                    name: 'Matthew Wolff',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 5,
                    name: 'Francesco Molinari',
                    rounds: [
                        {score: 0, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                }
            ]
        },
        {
            name: 'Chris',
            picks: [{
                    id: 6,
                    name: 'Rory Mcilroy',
                    rounds: [
                        {score: 3, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 7,
                    name: 'Xander Schauffele',
                    rounds: [
                        {score: -5, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 8,
                    name: 'Hideki Matsuyama',
                    rounds: [
                        {score: -4, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 9,
                    name: 'Tiger Woods',
                    rounds: [
                        {score: -4, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 10,
                    name: 'Jason Day',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                }
            ]
        },
        {
            name: 'JP',
            picks: [{
                    id: 11,
                    name: 'Jon Rahm',
                    rounds: [
                        {score: -3, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 12,
                    name: 'Tony Finau',
                    rounds: [
                        {score: -3, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 13,
                    name: 'Tommy Fleetwood',
                    rounds: [
                        {score: -1, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 14,
                    name: 'Ian Poulter',
                    rounds: [
                        {score: 0, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 15,
                    name: 'Cameron Champ',
                    rounds: [
                        {score: -4, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                }
            ]
        },
        {
            name: 'Ryan',
            picks: [{
                    id: 16,
                    name: 'Dustin Johnson',
                    rounds: [
                        {score: -7, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 17,
                    name: 'Bubba Watson',
                    rounds: [
                        {score: 2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 18,
                    name: 'Webb Simpson',
                    rounds: [
                        {score: -5, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 19,
                    name: 'Louis Oosthuizen',
                    rounds: [
                        {score: -4, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 20,
                    name: 'Tyrrell Hatton',
                    rounds: [
                        {score: 1, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                }
            ]
        },
        {
            name: 'Will',
            picks: [{
                    id: 21,
                    name: 'Bryson Dechambeau',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 22,
                    name: 'Brooks Koepka',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 23,
                    name: 'Rickie Fowler',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 24,
                    name: 'Matt Kuchar',
                    rounds: [
                        {score: -2, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                },
                {
                    id: 25,
                    name: 'Kevin Kisner',
                    rounds: [
                        {score: -1, done: true},
                        {score: 0, done: false},
                        {score: 0, done: false},
                        {score: 0, done: false}]
                }
            ]
        }
    ];



    for (const player of vm.players) {
       let total = 0;
       let subtotals = [0,0,0,0];
       for (const pick of player.picks) {
          for (const [i,round] of pick.rounds.entries()) {
              total += round.score;
              subtotals[i] += round.score;
          }
       }
       player.subtotals = subtotals
       player.total = total;
    }

}
