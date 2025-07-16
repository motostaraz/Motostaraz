$(document).ready(function () {

    if ($('#wpadminbar').length) {
        $('html').addClass('admin_bar_panel')
    }
    $('.admin_bar_panel_button_js').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $('#wpadminbar').removeClass('wpadminbar_active');

        } else {
            $(this).addClass('active');
            $('#wpadminbar').addClass('wpadminbar_active');
        }
    });
});