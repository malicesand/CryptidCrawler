
$(document).ready(() => {
  
 $('title').text('Crypt Crawler')
  
  // Body variable and clear body 
  const $body = $('body'); 
  $body.html(''); 

  // Heading image
  const $heading = $("<img id = 'heading' src = 'img/CRYPT CRAWLER LOGO2.png'/>")
  $body.prepend($heading) // header to top of page

  // Tweet Container
  const $tweetsContainer = $('<div></div>')
  $body.append($tweetsContainer)
  // Container Title
  const $tweetTitle = $("<h2 id = 'tweetTitle'>muttering</h2>"); // title for tweet box
  ($tweetsContainer).prepend($tweetTitle);

  //USER TWEETS
  // username container
  const $usernameContainer = $('div id = "usernameContainer"></div>');
  // user name text box. use input tag for limited characters
  const $userTextBox = $('<input id="userTextBox" type="text" placeholder = "Creature"/>')
  // username submit button
  const $userSubmitButton = $('<button id="userSumbitButton"></button')

  // Text Input Container
  const $inputContainer = $('<div id = "user tweet" text >/div')
  // Text box and submit button

  // REFRESH TWEETS
  
  function addNewTweets() { // 
    // Create Tweet
    const $tweets = streams.home.map(tweet => { // not sure if we need this but it's staying
      const $tweet = $('<div id = "tweet"></div>');
      const text = `@${tweet.user}: ${tweet.message}`;
      $('#tweet').css({color: 'green'})

    //   
    $tweet.text(text);  // IMPORTANT for array or individual
    $tweetsContainer.prepend($tweet); // add individual tweet to beginning of tweetSection
    // return $tweet // necessary to return array
  });
}
  // TIME STAMPS
  // Time Stamp div and class

  // moment.js time stamp formula
  function createTimeStamp(timeStamp) { 
    // time created
    // human form
    //return combo
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
  $heading.css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})
  $tweetsContainer.css({background: 'pink', maxWidth: '500px', horizontalAlign: 'center'})
  // tweet container title
  ($tweetTitle).css({fontFamily: 'melted monster', color: 'teal', fontSize: '14 px', padding: '14px', textAlign: 'center'})
  // ($body).css('background-size', '50%')
    // ($body).css({backgroundColor: 'green'})  // body CSS


    // Section to hold Tweets
  
    


//all code above this line !!!
});
