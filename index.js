
$(document).ready(() => {
  // $('head').append($("<h1>").text("My Heading"))
  // $('<h1>').css({color: "black", fontSize: "40px"})


  const $body = $('body');
  $body.html(''); // clears the body .html is sort of like a .replace
  // const message = randomMessage
  // const newTweet = generateRandomTweet

  const $tweetSection = $('<section id = "tweet-section" class = "tweets">');
  ($body).prepend($tweetSection);
  ($tweetSection).css({background: 'pink', border: 'border: 1rem solid;'})

  function addNewTweets() {
    const $tweets = streams.home.map(tweet => {
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`;

      $tweet.text(text);

       $tweetSection.prepend($tweet);
    });

  }

  addNewTweets();

($body).css({background: "green"})

// ($tweets).css({text: "white"})


// const heading1 = $("<h1>").text("My Heading");

});
