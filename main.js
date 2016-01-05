angular.module('homeApp.main', ['ngAnimate'])

.controller('MainController', function ($scope, Main){
  $scope.zip = {};
  $scope.weatherData = {};
  $scope.movieData = {};
  $scope.imageData = {};

  $scope.getZipCode = function () {
    Main.getZipCode()
    .then(function (data) {
      $scope.weatherData.zip = data
      $scope.getWeather()
    })
  }

  $scope.getWeather = function () {
    Main.getWeather()
    .then(function (weatherData) {
      var temp = weatherData.main.temp
      var city = weatherData.name
      var toFarenheith = ((temp - 273.15)*9/5)+32
      toFarenheith = toFarenheith.toFixed(0)
      $scope.weatherData.temp = toFarenheith;
      $scope.weatherData.city = city;
    })
  }

  $scope.getMovies = function () {
    Main.getMovies()
    .then(function (movieData) {

      var movieTypePairs = {
        box_office: 'Box Office',
        upcoming: 'Upcoming',
        in_theaters: 'In Theaters',
        opening: 'Opening'
      }

      var movieType = movieTypePairs[movieData.data.random]

      var moviesShown = movieData.data.movies.length;

      if(movieData.data.movies.length > 10){
        moviesShown = 10;
      }

      for (var i = 0; i < moviesShown; i++) {
        $scope.movieData[i] = {
          title: movieData.data.movies[i].title,
          release: movieData.data.movies[i].release_dates.theater,
          poster: movieData.data.movies[i].posters.thumbnail,
          link: movieData.data.movies[i].links.alternate,
          synopsis: movieData.data.movies[i].synopsis,
          movieType: movieType
        }
        console.log("$scope.movieData: ", JSON.stringify($scope.movieData, null, "\t"));

      };
    })
  }

  $scope.getImage = function () {
    Main.getImage()
    .then(function (imageData) {
      if (imageData.url) {
        $scope.imageData.url = imageData.url
        $scope.imageData.title = imageData.title
        $scope.imageData.explanation = imageData.explanation
      }else{
        $scope.imageData.url = "smp.jpg"

      };
      $scope.getZipCode(); // These are here so they are called
      $scope.getMovies();  // loaded
    })
  }

  $scope.getImage(); // first API call
})


