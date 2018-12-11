//Contacts mini yandex map
var map, mapRoute;

ymaps.ready(function() {
    map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 12
    });
});

$(function() {
    $("#route-from, #route-to").suggestions({
        token: "77b453776e0836b0cd6077a8642f087e6693edc6",
        type: "ADDRESS",
        count: 5,
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $('.route-example').click(function() {
        var routeEx = $(this).html();
        $(this).prev().prev().val(routeEx);
    });

    $(".show-calc-transport").click(function() {
        $(this).fadeOut(500);
        $('#calc-spoiler').toggle();
        return false;
    });

});

function createRoute() {
    // Remove all routes
    if (mapRoute) {
        map.geoObjects.removeAll(mapRoute);
    }
    $('#route-length, #route-cost').html('<img src="/bitrix/templates/Bootstrap/img/loader.gif">');
    $('#routeMapCollapse').addClass('collapse in');
    $('#calc-result').removeClass('hidden');

    var routeFrom = $('#route-from').val();
    var routeTo = $('#route-to').val();
    var routeTime;
    var routeLength;
    var routeCost;
    var podachaCost = 3700 + 750;
    var kilometerCost = 40;

    // Add route
    ymaps.route([routeFrom, routeTo], {mapStateAutoApply:true}).then(
        function(route) {

            map.geoObjects.add(route);
            routeLength = route.getLength() / 1000;
            routeCost = routeLength * kilometerCost + podachaCost;
            routeTime = route.getHumanTime();
            $('#text-from').html(routeFrom);
            $('#text-to').html(routeTo);
            $('#routeTime').html(routeTime);
            $('#route-length').text(Math.floor(routeLength));
            $('#route-cost').text(Math.floor(routeCost));
            mapRoute = route;
        },
        function(error) {
            $('#route-length').html('<strong>Не удалось построить маршрут! Проверьте правильность заполнения.</strong><br>');
            $('#route-cost').html(' ');
        }
    );
}