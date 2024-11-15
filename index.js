
$(document).ready(() => {
  
  const $body = $('body'); // BODY
  // $('.container').css({overflow: 'hidden'})
  // $('.sliding-background').css({background: "url('img/quinlanSeaMonster.jpg') repeat-x", height: '500px', width: '5076px'})

  ($body).css({backgroundImage: "url(img/quinlanSeaMonster.jpg)"}) // background image success
  // ($body).css('background-size', '50%')
    // ($body).css({backgroundColor: 'green'})  // body CSS

  $body.html(''); // clears the body .html is sort of like a .replace

    // Section to hold Tweets
  const $tweetSection = $('<section id = "tweet-section" class = "tweets">');
      // place tweetSection at beginning of body
    ($body).prepend($tweetSection);
      // tweetSection CSS
    ($tweetSection).css({background: 'pink', maxWidth: '500px', horizontalAlign: 'center'})
    
    function addNewTweets() { // 
      const $tweets = streams.home.map(tweet => { // not sure if we need this but it's staying
        const $tweet = $('<div id = "tweet"></div>');
        const text = `@${tweet.user}: ${tweet.message}`;
        $('#tweet').css({color: 'green'})

      $tweet.text(text);  // IMPORTANT for array or individual
      $tweetSection.prepend($tweet); // add individual tweet to beginning of tweetSection
      // return $tweet // necessary to return array
    });
  }
  // $body.append($tweets); // inserts array at end of body
  addNewTweets(); // START HERE FOR REFRESHING FUNCTION // base function
  // setInterval(() => { // works but too many updates!
  //   addNewTweets()
  // }, 1000);

const $heading = $("<h1 id= 'main-head'>CRYPTID CRAWLER</h1>");  // header for page 
  ($body).prepend($heading) // header to top of page
  $('#main-head').css({fontFamily: 'melted monster', color: 'magenta', fontSize: '100px', textAlign: 'center'})

const $tweetTitle = $("<h2 id = 'tweetTitle'>muttering</h2>"); // title for tweet box
  ($tweetSection).prepend($tweetTitle);
  ($tweetTitle).css({fontFamily: 'melted monster', color: 'teal', fontSize: '14 px', padding: '14px', textAlign: 'center'})

//all code above this line !!!
});