.controller('AppController', function($scope){
    $scope.imageList = [
      {
      position: 1,
      quote: "Frankly, my dear, I don't give a damn.",
      character: "Rhett Butler",
      actor: "Clark Gable",
      movie: "Gone with the Wind",
      year: 1939
    },
    {
      position: 2,
      quote: "I'm going to make him an offer he can't refuse.",
      character: "Don Vito Corleone",
      actor: "Marlon Brando",
      movie: "The Godfather",
      year: 1972
    },
    {
      position: 3,
      quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
      character: "Terry Malloy",
      actor: "Marlon Brando",
      movie: "On the Waterfront",
      year: 1954
    },
    {
      position: 4,
      quote: "Toto, I've got a feeling we're not in Kansas anymore.",
      character: "Dorothy Gale",
      actor: "Judy Garland",
      movie: "The Wizard of Oz",
      year: 1939
    },
    {
      position: 5,
      quote: "Here's looking at you, kid.",
      character: "Rick Blaine",
      actor: "Humphrey Bogart",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 6,
      quote: "Go ahead, make my day",
      character: "Harry Callahan",
      actor: "Clint Eastwood",
      movie: "Sudden Impact",
      year: 1983
    },
    {
      position: 7,
      quote: "All right, Mr. DeMille, I'm ready for my close-up.",
      character: "Norma Desmond",
      actor: "Gloria Swanson",
      movie: "Sunset Boulevard",
      year: 1950
    },
    {
      position: 8,
      quote: "May the Force be with you.",
      character: "Han Solo",
      actor: "Harrison Ford",
      movie: "Star Wars",
      year: 1977
    },
    {
      position: 9,
      quote: "Fasten your seatbelts. It's going to be a bumpy night.",
      character: "Margo Channing",
      actor: "Bette Davis",
      movie: "All About Eve",
      year: 1950
    },
    {
      position: 10,
      quote: "You talkin' to me?",
      character: "Travis Bickle",
      actor: "Robert De Niro",
      movie: "Taxi Driver",
      year: 1976
    },
    {
      position: 11,
      quote: "What we've got here is (a) failure to communicate.",
      character: "Captain",
      actor: "Strother Martin",
      movie: "Cool Hand Luke",
      year: 1967
    },
    {
      position: 12,
      quote: "I love the smell of napalm in the morning!",
      character: "Lt. Col. Bill Kilgore",
      actor: "Robert Duvall",
      movie: "Apocalypse Now",
      year: 1979
    },
    {
      position: 13,
      quote: "Love means never having to say you're sorry.",
      character: "Jennifer Cavilleri Barrett",
      actor: "Ali MacGraw",
      movie: "Love Story",
      year: 1970
    },
    {
      position: 14,
      quote: "The stuff that dreams are made of.",
      character: "Sam Spade",
      actor: "Humphrey Bogart",
      movie: "The Maltese Falcon",
      year: 1941
    },
    {
      position: 15,
      quote: "E.T. phone home.",
      character: "E.T.",
      actor: "Pat Welsh",
      movie: "E.T. the Extra-Terrestrial",
      year: 1982
    },
    {
      position: 16,
      quote: "They call me Mister Tibbs!",
      character: "Virgil Tibbs",
      actor: "Sidney Poitier",
      movie: "In the Heat of the Night",
      year: 1967
    },
    {
      position: 17,
      quote: "Rosebud.",
      character: "Charles Foster Kane",
      actor: "Orson Welles",
      movie: "Citizen Kane",
      year: 1941
    },
    {
      position: 18,
      quote: "Made it, Ma! Top of the world!",
      character: "Arthur Cody Jarrett",
      actor: "James Cagney",
      movie: "White Heat",
      year: 1949
    },
    {
      position: 19,
      quote: "I'm as mad as hell, and I'm not going to take this anymore!",
      character: "Howard Beale",
      actor: "Peter Finch",
      movie: "Network",
      year: 1976
    },
    {
      position: 20,
      quote: "Louis, I think this is the beginning of a beautiful friendship.",
      character: "Rick Blaine",
      actor: "Humphrey Bogart",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 21,
      quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
      character: "Hannibal Lecter",
      actor: "Anthony Hopkins",
      movie: "The Silence of the Lambs",
      year: 1991
    },
    {
      position: 22,
      quote: "Bond. James Bond.",
      character: "James Bond",
      actor: "Sean Connery",
      movie: "Dr. No",
      year: 1962
    },
    {
      position: 23,
      quote: "There's no place like home.",
      character: "Dorothy Gale",
      actor: "Judy Garland",
      movie: "The Wizard of Oz",
      year: 1939
    },
    {
      position: 24,
      quote: "I am big! It's the pictures that got small.",
      character: "Norma Desmond",
      actor: "Gloria Swanson",
      movie: "Sunset Boulevard",
      year: 1950
    },
    {
      position: 25,
      quote: "Show me the money!",
      character: "Rod Tidwell",
      actor: "Cuba Gooding, Jr.",
      movie: "Jerry Maguire",
      year: 1996
    },
    {
      position: 26,
      quote: "Why don't you come up sometime and see me?",
      character: "Lady Lou",
      actor: "Mae West",
      movie: "She Done Him Wrong",
      year: 1933
    },
    {
      position: 27,
      quote: "I'm walking here! I'm walking here!",
      character: "Ratso Rizzo",
      actor: "Dustin Hoffman",
      movie: "Midnight Cowboy",
      year: 1969
    },
    {
      position: 28,
      quote: "Play it, Sam. Play 'As Time Goes By.'",
      character: "Ilsa Lund",
      actor: "Ingrid Bergman",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 29,
      quote: "You can't handle the truth!",
      character: "Col. Nathan R. Jessep",
      actor: "Jack Nicholson",
      movie: "A Few Good Men",
      year: 1992
    },
    {
      position: 30,
      quote: "I want to be alone.",
      character: "Grusinskaya",
      actor: "Greta Garbo",
      movie: "Grand Hotel",
      year: 1932
    },
    {
      position: 31,
      quote: "After all, tomorrow is another day!",
      character: "Scarlett O'Hara",
      actor: "Vivien Leigh",
      movie: "Gone with the Wind",
      year: 1939
    },
    {
      position: 32,
      quote: "Round up the usual suspects.",
      character: "Capt. Louis Renault",
      actor: "Claude Rains",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 33,
      quote: "I'll have what she's having.",
      character: "Customer",
      actor: "Estelle Reiner",
      movie: "When Harry Met Sally...",
      year: 1989
    },
    {
      position: 34,
      quote: "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
      character: "Marie Slim Browning",
      actor: "Lauren Bacall",
      movie: "To Have and Have Not",
      year: 1944
    },
    {
      position: 35,
      quote: "You're gonna need a bigger boat.",
      character: "Martin Brody",
      actor: "Roy Scheider",
      movie: "Jaws",
      year: 1975
    },
    {
      position: 36,
      quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
      character: "Gold Hat",
      actor: "Alfonso Bedoya",
      movie: "The Treasure of the Sierra Madre",
      year: 1948
    },
    {
      position: 37,
      quote: "I'll be back.",
      character: "The Terminator",
      actor: "Arnold Schwarzenegger",
      movie: "The Terminator",
      year: 1984
    },
    {
      position: 38,
      quote: "Today, I consider myself the luckiest man on the face of the earth.",
      character: "Lou Gehrig",
      actor: "Gary Cooper",
      movie: "The Pride of the Yankees",
      year: 1942
    },
    {
      position: 39,
      quote: "If you build it, he will come.",
      character: "Shoeless Joe Jackson",
      actor: "Ray Liotta (voice)",
      movie: "Field of Dreams",
      year: 1989
    },
    {
      position: 40,
      quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
      character: "Forrest Gump",
      actor: "Tom Hanks",
      movie: "Forrest Gump",
      year: 1994
    },
    {
      position: 41,
      quote: "We rob banks.",
      character: "Clyde Barrow",
      actor: "Warren Beatty",
      movie: "Bonnie and Clyde",
      year: 1967
    },
    {
      position: 42,
      quote: "Plastics.",
      character: "Mr. Maguire",
      actor: "Walter Brooke",
      movie: "The Graduate",
      year: 1967
    },
    {
      position: 43,
      quote: "We'll always have Paris.",
      character: "Rick Blaine",
      actor: "Humphrey Bogart",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 44,
      quote: "I see dead people.",
      character: "Cole Sear",
      actor: "Haley Joel Osment",
      movie: "The Sixth Sense",
      year: 1999
    },
    {
      position: 45,
      quote: "Stella! Hey, Stella!",
      character: "Stanley Kowalski",
      actor: "Marlon Brando",
      movie: "A Streetcar Named Desire",
      year: 1951
    },
    {
      position: 46,
      quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
      character: "Charlotte Vale",
      actor: "Bette Davis",
      movie: "Now, Voyager",
      year: 1942
    },
    {
      position: 47,
      quote: "Shane. Shane. Come back!",
      character: "Joey Starrett",
      actor: "Brandon De Wilde",
      movie: "Shane",
      year: 1953
    },
    {
      position: 48,
      quote: "Well, nobody's perfect.",
      character: "Osgood Fielding III",
      actor: "Joe E. Brown",
      movie: "Some Like It Hot",
      year: 1959
    },
    {
      position: 49,
      quote: "It's alive! It's alive!",
      character: "Henry Frankenstein",
      actor: "Colin Clive",
      movie: "Frankenstein",
      year: 1931
    },
    {
      position: 50,
      quote: "Houston, we have a problem.",
      character: "Jim Lovell",
      actor: "Tom Hanks",
      movie: "Apollo 13",
      year: 1995
    },
    {
      position: 51,
      quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
      character: "Harry Callahan",
      actor: "Clint Eastwood",
      movie: "Dirty Harry",
      year: 1971
    },
    {
      position: 52,
      quote: "You had me at 'hello.'",
      character: "Dorothy Boyd",
      actor: "Renée Zellweger",
      movie: "Jerry Maguire",
      year: 1996
    },
    {
      position: 53,
      quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
      character: "Capt. Geoffrey T. Spaulding",
      actor: "Groucho Marx",
      movie: "Animal Crackers",
      year: 1930
    },
    {
      position: 54,
      quote: "There's no crying in baseball!",
      character: "Jimmy Dugan",
      actor: "Tom Hanks",
      movie: "A League of Their Own",
      year: 1992
    },
    {
      position: 55,
      quote: "La-dee-da, la-dee-da.",
      character: "Annie Hall",
      actor: "Diane Keaton",
      movie: "Annie Hall",
      year: 1977
    },
    {
      position: 56,
      quote: "A boy's best friend is his mother.",
      character: "Norman Bates",
      actor: "Anthony Perkins",
      movie: "Psycho",
      year: 1960
    },
    {
      position: 57,
      quote: "Greed, for lack of a better word, is good.",
      character: "Gordon Gekko",
      actor: "Michael Douglas",
      movie: "Wall Street",
      year: 1987
    },
    {
      position: 58,
      quote: "Keep your friends close, but your enemies closer.",
      character: "Michael Corleone",
      actor: "Al Pacino",
      movie: "The Godfather Part II",
      year: 1974
    },
    {
      position: 59,
      quote: "As God is my witness, I'll never be hungry again.",
      character: "Scarlett O'Hara",
      actor: "Vivien Leigh",
      movie: "Gone with the Wind",
      year: 1939
    },
    {
      position: 60,
      quote: "Well, here's another nice mess you've gotten me into!",
      character: "Oliver",
      actor: "Oliver Hardy",
      movie: "Sons of the Desert",
      year: 1933
    },
    {
      position: 61,
      quote: "Say 'hello' to my little friend!",
      character: "Tony Montana",
      actor: "Al Pacino",
      movie: "Scarface",
      year: 1983
    },
    {
      position: 62,
      quote: "What a dump.",
      character: "Rosa Moline",
      actor: "Bette Davis",
      movie: "Beyond the Forest",
      year: 1949
    },
    {
      position: 63,
      quote: "Mrs. Robinson, you're trying to seduce me... Aren't you?",
      character: "Benjamin Braddock",
      actor: "Dustin Hoffman",
      movie: "The Graduate",
      year: 1967
    },
    {
      position: 64,
      quote: "Gentlemen, you can't fight in here! This is the War Room!",
      character: "President Merkin Muffley",
      actor: "Peter Sellers",
      movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964
    },
    {
      position: 65,
      quote: "Elementary, my dear Watson",
      character: "Sherlock Holmes",
      actor: "Basil Rathbone",
      movie: "The Adventures of Sherlock Holmes",
      year: 1939
    },
    {
      position: 66,
      quote: "Get your stinking paws off me, you damned dirty ape!",
      character: "George Taylor",
      actor: "Charlton Heston",
      movie: "Planet of the Apes",
      year: 1968
    },
    {
      position: 67,
      quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
      character: "Rick Blaine",
      actor: "Humphrey Bogart",
      movie: "Casablanca",
      year: 1942
    },
    {
      position: 68,
      quote: "Heeeere's Johnny!",
      character: "Jack Torrance",
      actor: "Jack Nicholson",
      movie: "The Shining",
      year: 1980
    },
    {
      position: 69,
      quote: "They're here!",
      character: "Carol Anne Freeling",
      actor: "Heather O'Rourke",
      movie: "Poltergeist",
      year: 1982
    },
    {
      position: 70,
      quote: "Is it safe?",
      character: "Dr. Christian Szell",
      actor: "Laurence Olivier",
      movie: "Marathon Man",
      year: 1976
    },
    {
      position: 71,
      quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
      character: "Jakie Rabinowitz/Jack Robin",
      actor: "Al Jolson",
      movie: "The Jazz Singer",
      year: 1927
    },
    {
      position: 72,
      quote: "No wire hangers, ever!",
      character: "Joan Crawford",
      actor: "Faye Dunaway",
      movie: "Mommie Dearest",
      year: 1981
    },
    {
      position: 73,
      quote: "Mother of mercy, is this the end of Rico?",
      character: "Cesare Enrico Rico Bandello",
      actor: "Edward G. Robinson",
      movie: "Little Caesar",
      year: 1930
    },
    {
      position: 74,
      quote: "Forget it, Jake, it's Chinatown.",
      character: "Lawrence Walsh",
      actor: "Joe Mantell",
      movie: "Chinatown",
      year: 1974
    },
    {
      position: 75,
      quote: "I have always depended on the kindness of strangers.",
      character: "Blanche DuBois",
      actor: "Vivien Leigh",
      movie: "A Streetcar Named Desire",
      year: 1951
    },
    {
      position: 76,
      quote: "Hasta la vista, baby.",
      character: "The Terminator",
      actor: "Arnold Schwarzenegger",
      movie: "Terminator 2: Judgment Day",
      year: 1991
    },
    {
      position: 77,
      quote: "Soylent Green is people!",
      character: "Det. Robert Thorn",
      actor: "Charlton Heston",
      movie: "Soylent Green",
      year: 1973
    },
    {
      position: 78,
      quote: "Open the pod bay doors, HAL.",
      character: "Dave Bowman",
      actor: "Keir Dullea",
      movie: "2001: A Space Odyssey",
      year: 1968
    },
    {
      position: 79,
      quote: "Striker: Surely you can't be serious?! Rumack: I am serious... and don't call me Shirley.",
      character: "Ted Striker and Dr. Rumack",
      actor: "Robert Hays and Leslie Nielsen",
      movie: "Airplane!",
      year: 1980
    },
    {
      position: 80,
      quote: "Yo, Adrian!",
      character: "Rocky Balboa",
      actor: "Sylvester Stallone",
      movie: "Rocky",
      year: 1976
    },
    {
      position: 81,
      quote: "Hello gorgeous.",
      character: "Fanny Brice",
      actor: "Barbra Streisand",
      movie: "Funny Girl",
      year: 1968
    },
    {
      position: 82,
      quote: "Toga! Toga!",
      character: "John Bluto Blutarsky",
      actor: "John Belushi",
      movie: "National Lampoon's Animal House",
      year: 1978
    },
    {
      position: 83,
      quote: "Listen to them. Children of the night. What music they make.",
      character: "Count Dracula",
      actor: "Bela Lugosi",
      movie: "Dracula",
      year: 1931
    },
    {
      position: 84,
      quote: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
      character: "Carl Denham",
      actor: "Robert Armstrong",
      movie: "King Kong",
      year: 1933
    },
    {
      position: 85,
      quote: "My precious.",
      character: "Gollum",
      actor: "Andy Serkis",
      movie: "The Lord of the Rings: The Two Towers",
      year: 2002
    },
    {
      position: 86,
      quote: "Attica! Attica!",
      character: "Sonny Wortzik",
      actor: "Al Pacino",
      movie: "Dog Day Afternoon",
      year: 1975
    },
    {
      position: 87,
      quote: "Sawyer, you're going out a youngster, but you've got to come back a star!",
      character: "Julian Marsh",
      actor: "Warner Baxter",
      movie: "42nd Street",
      year: 1933
    },
    {
      position: 88,
      quote: "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
      character: "Ethel Thayer",
      actor: "Katharine Hepburn",
      movie: "On Golden Pond",
      year: 1981
    },
    {
      position: 89,
      quote: "Tell 'em to go out there with all they got and win just one for The Gipper.",
      character: "Knute Rockne",
      actor: "Pat O'Brien",
      movie: "Knute Rockne, All American",
      year: 1940
    },
    {
      position: 90,
      quote: "A martini. Shaken, not stirred.",
      character: "James Bond",
      actor: "Sean Connery",
      movie: "Goldfinger",
      year: 1964
    },
    {
      position: 91,
      quote: "Who's on First?",
      character: "Dexter",
      actor: "Bud Abbott",
      movie: "The Naughty Nineties",
      year: 1945
    },
    {
      position: 92,
      quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac... It's in the hole! It's in the hole! It's in the hole!",
      character: "Carl Spackler",
      actor: "Bill Murray",
      movie: "Caddyshack",
      year: 1980
    },
    {
      position: 93,
      quote: "Life is a banquet, and most poor suckers are starving to death!",
      character: "Mame Dennis",
      actor: "Rosalind Russell",
      movie: "Auntie Mame",
      year: 1958
    },
    {
      position: 94,
      quote: "I feel the need—the need for speed!",
      character: "Lt. Pete Maverick Mitchell and Lt. Nick Goose Bradshaw",
      actor: "Tom Cruise and Anthony Edwards",
      movie: "Top Gun",
      year: 1986
    },
    {
      position: 95,
      quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
      character: "John Keating",
      actor: "Robin Williams",
      movie: "Dead Poets Society",
      year: 1989
    },
    {
      position: 96,
      quote: "Snap out of it!",
      character: "Loretta Castorini",
      actor: "Cher",
      movie: "Moonstruck",
      year: 1987
    },
    {
      position: 97,
      quote: "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
      character: "George M. Cohan",
      actor: "James Cagney",
      movie: "Yankee Doodle Dandy",
      year: 1942
    },
    {
      position: 98,
      quote: "Nobody puts 'Baby' in a corner.",
      character: "Johnny Castle",
      actor: "Patrick Swayze",
      movie: "Dirty Dancing",
      year: 1987
    },
    {
      position: 99,
      quote: "I'll get you, my pretty, and your little dog too!",
      character: "Wicked Witch of the West",
      actor: "Margaret Hamilton",
      movie: "The Wizard of Oz",
      year: 1939
    },
    {
      position: 100,
      quote: "I'm king of the world!",
      character: "Jack Dawson",
      actor: "Leonardo DiCaprio",
      movie: "Titanic",
      year: 1997
    },
    {
      position: 101,
      quote: "The first rule of fight club is you do not talk about fight club",
      character: "Tyler Durden",
      actor: "Brad Pitt",
      movie: "Fight Club",
      year: 1999
    },
    {
      position: 102,
      quote: "Yipee-ki-yay, motherfucker",
      character: "John McClane",
      actor: "Bruce Willis",
      movie: "Die Hard",
      year: 1988
    },
    {
      position: 103,
      quote: "English, motherfucker! Do you speak it?",
      character: "Jules Winnfield",
      actor: "Samuel L. Jackson",
      movie: "Pulp Fiction",
      year: 1994
    },
    {
      position: 104,
      quote: "Say hello to my little friend!",
      character: "Tony Montana",
      actor: "Al Pacino",
      movie: "Scarface",
      year: 1983
    },
    {
      position: 105,
      quote: "The greatest trick the Devil ever pulled was convincing the world he didn't exist.",
      character: "Verbal",
      actor: "Kevin Spacey",
      movie: "The Usual Suspects",
      year: 1995
    },
    {
      position: 106,
      quote: "I have to remind myself that some birds aren't meant to be caged, that's all. Their feathers are just too bright... and when they fly away, the part of you that knows it was a sin to lock them up does rejoice... but still, the place you live is that much more drab and empty that they're gone. I guess I just miss my friend.",
      character: "Ellis Boyd 'Red' Redding",
      actor: "Morgan Freeman",
      movie: "The Shawshank Redemption",
      year: 1994
    },
    {
      position: 107,
      quote: "Help! Help! I'm bein' repressed!",
      character: "Dennis",
      actor: "Michael Palin",
      movie: "Monty Python and the Holy Grail",
      year: 1975
    },
    {
      position: 108,
      quote: "Shut the fuck up, Donny!",
      character: "Walter Sobchak",
      actor: "John Goodman",
      movie: "The Big Lebowski",
      year: 1998
    },
    {
      position: 109,
      quote: "We were somewhere around Barstow on the edge of the desert when the drugs began to take hold.",
      character: "Raoul Duke",
      actor: "Johnny Depp",
      movie: "Fear and Loathing in Las Vegas",
      year: 1998
    },
    {
      position: 110,
      quote: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
      character: "Inigo Montoya",
      actor: "Mandy Patinkin",
      movie: "The Princess Bride",
      year: 1987
    }
  ]
})

.directive('gallery', function($interval){
  return {
    restrict: 'A',
    templateUrl: 'quoteCenter.html',
    scope: {
      images: '='
    },
    link: function(scope, element, attributes){
      var randomNumber = _.random(1,110)
      scope.nowShowing = randomNumber;

      $interval(function showNext () {
        scope.nowShowing = _.random(1,110);
      }, 10000);
    }
  };
})





