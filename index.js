function scrollToArtist(hash) {
    const div = document.querySelector(`div${hash}`);

    div.scrollIntoView({ behavior: 'smooth' });

    window.location.hash = hash;
}

window.addEventListener('DOMContentLoaded', e => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            scrollToArtist(anchor.hash);
        });
    });

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', function (e) {
            e.preventDefault();

            scrollToArtist(img.parentElement.nextElementSibling.children[0].hash);
        })
    })
})

window.addEventListener('load', e => {
    if (window.location.hash) {
        scrollToArtist(window.location.hash);
    }
})
