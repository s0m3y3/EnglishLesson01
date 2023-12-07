const colorSentences = [
    {
        "name":" What is your favorite color?",
        "link":"https://drive.google.com/uc?export=download&id=1lPvWOXkE0brRrckjWccIR3aBm6wsAQ-v",
        "photo":"./colorwheel.png",
    },
    {
        "name":"My favorite color is Yellow",
        "link":"https://drive.google.com/uc?export=download&id=1EgSDkHnkB3hzKve4WI6ME5FvWF8sXrtG",
        "photo":"./color/yellow.png"
    },
    {
        "name":"The apple is red.",
        "link":"https://drive.google.com/uc?export=download&id=1IMK42Dwz3iwaYD1OnPJy80ZRuee1evGx",
        "photo":"./color/apple.png",
        "name2": "Red Apple",
        "link2":""
    },    
    {
        "name":"The jeans is blue. ",
        "link":"https://drive.google.com/uc?export=download&id=11U4xH4uRpNhp4KxQedK8izjnELoetyoT",
        "photo":"./color/jeans.png",
        "name2": "Blue Water"
    },
    {
        "name":"The banana is yellow.",
        "link":"https://drive.google.com/uc?export=download&id=1e7Irr7FpJxw1uT22KsTVixQfObkOLBB8",
        "photo":"./color/banana.png",
        "name2":"Yellow Banana"
    },
    {
        "name":"The grapes are purple.",
        "link":"https://drive.google.com/uc?export=download&id=1PGfVWAE2EFL4XtLTABKVeigSuTAT0Tsv",
        "photo":"./color/grapes.png",
        "name2": "Purple Grapes"
    },
    {
        "name":"The lime is green.",
        "link":"https://drive.google.com/uc?export=download&id=1LXvINlZ1vIVpnYDgqDNq_zlynwdWBEnc",
        "photo":"./color/lime.png",
        "name2": "Green Lime"
    },
    {
        "name":"The sun is orange.",
        "link":"https://drive.google.com/uc?export=download&id=11hvefD3AebFINfJVTj83Op3R6oO1pHX1",
        "photo":"",
        "name2": "Orange Basketball"
    },
    {
        "name":"The cat is black.",
        "link":"https://drive.google.com/uc?export=download&id=1t2-EyiRIVwGQXj-It6ElKoQD-MTZ_KME",
        "photo":"./color/cat.png",
        "name2": "Black Cat"
    },
    {
        "name":"The clouds are gray.",
        "link":"https://drive.google.com/uc?export=download&id=10PXR43W8igpaTqtobWYIyHJ0yIHq1lsO",
        "photo":"./color/cloud.png",
        "name2":"Gray Clouds"
    },
    {
        "name":"The snow is white. ",
        "link":"https://drive.google.com/uc?export=download&id=1FNSsxmaarccwAbLrWiSiHVe5jUp5jk6l",
        "photo":"./color/snow.png",
        "name2":"White Snow"
    }
]

export default function getColorSentenceData() {
    return colorSentences;
  }

// const colorJson =  {
//     "red": {
//         "photo": "../../public/color/apple.png",
//         "beginner": {
//         "sentence": "Red Apple",
//         "audio": "https://drive.google.com/uc?export=download&id=1IMK42Dwz3iwaYD1OnPJy80ZRuee1evGx",
//         },
//         "intermediate": {
//         "sentence": "This red apple looks tasty.",
//         "audio": ""
//         },
//         "advanced": {
//         "sentence": "The vibrant hue of the apple, red,  denotes its ripe state.",
//         "audio": ""
//     },


//     "blue": {
//         "photo":"./color/jeans.png",
//         "beginner": {
//             "name":"Blue jeans. ",
//             "link":""
//         },
//         "intermediate":{
//             "name":"The jeans is blue.",
//             "link":"https://drive.google.com/uc?export=download&id=11U4xH4uRpNhp4KxQedK8izjnELoetyoT"        
//         },
//         "advance": {
//             "name":"Th",
//             "link":""    
//         }
//     },
//     "yellow": {
//         "photo":"./color/banana.png",
//         "beginner":{
//         "name":"Yellow Banana",
//         "link":"",
//         },
//         "intermediate":{
//             "name":"The banana is yellow.",
//             "link":"https://drive.google.com/uc?export=download&id=1e7Irr7FpJxw1uT22KsTVixQfObkOLBB8",
//         },
//         "advance":{
//             "name":"",
//             "link":""
//         }
//     },

//     {
//         "name":"The grapes are purple.",
//         "link":"https://drive.google.com/uc?export=download&id=1PGfVWAE2EFL4XtLTABKVeigSuTAT0Tsv",
//         "photo":"./color/grapes.png",
//         "name2": "Purple Grapes"
//     },
//     {
//         "name":"The lime is green.",
//         "link":"https://drive.google.com/uc?export=download&id=1LXvINlZ1vIVpnYDgqDNq_zlynwdWBEnc",
//         "photo":"./color/lime.png",
//         "name2": "Green Lime"
//     },
//     {
//         "name":"The sun is orange.",
//         "link":"https://drive.google.com/uc?export=download&id=11hvefD3AebFINfJVTj83Op3R6oO1pHX1",
//         "photo":"",
//         "name2": "Orange Basketball"
//     },
//     {
//         "name":"The cat is black.",
//         "link":"https://drive.google.com/uc?export=download&id=1t2-EyiRIVwGQXj-It6ElKoQD-MTZ_KME",
//         "photo":"./color/cat.png",
//         "name2": "Black Cat"
//     },
//     {
//         "name":"The clouds are gray.",
//         "link":"https://drive.google.com/uc?export=download&id=10PXR43W8igpaTqtobWYIyHJ0yIHq1lsO",
//         "photo":"./color/cloud.png",
//         "name2":"Gray Clouds"
//     },
//     {
//         "name":"The snow is white. ",
//         "link":"https://drive.google.com/uc?export=download&id=1FNSsxmaarccwAbLrWiSiHVe5jUp5jk6l",
//         "photo":"./color/snow.png",
//         "name2":"White Snow"
//     }
// },

// }