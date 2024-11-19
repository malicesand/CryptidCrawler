
$(document).ready(() => {
  
  $('title').text('Crypt Crawler'); // site title
  
  // Containers 
  const $body = $('body'); 
  $body.html(''); // clear body
  $body.css({backgroundImage: "url(img/quinlanSeaMonster.jpg)"}) // background image success
  const $heading = $("<img id = 'heading' src = 'img/CRYPT CRAWLER LOGO2.png'/>"); // Heading image
  $body.prepend($heading); // header to top of page
  const $userTweetsForm = $('<form></form>'); // User Tweet Form
  $body.append($userTweetsForm); // Form under heading
  const $tweetsContainer = $('<div></div>');// Tweet Container
  $tweetsContainer.css({background: 'pink', maxWidth: '500px', horizontalAlign: 'center'})
  $body.append($tweetsContainer); // Contains Tweets
  const $tweetTitle = $("<h2 id = 'tweetTitle'>muttering</h2>"); // title for tweet box
  ($tweetsContainer).prepend($tweetTitle);

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

  
  // TIME STAMPS
  const $timeStamp = $('<div id = "timeStamp"></div>') // #timeStamp 
  const dayCreated = moment(time).format("MMMM DD"); // day
  const timeCreated = moment(time).format("LT") // moment to generate time created string
  const timePast = moment(time).fromNow(); // relative time
  $timeStamp.text(`${dayCreated} at ${timeCreated} (${timePast})`)




  // REFRESH TWEETS
  
  function addNewTweets() { // 
    // Create Tweet
    const $tweets = streams.home.map(tweet => { // not sure if we need this but it's staying
      const $tweet = $('<div id = "tweet"></div>');
      const text = `@${tweet.user}: ${tweet.message}` ;
      
      $tweet.text(text);  // IMPORTANT for array or individual
      $tweet.append($timeStamp)
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
  
  // $usernameContainer.css({background: 'teal', maxWidth: 'px', horizontalAlign: 'center'})
  // tweet container title
  $tweetTitle.css({fontFamily: 'melted monster', color: 'teal', fontSize: '14 px', padding: '14px', textAlign: 'center'})
  $tweet.css({color: 'green'})
  // $heading.css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})
  // ($body).css('background-size', '50%')
    // ($body).css({backgroundColor: 'green'})  // body CSS


    // Section to hold Tweets
  
    


//all code above this line !!!
});
