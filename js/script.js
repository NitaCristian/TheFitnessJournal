
function initFAB() {
    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('.fixed-action-btn');
        let instances = M.FloatingActionButton.init(elems, {});
    });
}

function initCarousel() {
    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
    });

}

function initCollapsible() {
    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('.collapsible');
        let instances = M.Collapsible.init(elems, {});
    });
}

function initNavbar() {
    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems, {});
    });
}

function main() {
    // initFAB();
    // initCarousel();
    // initCollapsible();
    // initNavbar();
    M.AutoInit();
}

main();