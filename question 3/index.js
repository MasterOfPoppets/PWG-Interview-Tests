(function () {
  'use strict';
  
  var colour_groups = [
    {"id": 4, "label": "Stains", "sort_order": 1},
    {"id": 1, "label": "Special RALs", "sort_order": 2},
    {"id": 2, "label": "Fired Earth", "sort_order": 3},
    {"id": 3, "label": "Farrow and Ball", "sort_order": 4}
  ];
  
  angular.module('pwg.q3.app', [])
  
  .controller('PWGQ3Ctrl', ['$scope', function ($scope) {
    $scope.colours = [
      // Normal colours, no grouping
      {"id": 1, "label": "Signal White (RAL 9003)"},
      {"id": 2, "label": "Anthracite Grey (RAL 7016)"},
      {"id": 3, "label": "Black Brown (RAL 8022)"},
      {"id": 4, "label": "Black Grey (RAL 7021)"},
      {"id": 5, "label": "Black Red (RAL 3007)"},

      // Special RAL colours
      {"id": 6, "label": "Agate Grey (RAL 7038)", "group_id": 1},
      {"id": 7, "label": "Antique Pink (RAL 3014)", "group_id": 1},
      {"id": 8, "label": "Azure Blue (RAL 5009)", "group_id": 1},
      {"id": 9, "label": "Basalt Grey (RAL 7012)", "group_id": 1},
      {"id": 10, "label": "Beige (RAL 1001)", "group_id": 1},

      // Fired Earth colours
      {"id": 11, "label": "57th Street", "group_id": 2},
      {"id": 12, "label": "A Day by the Sea", "group_id": 2},
      {"id": 13, "label": "A Dip in the Lake", "group_id": 2},
      {"id": 14, "label": "A La Ronde", "group_id": 2},
      {"id": 15, "label": "Abbey Yellow", "group_id": 2},

      // Colour stains
      {"id": 46, "label": "Dark Oak", "group_id": 4},
      {"id": 47, "label": "Light Oak", "group_id": 4},
      {"id": 48, "label": "Calvados", "group_id": 4},
      {"id": 49, "label": "Cherry", "group_id": 4},
      {"id": 20, "label": "Cyprys", "group_id": 4},

      // Farrow and Ball colours
      {"id": 21, "label": "All White", "group_id": 3},
      {"id": 22, "label": "Ammonite", "group_id": 3},
      {"id": 23, "label": "Archive", "group_id": 3},
      {"id": 24, "label": "Arsenic", "group_id": 3},
      {"id": 25, "label": "Babouche", "group_id": 3},
      {"id": 26, "label": "Ball Green", "group_id": 3}
    ];
    
    $scope.getColourGrouping = function (colour) {
      if (colour.group_id) return getColourGroupName(colour.group_id);     
    }
  }])
  
  // Filter to take the colours array, and order it by colour group
  .filter('orderByColourGroup', function () {
    return function (array) {
      var arrayByColourGroup = [];
      
      // Add non-grouped colours
      for (var i = 0; i < array.length; i++) {
        if (!array[i].group_id) {
          arrayByColourGroup.push(array[i]); 
        }
      }
      
      // Sort colour groups by group order
      colour_groups.sort(colourGroupSort);
      
      // Add grouped colours in group sort_order
      for (var i = 0; i < colour_groups.length; i++) {
        for (var j = 0; j < array.length; j++) {
          if (array[j].group_id === colour_groups[i].id) {
            arrayByColourGroup.push(array[j]); 
          }
        }
      }
      
      return arrayByColourGroup;
    };
  });
  
  // Compare function for sorting by "sort_order"          
  function colourGroupSort(a, b) {
    if (a.sort_order > b.sort_order) return 1;
    else if (a.sort_order < b.sort_order) return -1;
    else return 0;
  }
  
  // Return the group name for the colour_group_id
  function getColourGroupName(colour_group_id) {
    for (var i = 0; i < colour_groups.length; i++) {
      if (colour_groups[i].id === colour_group_id) {
        return colour_groups[i].label;
      }
    }
  }
})();