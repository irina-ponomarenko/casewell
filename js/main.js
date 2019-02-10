$(document).ready(function () {
    $("select.custom").each(function() {
        var sb = new SelectBox({
            selectbox: $(this),
            height: 150,
            width: 200
        });
    });

    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#ffffff',
        color: '#ffffff',
        selectedColor: '#3f6c3e',
        borderColor: '#ffffff',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#eaeaea'],
        values: sample_data,
        normalizeFunction: 'polynomial',
        onRegionClick: function(event, code) {
            if (code == "ua") {
                $(".open-modal").addClass("open-pop");
                $('body').addClass('overflow');
            }
            if (code == "US") {
                label.text('Bears, vodka, balalaika');
            }
            if (code == "DE") {
                window.location = '/url4'
            }
            if (code == "IE") {
                window.location = '/url5'
            }
        }
        
    });
    let countriesAbbr = [
        'us','ca','mx','ru','fi','se','no',
        'gb','ie','fr','es','dk','nl', 'de',
        'pt','be','ee','lv','lt','by','pl','cz',
        'at','ua','it','sk','hu','ro','bg','si',
        'hr','gr'
    ];

    countriesAbbr.forEach(function (abbr) {
        jQuery('#vmap').vectorMap('set', 'colors', {[abbr]: '#9cbb3e'});
    });

    let countriesAbbr2 =[
       'gl','cu'
    ];

    countriesAbbr2.forEach(function (abbr2) {
        jQuery('#vmap').vectorMap('set', 'colors', {[abbr2]: '#eaeaea'});
    });


    $(".close-btn").click(function () {
        $(".open-modal").removeClass("open-pop");
        $('body').removeClass('overflow');
    });

});
