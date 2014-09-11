angular.module("appState")
  .factory("appState", [
    function() {
      return {
        wifiState: undefined,

        availableConnections: undefined,
        availableBars: [],

        currentConnection: {},
        connections: [
          {
            "name": "Ce",
            "color": "#299fa8",
            "messages": ["asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads","asd", "ads"]
          },
          {
            "name": "Pa",
            "color": "#ed537f",
            "messages": ["asdfd", "majuls", "asdfasdf", "Asdfasdf", "ersasdf", "madat"]
          },
          {
            "name": "Lo",
            "color": "#f69785",
            "messages": ["asdfsadf", "asdfadsfsdf", "asdfasf", "asdfd", "majuls", "asdfasdf", "Asdfasdf", "ersasdf", "madat"]
          },
          {
            "name": "Xz",
            "color": "#9ba37e",
            "messages": ["234asdfsadf", "asdfadsfsdf", "asdfasf", "asdfd", "majuls", "asdfasdf", "Asdfasdf", "ersasdf", "madat"]
          },
          {
            "name": "Ca",
            "color": "#a1c23b",
            "messages": ["Say hi!"]
          },
          {
            "name": "Ca",
            "color": "#ed537f",
            "messages": ["234asdfsadf", "asdfadsfsdf", "asdfasf", "asdfd", "majuls", "asdfasdf", "Asdfasdf", "ersasdf", "madat"]
          },
          {
            "name": "Ca",
            "color": "#299fa8",
            "messages": ["234asdfsadf", "asdfadsfsdf", "asdfasf", "asdfd", "majuls", "asdfasdf", "Asdfasdf", "ersasdf", "madat"]
          }
        ]
      };
    }
  ])
  ;
