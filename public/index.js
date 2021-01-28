



//It creates and inserts a post.
function insertPost(id, title, url, timestamp, score, activity) {
  let mainList = document.querySelector('.mainList');
  let listItem = document.createElement('li');
  mainList.appendChild(listItem);

  //Post elements start here      Post elements start here      Post elements start here
  let post = document.createElement('div');
  post.setAttribute('class', 'post');
  listItem.appendChild(post);

  let scoreingBox = document.createElement('div');
  scoreingBox.setAttribute('class', 'scoreingBox');
  post.appendChild(scoreingBox);

  //Upvotebtn
  let upVoteButton = document.createElement('button');
  upVoteButton.setAttribute('class', 'upVoteButton voteButton');
  upVoteButton.setAttribute('id', `upVoteButton${id}`);

  //CLICK VOTE
  upVoteButton.addEventListener('click', ()=> {
    fetch(`/posts/${id}/upvote`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify() up/downvote is special and has no body!
    });
    console.log(`Upvoted${id}`);
  });
  //CLICK VOTE

  scoreingBox.appendChild(upVoteButton);

  let upvoteImage = document.createElement('img');
  upvoteImage.setAttribute('src', './assets/arrows/upvote.png');
  upVoteButton.appendChild(upvoteImage);

  //score
  let scoreValue = document.createElement('p');
  scoreValue.setAttribute('class', 'scoreValue');
  scoreValue.innerText = score;
  scoreingBox.appendChild(scoreValue);

  //DownVoteBtn
  let downVoteButton = document.createElement('button');
  downVoteButton.setAttribute('class', 'downVoteButton voteButton');

  //CLICK VOTE
  downVoteButton.addEventListener('click', ()=> {
    fetch(`/posts/${id}/downvote`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify() up/downvote is special and has no body!
    });
    console.log(`Downvoted${id}`)});
  //CLICK VOTE

  scoreingBox.appendChild(downVoteButton);

  let downvoteImage = document.createElement('img');
  downvoteImage.setAttribute('src', './assets/arrows/downvote.png');
  downVoteButton.appendChild(downvoteImage);


  //Post Body
  let mainContet = document.createElement('div');
  mainContet.setAttribute('class', 'mainContet');
  post.appendChild(mainContet);

  //Title
  let postTitle = document.createElement('h3');
  postTitle.setAttribute('class', 'postTitle');
  postTitle.innerText = title;
  mainContet.appendChild(postTitle);

  //user
  let user = document.createElement('p');
  user.innerText = `Submitted by anonymus at ${timestamp}`;
  mainContet.appendChild(user);

  //Delete link and Edit link
  let deleteLink = document.createElement('a');
  let editLink = document.createElement('a');
  deleteLink.setAttribute('href', 'http://127.0.0.1:5500/index.html');
  editLink.setAttribute('href', 'http://127.0.0.1:5500/index.html');
  deleteLink.innerText = 'Delete';
  editLink.innerText = 'Edit';
  mainContet.appendChild(deleteLink);
  mainContet.appendChild(editLink);

}







function fetchPost(id) {

  fetch(`http://localhost:3000/posts/${id}`)
    .then(response => response.json())
    .then(function (result) {
      let id = result[0].id;
      let title = result[0].title;
      let url = result[0].url;
      let timestamp = result[0].timestamp;
      let score = result[0].score;
      let activity = result[0].activity;

      insertPost(id, title, url, timestamp, score, activity);
    });

}
//Fetch all posts
fetch(`http://localhost:3000/posts`)
  .then(response => response.json())
  .then(function (results) {
    for (let i = 0; i < results.length; i++) {
      fetchPost(results[i].id);
    }
  })
  
  
  
  
  
 


//Add upvote/Downvote, just need to figure out a way to query selector the proper items.
function toUpvote(id) {
  fetch(`/posts/${id}/upvote`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify() up/downvote is special and has no body!
  })
}
function toDownvote(id) {
  fetch(`/posts/${id}/downvote`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify() up/downvote is special and has no body!
  })
  console.log('UPVOTED');
}