angular.module('app', []);
angular.module('app').controller("pickleball", pickleball);


function pickleball () {
  var vm = this;

  vm.players = ['Andrew', 'Chris', 'Connor', 'Dan', 'Ille', 'Jason', 'Mitchell', 'Tim']
  vm.shuffledPlayers = [];

  vm.generate = function () {
     vm.shuffledPlayers = angular.copy(vm.players);
     shuffleArray(vm.shuffledPlayers);
     //vm.teamsArray = chunkArray(shuffledPlayers);
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