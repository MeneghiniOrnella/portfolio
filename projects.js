const project = document.getElementById("project");

const data = [
    {
        "title": "Portfolio",
        "img": "portfolio.png",
        "description": "Portfolio created in Vue.js.",
        "urlGithub": "https://github.com/MeneghiniOrnella/MeneghiniOrnella.github.io",
        "urlSite":"https://meneghiniornella.netlify.app/",
        "skills": ["Vue.js", "Javascript", "HTML", "CSS"]
    },
    {
        "title": "Pokemon Game",
        "img": "pokeAPI.png",
        "description": "Guess the pokemon game.It was made using PokeAPI and Vue.js.",
        "urlGithub": "https://github.com/MeneghiniOrnella/pokemon-game",
        "urlSite":"",
        "skills": ["API", "Vue.js", "Javascript", "HTML", "CSS"]
    },
    {
        "title": "Mascotas",
        "img": "dog.jpg",
        "description": "Team proyect of Codo a Codo Python 2021",
        "urlGithub": "https://github.com/MeneghiniOrnella/mascotas",
        "urlSite":"",
        "skills": ["Python", "Flask", "MySQL", "Bootstrap", "HTML", "CSS"]
    },
    {
        "title": "Gamedo",
        "img": "gamedo.png",
        "description": "Multiple choice game made for a taekwondo school.",
        "urlGithub": "https://github.com/MeneghiniOrnella/tkd-gamedo",
        "urlSite":"https://gamedo.netlify.app/",
        "skills": ["HTML", "Javascript", "CSS"]
    },
    {
        "title": "Role Game",
        "img": "logo.png",
        "description": "Sorry! This application is being created.",
        "urlGithub": "https://github.com/MeneghiniOrnella/Vue.js-role-game.git",
        "urlSite":"",
        "skills": ["Vue.js", "Javascript", "HTML", "CSS"]
    }
];

// for(let i = 0; i < data.length; i++) {
//     let card = document.createElement("div");
//     let cardImg = document.createElement("img");
//     let cardTitle = document.createElement("h4");
//     let cardDescription = document.createElement("p");
//     let cardUrlGithub = document.createElement("a");
//     let cardSkills = document.createElement("div");

//     cardImg.innerHTML = data[i].img;
//     cardTitle.innerHTML = data[i].title;
//     cardDescription.innerHTML = data[i].description;
//     cardUrlGithub.innerHTML = data[i].urlGithub;
//     cardUrlSite.innerHTML = data[i].urlSite;
//     cardSkills.innerHTML = data[i].skills;

//     card.appendChild(cardImg);
//     card.appendChild(cardTitle);
//     card.appendChild(cardDescription);
//     card.appendChild(cardUrlGithub);
//     card.appendChild(cardUrlSite);
//     card.appendChild(cardSkills);
    
//     project.appendChild(card);
// };

const cardTemplate = (data) => `
    <div class="card">
        <img src="${data.img}" alt="${data.title}">
        <h4>${data.title}</h4>
        <p>${data.description}</p>
        <div class="url">
            <a href="${data.urlGithub}">GitHub</a>

        </div>
        <div>${data.skills.join(", ")}</div>
    </div>
`;

const cardElements = data.map((item) => {
    const card = document.createElement("div");
    card.innerHTML = cardTemplate(item);
    return card;
});

project.append(...cardElements);