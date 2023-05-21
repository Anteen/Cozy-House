const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            },
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default sliderSettings