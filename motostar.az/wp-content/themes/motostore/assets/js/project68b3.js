function page_content_height() {
    let footer_height = parseFloat($('.footer').innerHeight());
    let header_height = parseFloat($('.header').innerHeight());
    let window_height = $(window).height();
    let page_content_height = window_height - footer_height - header_height;
    document.documentElement.style.setProperty('--page_content_height', `${page_content_height}px`);
};

$(document).ready(function () {

    setTimeout(function () {
        page_content_height();
    }, 10);

    if ($('.hero_slider_js').length) {


        const hero_slider = new Swiper('.hero_slider_js', {
            slidesPerView: '1',
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            // easing: 'ease-in-out',
            easing: 'cubic-bezier(1,.01,.89,.65)',
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            },
            lazy: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // breakpoints: {
            //     // when window width is >= 320px
            //     320: {
            //         slidesPerView: 1,
            //         spaceBetween: 10,
            //     },
            //     790: {
            //         slidesPerView: 2,
            //         spaceBetween: 15,
            //     },
            //     980: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     1440: {
            //         slidesPerView: 3,
            //         spaceBetween: 25,
            //     },
            // },
        });

        // hero_slider.mouseenter(function () {
        //     hero_slider.autoplay.stop();
        // });
        // hero_slider.mouseleave(function () {
        //     hero_slider.autoplay.start();
        // });

    };

    if ($('.single_product_slider_js').length) {


        var single_product_slider_js = new Swiper(".single_product_slider_js", {
            spaceBetween: 10,
            slidesPerView: 5,
            // freeMode: true,
            watchSlidesProgress: true,
            speed: 800,
            breakpoints: {
                320: {
                    spaceBetween: 4,
                    slidesPerView: 3,
                },
                480: {
                    spaceBetween: 4,
                    slidesPerView: 4,
                },

                680: {
                    spaceBetween: 4,
                    slidesPerView: 6,
                },
                980: {
                    spaceBetween: 5,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 5,
                    slidesPerView: 4,
                },
                1500: {
                    spaceBetween: 10,
                    slidesPerView: 5,
                },
            },
        });

        var single_product_slider_preview_js = new Swiper(".single_product_slider_preview_js", {
            spaceBetween: 10,
            slidesPerView: 1,
            speed: 800,
            navigation: {
                nextEl: ".single_product_slider_preview_button_next_js",
                prevEl: ".single_product_slider_preview_button_prev_js",
            },
            thumbs: {
                swiper: single_product_slider_js,
            },
            
        });

    };

    if ($('.products_slider_js').length) {


        var products_slider_js = new Swiper(".products_slider_js", {
            spaceBetween: 10,
            slidesPerView: 2,
            // freeMode: true,
            watchSlidesProgress: true,
            easing: 'cubic-bezier(1,.01,.89,.65)',
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".products_slider_button_next_js",
                prevEl: ".products_slider_button_prev_js",
            },
            breakpoints: {
                320: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                },
                480: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                },

                680: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
                980: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                },
                1200: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                },
                1500: {
                    spaceBetween: 10,
            slidesPerView: 2,
                },
            },
        });


    };





    if ($('.tabs_block_js').length) {
        $('.tabs_block_js').each(function () {
            $(this).find(".tabs_titles_wrap_js .tab_title_js:first-of-type ").addClass("current_tabs_title");
            $(this).find(".tabs_contents_wrap_js .tab_content_js:first-of-type").addClass("current_tab_content");
        });

        $(document).on("click", ".tab_title_js", function () {
            let tab_id = $(this).attr("data-tab");
            let $tabsBlock = $(this).closest(".tabs_block_js");

            $tabsBlock.find('.tab_title_js').removeClass("current_tabs_title");
            $tabsBlock.find('.tab_content_js').removeClass("current_tab_content");

            $(this).addClass("current_tabs_title");
            $("#" + tab_id).addClass("current_tab_content");
        });
    }


    $('.accordion_item_title').click(function () {

        $('.accordion_item_content').slideUp(300);
        $('.faq_item').removeClass('active');

        if ($(this).hasClass('active')) {
            $(this).next().slideUp(300);
            $(this).removeClass('active');
            $(this).closest('.faq_item').removeClass('active');
        } else {
            $(this).next().slideDown(300);
            $('.accordion_item_title').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.faq_item').addClass('active');
        }
    });



    if ($('.mobile_menu_button_js').length) {
        $(document).on('click', '.mobile_menu_button_js', function () {
            if ($(this).hasClass('mobile_menu_button_active')) {
                $(this).removeClass('mobile_menu_button_active');
                $('.menu_container_wrap').removeClass('menu_container_wrap_active');
                $('body').removeClass('overflow_hidden');
            } else {
                $(this).addClass('mobile_menu_button_active');
                $('.menu_container_wrap').addClass('menu_container_wrap_active');
                $('body').addClass('overflow_hidden');


            };
        });

    };

    var about_product_js = $('.about_product_js').html();

    if ($(window).width() <= 980) {
        $('.about_product_mobile_js').html(about_product_js);
        $('.about_product_js').html('');
    }; 



    setTimeout(function () {
        $('.page_load').addClass('page_load_opacity');
    }, 500);
    setTimeout(function () {
        $('.page_load').remove();
    }, 650);

});


$(window).on('load', function () {



});
$(window).on('resize', function () {
   
    page_content_height();
});

