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
          "messages": [
            [true, "Hello, awesome song!"],
            [false, "Yeaah! It's my favourite song!"],
            [true, "Can I buy you a bear?"],
            [false, "Sure! Let's meet! :D"],
            [true, "Awesome"]]
        },
        {
          "name": "Pa",
          "color": "#ed537f",
          "messages": [
            [true, "This is a random text in latin. I know that it sounds weird, but believe me"],
            [true, "This is a random text in latin. I know that it sounds weird, but believe me"],
            [false, "This is a random text in latin. I know that it sounds weird, but believe me"],
            [true, "This is a random text in latin. I know that it sounds weird, but believe me"]
          ]
        },
        {
          "name": "Lo",
          "color": "#f69785",
          "messages": [
            [true, "Awesome song"]
          ]
        },
        {
          "name": "Xz",
          "color": "#9ba37e",
          "messages": [
          [false, "Hello"]
          ]
        },
        {
          "name": "Ca",
          "color": "#a1c23b",
          "messages": [
            [true, "Hello, awesome song!"],
            [false, "Yeaah! It's my favourite song!"],
            [true, "Can I buy you a bear?"],
            [false, "Sure! Let's meet! :D"],
            [true, "Awesome"]]
        },
        {
          "name": "Ca",
          "color": "#ed537f",
          "messages":  [
            [true, "Hello, awesome song!"],
            [false, "Yeaah! It's my favourite song!"],
            [true, "Can I buy you a bear?"],
            [false, "Sure! Let's meet! :D"],
            [true, "Awesome"]]
        },
        {
          "name": "Ca",
          "color": "#299fa8",
          "messages": [[false, "Danke"]]
        }
      ];

    }
  ])
  ;
