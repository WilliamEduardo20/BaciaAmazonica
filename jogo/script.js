const animais = [
    {
        index: 0,
        id: 'onca-pintada',
        nome: 'Onça-Pintada',
        cientifico: 'Panthera onca',
        grupo: 'Chordata/Mammalia/Carnivora',
        ameaca: 'Quase Ameaçada',
        mensagem: `A onça-pintada é o maior felino das Américas e um predador de topo.`,
        perguntas: [
            {
                pergunta: `Qual é o habitat natural da onça-pintada?`,
                respostas: ['Florestas tropicais', 'Desertos', 'Montanhas', 'Pradarias'],
                correta: 0
            },
            {
                pergunta: `Qual é a dieta da onça-pintada?`,
                respostas: ['Herbívora', 'Onívora', 'Carnívora', 'Insetívora'],
                correta: 2
            }
        ]
    },
    {
        index: 1,
        id: 'anta',
        nome: 'Anta',
        cientifico: 'Tapirus terrestris',
        grupo: 'Chordata/Mammalia/Perissodactyla',
        ameaca: 'Vulnerável',
        mensagem: `A anta é o maior mamífero terrestre da América do Sul.`,
        perguntas: [
            {
                pergunta: `Qual é a alimentação da anta?`,
                respostas: ['Carne', 'Folhas e frutos', 'Peixes', 'Insetos'],
                correta: 1
            },
            {
                pergunta: `Em que habitat a anta vive?`,
                respostas: ['Florestas tropicais', 'Desertos', 'Cavernas', 'Montanhas'],
                correta: 0
            }
        ]
    },
    {
        index: 2,
        id: 'pirarucu',
        nome: 'Pirarucu',
        cientifico: 'Arapaima gigas',
        grupo: 'Chordata/Actinopterygii/Osteoglossiformes',
        ameaca: 'Dados Insuficientes',
        mensagem: `O pirarucu é um dos maiores peixes de água doce do mundo.`,
        perguntas: [
            {
                pergunta: `Qual é o habitat do pirarucu?`,
                respostas: ['Oceanos', 'Rios e lagos', 'Florestas', 'Pântanos'],
                correta: 1
            },
            {
                pergunta: `Qual é a dieta do pirarucu?`,
                respostas: ['Algas', 'Insetos', 'Peixes e frutos', 'Mamíferos'],
                correta: 2
            }
        ]
    },
    {
        index: 3,
        id: 'tracaja',
        nome: 'Tracajá',
        cientifico: 'Podocnemis unifilis',
        grupo: 'Chordata/Reptilia/Testudines',
        ameaca: 'Vulnerável',
        mensagem: `O tracajá é uma tartaruga comum na Amazônia.`,
        perguntas: [
            {
                pergunta: `Qual é a dieta do tracajá?`,
                respostas: ['Carnívora', 'Herbívora', 'Onívora', 'Insetívora'],
                correta: 2
            },
            {
                pergunta: `Quais são as principais ameaças ao tracajá?`,
                respostas: ['Caça e perda de habitat', 'Poluição', 'Mudança climática', 'Predadores naturais'],
                correta: 0
            }
        ]
    },
    {
        index: 4,
        id: 'peixe-boi-da-amazonia',
        nome: 'Peixe-Boi-da-Amazônia',
        cientifico: 'Trichechus inunguis',
        grupo: 'Chordata/Mammalia/Sirenia',
        ameaca: 'Vulnerável',
        mensagem: `O peixe-boi-da-Amazônia é um mamífero herbívoro.`,
        perguntas: [
            {
                pergunta: `Onde vive o peixe-boi-da-Amazônia?`,
                respostas: ['Em rios de água doce', 'No mar', 'Em lagoas salgadas', 'Em florestas'],
                correta: 0
            },
            {
                pergunta: `Qual é a principal alimentação do peixe-boi?`,
                respostas: ['Peixes', 'Plantas aquáticas', 'Insetos', 'Carne'],
                correta: 1
            }
        ]
    },
    {
        index: 5,
        id: 'boto-cor-de-rosa',
        nome: 'Boto-Cor-de-Rosa',
        cientifico: 'Inia geoffrensis',
        grupo: 'Chordata/Mammalia/Cetacea',
        ameaca: 'Dados Insuficientes',
        mensagem: `O boto-cor-de-rosa é o maior golfinho de água doce do mundo.`,
        perguntas: [
            {
                pergunta: `Qual é o habitat do boto-cor-de-rosa?`,
                respostas: ['Rios', 'Oceanos', 'Lagos', 'Pântanos'],
                correta: 0
            },
            {
                pergunta: `Qual é a coloração característica do boto-cor-de-rosa?`,
                respostas: ['Cinza', 'Branco', 'Cor-de-rosa', 'Preto'],
                correta: 2
            }
        ]
    },
    {
        index: 6,
        id: 'arara-vermelha',
        nome: 'Arara-Vermelha',
        cientifico: 'Ara macao',
        grupo: 'Chordata/Aves/Psittaciformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `A arara-vermelha é uma das aves mais icônicas da Amazônia.`,
        perguntas: [
            {
                pergunta: `Qual é a principal alimentação da arara-vermelha?`,
                respostas: ['Insetos', 'Sementes e frutos', 'Peixes', 'Néctar'],
                correta: 1
            },
            {
                pergunta: `Onde a arara-vermelha geralmente habita?`,
                respostas: ['Desertos', 'Florestas tropicais', 'Montanhas', 'Pradarias'],
                correta: 1
            }
        ]
    },
    {
        index: 7,
        id: 'anaconda',
        nome: 'Anaconda',
        cientifico: 'Eunectes murinus',
        grupo: 'Chordata/Reptilia/Squamata',
        ameaca: 'Pouco Preocupante',
        mensagem: `A anaconda é uma das maiores serpentes do mundo.`,
        perguntas: [
            {
                pergunta: `Qual é o habitat preferido da anaconda?`,
                respostas: ['Florestas secas', 'Áreas urbanas', 'Pântanos e rios', 'Cavernas'],
                correta: 2
            },
            {
                pergunta: `Qual é a dieta da anaconda?`,
                respostas: ['Frutos', 'Mamíferos e aves', 'Insetos', 'Plantas'],
                correta: 1
            }
        ]
    },
    {
        index: 8,
        id: 'galo-da-serra',
        nome: 'Galo-da-Serra',
        cientifico: 'Rupicola rupicola',
        grupo: 'Chordata/Aves/Passeriformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `O galo-da-serra é uma das aves mais coloridas da Amazônia.`,
        perguntas: [
            {
                pergunta: `Qual é a cor da plumagem do macho?`,
                respostas: ['Verde', 'Vermelha e laranja', 'Azul', 'Preta'],
                correta: 1
            },
            {
                pergunta: `Qual é o habitat do galo-da-serra?`,
                respostas: ['Florestas úmidas', 'Desertos', 'Montanhas áridas', 'Campos abertos'],
                correta: 0
            }
        ]
    },
    {
        index: 9,
        id: 'piranha',
        nome: 'Piranha',
        cientifico: 'Pygocentrus nattereri',
        grupo: 'Chordata/Actinopterygii/Characiformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `A piranha é um peixe carnívoro que habita os rios da Amazônia.`,
        perguntas: [
            {
                pergunta: `Qual é a dieta principal da piranha?`,
                respostas: ['Algas', 'Peixes e carne', 'Plantas', 'Frutos'],
                correta: 1
            },
            {
                pergunta: `Qual é a fama da piranha entre os humanos?`,
                respostas: ['Peixe pacífico', 'Peixe agressivo', 'Peixe venenoso', 'Peixe ornamental'],
                correta: 1
            }
        ]
    },
    {
        index: 10,
        id: 'preguica-de-bentinho',
        nome: 'Preguiça-de-Bentinho',
        cientifico: 'Bradypus tridactylus',
        grupo: 'Chordata/Mammalia/Pilosa',
        ameaca: 'Pouco Preocupante',
        mensagem: `A preguiça-de-bentinho é uma espécie de preguiça que habita as florestas tropicais da Amazônia.`,
        perguntas: [
            {
                pergunta: `Qual é a alimentação da preguiça-de-bentinho?`,
                respostas: ['Folhas e brotos', 'Frutos e sementes', 'Carne', 'Peixes'],
                correta: 0
            },
            {
                pergunta: `Como a preguiça se movimenta?`,
                respostas: ['Rápido', 'Lentamente', 'Voando', 'Pulando'],
                correta: 1
            }
        ]
    }
];

