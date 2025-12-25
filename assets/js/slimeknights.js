$(function() {
    /* Header permalink and back to top links
    Credit: https://github.com/CoFH/cofh.github.io/blob/master/assets/js/cofh.js#L21C1-L22C46 */
    $(':header').each(function() {
        var id = $(this).attr('id');
        if (typeof(id) === 'undefined') return;
        var tagName = $(this).prop('tagName')
        var size = tagName < "H3" ? 1.5 : tagName == "H3" ? 1.25 : 1;

        $(this)
            .addClass('hover-container')
            .append(`<a href="#${id}" class="uk-margin-small-left hover-icon" title="Permalink"><i class="uk-icon" uk-icon="icon: link; ratio: ${size}"></i></a>`)
            .append(`<a href="#" class="uk-float-right uk-margin-right hover-icon" title="Top of Page"><i class="uk-icon" uk-icon="icon: chevron-up; ratio: ${size}"></i></a>`);
    });
});