const app = (function () {
    function initMap() {

        const uluru = { lat: 34.097, lng: -118.334 };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: uluru,
        });

        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $(".myheadernav .nav-item").on("click", function () {
        $(".myheadernav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".work-navbar .nav-item").on("click", function () {
        $(".work-navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function () {
        $('.revealonscroll-title').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__rotateIn");
            } else {
                $(this).removeClass("animate__animated animate__rotateIn");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-services-up').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__slideInUp");
            } else {
                $(this).removeClass("animate__animated animate__slideInUp");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-services-down').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__slideInDown");
            } else {
                $(this).removeClass("animate__animated animate__slideInDown");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-flip').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__flip");
            } else {
                $(this).removeClass("animate__animated animate__flip");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-about-right').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__slideInRight");
            } else {
                $(this).removeClass("animate__animated animate__slideInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-about-left').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__slideInLeft");
            } else {
                $(this).removeClass("animate__animated animate__slideInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-work-left').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__backInLeft");
            } else {
                $(this).removeClass("animate__animated animate__backInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-work-right').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__backInRight");
            } else {
                $(this).removeClass("animate__animated animate__backInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-contacts-right').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__lightSpeedInRight");
            } else {
                $(this).removeClass("animate__animated animate__lightSpeedInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.revealonscroll-contacts-left').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $(this).addClass("animate__animated animate__lightSpeedInLeft");
            } else {
                $(this).removeClass("animate__animated animate__lightSpeedInLeft");
            }
        });
    });

    return {
        initMap: initMap
    }
}());

