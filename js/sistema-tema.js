var tema1 = document.getElementById('tema1');
var tema2 = document.getElementById('tema2');
var tema3 = document.getElementById('tema3');
var tema4 = document.getElementById('tema4');
var tema5 = document.getElementById('tema5');
var tema6 = document.getElementById('tema6');

var cuerpo = document.getElementById('body');
var boton = document.getElementById('actived');
var theme = document.getElementById('result');

$(tema1).click(function () {
    $(cuerpo).toggleClass("black1");
    $(cuerpo).removeClass("black2");
    $(cuerpo).removeClass("black3");
    $(cuerpo).removeClass("black4");
    $(cuerpo).removeClass("black5");
    $(cuerpo).removeClass("black6");
});

$(tema2).click(function () {
    $(cuerpo).toggleClass("black2");
    $(cuerpo).removeClass("black1");
    $(cuerpo).removeClass("black3");
    $(cuerpo).removeClass("black4");
    $(cuerpo).removeClass("black5");
    $(cuerpo).removeClass("black6");
});

$(tema3).click(function () {
    $(cuerpo).toggleClass("black3");
    $(cuerpo).removeClass("black1");
    $(cuerpo).removeClass("black2");
    $(cuerpo).removeClass("black4");
    $(cuerpo).removeClass("black5");
    $(cuerpo).removeClass("black6");
});

$(tema4).click(function () {
    $(cuerpo).toggleClass("black4");
    $(cuerpo).removeClass("black1");
    $(cuerpo).removeClass("black2");
    $(cuerpo).removeClass("black3");
    $(cuerpo).removeClass("black5");
    $(cuerpo).removeClass("black6");
});

$(tema5).click(function () {
    $(cuerpo).toggleClass("black5");
    $(cuerpo).removeClass("black1");
    $(cuerpo).removeClass("black2");
    $(cuerpo).removeClass("black3");
    $(cuerpo).removeClass("black4");
    $(cuerpo).removeClass("black6");
});

$(tema6).click(function () {
    $(cuerpo).toggleClass("black6");
    $(cuerpo).removeClass("black1");
    $(cuerpo).removeClass("black2");
    $(cuerpo).removeClass("black3");
    $(cuerpo).removeClass("black4");
    $(cuerpo).removeClass("black5");
});