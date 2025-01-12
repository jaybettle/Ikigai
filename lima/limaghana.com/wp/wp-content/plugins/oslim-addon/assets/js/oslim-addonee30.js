(function ($) {
    "use strict";

    var WidgetDefaultHandler = function ($scope) {

        if ($scope.find(".wow").length) {
            var wow = new WOW({
                boxClass: "wow", // animated element css class (default is wow)
                animateClass: "animated", // animation css class (default is animated)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }

        if ($('.main-slider-two__img').length) {
            $('.main-slider-two__img').tilt({
                maxTilt: 5,
                scale: 1,
                perspective: 700,
                speed: 1000
            });
        }

        if ($scope.find(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
                e.preventDefault();
                var target = $($(this).attr("data-tab"));

                if ($(target).is(":visible")) {
                    return false;
                } else {
                    target
                        .parents(".tabs-box")
                        .find(".tab-buttons")
                        .find(".tab-btn")
                        .removeClass("active-btn");
                    $(this).addClass("active-btn");
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .fadeOut(0);
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .removeClass("active-tab");
                    $(target).fadeIn(300);
                    $(target).addClass("active-tab");
                }
            });
        }

        //Single Item Carousel
        if ($scope.find(".single-item-carousel").length) {
            $(".single-item-carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 500,
                autoplay: 5000,
                autoplayHoverPause: true,
                autoplayTimeout: 5000,
                navText: [
                    '<span class="icon fa fa-angle-left"></span>',
                    '<span class="icon fa fa-angle-right"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }

        if ($scope.find(".circle-progress").length) {
            $(".circle-progress").appear(function () {
                let circleProgress = $(".circle-progress");
                circleProgress.each(function () {
                    let progress = $(this);
                    let progressOptions = progress.data("options");
                    progress.circleProgress(progressOptions);
                });
            });
        }


        // News Two Carousel
        if ($scope.find(".blog-two__carousel").length) {
            var blogCarousel = $(".blog-two__carousel");
            var nextBtn = $('.blog-two__carousel__custom-nav .left-btn');
            var prevBtn = $('.blog-two__carousel__custom-nav .right-btn');
            blogCarousel.owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: false,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    992: {
                        items: 3,
                    },
                    1024: {
                        items: 3,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
            nextBtn.on('click', function (e) {
                e.preventDefault();
                blogCarousel.trigger('next.owl.carousel', [500]);
            });
            prevBtn.on('click', function (e) {
                e.preventDefault();
                blogCarousel.trigger('prev.owl.carousel', [500]);
            });
        }


        if ($scope.find(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,

                fixedContentPos: false,
            });
        }

        if ($scope.find(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
                var id = parseInt($(this).attr("data-group"), 10);

                if (!groups[id]) {
                    groups[id] = [];
                }

                groups[id].push(this);
            });

            $.each(groups, function () {
                $(this).magnificPopup({
                    type: "image",
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    gallery: {
                        enabled: true,
                    },
                });
            });
        }

        // Popular Causes Progress Bar
        if ($scope.find(".count-bar").length) {
            $('.count-bar').appear(function () {
                var el = $(this);
                var percent = el.data('percent');
                $(el).css('width', percent).addClass('counted');
            }, {
                accY: -50
            });

        }

        //Fact Counter + Text Count
        if ($scope.find(".count-box").length) {
            $(".count-box").appear(
                function () {
                    var $t = $(this),
                        n = $t.find(".count-text").attr("data-stop"),
                        r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".count-text").text()
                        }).animate({
                            countNum: n
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function () {
                                $t.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $t.find(".count-text").text(this.countNum);
                            }
                        });
                    }
                }, {
                    accY: 0
                }
            );
        }

        //Jquery Knob animation
        if ($scope.find(".dial").length) {
            $(".dial").appear(
                function () {
                    var elm = $(this);
                    var color = elm.attr("data-fgColor");
                    var perc = elm.attr("value");
                    var thickness = elm.attr("data-thickness");

                    elm.knob({
                        value: 0,
                        min: 0,
                        max: 100,
                        skin: "tron",
                        readOnly: true,
                        thickness: thickness,
                        dynamicDraw: true,
                        displayInput: false
                    });

                    $({
                        value: 0
                    }).animate({
                        value: perc
                    }, {
                        duration: 2000,
                        easing: "swing",
                        progress: function () {
                            elm.val(Math.ceil(this.value)).trigger("change");
                        }
                    });
                }, {
                    accY: 0
                }
            );
        }

        if ($scope.find(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
                $(this).appear(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        }

        // Accrodion
        if ($scope.find(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");
            accrodionGrp.each(function () {
                var accrodionName = $(this).data("grp-name");
                var Self = $(this);
                var accordion = Self.find(".accrodion");
                Self.addClass(accrodionName);
                Self.find(".accrodion .accrodion-content").hide();
                Self.find(".accrodion.active").find(".accrodion-content").show();
                accordion.each(function () {
                    $(this)
                        .find(".accrodion-title")
                        .on("click", function () {
                            if ($(this).parent().hasClass("active") === false) {
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .removeClass("active");
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .find(".accrodion-content")
                                    .slideUp();
                                $(this).parent().addClass("active");
                                $(this).parent().find(".accrodion-content").slideDown();
                            }
                        });
                });
            });
        }

        let thmSwiperSliders = $scope.find(".thm-swiper__slider");
        if (thmSwiperSliders.length) {
            thmSwiperSliders.each(function () {
                let elm = $(this);
                let options = elm.data('swiper-options');
                let thmSwiperSlider = new Swiper(elm, "object" === typeof options ? options : JSON.parse(options));
            });
        }

        let thmOwlCarousels = $scope.find(".thm-owl__carousel");
        if (thmOwlCarousels.length) {
            thmOwlCarousels.each(function () {
                let elm = $(this);
                let options = elm.data('owl-options');
                let thmOwlCarousel = elm.owlCarousel("object" === typeof options ? options : JSON.parse(options));
            });
        }

        let thmOwlNavCarousels = $scope.find(".thm-owl__carousel--custom-nav");
        if (thmOwlNavCarousels.length) {
            thmOwlNavCarousels.each(function () {
                let elm = $(this);
                let owlNavPrev = elm.data('owl-nav-prev');
                let owlNavNext = elm.data('owl-nav-next');
                $(owlNavPrev).on("click", function (e) {
                    elm.trigger('prev.owl.carousel');
                    e.preventDefault();
                })

                $(owlNavNext).on("click", function (e) {
                    elm.trigger('next.owl.carousel');
                    e.preventDefault();
                })
            });
        }
    }


    var WidgetFaqHandler = function ($scope) {
        // Accrodion
        if ($scope.find(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");
            accrodionGrp.each(function () {
                var accrodionName = $(this).data("grp-name");
                var Self = $(this);
                var accordion = Self.find(".accrodion");
                Self.addClass(accrodionName);
                Self.find(".accrodion .accrodion-content").hide();
                Self.find(".accrodion.active").find(".accrodion-content").show();
                accordion.each(function () {
                    $(this)
                        .find(".accrodion-title")
                        .on("click", function () {
                            if ($(this).parent().hasClass("active") === false) {
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .removeClass("active");
                                $(".accrodion-grp." + accrodionName)
                                    .find(".accrodion")
                                    .find(".accrodion-content")
                                    .slideUp();
                                $(this).parent().addClass("active");
                                $(this)
                                    .parent()
                                    .find(".accrodion-content")
                                    .slideDown();
                            }
                        });
                });
            });
        }

    }

    var WidgetPortfolioHandler = function ($scope) {

        // Case Two Carousel
        if ($scope.find(".case-two__carousel").length) {
            $(".case-two__carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                dots: true,
                autoplayTimeout: 10000,
                navText: [
                    '<span class="icon-left-arrow"></span>',
                    '<span class="icon-right-arrow"></span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }

    }

    var WidgetFooterSubscribeHandler = function ($scope) {

        // mailchimp form
        if ($scope.find(".mc-form").length) {
            $(".mc-form").each(function () {
                var Self = $(this);
                var mcURL = Self.data("url");
                var mcResp = Self.parent().find(".mc-form__response");

                Self.ajaxChimp({
                    url: mcURL,
                    callback: function (resp) {
                        // appending response
                        mcResp.append(function () {
                            return '<p class="mc-message">' + resp.msg + "</p>";
                        });
                        // making things based on response
                        if (resp.result === "success") {
                            // Do stuff
                            Self.removeClass("errored").addClass("successed");
                            mcResp.removeClass("errored").addClass("successed");
                            Self.find("input").val("");

                            mcResp.find("p").fadeOut(10000);
                        }
                        if (resp.result === "error") {
                            Self.removeClass("successed").addClass("errored");
                            mcResp.removeClass("successed").addClass("errored");
                            Self.find("input").val("");

                            mcResp.find("p").fadeOut(10000);
                        }
                    },
                });
            });
        }

    }

    //elementor front start
    $(window).on("elementor/frontend/init", function () {


        elementorFrontend.hooks.addAction(
            "frontend/element_ready/widget",
            WidgetDefaultHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/oslim-faq.default",
            WidgetFaqHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/oslim-portfolio.default",
            WidgetPortfolioHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/footer-subscribe.default",
            WidgetFooterSubscribeHandler
        );

    });
})(jQuery);