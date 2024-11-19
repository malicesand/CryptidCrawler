
$(document).ready(() => {
  
  $('title').text('Crypt Crawler'); // site title
  
  // Containers 
  const $body = $('body'); 
  $body.html(''); // clear body
  
  const $heading = $("<img id = 'heading' src = 'img/CRYPT CRAWLER LOGO2.png'/>"); // Heading image
  $body.prepend($heading); // header to top of page
  const $userTweetsForm = $('<form></form>'); // User Tweet Form
  $body.append($userTweetsForm); // Form under heading

  //create children and labels for form
  $userTweetsForm.append('<div class = "creature"><label for="creatureName">Creature Name:</label><input type="text" id = "creatureName" class = "username"</div>') // creatureName(userName)
  $userTweetsForm.append('<div class = "creatureMessage"><label for="inputMessage">Message:</label><textarea type="text" id="inputMessage"</div>')
  
  const $submitTweet = $('<button type = "submit" id = "submitTweet">Submit</button>'); // tweet button
  $userTweetsForm.append($submitTweet); // add to form

  const $tweetsContainer = $('<div></div>');// Tweet Container
  $body.append($tweetsContainer); // Contains Tweets
  
  

  
  // Buttons
  const $backButton = $('<button id = "backButton">Back</button>')


  

  // const $usernameContainer = $('div id = "usernameContainer"></div>');
  // // user name text box. use input tag for limited characters
  // const $userTextBox = $('<input id="userTextBox" type="text" placeholder = "Creature"/>')
  // // username submit button
  // const $userSubmitButton = $('<button id="userSubmitButton"></button>');
  // $usernameContainer.append($userTextBox).append($userSubmitButton);
  // $body.append($usernameContainer)
  // Text Input Container
  // const $inputContainer = $('<div id = "user tweet" text >/div')
  // Text box and submit button

  
  
  
  
  
  // REFRESH TWEETS
  
  function addNewTweets() { // 
    // Create Tweet
    const $tweets = streams.home.map(tweet => { // creates array of tweets
      const $tweet = $('<div id = "tweet"></div>'); // tag for tweet
      const $username = $(`<div class = "username">@${tweet.user}</div>`); //class and tag for user name
      const $message = $(`<div class = "message">${tweet.message}</div>`);
      
      $tweet.append([$username, $message])
      
      // TIME STAMPS using the created_at property from current tweet
      const $timeStamp = $('<div id = "timeStamp"></div>') // #timeStamp div
      const dayCreated = moment(tweet.created_at).format("MMMM DD"); // day
      const timeCreated = moment(tweet.created_at).format("LT") // moment to generate time created string
      const timePast = moment(tweet.created_at).fromNow(); // relative time
    
      $timeStamp.text(`${dayCreated} at ${timeCreated} (${timePast})`); // string representing timestamp
      $tweet.append($timeStamp) // append to tweet div
      $tweetsContainer.prepend($tweet); // add individual tweet to beginning of tweetSection
      
     // $Tweets CSS
      $(".username").css({
        fontFamily: "Creepster",
        fontSize: '30pt'
      })

      $(".message").css({
        fontFamily: '"Edu AU VIC WA NT Pre", cursive',
        fontSize: '15pt'})

      $(".timeStamp").css({
        fontFamily: 'Creepster'
      })

      $('#tweet').css({
        background: 'green',
        border: 'solid black',
        margin: '1.5%'
      })

    });
  };
  

 
  
  // $body.append($tweets); // inserts array at end of body
  addNewTweets(); // START HERE FOR REFRESHING FUNCTION // base function
  setInterval(() => { // works but too many updates!
    addNewTweets()
  }, 5000);
  // $('.container').css({overflow: 'hidden'})
  // $('.sliding-background').css({background: "url('img/quinlanSeaMonster.jpg') repeat-x", height: '500px', width: '5076px'})
  
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

  $('#inputMessage').css({
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

   

  $tweetsContainer.css({
    marginTop: '150px',
    padding: '10px',
    background: 'pink',
    maxWidth: '1000px', 
    // maxHeight: '1000px', 
    marginRight: 'auto',
    marginLeft: 'auto',
    horizontalAlign: 'center', 
    verticalAlign: 'center'})
  
 
 
  // $usernameContainer.css({background: 'teal', maxWidth: 'px', horizontalAlign: 'center'})
  // $heading.css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})


  
    


//all code above this line !!!
});
