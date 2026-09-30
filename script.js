function openLetter() {

    const opening = document.getElementById("opening");
    const letter = document.getElementById("letter");

    opening.style.display = "none";
    letter.style.display = "block";

    createHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function closeLetter() {

    const opening = document.getElementById("opening");
    const letter = document.getElementById("letter");

    letter.style.display = "none";
    opening.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* Floating hearts */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-30px";

            heart.style.fontSize =
                Math.random() * 20 + 15 + "px";

            heart.style.pointerEvents = "none";

            heart.style.zIndex = "1000";

            heart.style.filter =
                "drop-shadow(0 0 8px #ff4fa3)";

            document.body.appendChild(heart);

            const duration =
                Math.random() * 3 + 3;

            heart.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 0
                    },

                    {
                        transform:
                            `translateY(-50vh) rotate(180deg)`,
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(-110vh) rotate(360deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration: duration * 1000,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);

        }, i * 150);

    }
}