let currentAnimalIndex = 0;
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentAnimalIndex = 0;
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion(animais[currentAnimalIndex].perguntas[currentQuestionIndex]);
}

function showQuestion(pergunta) {
    questionElement.innerText = pergunta.pergunta;
    answersElement.innerHTML = '';
    pergunta.respostas.forEach((resposta, index) => {
        const button = document.createElement('button');
        button.innerText = resposta;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index, pergunta));
        answersElement.appendChild(button);
    });
}

function selectAnswer(index, pergunta) {
    if (index === pergunta.correta) {
        score++;
    }
    nextButton.classList.remove('hidden');
    Array.from(answersElement.children).forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < animais[currentAnimalIndex].perguntas.length) {
        showQuestion(animais[currentAnimalIndex].perguntas[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        currentAnimalIndex++;
        if (currentAnimalIndex < animais.length) {
            currentQuestionIndex = 0;
            showQuestion(animais[currentAnimalIndex].perguntas[currentQuestionIndex]);
            nextButton.classList.add('hidden');
        } else {
            showScore();
        }
    }
});

function showScore() {
    scoreElement.innerText = `${score} de ${animais.reduce((acc, animal) => acc + animal.perguntas.length, 0)}`;
    scoreContainer.classList.remove('hidden');
    questionElement.innerText = '';
    answersElement.innerHTML = '';
}

restartButton.addEventListener('click', startGame);

// Inicie o jogo
startGame();