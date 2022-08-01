const data = [
  {
    id:5,
    title:" Microsoft Program Management Intern",
    sDate:{month:5, year:2022 },
    eDate:{month:8, year:2022},
    sentence:"Redesigned Data Configuration Experience for Customer Insights",
    img:"https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297.jpg",
    tools:["Figma", "Kusto", "Azure Data Explorer"]
  },

  {
    id:4,
    title:"Bunny Hop",
    sDate:{ month:5, year:2022},
    sentence:"Android studio Hackathon Game (3rd Place Overall as a Solo)",
    description:" 3rd place overall in Citrus Hacks. A small Android studio project for Citrus Hacks. Project placed 3rd place overall.",
    tools:["Java", "Android Studio"],
    img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/890/336/datas/gallery.jpg",
    link: "https://devpost.com/software/bunny-hop",
    repo:"https://github.com/Joytaylor/FADemo",
    video: "https://youtu.be/EAlVhl8ttt0"
  },
  {
    id:5,
    title:" Microsoft Explore Intern",
    sDate:{month:5, year:2021},
    eDate:{month:8, year:2021},
    sentence:" SWE and PM internship",
    img:"https://authy.com/wp-content/uploads/new-microsoft-logo-SIZED-SQUARE-300x297.jpg",
    tools:["Power BI"]
  },
  {
    id: 1,
    title: "This Website",
    sDate: { month: 7, day: 12, year: 2020 },
    img: "./images/jticon.png",
    sentence: "React project hosted on GitPages",
    description:
      "A website created for showcasing some of the work I done over the years. ",
    tools: ["Typescript", "React", "Git"],
    repo:"https://github.com/Joytaylor/testing",
  },
  {
    id: 2,
    title: "Tiny Little Obbys",
    sDate: { month: 6, year: 2020 },

    img: "https://tr.rbxcdn.com/27b9a8065ab7a23ce45a38ef5ecd772c/768/432/Image/Png",
    sentence: "A Lua project created in the Roblox engine",
    description:
      "This project has enabled me to learn Lua as well as client/server interactions. Because of the game being public, I have learned a lot from fellow developers on ways to prevent exploitive behaviors coming from the client-side. Also, I take data from each round that occurs from the game and store it in a Firebase real-time database. I use this to data to calculate round completion rates, as well as the popularity of the game mode through a Python script. The results of the script are then used to determine if the levels are too difficult for players and if levels should be moved to different game modes to improve player experience. ",
    explored: ["client/server interactions", ""],
    tools: ["Lua", "FireBase Real-time Database", "Python"],
    link: "https://www.roblox.com/games/5195914129/Tiny-Little-Obbys",
  },
  {
    id: 3,
    title: "JPMorgan Software Engineering Virtual Experience",
    sDate: { month: 8, year: 2020 },
    img: "./images/JPMorganCompletion.png",
    sentence: "Learned Tools used for Finance",
    description:
      " In the course of this experience I've learn how use python and react to help consumers understand and track raw data from stocks. In addition, the course encouraged me to compare and improve my patch files while boosting my communication abilities  ",
    tools: ["React", "Python", "TypeScript", "Git"],
  },
  {
    id: 0,
    title: "More to Come Soon",
  },
];

export default data;
