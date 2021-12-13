$(document).ready(function () {

    //wow.js
    var wow = new WOW({});
    wow.init();

    //fancybox
    $(".fancybox").fancybox();

    // anchor link
    $(function () {
        var anchorLink = $("a.anchor-link[href^='#']");
        anchorLink.click(function () {
            var elementClick = $(this).attr("href");
            if ($(elementClick).length) {
                var destination = $(elementClick).offset().top;

                $('html,body').animate({scrollTop: destination - 80}, 1100);

                return false;
            }
        });
    });

    //project-list
    $(function () {
        var links = $('.projects-block .projects__item .item__links');

        if (links.length) {
            links.each(function () {
                var currentLinks = $(this),
                    list = $(this).find('.list'),
                    item = list.find('.list__item');

                console.log(item.length);

                if (item.length > 4) {
                    for (var i = 0; i < item.length; i++) {
                        if (i > 3) {
                            $(item[i]).addClass('-hidden-item');
                        }
                    }

                    currentLinks.append('<a href="javascript:;" class="link link-open link-text-red">Посмотреть все</a>')
                }

                var hiddenItem = list.find('.list__item.-hidden-item');

                currentLinks.on('click', '.link-open', function () {
                    if ($(this).hasClass('-active')) {
                        hiddenItem.fadeOut();
                        $(this).removeClass('-active');
                        $(this).html('Посмотреть все');
                    } else {
                        hiddenItem.fadeIn();
                        $(this).addClass('-active');
                        $(this).html('Скрыть')
                    }
                });
            });
        }
    });

    //header-mobile
    $(function () {
        var headerNav = $('.header__nav'),
            headerMenu = $('.header__menu'),
            headerLink = headerNav.find('.list__item .link'),
            headerNavClose = headerNav.find('.close-mobile');

        headerMenu.on('click', function () {
            headerNav.addClass('-active');
            $('html, body').css('overflow-y', 'hidden');
        });

        headerNavClose.on('click', function () {
            headerNav.removeClass('-active');
            $('html, body').css('overflow-y', 'auto');
        });

        headerLink.on('click', function () {
            headerNav.removeClass('-active');
            $('html, body').css('overflow-y', 'auto');
        });
    });
});