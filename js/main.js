$(document).ready(function () {
    $("select.custom").each(function() {
        var sb = new SelectBox({
            selectbox: $(this),
            height: 150,
            width: 200
        });
    });
});
