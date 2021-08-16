let card = document.querySelectorAll('.work');

document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    card.forEach((el) => {
        let heightCard = el.offsetTop;

        if(heightCard - 600 < scrollTop){
            el.classList.add("hide-work");
        }
    })
})

