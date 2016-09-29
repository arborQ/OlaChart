var app = angular.module('module', []);

function entryClass() {
  this.name = 'Opis';
  this.value = 1;
  this.type = 'red';
}

app.filter('times', function(){
  return (n) => { 
    var items = [];
    for(var i = 0; i < n;i++){
      items.push(i);
    }
    return items;
   };
});

app.controller('chartController', function() {
  this.rows = [ new entryClass() ];
});

app.component('editChartData', {
  templateUrl: 'scripts/edit.html',
  bindings : { rows: '<' },
  controller: function(){
    this.add = () => {
      this.rows.push(new entryClass());
    }
  }
});

app.component('displayChartData', {
  templateUrl: 'scripts/display.html',
  bindings : { rows: '<' },
});
