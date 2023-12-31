const projects = [
{
	videoSrc: "https://www.youtube.com/embed/1WTZRq0XCqw?si=hufvDm7cpkgml312",
	title: "Shooter",
	description: "A Third Person shooter that I am currently working on in Unreal Engine 5.2.",
	completion: "Year Started 2023 | TBD",
},
{
	videoSrc: "https://www.youtube.com/embed/P6xhvsHf0Ag?si=fj9Ek2z9YMmIe5Xz",
	title: "Tanks",
	description: "A project that I made using Unreal Engine to practice CPP programming and general level design. I was able to learn how to create a simple character controller and be able to shoot projectiles.",
	completion: "Year started 2023 | Year Finished 2023",
},
{
	videoSrc: "https://www.youtube.com/embed/SJN3iQQD9lQ?si=1HQJMO6EwePdEjy0",
	title: "Dungeon",
	description: "A simple interactive dungeon game that I made using Unreal Engine 5. I was trying to learn CPP in Unreal while also getting used to the Unreal Engine Interface.",
	completion: "Year Started 2023 | Year Finished 2023",
},
{
    videoSrc: "https://www.youtube.com/embed/IkX5INHEugM",
    title: "Prototype True First Person",
    description: "A prototype true first person game that I was exploring in Unity. I wanted to learn how to make a true first person controller.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc: "https://www.youtube.com/embed/6AG4WWr6zW8",
    title: "A WIP game that I am working on in Godot Engine",
    description: "A standard pixel platformer where I try to learn 2D game programming. This is my first game using the Godot Engine and I wanted to incorporate standard platformer controls.",
    completion : "Year Started 2022 | Year Finished TBD",
},
{
    videoSrc: "https://www.youtube.com/embed/3nXhtWLgAuM",
    title: "A simple experiment on pathfinding using Unity.",
    description: "I tried learning pathfinding and basic AI programming using Unity. I wanted to learn pathfinding and to use my experience to create games with point and click mechanics in the future.",
    completion: "Year Started 2022 | Year Finished 2022",
},

{
    videoSrc: "https://www.youtube.com/embed/eAtGzF9ZioI",
    title: "First Person Game for Unity Pathways Course",
    description: "A first person game that I made for the Unity Pathways Course. I was practicing how to create a dynamic menu screen and also wanted to start practicing my skills in creating first person experiences.",
    completion: "Year Started 2022 | Year Finished 2022",

},

{
    videoSrc:"https://www.youtube.com/embed/g98_AkA7zOc",
    title: "A Simple game made for the Unity Pathways Course",
    description: "A simple game where the course challenged us to 'gamify' a box and couple of balls. The course gave us a box and a couple of balls and we had to design a game with these limitations. I decided to create a game that uses a cannon to shoot the balls to provide a sense of challenge to the player.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/eTORTvLFFOk",
    title: "Droppy Egg",
    description:"A hyper-casual game that I made using Unity. This was my first attempt at making a mobile game for Android devices. The game uses the accelerometer for controlling the egg left and right.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/Rwnq7CHJBOc",
    title: "Flappy Bird for CS50G",
    description: "A flappy bird clone written in Lua made for the Harvard CS50G course. I was able to learn to code in Lua as well as loading sprites and audio using the Love2D framework.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/7CTXXQ2XSmY",
    title:"Unity Pathway Coursework",
    description:"An exercise in VFX, Materials and Textures for the Unity Pathway course. I was responsible for creating all the materials vfx and textures used on the scene from a images that I took and converted for 3D use.",
    completion: "Year Started 2022 | Year Finished 2022",
},
{
    videoSrc:"https://www.youtube.com/embed/PTFoye20WSc",
    title: "A simple game made in Unity",
    description: "A game made in a few hours where I tried playing around with designing a simple game given the limitation of using cubes and balls to make a game.",
    completion: "Year Started 2022 | Year Finished 2022",
}
];

const totalProjects = projects.length;
let currentIndex = 0;

const container = document.querySelector('.carousel-container');

function updateCarousel() {
    container.innerHTML = `
        <div class="project-title">
            <iframe src="${projects[currentIndex].videoSrc}" width="500" height="315" frameborder="0" allowfullscreen class="project-video"></iframe>
            <p>${projects[currentIndex].title}</p>
            <p>${projects[currentIndex].description}</p>
            <p>${projects[currentIndex].completion}</p>
        </div>
        <div class="numbering">${currentIndex + 1}/${totalProjects}</div>
    `;
}


function goToNextProject(){
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
}

function goToPrevProject(){
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', goToPrevProject);
nextButton.addEventListener('click', goToNextProject);

//Initialize carousel
updateCarousel();