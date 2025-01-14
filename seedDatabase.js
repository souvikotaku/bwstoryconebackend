import mongoose from "mongoose";
import dotenv from "dotenv";
import Article from "./model/articleModel.js";

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
  console.error(
    "Error: MONGO_URL is not defined in the environment variables."
  );
  process.exit(1);
}

const seedArticles = async () => {
  try {
    await mongoose.connect(MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");

    const sampleArticles = [
      {
        author: "Sidney Sweeney",
        authorImage:
          "https://assets.vogue.com/photos/63b34a551944dc168acdf4fa/1:1/w_3352,h_3352,c_limit/GA_2023-My-Way-Parfum_Sydney-Sweeney_Beauty-Visual-3_RVB-2.jpg",
        postImage:
          "https://assets.vogue.com/photos/63b34a551944dc168acdf4fa/1:1/w_3352,h_3352,c_limit/GA_2023-My-Way-Parfum_Sydney-Sweeney_Beauty-Visual-3_RVB-2.jpg",
        date: new Date("2025-01-05"),
        category: "Lifestyle",
        views: 43,
        content: "I am single again guys! morning ☀️☀️",
        location: "Paris, France",
        likes: 120,
        comments: 15,
        shares: 7,
      },
      {
        author: "Anjelina Jolie",
        authorImage:
          "https://imageio.forbes.com/specials-images/imageserve/5ed67918c6ade40006ffd6db/0x0.jpg?format=jpg&crop=1080,1080,x537,y0,safe&height=416&width=416&fit=bounds",
        postImage:
          "https://childrenofvietnam.org/wp-content/uploads/2020/09/disabilities-1024x685.jpg",
        date: new Date("2025-01-10"),
        category: "Lifestyle",
        views: 500,
        content: "I adopted a child from Vietnam",
        location: "Paris, France",
        likes: 1400,
        comments: 524,
        shares: 45,
      },
      {
        author: "Elon Musk",
        authorImage:
          "https://variety.com/wp-content/uploads/2022/07/Elon-Musk-Twitter-Lawsuit.jpg?w=1000&h=667&crop=1",
        postImage:
          "https://imgcdn.stablediffusionweb.com/2024/10/19/4261db73-d823-4a10-b8b6-aa23c817b7af.jpg",
        date: new Date("2025-01-06"),
        category: "Technology",
        views: 150,
        content: "We found a monkey on Mars!!",
        location: "San Francisco, USA",
        likes: 200,
        comments: 40,
        shares: 20,
      },
      {
        author: "Ryan Reynolds",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/5/51/Ryan_Reynolds_%28cropped%29.jpg",
        postImage: "https://media.giphy.com/media/3o7TKPdUkkbG79XjLa/giphy.gif",
        date: new Date("2025-01-12"),
        category: "Entertainment",
        views: 230,
        content:
          "Just filmed Deadpool 4, but accidentally deleted the footage 😅. Release delayed to... who knows?",
        location: "Hollywood, USA",
        likes: 3500,
        comments: 786,
        shares: 340,
      },
      {
        author: "Kim Kardashian",
        authorImage:
          "https://cdn.britannica.com/39/209439-050-2B581229/Kim-Kardashian-2020.jpg",
        postImage: "https://media.giphy.com/media/3o7aD4IN1k8FvZ7fJ2/giphy.gif",
        date: new Date("2025-01-15"),
        category: "Entertainment",
        views: 4000,
        content:
          "BREAKING: I just patented my *signature pout*. Pay up if you're using it. 💋",
        location: "Los Angeles, USA",
        likes: 12000,
        comments: 2400,
        shares: 1050,
      },
      {
        author: "Cristiano Ronaldo",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_2018.jpg",
        postImage: "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
        date: new Date("2025-01-08"),
        category: "Sports",
        views: 600,
        content:
          "Scored a hat-trick yesterday but forgot it was a friendly match. 🤦‍♂️",
        location: "Dubai, UAE",
        likes: 7000,
        comments: 560,
        shares: 310,
      },
      {
        author: "Serena Williams",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Serena_Williams_%2835681211550%29_%28cropped%29.jpg",
        postImage: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
        date: new Date("2025-01-09"),
        category: "Sports",
        views: 450,
        content:
          "Lost a match to my 2-year-old with a foam racket. 😭 Retirement hitting hard!",
        location: "Miami, USA",
        likes: 5300,
        comments: 450,
        shares: 230,
      },
      {
        author: "Joe Biden",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/e/e6/Joe_Biden_presidential_portrait.jpg",
        postImage: "https://media.giphy.com/media/jUcHnqJ1qDkjC/giphy.gif",
        date: new Date("2025-01-11"),
        category: "Government",
        views: 300,
        content:
          "Signed a bill today. Don’t remember what it was for, but it seemed important.",
        location: "Washington D.C., USA",
        likes: 2000,
        comments: 1300,
        shares: 500,
      },
      {
        author: "Boris Johnson",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/1/14/Boris_Johnson.jpg",
        postImage: "https://media.giphy.com/media/RtE9FX7aXyUwI/giphy.gif",
        date: new Date("2025-01-13"),
        category: "Government",
        views: 450,
        content:
          "Decided to run for office again, just to see if the hair memes come back. 🇬🇧",
        location: "London, UK",
        likes: 1500,
        comments: 840,
        shares: 410,
      },
      {
        author: "Jeff Bezos",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jeff_Bezos_2016.jpg",
        postImage: "https://media.giphy.com/media/l4FGFQ9zJ7d8IfHWk/giphy.gif",
        date: new Date("2025-01-14"),
        category: "Business",
        views: 1000,
        content:
          "Accidentally ordered 100,000 toothbrushes on Amazon. Anybody need one? 🪥",
        location: "Seattle, USA",
        likes: 9200,
        comments: 2300,
        shares: 1200,
      },
      {
        author: "Mark Zuckerberg",
        authorImage:
          "https://upload.wikimedia.org/wikipedia/commons/1/19/Mark_Zuckerberg_F8_2019_Keynote_%28cropped%29.jpg",
        postImage: "https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif",
        date: new Date("2025-01-07"),
        category: "Business",
        views: 800,
        content:
          "Meta is launching VR shoes. Step into the *metaverse*... literally. 👟",
        location: "Menlo Park, USA",
        likes: 4500,
        comments: 1200,
        shares: 700,
      },
    ];

    await Article.insertMany(sampleArticles);
    console.log("Sample data added successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedArticles();
