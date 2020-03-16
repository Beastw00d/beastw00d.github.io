angular.module('app', []);
angular.module('app').controller("teams", teams);


function teams () {
  var vm = this;

  vm.players = ['Chris', 'Will', 'BP', 'JP', 'Ryan', 'Spencer']
  vm.newPlayer = '';
  vm.teamsArray = [];

  vm.delete = function (player) {
    vm.players = vm.players.filter(arrayItem => arrayItem !== player);
  }

  vm.add = function (player) {
      vm.players.push(player);
  }

  vm.generate = function () {
     var shuffledPlayers = angular.copy(vm.players);
     shuffleArray(shuffledPlayers);
     vm.teamsArray = chunkArray(shuffledPlayers);
  }

  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
  
  function chunkArray(array) {
    const new_array = [];

	const chunksize = 3;
    while (array.length) {
    	const chunk = array.splice(0,chunksize);
    	new_array.push(chunk);
    }
    return new_array;
  }
}
