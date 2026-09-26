const music = document.getElementById("birthdayMusic");

if (music) {

    const savedTime = sessionStorage.getItem("musicTime");
    const musicStarted = sessionStorage.getItem("musicStarted");

    // Continue from the previous page
    if (musicStarted === "true") {

        if (savedTime) {
            music.currentTime = parseFloat(savedTime);
        }

        music.play().catch(() => {});
    }


    // Save the current position regularly
    setInterval(() => {

        if (!music.paused) {
            sessionStorage.setItem(
                "musicTime",
                music.currentTime
            );
        }

    }, 500);


    // Save position when leaving the page
    window.addEventListener("beforeunload", () => {

        sessionStorage.setItem(
            "musicTime",
            music.currentTime
        );

    });

}