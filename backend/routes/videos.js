const express = require('express')
const router = express.Router()
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ', err);
//         return;
//     }
// });

// GET home page 

router.get('/search', function (req, res, next) {
    res.json({
        "videos": [{
            "id": 1,
            "title": "Top 10 Most Epic Anime fights of 2020",
            "user": "ViniiTube",
            "video_url": "https://i.ytimg.com/an_webp/eJzAUHwcuAE/mqdefault_6s.webp?du=3000&sqp=CL2Z7IEG&rs=AOn4CLA_CkKOIxZ8utwFPpXY0lGaq2SNbw",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 2,
            "title": "Josh A - LATE NIGHTS",
            "user": "JOSH A",
            "video_url": "https://i.ytimg.com/an_webp/2iau0gDA7Es/mqdefault_6s.webp?du=3000&sqp=CLee7IEG&rs=AOn4CLCvk6YLnDRMxWh60Lq7ttN_ak5cbA",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 3,
            "title": "YNG Marty (Feat YNG Xene) - IDK ('Wanted you Remix')",
            "user": "Young Nice Guys",
            "video_url": "https://i.ytimg.com/an_webp/sDDjMB_K778/mqdefault_6s.webp?du=3000&sqp=CLyR7IEG&rs=AOn4CLA-2-vTlVKfoo1nJ_axGlraxi-zDA",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 4,
            "title": "Marc E. Bassy - 40 Water",
            "user": "Promoting Sounds",
            "video_url": "https://i.ytimg.com/vi/cXaANwuXEFs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLButAWFfD7v9XwrHc5ToB4DV_3PNA",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 5,
            "title": "21 Savage - Bank Account (Official Audio)",
            "user": "21 Savage",
            "video_url": "https://i.ytimg.com/vi/sV2t3tW_JTQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC60q81sUvK6pYtA2Thif_1eyOvtQ",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 6,
            "title": "IF MICHAEL JACKSON WAS ON THE BOX BY RODDY RICCH",
            "user": "Naz Bernard",
            "video_url": "https://i.ytimg.com/vi/F9mik3_OYNc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtBv80SBDTScORfs8qJe2QyZX1zg",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 7,
            "title": "Still Cold / Pathway Private (Prod. Dylan Brady)",
            "user": "Rap Nation",
            "video_url": "https://i.ytimg.com/an_webp/wIJWIEWRK_I/mqdefault_6s.webp?du=3000&sqp=CIqO7IEG&rs=AOn4CLAOAHHNHgDaXF_ecCm5vWhfr08uUQ",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 8,
            "title": "travis scott ft. kendrick lamar - goosebumps (slowed + reverb)",
            "user": "jamerson",
            "video_url": "https://i.ytimg.com/an_webp/5_lHfxRBi6A/mqdefault_6s.webp?du=3000&sqp=COCm7IEG&rs=AOn4CLAzl3_T5Cm8daOTKptLm_F0akpTAg",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 9,
            "title": "July 7 - Talk to Me (Official Audio)",
            "user": "July 7",
            "video_url": "https://i.ytimg.com/vi/P2YL6pNr9Jg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv15vSkLEQ7Dug6g0C1FN_vgpwSg",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }, {
            "id": 10,
            "title": "SUNDAY - STIRFRYBOYZ)",
            "user": "stirfryboyz",
            "video_url": "https://i.ytimg.com/an_webp/8ohMqsKnBs8/mqdefault_6s.webp?du=3000&sqp=CMOz7IEG&rs=AOn4CLAi8wTYG-yZbqTwW24NewzH_yloBg",
            "created_at": "2021-02-28T05:24:52.000Z",
            "updated_at": "2021-02-28T05:24:52.000Z"
        }]
    })

});

module.exports = router;