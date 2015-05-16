jQuery(document).ready(function(){
    (function($){
        $('.projects_content_wrapper > div').hide();
        $('.project').click(function(){
            var clickThis = $(this);
            $('.projects_content_wrapper > div').each(function(){
                var divClass = $(this).attr('class');
                $(this).hide();
                if (clickThis.hasClass(divClass)) {
                    $(this).show();
                }
            });
            if (!$('#projects_content').hasClass('panel_opended')) {
                $('#projects_content').addClass('panel_opended');
            }
        });
        $('.panel_closebutton').click(function(){
            $('#projects_content').toggleClass('panel_opended');
        });
    })(jQuery)
});