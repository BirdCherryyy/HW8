if (!("a" in window)) { //как я думал: будет ошибка, поскольку условие не будет выполняться, window не строка, условие никогда не выполняется
    var a = 1;          //после проверки: undefined
    }                   // если написать let a, то и правда будет ошибка
    alert(a);

var b = function a(x) { //как я думал: будет бесконечный цикл, поскольку функция а(х) будет вызывать сама себя бесконечно (забыл что надо вызвать функцию оператором вызова "()")
    x && a(--x);        //после проверки: undefined, поскольку мдуль функции привязан к переменной b
    };
    alert(a);

function a(x) {     //думал будет undefiend,
    return x * 2;   //оказывается когда, переменная не определена, берется последнее определенное, здесь это описание функции без её вызова
    }

    var a;
alert(a);

function b(x, y, a) { //будет выведено 10, поскольку здесь 3 аргумента в функции и аргумента а 3ий по счету, поскольку счет идет с 0 то 2ой аргумент = а = 10
    arguments[2] = 10;  // ну хоть тут правильно))
    alert(a);
    }
    b(1, 2, 3);

function a() {      //функция а должна вернуть себя как объект
    alert(this);    //функция а вернула себя как объект window
    }               // а тут я был довольно близок))
    a.call(null);
    //интересная дз показывающая что я забыл или не знал, и где можно прибавить понимания в детальных моментах
    // спасибо вам большое за курс, он был интересный и полезный, когда я выполнял 6 и 7 дз в сумме я на это задействовал около 12 часов с глубочайшим погружением и интересом
    // у вас прекрасно получается вести предмет 10/10 после защиты диссертации (через месяц пересмотрю ваш курс!)