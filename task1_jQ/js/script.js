/*Задание1: Откройте папку "Classwork". В документе "Task.html" реализуйте следующее:
1) Скачайте и подключите к данному доументу библиотеку jQuery;
2) Создайте на странице текстовое поле и кнопку;
3) Создайте произвольное количество элементов на странице с различными уровнями вложенности.
4) Цель: в текстовое поле вводим селектор и нажимаем на кнопку. Элемент, который соответствует селектору, меняет цвет.*/

$(document).ready(function() {

    $('button').on('click', function(e) {
        $('*:not("input"):not("button")').css("border", "none");
        $('*').css("background-color", "white");

        var myInput = $('[name = "myInput"]').val();
        $(myInput).css({
            border: "2px dotted #FF1493",
            backgroundColor: "#7FFFD4"
        });
    });


});
