const guests = [
    "WANDERA",
    "NITAH",
    "TISH",
    "THICCO",
    "FLORENCE",
    "BARBIE",
    "PRISCILLA",
    "KADARA",
    "FLAVIA",
    "GIGI",
    "LUCKY",
    "MELISSA",
    "SUMAIAH",
    "MATILDA",
    "ALLIAN",
    "RHEILLY",
    "DAPHINE",
    "KHARTHIE",
    "SHYLER",
    "LAURYN",
    "YVONE",
    "VANESSA",
    "YASH"
];


const guestGrid = document.getElementById("guestGrid");


/* =========================
   CREATE GUEST CARDS
========================= */

guests.forEach((name, index) => {

    const card = document.createElement("article");

    card.className = "guest-card";

    card.dataset.guest = name;


    card.innerHTML = `

        <div class="card-inner">

            <!-- FRONT -->

            <div class="card-front">

                <span class="guest-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <h2 class="guest-name">
                    ${name} ♡
                </h2>

                <span class="click-message">
                    CLICK YOUR NAME
                </span>

            </div>


            <!-- BACK -->

            <div class="card-back">

                <h3 class="confirm-title">
                    ${name}
                </h3>

                <p class="confirm-text">
                    Please confirm your attendance.
                    Once confirmed, your attendance
                    cannot be changed.
                </p>

                <button
                    type="button"
                    class="confirm-button"
                >
                    CONFIRM ATTENDANCE
                </button>

                <span class="confirmed-mark">
                    ✓ ATTENDANCE CONFIRMED
                </span>

            </div>

        </div>

    `;


    guestGrid.appendChild(card);


    /* =========================
       CHECK SAVED CONFIRMATION
    ========================== */

    const confirmed =
        localStorage.getItem(
            `birthday-confirmed-${name}`
        );


    if (confirmed === "true") {

        card.classList.add("confirmed");

        card.classList.add("flipped");

    }


    /* =========================
       CLICK CARD
    ========================== */

    card.addEventListener("click", function (event) {

        const button =
            event.target.closest(".confirm-button");


        /* If button was clicked */

        if (button) {

            confirmGuest(card, name);

            return;

        }


        /* Don't flip again after confirmation */

        if (card.classList.contains("confirmed")) {

            return;

        }


        card.classList.toggle("flipped");

    });

});


/* =========================
   CONFIRM GUEST
========================= */

function confirmGuest(card, name) {

    /* Already confirmed */

    if (card.classList.contains("confirmed")) {

        return;

    }


    /* Save permanently on this browser */

    localStorage.setItem(
        `birthday-confirmed-${name}`,
        "true"
    );


    /* Mark confirmed */

    card.classList.add("confirmed");

    card.classList.add("flipped");


    /* Show personalized letter */

    showPersonalLetter(name);

}


/* =========================
   PERSONAL LETTER
========================= */

function showPersonalLetter(name) {

    const overlay =
        document.createElement("div");

    overlay.className = "personal-letter show";


    overlay.innerHTML = `

        <div class="letter">

            <div class="letter-heart">
                ♡
            </div>

            <h2>
                Lovely ${name},
            </h2>

            <p>
                I would really love to see you that day.
                Your presence will be my happiness.
                My prayer is to have a glorious,
                interesting day with you.
                May God keep you safe for me.
            </p>

            <p class="letter-signature">
                Yours, Quin ♡
            </p>

            <button
                type="button"
                class="close-letter"
            >
                CLOSE
            </button>

        </div>

    `;


    document.body.appendChild(overlay);


    /* Close button */

    overlay
        .querySelector(".close-letter")
        .addEventListener("click", function () {

            overlay.remove();

        });


    /* Click outside letter to close */

    overlay.addEventListener(
        "click",
        function (event) {

            if (event.target === overlay) {

                overlay.remove();

            }

        }
    );

}