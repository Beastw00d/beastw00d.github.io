(function() {
    'use strict'
    String.prototype.hashCode = function() {
      var hash = 0, i, chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    angular.module('app', []);
    angular.module('app').controller("lineup", lineup);

    function lineup() {
      var vm = this;
      vm.myFilter = myFilter;
      vm.linesValid = linesValid;
      vm.line1Valid = line1Valid;
      vm.line2Valid = line2Valid;
      vm.line3Valid = line3Valid;
      vm.line4Valid = line4Valid;
      vm.line5Valid = line5Valid;
      vm.difference = .2;
      vm.export = exportCsv;

      vm.roster = [];
      vm.players = [];

      init();

      function myFilter(selectedOne) {
        return function(player) {
          return notSelected(player, selectedOne);
        }
      }

      function notSelected(i, s) {
        var valid = true;
        if (s) {
          if (s.name === i.name) return true
        }
        if (vm.line1A) {
          if (i.name === vm.line1A.name) return false
        };
        if (vm.line1B) {
          if (i.name === vm.line1B.name) return false
        };
        if (vm.line2A) {
          if (i.name === vm.line2A.name) return false
        };
        if (vm.line2B) {
          if (i.name === vm.line2B.name) return false
        };
        if (vm.line3A) {
          if (i.name === vm.line3A.name) return false
        };
        if (vm.line3B) {
          if (i.name === vm.line3B.name) return false
        };
        if (vm.line4A) {
          if (i.name === vm.line4A.name) return false
        };
        if (vm.line4B) {
          if (i.name === vm.line4B.name) return false
        };
        if (vm.line5A) {
          if (i.name === vm.line5A.name) return false
        };
        if (vm.line5B) {
          if (i.name === vm.line5B.name) return false
        };
        return valid;
      }

      function linesValid() {
        return line1Valid() && line2Valid() &&
          line3Valid() && line4Valid() && line5Valid();
      }

      function line1Valid() {
        if (!(vm.line1A && vm.line1B)) return false;
        var line2total = (vm.line2A && vm.line2B) ?
          vm.line2A.points + vm.line2B.points + vm.difference :
          1000;
        var total = vm.line1A.points + vm.line1B.points;
        return total <= line2total
      }

      function line2Valid() {
        if (!(vm.line2A && vm.line2B)) return false;

        var line3total = (vm.line3A && vm.line3B) ?
          vm.line3A.points + vm.line3B.points + vm.difference :
          1000;

        var total = vm.line2A.points + vm.line2B.points;
        return total <= line3total
      }

      function line3Valid() {
        if (!(vm.line3A && vm.line3B)) return false;

        var line4total = (vm.line4A && vm.line4B) ?
          vm.line4A.points + vm.line4B.points + vm.difference :
          1000;

        var total = vm.line3A.points + vm.line3B.points;
        return total <= line4total
      }

      function line4Valid() {
        if (!(vm.line4A && vm.line4B)) return false;

        var line5total = (vm.line5A && vm.line5B) ?
          vm.line5A.points + vm.line5B.points + vm.difference :
          1000;
        var total = vm.line4A.points + vm.line4B.points;
        return total <= line5total;
      }

      function line5Valid() {
        if (!(vm.line5A && vm.line5B)) return false;
        return true;
      }
      
      function lineCompare(oneA, oneB, twoA, twoB) {
        if (!(oneA && oneB)) return false;
        var line2total = (twoA && twoB) ?
          twoA.points + twoB.points + vm.difference :
          1000;
        var total = oneA.points + oneB.points;
        return total <= line2total
      }

      
      function init() {
        vm.roster = [{
            name: 'CHANG, JAMES/CHAN',
            points: 5.25
          },
          {
            name: 'CHANTHAPHAENG, ALEXANDER',
            points: 1.2
          },
          {
            name: 'CHOE, SO',
            points: 2.333
          },
          {
            name: 'CHOI, DENNIS',
            points: 4.167
          },
          {
            name: 'CLARKE, CHRIS',
            points: 4.5
          },
          {
            name: 'CLAYTON, REGGIE',
            points: 4
          },
          {
            name: 'DORRIS, JOHN',
            points: 3.5
          },
          {
            name: 'EASTWOOD, CHRIS',
            points: 1.1
          },
          {
            name: 'ESPINOZA, RAYMUNDO',
            points: 5.5
          },
          {
            name: 'FERGUSSON, KIP',
            points: 4.875
          },
          {
            name: 'LI, YAN',
            points: 5
          },
          {
            name: 'LY, BRADON',
            points: 2.5
          },
          {
            name: 'MA, PHUC',
            points: 2.2
          },
          {
            name: 'NGUYEN, BEN',
            points: 4.333
          },
          {
            name: 'PANARO, JIM',
            points: 4.5
          },
          {
            name: 'SANDERS, LUKE',
            points: 3.25
          },
          {
            name: 'SOH, YOU SEUNG',
            points: 5.25
          },
          {
            name: 'SURLS, JONATHAN',
            points: 2.4
          },
          {
            name: 'TRAN, HAI',
            points: 1.917
          },
          {
            name: 'WEXEL, PETER',
            points: 3.5
          }
        ];

        vm.players = angular.copy(vm.roster);

      }

      function exportCsv() {
        findOtherLineups();        
      }

      function findOtherLineups() {
        var valid = [];
        var selectedPlayers = vm.roster.slice(0,10)
        var results = permutator(selectedPlayers);
        console.log('results ' + results.length)
        var line1A, line1B,
        line2A, line2B, line3A, line3B,
        line4A, line4B, line5A, line5B = 0;
        console.log(results)
        for (var x = 0; x < results.length; x++) {        
          var guys = results[x];
          
          line1A = guys[0];
          line1B = guys[1];
          line2A = guys[2];
          line2B = guys[3];
          line3A = guys[4];
          line3B = guys[5];
          line4A = guys[6];
          line4B = guys[7];
          line5A = guys[8];
          line5B = guys[9];
      
            
            valid.push({
              line_1: line1A.name + ' - ' + line1B.name
              line_2: line2A.name + ' - ' + line2B.name
              line_3: line3A.name + ' - ' + line3B.name
              line_4: line4A.name + ' - ' + line4B.name
              line_5: line5A.name + ' - ' + line5B.name
            });                 
        }
        
        JSONToCSVConvertor(valid, 'Alta', true, true);
      }

      function sum(d1, d2) {
        return +d1 + +d2;
      }

      function permutator(inputArr) {
        var results = [];
        var indexes = [];
        function permute(arr, memo) {
          var cur, memo = memo || [];
         for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1); 
            
            if (arr.length === 0) {
              var result = memo.concat(cur);
              var index = createIndex(result);    
              if(!exists(index, indexes))     
              {
                  results.push(result); 
                  indexes.push(index);                    
              }          
            }                                                                          
            
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
          }

          return results;
        }

        return permute(inputArr);
      }

      function validate(memo) {
        if(memo.length === 10) {
          return lineCompare(memo[0], memo[1], memo[2], memo[3])
        && lineCompare(memo[2], memo[3], memo[4], memo[5])
        && lineCompare(memo[4], memo[5], memo[6], memo[7]) 
        && lineCompare(memo[6], memo[7], memo[8], memo[9])
        && (memo[8] && memo[9])
        } else if (memo.length === 8 ) {
          return lineCompare(memo[0], memo[1], memo[2], memo[3])
          && lineCompare(memo[2], memo[3], memo[4], memo[5])
          && lineCompare(memo[4], memo[5], memo[6], memo[7]) 
        } else if(memo.length === 6) {
          return lineCompare(memo[0], memo[1], memo[2], memo[3])
          && lineCompare(memo[2], memo[3], memo[4], memo[5])
        } else if(memo.length === 4) {
          return lineCompare(memo[0], memo[1], memo[2], memo[3])
        }
        return true;
      }

      function exists (index, indexes) {
        return indexes.indexOf(index) > -1;
      }

      function createIndex(result) {
          var index = "";

          index += result[0].name < result[1].name ? (result[0].name + result[1].name).hashCode(): (result[1].name + result[0].name).hashCode();
          index += result[2].name < result[3].name ? (result[2].name + result[3].name).hashCode() : (result[3].name + result[2].name).hashCode();
          index += result[4].name < result[5].name ? (result[4].name + result[5].name).hashCode() : (result[5].name + result[4].name).hashCode();
          index += result[6].name < result[7].name ? (result[6].name + result[7].name).hashCode() : (result[7].name + result[6].name).hashCode();
          index += result[8].name < result[9].name ? (result[8].name + result[9].name).hashCode() : (result[9].name + result[8].name).hashCode();

          return index;
      }
      

      function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel, excel) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';
        //Set Report title in first row or line

        CSV += ReportTitle + '\r\n\n';

        //This condition will generate the Label/Header
        if (ShowLabel) {
          var row = "";

          //This loop will extract the label from 1st index of on array
          for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
          }

          row = row.slice(0, -1);

          //append Label row with line break
          CSV += row + '\r\n';
        }

        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
          }

          row.slice(0, row.length - 1);

          //add a line break after each row
          CSV += row + '\r\n';
        }

        if (CSV == '') {
          alert("Invalid data");
          return;
        }

        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g, "_");

        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        // Now the little tricky part.
        // you can use either>> window.open(uri);
        // but this will not work in some browsers
        // or you will not get the correct file extension    

        //this trick will generate a temp <a /> tag
        if (excel) {
          var link = document.createElement("a");
          link.href = uri;
        } else {
          window.open(uri);
        }
        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";

        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    }

})();
