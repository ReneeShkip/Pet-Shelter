//array of cards
const cards = [
    {
        "id": "1",
        "name": "Jennifer",
        "img": "assets/img/Jen-dog.jpg",

        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Sophia",
        "img": "assets/img/Sof-dog.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Woody",
        "img": "assets/img/Woo-dog.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Scarlett",
        "img": "assets/img/Sca-dog.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Katrine",
        "img": "assets/img/Kat-cat.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Timmy",
        "img": "assets/img/Tim-cat.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Freddie",
        "img": "assets/img/Fre-cat.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "8",
        "name": "Charly",
        "img": "assets/img/Cha-dog.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

//time for waiting
function debounce(func, time) {
    let result;
    return function () {
        const context = this,
            args = arguments;
        clearTimeout(result);
        result = setTimeout(() => func.apply(context, args), time);
    };
}

const debouncedPets = debounce(petsSlider, 200);

document.addEventListener("DOMContentLoaded", () => {

    const bodyClass = document.body.classList;

    //checking, what page is
    if (bodyClass.contains("main")) {
        mainSlider();
    } else if (bodyClass.contains("pagePet")) {
        petsSlider();
        window.addEventListener("resize", () => {
            debouncedPets();
        });
    }

    //popup
    const overlay = document.querySelector('.overlay');
    const card = document.querySelector('.cards-list');
    const close = document.querySelector('.close');

    if (card) {
        card.addEventListener("click", (event) => {
            event.preventDefault();
            const cardId = event.target.closest(".card").getAttribute('name');
            const item = cards.find(card => card.id === cardId);

            if (!item) {
                return;
            };
            overlay.classList.add("popup-active");
            document.querySelector('.popup').classList.add("popup-open");
            document.querySelector('.popup-img').setAttribute("src", item.img)
            document.querySelector('.popup-title').textContent = item.name;
            document.querySelector('.popup-subtitle').textContent = item.type + " - " + item.breed;
            document.querySelector('.popup-desc').textContent = item.description;
            document.querySelector('.popup-list').innerHTML =
                `<ul> 
                <li class="popup-list-item"><img src="assets/img/vectors/dot.svg" alt="."><span>Age:</span>  ${item.age}</li>
                <li class="popup-list-item"><img src="assets/img/vectors/dot.svg" alt="."><span>Inoculations:</span>  ${item.inoculations}</li>
                <li class="popup-list-item"><img src="assets/img/vectors/dot.svg" alt="."><span>Diseases:</span>  ${item.diseases}</li>
                <li class="popup-list-item"><img src="assets/img/vectors/dot.svg" alt="."><span>Parasites:</span>  ${item.parasites}</li>
            </ul>`;

        });
    }

    if (close) {
        close.addEventListener("click", () => {
            overlay.classList.remove("popup-active");
            document.querySelector('.popup').classList.remove("popup-open");
        });
    }
});

//resize
window.addEventListener("resize", mainSlider);


//ammount of cards on page
function cardsOnPage(isPagination = false) {
    const clientWidth = document.documentElement.clientWidth;
    switch (true) {
        case isPagination && clientWidth >= 1020:
            return 8;
        case isPagination && clientWidth >= 640:
            return 6;
        case isPagination:
            return 3;
        case clientWidth <= 590:
            return 1;
        case clientWidth <= 870:
            return 2;
        default:
            return 3;
    }
}

//algorithm of main page
function mainSlider() {

    let curArray;
    let prevArray;
    let previousButton = '';
    let cardsList = document.querySelector('.cards-list');
    const prevButton = document.querySelector('.slides .prev');
    const nextButton = document.querySelector('.slides .next');
    const prevButtonPagin = document.querySelector('.nav-pagins .prev');
    const nextButtonPagin = document.querySelector('.nav-pagins .next');

    displayCards();

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (previousButton == 'right' && prevArray) {
                displayCards(prevArray);
            } else {
                displayCards();
            }
            previousButton = 'left';
        });
    }

    if (prevButtonPagin) {
        prevButtonPagin.addEventListener('click', () => {
            if (previousButton == 'right' && prevArray) {
                displayCards(prevArray);
            } else {
                displayCards();
            }
            previousButton = 'left';
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (previousButton == 'left' && prevArray) {
                displayCards(prevArray);
            } else {
                displayCards();
            }
            previousButton = 'right';
        });
    }

    if (nextButtonPagin) {
        nextButtonPagin.addEventListener('click', () => {
            if (previousButton == 'left' && prevArray) {
                displayCards(prevArray);
            } else {
                displayCards();
            }
            previousButton = 'right';
        });
    }

    function displayCards(petset) {
        if (!cardsList) {
            cardsList = document.querySelector('.cards-list');
        }
        const visibleCards = cardsOnPage();

        if (petset) {
            prevArray = curArray;
            curArray = petset;
        }
        else {
            prevArray = curArray;
            curArray = shuffleArray(cards.filter(pet => !(curArray || []).includes(pet))).slice(0, visibleCards);
        }

        cardsList.innerHTML = '';

        curArray.forEach(pet => {
            //  console.debug(pet);
            const card = addCard(pet);
            cardsList.appendChild(card);
        });

    }
};

