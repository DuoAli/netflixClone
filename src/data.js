/// we have to create 3 schema in Database
const data = {

    users: [
        {
            username: "ali",
            email: "ali@ali.com",
            password: "1234",
            profilePic: "",
            isAdmin: true,
        },
        {
            username: "jamali",
            email: "ali@alijamali.com",
            password: "12345",
            profilePic: "",
            isAdmin: false,
        }
    ],

    movies: [
    {
        _id: "1",
        title: "The Batman",
        desc: "The batman directed by matt revees starting Robert as the Knight of Gotham",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2020',
        limit: '125',
        genre: 'Action',
        isSeries: false,
    },
    {
        _id: "2",
        title: "The Batman - The Dark Knight",
        desc: "The batman directed by matt revees starting Robert as the Knight of Gotham",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2021',
        limit: '128',
        genre: 'Adventure',
        isSeries: false,
    },
    {
        _id: "3",
        title: "The Batman - The Dark Knight Rises",
        desc: "The batman directed by matt revees starting Robert as the Knight of Gotham",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2022',
        limit: '129',
        genre: 'Comedy',
        isSeries: false,
    },
    {   
        _id: "4",
        title: "The Flash - Season - 1",
        desc: "Barry allen the fasted man alive on earth",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2019',
        limit: '129',
        genre: 'Comedy',
        isSeries: true,
    },
    {
        _id: "5",
        title: "The Flash - Season - 2",
        desc: "Barry allen the fasted man alive on earth",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2020',
        limit: '128',
        genre: 'Comedy',
        isSeries: true,
    },
    {
        _id: "6",
        title: "The Flash - Season - 3",
        desc: "Barry allen the fasted man alive on earth",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2021',
        limit: '128',
        genre: 'Action',
        isSeries: true,
    },
    {
        _id: "7",
        title: "The Flash - Season - 4",
        desc: "Barry allen the fasted man alive on earth",
        img: "https://images.indianexpress.com/2021/06/batman-long-halloween-1200.jpeg" ,
        imgTitle: "https://pbs.twimg.com/media/E7fToeKXoAkeS38.jpg",
        imgSm: "https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-bat-icon-for-your-project-png-image_1965982.jpg",
        trailer: "https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s",
        video: 'https://www.youtube.com/watch?v=NLOp_6uPccQ&t=4s',
        year: '2022',
        limit: '128',
        genre: 'Adventure',
        isSeries: true,
    },
    ],
    lists: [
        {
            title: "Best Action Movies",
            type: "Movies",
            genre: "Action",
            content: [1, 2 , 3 , 4]
        },
        {
            title: "Best Comedy Movies",
            type: "Movies",
            genre: "Comdey",
            content: [3, 5 , 6 , 7]
        },
        {
            title: "Best Adventure Movies",
            type: "Movies",
            genre: "Adventure",
            content: [3, 5 , 6 , 7]
        },
        {
            title: "Best Action Series",
            type: "Series",
            genre: "Action",
            content: [1, 2 , 3 , 4, 5]
        },
        {
            title: "Best Comedy Series",
            type: "Series",
            genre: "Comedy",
            content: [1, 2 , 3 , 4, 5]
        }
    ]
};

export default data