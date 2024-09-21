import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

  
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs',{posts: posts});
});


app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});
app.post("/compose", (req, res) => {
  // Capture the form data
  const post = {
    title: req.body.postTitle,
    content: req.body.postContent
  };

  // Push the new post to the posts array
  posts.push(post);

  // Redirect to the home page to view the updated list of posts
  res.redirect("/");
});
app.get('/post/:postId', (req, res) => {
    const post = posts[req.params.postId];
    if (post) {
      res.render('post', { post: post,postId: req.params.postId});
    } else {
      res.redirect('/');
    }
  });
  app.get('/edit/:postId', (req, res) => {
    const post = posts[req.params.postId];
    res.render('edit', { postId: req.params.postId, post: post });
  });
  app.post('/edit/:postId', (req, res) => {
    const postId = req.params.postId;
    posts[postId] = {
      title: req.body.postTitle,
      content: req.body.postContent
    };
    res.redirect('/');
  });
  

  

  app.get('/delete/:postId', (req, res) => {
    const postId = req.params.postId;
    posts.splice(postId, 1); // Remove the post from the array
    res.redirect('/');
  });
  
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});

var posts = [
    {
      title: "The Future of Web Development",
      content: "Web development is evolving at a rapid pace with new technologies like WebAssembly, Progressive Web Apps, and serverless architecture. In the future, we can expect web development to become more efficient, with faster load times and more dynamic capabilities. The focus will shift towards better user experiences and accessibility for all."
    },
    {
      title: "Why JavaScript Will Never Die",
      content: "JavaScript has come a long way from being a simple client-side scripting language. Today, it powers full-stack development, mobile applications, and even desktop apps. With the advent of frameworks like React, Angular, and Vue, as well as Node.js, JavaScript continues to dominate the web development space and will likely remain relevant for years to come."
    },
    {
      title: "How to Improve Your Coding Skills",
      content: "Improving your coding skills is a continuous process. Start by building projects that interest you, and take the time to understand new concepts in depth. Use version control (like Git), contribute to open-source projects, and collaborate with others. Consistency is key, so try to code daily and learn from your mistakes."
    },
    {
      title: "Top 5 Backend Frameworks in 2024",
      content: "In 2024, the top backend frameworks continue to dominate. Node.js remains popular for its JavaScript ecosystem, while Django (Python) and Ruby on Rails (Ruby) still hold strong in certain industries. Meanwhile, newer players like FastAPI (Python) and NestJS (Node.js) are gaining traction due to their simplicity and performance."
    },
    {
      title: "The Importance of Responsive Design",
      content: "In today's mobile-first world, having a website that is responsive across all devices is crucial. Responsive design ensures that your site looks great on any screen size, from mobile phones to desktop monitors. This not only improves user experience but also boosts SEO as search engines favor mobile-friendly websites."
    },
    {
        title: "Exploring the Mountains",
        content: "The mountains have always been a place of peace for me. Last weekend, I embarked on a two-day hike through the Rocky Mountains. The weather was perfect, and the views were breathtaking."
      },
      {
        title: "Why I Love JavaScript",
        content: "JavaScript is such a versatile language! From client-side scripting to server-side development with Node.js, it’s amazing what you can accomplish with a single language."
      },
      {
        title: "A Day in the Life of a Software Engineer",
        content: "As a software engineer, my days are filled with solving puzzles and writing code. From debugging to designing new features, every day brings a new challenge."
      },
      {
        title: "The Best Travel Destinations in 2024",
        content: "2024 is set to be a great year for travel! From the pristine beaches of the Maldives to the cultural richness of Kyoto, these are the top destinations you should visit this year."
      },
      {
        title: "Mastering Backend Development",
        content: "Backend development is the backbone of any web application. From managing databases to ensuring smooth server operations, mastering backend development can open up new opportunities."
      },
      {
        title: "Healthy Habits for Remote Work",
        content: "With remote work becoming more common, it’s important to develop healthy habits. Taking regular breaks, staying hydrated, and keeping a dedicated workspace are essential for productivity and mental well-being."
      }
  ];