function addCard(pet) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("name", `${pet.id}`);
    card.innerHTML = `
            <div>
                <img src="${pet.img}" alt="${pet.name}">
                <p>${pet.name}</p>
            </div>
            <div class="app">
                <button class="appbutton type-3">Learn more</button>
            </div>           
        `;
    return card;
}

function shuffleArray(cardArray) {
    return cardArray.sort(() => Math.random() - 0.5);
}

function petsSlider() {
    const visibleCards = cardsOnPage(true);
    let pageNow = 1;
    let summaryPages = 1;

    let cardContainer = document.querySelector(".card-container");
    const buttonRight = document.querySelector(".next");
    const buttonRightAll = document.querySelector(".far-next");
    const buttonLeft = document.querySelector(".prev");
    const buttonLeftAll = document.querySelector(".far-prev");
    const buttonPageNumber = document.querySelector(".page-number");

    buttonPageNumber.innerHTML = pageNow;

    const arrayNow = getCardArray(
        cards.flatMap((item) => Array(6).fill(item))
    );

    displayPetCards();

    if (buttonRight) {
        buttonRight.addEventListener("click", () => {
            setPagination("button-right");
        });
    }

    if (buttonRightAll) {
        buttonRightAll.addEventListener("click", () => {
            setPagination("button-right-all");
        });
    }

    if (buttonLeft) {
        buttonLeft.addEventListener("click", () => {
            setPagination("button-left");
        });
    }

    if (buttonLeftAll) {
        buttonLeftAll.addEventListener("click", () => {
            setPagination("button-left-all");
        });
    }

    function getCardArray(petsArray) {
        summaryPages = petsArray.length / visibleCards;
        let rows = [];
        for (let i = 0; i < summaryPages; i++) {
            rows[i] = [];
        }

        petsArray.forEach((pet, index) => {
            const rowIndex = index % summaryPages;
            rows[rowIndex].push(pet);
        });

        rows.forEach((row) => {
            shuffleArray(row);
            row.forEach(el => {
                console.debug(el.id);
            });
        });

        shuffleArray(rows);
        return rows.flat();
    }

    function setPagination(arrow) {
        switch (true) {
            case arrow === "button-left" && pageNow > 1:
                pageNow -= 1;
                displayPetCards();
                break;
            case arrow === "button-left-all":
                pageNow = 1;
                displayPetCards();
                break;
            case arrow === "button-right" && pageNow < summaryPages:
                pageNow += 1;
                displayPetCards();
                break;
            case arrow === "button-right-all":
                pageNow = summaryPages;
                displayPetCards();
                break;
            default:
                break;
        }
        if (pageNow == 1) {
            buttonLeft.classList.add("inactive");
            buttonLeftAll.classList.add("inactive");
        } else {
            buttonLeft.classList.remove("inactive");
            buttonLeftAll.classList.remove("inactive");
        }
        if (pageNow == summaryPages) {
            buttonRight.classList.add("inactive");
            buttonRightAll.classList.add("inactive");
        } else {
            buttonRight.classList.remove("inactive");
            buttonRightAll.classList.remove("inactive");
        }
        buttonPageNumber.innerHTML = pageNow;
    }

    function displayPetCards() {
        if (!cardContainer) {
            cardContainer = document.querySelector(".slider");
        }

        cardContainer.innerHTML = "";

        const startInd = visibleCards * (pageNow - 1);
        const newArray = arrayNow
            .slice(startInd, startInd + visibleCards);
        newArray.forEach((cardEl) => {
            const card = addCard(cardEl);
            cardContainer.appendChild(card);
        });
    }
}



