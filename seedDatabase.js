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
        date: "2025-01-05T00:00:00.000Z",
        category: "Lifestyle",
        views: 43,
        content: "I am single again guys! morning ☀️☀️",
        location: "Paris, France",
        likes: 120,
        comments: [],
        shares: 7,
      },
      {
        author: "Anjelina Jolie",
        authorImage:
          "https://imageio.forbes.com/specials-images/imageserve/5ed67918c6ade40006ffd6db/0x0.jpg?format=jpg&crop=1080,1080,x537,y0,safe&height=416&width=416&fit=bounds",
        postImage:
          "https://childrenofvietnam.org/wp-content/uploads/2020/09/disabilities-1024x685.jpg",
        date: "2025-01-10T00:00:00.000Z",
        category: "Lifestyle",
        views: 500,
        content: "I adopted a child from Vietnam",
        location: "Paris, France",
        likes: 1400,
        comments: [],
        shares: 45,
      },
      {
        author: "Elon Musk",
        authorImage:
          "https://variety.com/wp-content/uploads/2022/07/Elon-Musk-Twitter-Lawsuit.jpg?w=1000&h=667&crop=1",
        postImage:
          "https://imgcdn.stablediffusionweb.com/2024/10/19/4261db73-d823-4a10-b8b6-aa23c817b7af.jpg",
        date: "2025-01-06T00:00:00.000Z",
        category: "Technology",
        views: 150,
        content: "We found a monkey on Mars!!",
        location: "San Francisco, USA",
        likes: 200,
        comments: [
          {
            text: "This is mind-blowing!",
            user: "Tech Guru",
            date: new Date("2025-01-07"),
          },
          {
            text: "Elon, you're unstoppable!",
            user: "Space Fan",
            date: new Date("2025-01-08"),
          },
        ],
        shares: 20,
      },
      {
        author: "Ryan Reynolds",
        authorImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZakYlqxeCOFaqLS6pdpGrdONm4pVzYuO8UQ&s",
        postImage:
          "https://i.ytimg.com/vi/3UQ2vyOnilg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYOnSkaYXOJDlqQTogvfc_oDJb-Q",
        date: "2025-01-12T00:00:00.000Z",
        category: "Entertainment",
        views: 230,
        content:
          "Just filmed Deadpool 4, but accidentally deleted the footage 😅. Release delayed to... who knows?",
        location: "Hollywood, USA",
        likes: 3500,
        comments: [],
        shares: 340,
      },
      {
        author: "Johnny Depp",
        authorImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3J3YlIUoI8biqQPYeB4MaFbDigweDPAKwA&s",
        postImage:
          "https://ew.com/thmb/BCsBzMYE7MMoNcPS5LWGRN3K9Tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Johnny-Depp-Amber-Heard-2-4a7d4c73e8844594b5e2ec1d1d153ef5.jpg",
        date: "2025-01-15T00:00:00.000Z",
        category: "Entertainment",
        views: 4000,
        content: "Yes! Amber had a fecal discharge on my bed",
        location: "Los Angeles, USA",
        likes: 12000,
        comments: [],
        shares: 1050,
      },
      {
        author: "Maria Sharapova",
        authorImage:
          "https://imageio.forbes.com/specials-images/imageserve/5d49d19f37f1f90008ec7668/0x0.jpg?format=jpg&crop=1397,1396,x371,y240,safe&height=416&width=416&fit=bounds",
        postImage:
          "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/People/Promis/Aufmacher-Sharapova/jcr:content/Aufmacher-Sharapova.jpg",
        date: "2025-01-08T00:00:00.000Z",
        category: "Sports",
        views: 600,
        content:
          "I wanna date a short fat indian guy. Russian guys are overrated.",
        location: "Moscow, Russia",
        likes: 7000,
        comments: [],
        shares: 310,
      },
      {
        author: "Mike Tyson",
        authorImage:
          "https://hips.hearstapps.com/hmg-prod/images/mike-tyson-looks-on-prior-to-the-heavyweight-fight-between-news-photo-1716476934.jpg?crop=0.640xw:0.961xh;0.154xw,0.0391xh&resize=640:*",
        postImage:
          "https://i2-prod.themirror.com/incoming/article846496.ece/ALTERNATES/n615/2_GettyImages-2185054204.jpg",
        date: "2025-01-09T00:00:00.000Z",
        category: "Sports",
        views: 450,
        content: "I defeated Mohammad Ali...in my dreams",
        location: "Miami, USA",
        likes: 5300,
        comments: [
          {
            text: "This is mind-blowing!",
            user: "Tech Guru",
            date: new Date("2025-01-07"),
          },
        ],
        shares: 230,
      },
      {
        author: "Joe Biden",
        authorImage:
          "https://media.newyorker.com/photos/668c4bd720a3586cfdb997f9/16:9/w_2560,h_1440,c_limit/BWW-Biden-07-08-24.jpg",
        postImage:
          "https://i.ytimg.com/vi/v3R2a6EY1go/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpBNFT5AVER1VomCOd60ykr4ZapA",
        date: "2025-01-11T00:00:00.000Z",
        category: "Government",
        views: 300,
        content: "I voted for Trump. He deserves it.",
        location: "Washington D.C., USA",
        likes: 2000,
        comments: [
          {
            text: "This is mind-blowing!",
            user: "Tech Guru",
            date: new Date("2025-01-07"),
          },
          {
            text: "Elon, you're unstoppable!",
            user: "Space Fan",
            date: new Date("2025-01-08"),
          },
        ],
        shares: 500,
      },
      {
        author: "Volodymyr Zelenskyy",
        authorImage:
          "https://www.atlanticcouncil.org/wp-content/uploads/2024/02/2024-01-22T000000Z_793353199_MT1ABCPR883657015_RTRMADP_3_ABACA-PRESS-scaled.jpg",
        postImage:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/19/full/1734603621-6456.JPG",
        date: "2025-01-13T00:00:00.000Z",
        category: "Government",
        views: 450,
        content:
          "It may look like Ukraine is losing but actually we are WINNING!",
        location: "Kyiv, UKR",
        likes: 1500,
        comments: [],
        shares: 410,
      },
      {
        author: "Jeff Bezos",
        authorImage:
          "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
        postImage:
          "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15802109/bezos_laughing.0.1467740825.jpg?quality=90&strip=all&crop=0,5.4627696590118,100,89.074460681976",
        date: "2025-01-14T00:00:00.000Z",
        category: "Business",
        views: 1000,
        content:
          "Accidentally ordered 100,000 toothbrushes on Amazon. Anybody need one? 🪥",
        location: "Seattle, USA",
        likes: 9200,
        comments: [
          {
            text: "This is mind-blowing!",
            user: "Tech Guru",
            date: new Date("2025-01-07"),
          },
          {
            text: "Elon, you're unstoppable!",
            user: "Space Fan",
            date: new Date("2025-01-08"),
          },
        ],
        shares: 1200,
      },
      {
        author: "Mark Zuckerberg",
        authorImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwIU8rKQaZKZ9mmTucashfg0ldpSH3ut44w&s",
        postImage: "https://i.ytimg.com/vi/9kb_9Y2pc1I/mqdefault.jpg",
        date: "2025-01-07T00:00:00.000Z",
        category: "Business",
        views: 800,
        content: "I am not a lizard!",
        location: "Menlo Park, USA",
        likes: 4500,
        comments: [
          {
            text: "This is mind-blowing!",
            user: "Tech Guru",
            date: new Date("2025-01-07"),
          },
          {
            text: "Elon, you're unstoppable!",
            user: "Space Fan",
            date: new Date("2025-01-08"),
          },
        ],
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
