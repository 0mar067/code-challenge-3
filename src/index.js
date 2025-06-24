function main() {
    console.log("Hellloooo")
  displayPosts();        
  addNewPostListener();  
}

document.addEventListener("DOMContentLoaded", main);

// display fn

function displayPosts() {
// fetch data with fetch()
fetch( "http://localhost:3000/posts")
// convert resp to json with .then
.then(response => {
    if (!response.ok)throw new error("response was not ok");
    return response.json();
})

.then(post => {
    console.log("post")
    const postList = document.getElementById("post-list");
    postList.innerHTML ="";
    

    post.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className ="post-preview";

        const titleElement = document.createElement("h3");
        titleElement.textContent =post.title;

        const imgElement = document.createElement("img");
        imgElement.src = post.image;
        imgElement.alt = "post.image";
        imgElement.width = 200;

        postDiv.addEventListener("click",() => handlePostClick(post.id));

        postDiv.appendChild(titleElement);
        postDiv.appendChild(imgElement);
        postList.appendChild(postDiv);
    });
})
.catch(error => {
    alert("sorry something went wrong while fetching posts", error);
});
}
 document.addEventListener("DOMContentLoaded", () => {
     displayPosts();
         })
// see author,title,cont
 function handlePostClick(postId) {
    if (!postId) {
    console.error("Post ID is undefined!");
    return;
    }
    fetch(` http://localhost:3000/posts/${postId}`)
    .then(response => {
        console.log("response",response);
        return response.json();
      })
    .then(post => {
        console.log("Fetched post details:", post);     
        const detailDiv =document.getElementById("post-detail");
        detailDiv.innerHTML="";

        const title = document.createElement("h2");
        title.textContent = post.title;

       const author = document.createElement("p");
        author.innerHTML = `<strong>author:</strong> ${post.author}`;

        const content = document.createElement("p");
        content.textContent = post.content;

       const image = document.createElement("img");
       image.src = post.image;
       image.alt = "image post"
        image.width = 400;

       detailDiv.appendChild(title);
       detailDiv.appendChild(author);
       detailDiv.appendChild(content);
        detailDiv.appendChild(image);

   })
       .catch(error => {
         alert("there was an error while getting the post details:",error)
    });
}
 function  addNewPostListener() {
     const form = document.getElementById("new-post")
          form.addEventListener("submit",function(event) {
       event.preventDefault();

        const title = document.getElementById("new-post-title").value;
        const content = document.getElementById("new-post-content").value;
        const author = document.getElementById("new-post-author").value;
        const image = document.getElementById("new-post-image").value;

        const newpost = {
             title,
            content,
            author,
            image,
        };
       // sending data to the server
       fetch('http://localhost:3000/posts', {
           method: 'POST',
           headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(newpost)
         })
         .then(response => response.json())
         .then(savedPost => {
              console.log("Saved post:", savedPost);
            renderSinglePost(savedPost); // now render it
            form.reset();
        })
        .catch(error => {
            alert("Error adding new post:", error);
        });

     });
     }
  function renderSinglePost(post) {
    if (!post || !post.id || !post.title || !post.image) {
     console.error("Invalid post data:", post);
     return;
  }
  const postList = document.getElementById("post-list");

  const postDiv = document.createElement("div");
  postDiv.className = "post-preview";

  const titleEl = document.createElement("h3");
   titleEl.textContent = post.title;

  const imgEl = document.createElement("img");
  imgEl.src = post.image;
   imgEl.alt = "Post image";
   imgEl.width = 200;

   postDiv.addEventListener("click", () => handlePostClick(post.id));

   postDiv.appendChild(titleEl);
   postDiv.appendChild(imgEl);
  postList.appendChild(postDiv);
}


