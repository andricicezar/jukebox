angular.module("dummy", [])
  .config([
    function() {
    }
  ])
  .run(["appState",
    function(appState) {
      appState.connections = [
        {
          "name": "Ce",
          "color": "#299fa8",
          "messages": ["1"]
        },
        {
          "name": "Pa",
          "color": "#ed537f",
          "messages": ["2"]
        },
        {
          "name": "Lo",
          "color": "#f69785",
          "messages": ["3"]
        },
        {
          "name": "Xz",
          "color": "#9ba37e",
          "messages": ["4"]
        },
        {
          "name": "Ca",
          "color": "#a1c23b",
          "messages": ["5"]
        },
        {
          "name": "Ca",
          "color": "#ed537f",
          "messages": ["6"]
        },
        {
          "name": "Ca",
          "color": "#299fa8",
          "messages": ["7"]
        }
      ];

    }
  ])
  ;
