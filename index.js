
$(document).ready(() => {
  
  const $body = $('body'); // BODY
    ($body).css({background: "green"})  // body CSS

  $body.html(''); // clears the body .html is sort of like a .replace

    // Section to hold Tweets
  const $tweetSection = $('<section id = "tweet-section" class = "tweets">');
      // place tweetSection at beginning of body
    ($body).prepend($tweetSection);
      // tweetSection CSS
    ($tweetSection).css({background: 'pink', border: 'border: 1rem solid;'})

  function addNewTweets() { // 
    const $tweets = streams.home.map(tweet => {
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`;

      $tweet.text(text);  // IMPORTANT for array or individual
      $tweetSection.prepend($tweet); // add individual tweet to beginning of tweetSection
      // return $tweet // 
    });
  }
  // $body.append($tweets); // inserts array at end of body
  addNewTweets(); // START HERE FOR REFRESHING FUNCTION

//all code above this line !!!
});
