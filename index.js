
$(document).ready(() => {
  
  $('title').text('Crypt Crawler'); // site title
  
  // Containers 
  const $body = $('body'); 
  $body.html(''); // clear body
  
  const $heading = $("<img id = 'heading' src = 'img/CRYPT CRAWLER LOGO2.png'/>"); // Heading image
  $body.prepend($heading); // header to top of page
  // const $userTweetsForm = $('<form></form>'); // User Tweet Form
  // $body.append($userTweetsForm); // Form under heading
  const $tweetsContainer = $('<div></div>');// Tweet Container
  $body.append($tweetsContainer); // Contains Tweets
  
  const $tweetTitle = $("<h2 id = 'tweetTitle'>muttering</h2>"); // title for tweet box
  ($tweetsContainer).append($tweetTitle);
  

  // $userTweetsForm.css({

  // })
  // Buttons
  const $backButton = $('<button id = "backButton">Back</button>')
  const $submitTweet = $('<button id = "submitTweet">cry</button>')


  

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
    const $tweets = streams.home.map(tweet => { // not sure if we need this but it's staying
      const $tweet = $('<div id = "tweet"></div>'); // tag for tweet
      // const $username = $(`<div class = "username">@${tweet.user}</div>`); //class and tag for user name
      // const $message = $(`<div class= "message">${tweet.message}`);
      const text = `@${tweet.user}: ${tweet.message}` ; // not helpful
      $('#tweet').css({color: 'green'})
      // $tweet.text(message);
      // $tweet.prepend($username);
      // TIME STAMPS
      
      const $timeStamp = $('<div id = "timeStamp"></div>') // #timeStamp 
      const dayCreated = moment(tweet.created_at).format("MMMM DD"); // day
      const timeCreated = moment(tweet.created_at).format("LT") // moment to generate time created string
      const timePast = moment(tweet.created_at).fromNow(); // relative time
      $timeStamp.text(`${dayCreated} at ${timeCreated} (${timePast})`)

      $tweet.text(text);  // IMPORTANT for array or individual
      $tweet.append($timeStamp)
      // $tweet.append($timeStamp)
      $tweetsContainer.prepend($tweet); // add individual tweet to beginning of tweetSection
      // return $tweet // necessary to return array
      
    });
  }
  
  
  // $body.append($tweets); // inserts array at end of body
  addNewTweets(); // START HERE FOR REFRESHING FUNCTION // base function
  // setInterval(() => { // works but too many updates!
  //   addNewTweets()
  // }, 1000);
  // $('.container').css({overflow: 'hidden'})
  // $('.sliding-background').css({background: "url('img/quinlanSeaMonster.jpg') repeat-x", height: '500px', width: '5076px'})
  
  // STYLING
  $body.css({backgroundImage: "url(img/quinlanSeaMonster.jpg)"}) // background image success
  $tweetsContainer.css({background: 'pink', maxWidth: '500px', horizontalAlign: 'center'})
  // $usernameContainer.css({background: 'teal', maxWidth: 'px', horizontalAlign: 'center'})
  // tweet container title
  // $tweetTitle.css({fontFamily: 'melted monster', color: 'teal', fontSize: '14 px', padding: '14px', textAlign: 'center'})
  
  // $heading.css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})
  // ($body).css('background-size', '50%')
    // ($body).css({backgroundColor: 'green'})  // body CSS


    // Section to hold Tweets
  
    


//all code above this line !!!
});
