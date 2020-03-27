angular.module('app', []);
angular.module('app').controller("teams", teams);


function teams () {
  var vm = this;

  vm.players = ['Arielle', 'Ben', 'BP', 'Chris', 'Grace', 'George', 'Jordan', 'Tony', 'Will'];
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
     var totalPlayers = shuffledPlayers.length;
     var mafiaCount = Math.floor(totalPlayers / 4) ;
     var sheriffCount = Math.floor(totalPlayers / 12);
     var angelCount = Math.floor(totalPlayers / 12); 
     mafiaCount = mafiaCount > 0 ? mafiaCount : 1;
     sheriffCount = sheriffCount > 0 ? sheriffCount : 1;
     angelCount = angelCount > 0 ? angelCount : 1;
     shuffleArray(shuffledPlayers);
     var mafiaTeam = shuffledPlayers.splice(0, mafiaCount);
     var sheriffTeam = shuffledPlayers.splice(0, sheriffCount);
     var angelTeam = shuffledPlayers.splice(0, angelCount);
     var civilensTeam = shuffledPlayers;
     vm.teamsArray = [];
     vm.teamsArray.push(mafiaTeam);
     vm.teamsArray.push(sheriffTeam);
     vm.teamsArray.push(angelTeam);
     vm.teamsArray.push(civilensTeam);  
  }

  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
}
