/* ================================
   FINAL PAGE PHOTO FLIPPING
================================ */

const photoCards = document.querySelectorAll(".photo-card");


/*
   Each photo gets its OWN timer.

   Every photo flips every 5 seconds.
   The starting times are staggered so that
   they do NOT all flip together.
*/

photoCards.forEach((card, index) => {

    /* Manual click/tap */
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });


    /*
       Give every photo a different starting delay.

       Photo 1 starts after 0 seconds
       Photo 2 starts after 0.6 seconds
       Photo 3 starts after 1.2 seconds
       Photo 4 starts after 1.8 seconds
       etc.
    */

    const startingDelay = index * 600;


    setTimeout(() => {

        setInterval(() => {

            card.classList.toggle("flipped");

        }, 5000);

    }, startingDelay);

});