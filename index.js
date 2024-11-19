
$(document).ready(() => {
  
  $('title').text('Cryptid Crawler'); // site title
  
  
  const $body = $('body'); 
  $body.html(''); // clear body
  
  const $heading = $("<img id = 'heading' src = 'img/CRYPTID CRAWLER LOGO 4.png'/>"); // Heading image
  $heading.css({display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'})
  $body.prepend($heading); // header to top of page

  // Tweet Submission Form
  const $userTweetsForm = $('<form></form>'); 
  $body.append($userTweetsForm); // Form under heading
  $userTweetsForm.append('<div class = "creature"><label for="creatureName">Creature Name:</label><input type="text" id = "creatureName"</div>') // username
  $userTweetsForm.append('<div class = "creatureMessage"><label for="crypticMissive">Cryptic Missive:</label><textarea type="text" id="crypticMissive"</div>') // input message
  const $submitTweet = $('<button type = "submit" id = "submitTweet">Transmit</button>'); // button to submit username and message
  $userTweetsForm.append($submitTweet); // add button to form below the input message textarea
  $userTweetsForm.attr('onSubmit', 'return false') // creates rule preventing refresh when submit button is pressed

  // Create Tweet Container
  const $tweetsContainer = $('<div></div>');
  $body.append($tweetsContainer); // places tweet container below form

  const $backButton = $('<button id = "backButton">Main Mutterings</button>') // button which redirect to main message feed

 let origin = streams.home; // variable origin represents the source of the tweets

  function addNewTweets() { // creates tweet tag, time
    // $tweets variable represents an array of tweets created from the origin (typically streams.home from data-generator)
    const $tweets = origin.map(tweet => { // creates array of tweets
      
      // Format Tweet
      const $tweet = $('<div id = "tweet"></div>'); // tag for tweet
      const $username = $(`<div id = "${tweet.user}" class = "username">@${tweet.user}</div>`);// create id for each user
      const $message = $(`<div class = "message">${tweet.message}</div>`); // create tag for class
      $tweet.append([$username, $message]) // add the username and message variables to the tweet tag
        
      // Format Timestamp 
      const $time = tweet.created_at // variable time  represents the created_at property from data-generator
      const dayCreated = moment($time).format("MMMM DD"); // day
      const timeCreated = moment($time).format("LT") // moment to generate time created string
      const timePast = moment($time).fromNow(); // relative time
      const $timeStamp = $('<div id = "timeStamp"></div>') // create tag with timeStamp I
      $timeStamp.text(`${dayCreated} at ${timeCreated} (${timePast})`); // string representing timestamp
      
      // Append timeStamp container to tweet
      $tweet.append($timeStamp) // timesStamp.text will appear at the end of the tweet tag
      $tweetsContainer.prepend($tweet); // add individual tweet to beginning of tweetSection
      
      // Tweet CSS
      $(".username").css({fontFamily: "Creepster", fontSize: '30pt'})
      $(".message").css({fontFamily: '"Edu AU VIC WA NT Pre", cursive', fontSize: '15pt'})
      $(".timeStamp").css({fontFamily: 'Creepster'})
      $('#tweet').css({background: 'green', border: 'solid black', margin: '1.5%'})
  })
    
    // clicking on username
    $(".username").on('click', function() { // when anything of the class username is clicked
      $tweetsContainer.html('')
      origin = streams.users[$(this).attr('id')]; // the origin changes to the tweet array associated with this id
      addNewTweets(origin); // call addNewTweets with user origin
      $backButton.insertBefore($tweetsContainer);

    });
    // clicking on back
    $('#backButton').on('click', function() {
      origin = streams.home;
      addNewTweets(origin);
      $backButton.remove();
    })
  };

  // Call addNewTweets
  addNewTweets(); 

  // Set Interval to continue retrieving new tweets 
  setInterval(() => { 
    addNewTweets() // calls the addNewTweets function 
  }, 5000); // every 5 seconds
  

  // Construct Function to call when submitTweet button is clicked
  function writeTweet() {
    const message = $('#crypticMissive').val(); // variable message set to the value of the input form
    if (message) {
      const username = $('#creatureName').val(); // variable username set to the input vorm
      const tweet = {
        user: username,
        message: message,
        created_at: new Date() // new value for created_at property generated 
      };
      streams.home.push(tweet); 
      if (!streams[username]) {
        streams[username] = [];
      }
      streams[username].push(tweet);
      addNewTweets();
      $('#crypticMissive').val('')
    }
  }
  // Click Event Listener for the submitTweet button
  $('#submitTweet').click(writeTweet) // calls the writeTweet function


  // STYLING
  $body.css({
    backgroundImage: "url(img/quinlanSeaMonster.jpg)",
    justifyContent: 'center'}) // background image success

  $userTweetsForm.css({
    margin: 'auto',
    width: "800px",
    height: '650px',
    background: 'linear-gradient(to right,#8b008b,#556b2f)',
    borderRadius: "25px",

  })
  $userTweetsForm.css({
    padding: '20px',
    justifyContent: 'center',
  })

  $('.creature').css({
    margin: '20px',
    fontFamily: 'creepster',
    fontSize: '25pt',
    // justifyContent: 'center',
    display: 'grid',
  })

  $('#creatureName').css({
    marginLeft: '50px',
    marginRight: 'auto',
    padding: '15px',
    width: '600px',
    background: 'Chartreuse',
    fontFamily: 'creepster',
    fontSize: '20pt',
  
  })
  $('.creatureMessage').css({
    margin: '20px',
    fontFamily: 'creepster',
    fontSize: '25pt',
    // justifyContent: 'center',
    display: 'grid',
  })

  $('#crypticMissive').css({
    marginTop: '10px',
    marginLeft: '50px',
    marginRight: 'auto',
    padding: '50px',
    width: '600px',
    height: '150px',
    background: 'Chartreuse',
    fontFamily: 'creepster',
    fontSize: '20pt',
    display: 'inline-block'
  })
   
  $submitTweet.css({
    fontFamily: 'creepster',
    fontSize: '25pt',
    horizontalAlign: 'center',
    letterSpacing: 'wide',
    padding: '7px',
    width: '300px',
    height: '70px',
    background: '#7fff00',
    marginLeft: '35%',
    marginTop: '7%',
    borderRadius: '37%',
  })

  $backButton.css({
    fontFamily: 'creepster',
    fontSize: '25pt',
    // marginTop: '20px',
    // marginLeft: '700px',
    // marginRight: '50%',
    // horizontalAlign: 'center',
    margin: 'auto',
    marginTop: '60px',
    display: 'block',
    letterSpacing: 'wide',
    padding: '7px',
    width: '300px',
    height: '70px',
    background: '#7fff00',
    // verticalAlign: 'center',
  })

  $tweetsContainer.css({
    marginTop: '100px',
    padding: '10px',
    background: 'pink',
    maxWidth: '1000px', 
    // maxHeight: '1000px', 
    marginRight: 'auto',
    marginLeft: 'auto',
    horizontalAlign: 'center', 
    verticalAlign: 'center'})

//all code above this line !!!
});
