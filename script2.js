alert("Добро пожаловать в игру - Кто хочет стать миллионером.")
userHello()
function userHello() {
    let userAnswer = prompt("Перед продолжением, согласны ли Вы сыграть?");
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == "да" || userAnswer == "согласен" || userAnswer == "буду") {
        rulesGame();
    } else {
        return;
    }
}


function rulesGame() {
    alert("ВНИМАНИЕ!\nПРАВИЛА ИГРЫ.")
    alert("Участник должен ответить на 15 вопросов. Участник имеет две не­сгораемые суммы в 90000 р. и 420000 р. Если Вы ответили неправильно, то игра заканчивается. Ну что готовы? Тогда поехали;)");
    consentRulesGameUser()
}


function consentRulesGameUser() {
    let rulesGameUser = prompt("Все понятно?");
    rulesGameUser = rulesGameUser.toLowerCase();
    if (rulesGameUser == "да" || rulesGameUser == "конечно" || rulesGameUser == "естественно") {
        startGame()
    } else {
        alert("Давай еще раз)")
        rulesGame();
    }
}





function startGame() {

    let question = ["Вопрос 1\nОткуда сотрудники офисов наливают в чашки воду?",
        "Вопрос 2\nЧто построил Джек в стихотворении, переведенным с английского Маршаком?",
        "Вопрос 3\nЧто может возникнуть на шахматной доске?",
        "Вопрос 4\nЧто такое каршеринг?",
        "Вопрос 5\nКакие мужчины, согласно этикету, не обязаны идти слева от дамы?",
        "Вопрос 6\nКакую песню распевает при народе белочка в “Сказке о царе Салтане”?",
        "Вопрос 7\nКто “помогал” делать записи в судовом журнале плота “Кон-Тики” Тура Хейердала?",
        "Вопрос 8\nКакой возможности лишен крупье казино?",
        "Вопрос 9\nВ каком кинофильме нет сцены на экзамене?",
        "Вопрос 10\nЧто отсутствует в конструкции всех дворцов Запретного города китайских императоров?",
        "Вопрос 11\nКому Анна Ахматова посвятила стихотворение “Я пришла к поэту в гости”?",
        "Вопрос 12\nКакого переулка нет в Москве?",
        "Вопрос 13\nНеобычную серию чего во Франции выпустили с запахом шоколада?",
        "Вопрос 14\nКак в старинной легенде звали дочь богатыря Байкала?",
        "Вопрос 15\nКакой герой русской классики сделал фальшивый портсигар из найденной на улице дощечки?"
    ];



    let answer = [" Варианты ответов на 1 вопрос:\n1) из принтера\n2) из сканера\n3) из степлера\n4) из кулера",
        "\nВарианты ответов на 2 вопрос:\n1) маршрут\n2) график\n3) дом\n4) коммунизм",
        "\nВарианты ответов на 3 вопрос:\n1) вечный шах\n2) вечный мат\n3) вечный зов\n4) вечный двигатель",
        "\nВарианты ответов на 4 вопрос:\n1) секонд-хенд\n2) напольный светильник\n3) брачный танец вороны\n4) аренда автомобиля",
        "\nВарианты ответов на 5 вопрос:\n1) высокие\n2) пожилые\n3) иногородние\n4) военнослужащие",
        "\nВарианты ответов на 6 вопрос:\n1) “Во поле береза стояла”\n2) “Во кузнице”\n3) “Во саду ли, в огороде”\n4) “Вот кто-то с горочки спустился”",
        "\nВарианты ответов на 7 вопрос:\n1) чайки\n2) каракатицы\n3) дельфины\n4) крысы",
        "\nВарианты ответов на 8 вопрос:\n1) пригладить рукой волосы\n2) снять пылинку с жилета\n3) поправить галстук\n4) достать платок из кармана",
        "\nВарианты ответов на 9 вопрос:\n1) “Доживем до понедельника”\n2) “Операция “Ы”…”\n3) “Старик Хоттабыч”\n4) “Большая перемена”",
        "\nВарианты ответов на 10 вопрос:\n1) двери\n2) лестницы\n3) окна\n4) печные трубы",
        "\nВарианты ответов на 11 вопрос:\n1) Николаю Гумилеву\n2) Александру Блоку\n3) Сергею Есенину\n4) Александру Пушкину",
        "\nВарианты ответов на 12 вопрос:\n1) Гусятникова\n2) Воронова\n3) Орловского\n4) Сорокина",
        "\nВарианты ответов на 13 вопрос:\n1) монет\n2) купюр\n3) почтовых марок\n4) банковских карт",
        "\nВарианты ответов на 14 вопрос:\n1) Ангара\n2) Лена\n3) Бирюса\n4) Тунгуска",
        "\nВарианты ответов на 15 вопрос:\n1) Чичиков\n2) Раскольников\n3) Дубровский\n4) Человек в футляре",
    ];



    let payoff = [0, 5000, 10000, 15000, 25000, 35000, 45000, 50000, 65000, 75000, 95000, 100000, 130000, 150000, 100000, 100000];

    let permanentMoney1 = payoff[1] + payoff[2] + payoff[3] + payoff[4] + payoff[5];
    let permanentMoney2 = permanentMoney1 + payoff[6] + payoff[7] + payoff[8] + payoff[9] + payoff[10];




    let userQuestion = prompt((question[0] + answer[0]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[1] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "из кулера") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш выигрыш составляет: " + payoff[1] + " рублей.\nПереходим ко 2 вопросу)")
    } else if (userQuestion == 4) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш выигрыш составляет: " + payoff[1] + " рублей.\nПереходим ко 2 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + payoff[0] + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }




    userQuestion = prompt((question[1] + answer[1]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[2] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "дом") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2]) + " рублей.\nПереходим к 3 вопросу)")
    } else if (userQuestion == 3) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2]) + " рублей.\nПереходим к 3 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + payoff[0] + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[2] + answer[2]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[3] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "вечный шах") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3]) + " рублей.\nПереходим к 4 вопросу)")
    } else if (userQuestion == 1) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3]) + " рублей.\nПереходим к 4 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + payoff[0] + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[3] + answer[3]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[4] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "аренда автомобиля") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3] + payoff[4]) + " рублей.\nПереходим к 5 вопросу)")
    } else if (userQuestion == 4) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3] + payoff[4]) + " рублей.\nПереходим к 5 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + payoff[0] + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }


    userQuestion = prompt((question[4] + answer[4]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[5] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "военнослужащие") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3] + payoff[4] + payoff[5]) + " рублей.\nПОЗДРАВЛЯЮ!!! ВЫ ДОБРАЛИСЬ ДО ПЕРВОЙ НЕСГОРАЕМОЙ СУММЫ))).\nПереходим к 6 вопросу)")
        alert("Это Ваша несгораемая сумма: " + permanentMoney1 + " рублей.");
    } else if (userQuestion == 4) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (payoff[1] + payoff[2] + payoff[3] + payoff[4] + payoff[5]) + " рублей.\nПОЗДРАВЛЯЮ!!! ВЫ ДОБРАЛИСЬ ДО ПЕРВОЙ НЕСГОРАЕМОЙ СУММЫ))).\nПереходим к 6 вопросу)")
        alert("Это Ваша несгораемая сумма: " + permanentMoney1);
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + payoff[0] + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[5] + answer[5]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[6] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "“во саду ли, в огороде”" || userQuestion == "во саду ли, в огороде" || userQuestion == "во саду ли в огороде") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6]) + " рублей.\nПереходим к 7 вопросу)")
    } else if (userQuestion == 3) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6]) + " рублей.\nПереходим к 7 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney1 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[6] + answer[6]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[7] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "каракатицы") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7]) + " рублей.\nПереходим к 8 вопросу)")
    } else if (userQuestion == 2) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7]) + " рублей.\nПереходим к 8 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney1 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[7] + answer[7]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[8] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "достать платок из кармана") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8]) + " рублей.\nПереходим к 9 вопросу)")
    } else if (userQuestion == 4) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8]) + " рублей.\nПереходим к 9 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney1 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[8] + answer[8]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[9] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "“доживем до понедельника”" || userQuestion == "доживем до понедельника") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8] + payoff[9]) + " рублей.\nПереходим к 10 вопросу)")
    } else if (userQuestion == 1) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8] + payoff[9]) + " рублей.\nПереходим к 10 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney1 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[9] + answer[9]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[10] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "печные трубы") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8] + payoff[9] + payoff[10]) + " рублей.\nПОЗДРАВЛЯЮ!!! ВЫ ДОБРАЛИСЬ ДО ВТОРОЙ НЕСГОРАЕМОЙ СУММЫ))).\nПереходим к 11 вопросу)")
        alert("Это Ваша несгораемая сумма: " + permanentMoney2 + " рублей.");
    } else if (userQuestion == 4) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney1 + payoff[6] + payoff[7] + payoff[8] + payoff[9] + payoff[10]) + " рублей.\nПОЗДРАВЛЯЮ!!! ВЫ ДОБРАЛИСЬ ДО ВТОРОЙ НЕСГОРАЕМОЙ СУММЫ))).\nПереходим к 11 вопросу)")
        alert("Это Ваша несгораемая сумма: " + permanentMoney2);
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney1 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[10] + answer[10]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[11] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "александру блоку" || userQuestion == "александр блок") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11]) + " рублей.\nПереходим к 12 вопросу)")
    } else if (userQuestion == 2) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11]) + " рублей.\nПереходим к 12 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney2 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }


    userQuestion = prompt((question[11] + answer[11]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[12] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "воронова") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12]) + " рублей.\nПереходим к 13 вопросу)")
    } else if (userQuestion == 2) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12]) + " рублей.\nПереходим к 13 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney2 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }


    userQuestion = prompt((question[12] + answer[12]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[13] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "почтовых марок") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13]) + " рублей.\nПереходим к 14 вопросу)")
    } else if (userQuestion == 3) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13]) + " рублей.\nПереходим к 14 вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney2 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }


    userQuestion = prompt((question[13] + answer[13]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[14] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "ангара") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13] + payoff[14]) + " рублей.\nПереходим к ФИНАЛЬНОМУ вопросу)")
    } else if (userQuestion == 1) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13] + payoff[14]) + " рублей.\nПереходим к ФИНАЛЬНОМУ вопросу)")
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney2 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;
    }



    userQuestion = prompt((question[14] + answer[14]) + "\nСумма выиграша, в случаи правильного ответа составит: " + payoff[15] + " рублей.\nВаш ответ... (Введите ответ или номер ответа)");
    if (userQuestion == "раскольников") {
        userQuestion = userQuestion.toLowerCase();
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13] + payoff[14] + payoff[15]) + " рублей.\nПОЗДРАВЛЯЮ ВЫ ВЫИГРАЛИ 1000000 РУБЛЕЙ. УРA!)")
        alert("ИГРА - ОКОНЧЕНА");
    } else if (userQuestion == 2) {
        userQuestion = parseInt(userQuestion);
        alert("Это верно, поздравляю!\nВаш общиий выигрыш составляет: " + (permanentMoney2 + payoff[11] + payoff[12] + payoff[13] + payoff[14] + payoff[15]) + " рублей.\nПОЗДРАВЛЯЮ ВЫ ВЫИГРАЛИ 1000000 РУБЛЕЙ. УРA!)")
        alert("ИГРА - ОКОНЧЕНА");
    } else {
        alert("Увы, но это не верно. Вы проиграли\nВаш выигрыш составляет: " + permanentMoney2 + " рублей.");
        alert("ИГРА - ОКОНЧЕНА");
        return;

    }
}




