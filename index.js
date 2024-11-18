
$(document).ready(() => {
  
 $('title').text('Crypt Crawler')
  const $body = $('body'); // BODY
  $body.html(''); // clears body
  const $heading = $("<h1'>CRYPT CRAWLER</h1>");  // header for page 
  $body.prepend($heading) // header to top of page
  const $tweetsContainer = $('<div></div>')
  $body.append($tweetsContainer)
  
  // $('.container').css({overflow: 'hidden'})
  // $('.sliding-background').css({background: "url('img/quinlanSeaMonster.jpg') repeat-x", height: '500px', width: '5076px'})
  
  $body.css({backgroundImage: "url(img/quinlanSeaMonster.jpg)"}) // background image success
  $heading.css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})
  $tweetsContainer.css({background: 'pink', maxWidth: '500px', horizontalAlign: 'center'})
  // ($body).css('background-size', '50%')
    // ($body).css({backgroundColor: 'green'})  // body CSS


    // Section to hold Tweets
  
    
    function addNewTweets() { // 
      const $tweets = streams.home.map(tweet => { // not sure if we need this but it's staying
        const $tweet = $('<div id = "tweet"></div>');
        const text = `@${tweet.user}: ${tweet.message}`;
        $('#tweet').css({color: 'green'})

      $tweet.text(text);  // IMPORTANT for array or individual
      $tweetsContainer.prepend($tweet); // add individual tweet to beginning of tweetSection
      // return $tweet // necessary to return array
    });
  }
  // $body.append($tweets); // inserts array at end of body
  addNewTweets(); // START HERE FOR REFRESHING FUNCTION // base function
  // setInterval(() => { // works but too many updates!
  //   addNewTweets()
  // }, 1000);


const $tweetTitle = $("<h2 id = 'tweetTitle'>muttering</h2>"); // title for tweet box
  ($tweetsContainer).prepend($tweetTitle);
  ($tweetTitle).css({fontFamily: 'melted monster', color: 'teal', fontSize: '14 px', padding: '14px', textAlign: 'center'})

//all code above this line !!!
});
