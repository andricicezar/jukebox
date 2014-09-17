angular.module("dummy", [])
  .config([
    function() {
    }
  ])
  .run(["appState",
    function(appState) {
      appState.playlist = [
        {"id": 1, "artist":"Eminem", "title":"Survival"},
        {"id": 2, "artist":"Guess Who", "title":"Scuza-ma"},
        {"id": 3, "artist":"The Beatles", "title":"The Help"},
        {"id": 4, "artist":"Shannon Saunders Official", "title":"Sheets"},
        {"id": 5, "artist":"Sabina ddumba", "title":"Scarred for Life"},
        {"id": 6, "artist":"Jack Garratt", "title":"Worry"},
        {"id": 7, "artist":"Baby Queens", "title":"Red Light"},
        {"id": 8, "artist":"The Knocks", "title":"Classic (featuring Powers)"},
        {"id": 9, "artist":"Buddy Guy, Eric Clapton, BB King", "title":"Let me love you"},
        {"id": 10, "artist":"Michael Jackson", "title":"Beat me"},
        {"id": 11, "artist":"Eminem", "title":"Survival"},
        {"id": 12, "artist":"Guess Who", "title":"Scuza-ma"},
        {"id": 13, "artist":"The Beatles", "title":"The Help"},
        {"id": 14, "artist":"Shannon Saunders Official", "title":"Sheets"},
        {"id": 15, "artist":"Sabina ddumba", "title":"Scarred for Life"},
        {"id": 16, "artist":"Jack Garratt", "title":"Worry"},
        {"id": 17, "artist":"Baby Queens", "title":"Red Light"},
        {"id": 18, "artist":"The Knocks", "title":"Classic (featuring Powers)"},
        {"id": 19, "artist":"Buddy Guy, Eric Clapton, BB King", "title":"Let me love you"},
        {"id": 111, "artist":"Michael Jackson", "title":"Beat me"},
        {"id": 112, "artist":"Eminem", "title":"Survival"},
        {"id": 1123, "artist":"Guess Who", "title":"Scuza-ma"},
        {"id": 114, "artist":"Shannon Saunders Official", "title":"Sheets"},
        {"id": 1115, "artist":"Sabina ddumba", "title":"Scarred for Life"},
        {"id": 116, "artist":"Jack Garratt", "title":"Worry"},
        {"id": 117, "artist":"Baby Queens", "title":"Red Light"},
        {"id": 118, "artist":"The Knocks", "title":"Classic (featuring Powers)"},
        {"id": 119, "artist":"Buddy Guy, Eric Clapton, BB King", "title":"Let me love you"}
      ];

      appState.jukebox = [
        {"song_id": 1, "votes": 5},
        {"song_id": 2, "votes": 10},
        {"song_id": 119, "votes": 4},
        {"song_id": 116, "votes": 6},
        {"song_id": 111, "votes": 9},
        {"song_id": 19, "votes": 5},
        {"song_id": 3, "votes": 4},
        {"song_id": 4, "votes": 4},
        {"song_id": 5, "votes": 4},
        {"song_id": 6, "votes": 4},
        {"song_id": 7, "votes": 4},
        {"song_id": 8, "votes": 4}

      ];

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
