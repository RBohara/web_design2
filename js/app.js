// side navigation initialization
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// slider initialization
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    transition: 500,
    interval: 6000
});
