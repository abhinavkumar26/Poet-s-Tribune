window.onresize = function(){
    let w = window.innerWidth;
    if(w <= 500){
        let data = document.getElementById("poem");
        data.setAttribute("slides-per-view", "3")
    } 
}

let poems = {
    "1":"https://poettribune.blogspot.com/2021/11/close-your-eyes-close-your-eyes-and.html",
    "2":"https://poettribune.blogspot.com/2021/11/only-remains-you-have-to-manage-fire-in.html",
    "3":"https://poettribune.blogspot.com/2021/11/the-color-of-black-black-is-colour-of.html",
    "4":"https://poettribune.blogspot.com/2021/11/blog-post.html",
    "5":"https://poettribune.blogspot.com/2021/11/two-wolves-theres-darkness-in-me.html",
    "6":"https://poettribune.blogspot.com/2021/11/to-find-another-to-find-another-is-mere.html",
    "7":"https://poettribune.blogspot.com/2021/11/a-forgotten-friend-with-tearful-eyes-i.html",
    "8":"https://poettribune.blogspot.com/2021/11/all-i-can-see-i-look-at-body-before-me.html",
    "9":"https://poettribune.blogspot.com/2021/11/you-you.html",
    "10":"https://poettribune.blogspot.com/2021/11/hope-in-dark-dingy-corner-of-her-hut.html"
};

function home(){
    location.reload();
}


function shpo(id){
    let a = document.querySelector('body');
    a.innerHTML='<iframe draggable="false" ondragstart="return false;" scrolling="no" class="unselectable" style="margin-left:32vw;border:solid 2px #c2c2c2; margin-top: -120px;width: 450px; height: 1500px;" src="'+poems[id]+'" frameborder="0"></iframe><div onclick="home()" style="position:absolute;top:1vh;left:1vw;cursor:pointer;">Back</div><script src="macro-carousel.min.js"></script><script src="main.js"></script>';
    window.scrollTo(0,0);
}