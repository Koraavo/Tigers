const scrollElements = document.querySelectorAll(".fade-in");

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const handleFadeInAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            el.classList.add('on-screen');
        } else {
            el.classList.remove('on-screen');
        }
    });
}

window.addEventListener('scroll', () => {
    handleFadeInAnimation();
})