
$(document).ready(() => {
  const $body = $('body');
  $body.html(''); // clears the body .html is sort of like a .replace

  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);

    return $tweet;
  });
  $body.append($tweets);

  //all code goes above this line!!
});
