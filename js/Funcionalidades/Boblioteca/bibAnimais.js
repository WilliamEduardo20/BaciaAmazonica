export var animais = [
    {
        index: 0,
        id: 'onca-pintada',
        img: './imgs/animais/onça-pintada.jpg',
        nome: 'Onça-Pintada',
        cientifico: 'Panthera onca',
        grupo: 'Chordata/Mammalia/Carnivora',
        ameaca: 'Quase Ameaçada',
        mensagem: `A onça-pintada (Panthera onca) é o maior felino das 
        Américas e o terceiro maior do mundo, ficando atrás apenas do 
        tigre e do leão. Este felino é conhecido por diversos nomes, 
        incluindo jaguar, onça-preta e yaguareté. A onça-pintada é um 
        predador de topo, desempenhando um papel crucial no equilíbrio 
        dos ecossistemas onde habita, que vão desde florestas tropicais 
        até áreas abertas como o Pantanal.`,
    },
    {
        index: 1,
        id: 'anta',
        img: './imgs/animais/anta.jpg',
        nome: 'Anta',
        cientifico: 'Tapirus terrestris',
        grupo: 'Chordata/Mammalia/ Perissodactyla',
        ameaca: 'Vulnerável',
        mensagem: `A anta (Tapirus terrestris) é o maior mamífero terrestre da América do Sul. 
        É um animal herbívoro que se alimenta de folhas, fibras e frutos, como o açaí. Ela habita 
        principalmente florestas tropicais de baixas elevações e áreas inundáveis da Amazônia. As 
        principais ameaças à anta são a perda de habitat devido ao desmatamento e a caça predatória.`
    },
    {
        index: 2,
        id: 'pirarucu',
        img: './imgs/animais/pirarucu.jpg',
        nome: 'Pirarucu',
        cientifico: 'Arapaima gigas',
        grupo: 'Chordata/Actinopterygii/ Osteoglossiformes',
        ameaca: 'Dados Insuficientes',
        mensagem: `O pirarucu (Arapaima gigas) é um dos maiores peixes de água doce 
        do mundo. Ele habita florestas alagadas, rios e lagos da Bacia Amazônica. Sua 
        alimentação é onívora, incluindo insetos, peixes, anfíbios, frutos e até mesmo 
        aves aquáticas. Apesar de sua distribuição geográfica ainda não ter sido 
        totalmente determinada, o pirarucu enfrenta ameaças devido à pesca predatória.`
    },
    {
        index: 3,
        id: 'tracaja',
        img: './imgs/animais/tracaja.jpg',
        nome: 'Tracajá',
        cientifico: 'Podocnemis unifilis',
        grupo: 'Chordata/Reptilia/Testudines',
        ameaca: 'Vulnerável',
        mensagem: `O tracajá (Podocnemis unifilis) é uma espécie de tartaruga muito 
        comum na Amazônia. Ela pode ser encontrada em rios com pouca corrente e em 
        florestas inundadas. É um animal onívoro que se alimenta de folhas, caules, 
        troncos, raízes, frutos e sementes. As principais ameaças ao tracajá são a 
        caça de ovos e fêmeas reprodutoras, além da instalação de hidrelétricas em seus 
        habitats.`
    },
    {
        index: 4,
        id: 'peixe-boi-da-amazonia',
        img: './imgs/animais/peixe-boi-da-amazonia.jpg',
        nome: 'Peixe-Boi-da-Amazônia',
        cientifico: 'Trichechus inunguis',
        grupo: 'Chordata/Mammalia/Sirenia',
        ameaca: 'Vulnerável',
        mensagem: `O peixe-boi-da-Amazônia (Trichechus inunguis) é um mamífero 
        herbívoro que se alimenta de plantas aquáticas flutuantes, como algas, 
        aguapés e capim. Ele habita exclusivamente corpos de água doce na Bacia 
        Amazônica, desde as cabeceiras de rios no Equador, Peru e Colômbia até o 
        estuário do Rio Amazonas no Brasil. As principais ameaças a essa espécie são 
        a caça predatória e a captura acidental de filhotes por redes de pesca.`
    },
    {
        index: 5,
        id: 'boto-cor-de-rosa',
        img: './imgs/animais/boto-cor-de-rosa.jpg',
        nome: 'Boto-Cor-de-Rosa',
        cientifico: 'Inia geoffrensis',
        grupo: 'Chordata/Mammalia/Cetacea',
        ameaca: 'Dados Insuficientes',
        mensagem: `O boto-cor-de-rosa (Inia geoffrensis) é o maior golfinho de água 
        doce do mundo, podendo atingir até 2,55 metros de comprimento e 185 quilos. 
        Ele habita os rios da Bacia Amazônica e faz parte do imaginário do povo amazônico 
        através da lenda que diz que, à noite, essa espécie se transforma em um homem que 
        seduz mulheres. Apesar da lenda, os ataques desses animais são raros e a atração 
        pela urina ainda não foi comprovada.`
    },
    {
        index: 6,
        id: 'arara-vermelha',
        img: './imgs/animais/arara-vermelha.jpg',
        nome: 'Arara-Vermelha',
        cientifico: 'Ara macao',
        grupo: 'Chordata/Aves/Psittaciformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `A arara-vermelha (Ara macao) é uma das aves mais icônicas da 
        Amazônia. Sua plumagem é predominantemente vermelha, com asas azuis e 
        amarelas. Ela habita florestas tropicais úmidas e se alimenta principalmente 
        de frutos, sementes e nozes. Apesar de sua beleza, a arara-vermelha enfrenta 
        ameaças como o tráfico ilegal de animais silvestres e a perda de habitat 
        devido ao desmatamento.`
    },
    {
        index: 7,
        id: 'anaconda',
        img: './imgs/animais/anaconda.jpg',
        nome: 'Anaconda',
        cientifico: 'Eunectes murinus',
        grupo: 'Chordata/Reptilia/Squamata',
        ameaca: 'Pouco Preocupante',
        mensagem: `A anaconda (Eunectes murinus) é uma das maiores serpentes 
        do mundo, podendo atingir até 550 kg. Ela habita pântanos, brejos e rios 
        da Amazônia e do Pantanal. É uma serpente semiaquática que se alimenta de 
        uma variedade de animais, incluindo peixes, aves, mamíferos e outros répteis. 
        Apesar de seu tamanho impressionante, a anaconda não é considerada uma ameaça 
        significativa aos seres humanos, pois seus ataques são raros e geralmente não 
        fatais.`
    },
    {
        index: 8,
        id: 'galo-da-serra',
        img: './imgs/animais/galo-da-serra.jpg',
        nome: 'Galo-da-Serra',
        cientifico: 'Rupicola rupicola',
        grupo: 'Chordata/Aves/Passeriformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `O galo-da-serra (Rupicola rupicola) é uma das aves mais coloridas 
        e espetaculares da Amazônia. O macho possui uma crista alaranjada brilhante e 
        um corpo laranja-avermelhado, enquanto a fêmea é marrom-escura. Eles habitam 
        florestas úmidas e se alimentam principalmente de frutos. Apesar de sua beleza, 
        o galo-da-serra enfrenta ameaças como a caça ilegal e a perda de habitat devido 
        ao desmatamento.`
    },
    {
        index: 9,
        id: 'piranha',
        img: './imgs/animais/piranha.jpg',
        nome: 'Piranha',
        cientifico: 'Pygocentrus nattereri',
        grupo: 'Chordata/Actinopterygii/ Characiformes',
        ameaca: 'Pouco Preocupante',
        mensagem: `A piranha (Pygocentrus nattereri) é um peixe carnívoro que habita 
        os rios da Bacia Amazônica. Apesar de sua reputação de peixe perigoso, os 
        ataques de piranha a seres humanos são raros e geralmente não fatais. As 
        piranhas se alimentam de uma variedade de presas, incluindo peixes, anfíbios, 
        aves e pequenos mamíferos. Elas desempenham um papel importante no ecossistema 
        aquático amazônico, ajudando a manter o equilíbrio da cadeia alimentar.`
    },
    {
        index: 10,
        id: 'preguica-de-bentinho',
        img: './imgs/animais/preguica-de-bentinho.jpg',
        nome: 'Preguiça-de-Bentinho',
        cientifico: 'Bradypus tridactylus',
        grupo: 'Chordata/Mammalia/Pilosa',
        ameaca: 'Pouco Preocupante',
        mensagem: `A preguiça-de-bentinho (Bradypus tridactylus) é uma espécie de 
        preguiça que habita as florestas tropicais da Amazônia. Ela se alimenta de 
        folhas, brotos, flores e frutos de árvores como a ingazeira. Apesar de seu 
        nome, a preguiça-de-bentinho não é ameaçada de extinção. No entanto, ela 
        enfrenta ameaças como a perda de habitat devido ao desmatamento e a caça 
        ilegal para o tráfico de animais silvestres.`
    }
];