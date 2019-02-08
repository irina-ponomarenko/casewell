$(document).ready(function () {
    $("select.custom").each(function() {
        var sb = new SelectBox({
            selectbox: $(this),
            height: 150,
            width: 200
        });
    });
    $('.vmcarousel-normal').vmcarousel({
        centered: false,
        start_item: 0,
        autoplay: false,
        infinite: false
    });
});
