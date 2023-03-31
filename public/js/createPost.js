var createNew = document.querySelector("#createNew")
var newBlog = document.querySelector('#newBlog')
var newPost = document.querySelector("#create")

newPost.addEventListener("sumbit", event => {
  event.preventDefault()
  console.log("Click")
  newPost.hidden = true;
});

newBlog.addEventListener("submit", event => {
  var title = document.querySelector("#title").value;
  var content = document.querySelector("#content").value;
  event.preventDefault();
  if (!title || !content) {
    alert("Please add title and content")
    return;
  }
  const blogObj = {
    title: title,
    content: content,
  }
  fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(blogObj),
  })
  .then(res => {
    if(res.ok) {
      createNew.setAttribute("hidden", "false")
      location.reload()
    } else {
      alert ("Error. Try again.")
    }
  });
});
