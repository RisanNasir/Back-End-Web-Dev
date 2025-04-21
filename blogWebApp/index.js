import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let id = 0;

app.get("/", (req, res) => {
    id = 0;
    res.render("blog.ejs", {blogList:blogList, id:id});
});


app.get("/blog", (req, res) => {
    id = req.url.split("=", 2)[1];
    res.render("blog.ejs", {blogList:blogList, id:id});
});


app.get("/newBlog", (req, res) => {
    res.render("newBlog.ejs");
});


app.post("/saveBlog", (req, res) => {
    if((req.body.blogTitle).trim() != ""){
        blogList.push({title: req.body.blogTitle, dateCreated: new Date(), blog: req.body.blogBody})
    }
    id = blogList.length-1;
    console.log(id);
    res.render("blog.ejs", {blogList:blogList, id:id});
});


app.get("/deleteBlog", (req, res) => {
    if(blogList.length > 0 ){
        var btitle = blogList[id].title;
        const result = blogList.filter((blog) => blog.title != btitle);
        blogList = result;
        if(id > 0){id = id - 1;}
    }
    res.render("blog.ejs", {blogList:blogList, id:id});
});

app.get("/updateBlog", (req, res)=>{
    console.log(blogList.length);
    if(blogList.length > 0 ){
        res.render("newBlog.ejs", {blogPost:blogList[id], id: id});
    } else {
        res.render("blog.ejs", {blogList:blogList, id: id});
    }
});

app.post("/saveUpdateBlog", (req, res)=>{
    var id = req.body.btnSave;
    blogList[id].title = req.body.blogTitle;
    blogList[id].blog = req.body.blogBody;
    blogList[id].dateCreated = new Date();
    res.render("blog.ejs",  {blogList:blogList, id: id}); 
});





app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});



let blogList = [
    {
        title: "A Time to Remember ❤️",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. \nCurabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "A lovely Place",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "How could you miss that",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "Don't go there",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "A place in the sun",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "Wakey Wakey",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "Time of your life",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "Blog 8",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    },
    {
        title: "Blog 9",
        dateCreated: new Date(),
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor libero. Nam vel enim non purus porta consectetur id ac orci. Cras in risus tempus, blandit nulla id, auctor nibh. Pellentesque scelerisque quam et nunc commodo feugiat. Phasellus non metus ut nulla fringilla maximus. Phasellus mollis arcu lorem, eu tempor nulla dignissim eu. Morbi dictum diam maximus eros ultricies eleifend. Sed fringilla ut ligula vitae vestibulum. Maecenas id eros nec massa sollicitudin viverra. Nam pulvinar semper erat sed dignissim. Phasellus posuere nulla lorem, quis commodo tortor cursus eu. Integer sit amet odio id justo lacinia pellentesque. Curabitur posuere lectus sit amet eros sodales maximus sit amet vitae neque. Nam et urna porttitor risus tempor fringilla. Quisque auctor congue lacus, vitae tempus nulla eleifend vel. Vestibulum lobortis dapibus dapibus. Duis condimentum vulputate mi, ut pulvinar odio efficitur eu. Integer venenatis iaculis sodales. Ut condimentum lorem sed dui elementum fermentum. In aliquam et lacus quis porttitor. Integer tempus tellus a justo sollicitudin lacinia. Donec quis leo vel libero ultricies mattis. Vestibulum nec arcu sagittis, bibendum velit ac, sodales nulla. Sed efficitur lectus eget libero sollicitudin varius non nec diam. Sed eu mi volutpat, molestie erat ac, egestas tortor. Nulla sollicitudin est nec commodo blandit. Cras orci nibh, dictum et vestibulum sed, suscipit quis orci. Duis iaculis ullamcorper quam, at sagittis justo consequat nec. Aliquam non finibus diam.",
    }
];