#  A Simple Jokes Blog

A basic frontend blog app built with HTML, CSS, and JavaScript that fetches and displays joke posts from a local JSON server. Users can view post details and add new posts.

---

## 🛠 Features

-  View all posts from a local API (`json-server`)
-  Click to view full post details
-  Add new posts 

---

##  Technologies Used

- **HTML5** – For structure
- **CSS3** – For styling
- **JavaScript** – For interactivity
- **json-server** – For mock backend and data persistence

## Requirements
make sure you install -Node.js
                      -json-server  (npm install -g json-server)


##  Project Structure
project/
1:index.html
2:css/
    .style.css
3:src/
    .index.js
4:db.json
## Work flow
1:setting up a mock backend
  a:create a db.json file
    {
  "posts": [
    {
      "id": 1,
      "title": "Why don't programmers like nature?",
      "content": "It has too many bugs.",
      "author": "CodeBot",
      "image": "./img/nature.png"
    },
      ]
      }
  b:start the server
    json-server --watch db.json



2:running the frontend
 a: open index.html in your browser but make sure the json-server is running in the background

 b:you should be able to;
        .view jokes
        .click to see full details
        .add your own joke post

## how it works
 index.js 
         -fetch data and display all posts
         -show full post details on clicl(addEventLister())
         -submit new post using form and renders them instantly

 style.css
      -makes the ui appealing


## Author
Elnabas Eugine

## License
This project is licensed under [MIT LICENSE](./LICENSE.txt)