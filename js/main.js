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
            if (code == "ru") {
                PopUpShow = '.open-ru'
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
    jQuery('#vmap').vectorMap('set', 'colors', {us: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ca: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {mx: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ru: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {fi: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {se: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {no: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {gb: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ie: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {fr: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {es: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {dk: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {nl: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {de: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {pt: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {be: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ee: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {lv: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {lt: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {by: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {pl: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {cz: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {at: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ua: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {it: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {sk: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {hu: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {ro: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {bg: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {si: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {hr: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {gr: '#9cbb3e'});
    jQuery('#vmap').vectorMap('set', 'colors', {gl: '#eaeaea'});
    jQuery('#vmap').vectorMap('set', 'colors', {cu: '#eaeaea'});


});
