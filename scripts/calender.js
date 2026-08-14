// ==========================================
// Development Dates
// ==========================================

const developmentDates = [
    "14/08/2026",
    "13/08/2026",
    "11/08/2026",
    "08/08/2026",
    "07/08/2026",
    "06/08/2026",
    "04/08/2026",
    "03/08/2026",

    "20/07/2026",
    "17/07/2026",
    "16/07/2026",
    "15/07/2026",
    "14/07/2026",
    "03/07/2026",

    "19/06/2026",
    "18/06/2026",
    "17/06/2026",
    "16/06/2026",
    "15/06/2026",
    "02/06/2026",

    "29/05/2026",
    "22/05/2026"
];


// ==========================================
// Calendar Elements
// ==========================================

const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");

const previousButton = document.getElementById("prev-month");
const nextButton = document.getElementById("next-month");


// ==========================================
// Current Calendar Date
// ==========================================

// Start calendar on August 2026

let currentDate = new Date(2026, 7, 1);


// ==========================================
// Create Date ID
// ==========================================

function createDateId(day, month, year) {

    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = String(month + 1).padStart(2, "0");

    return `${formattedDay}/${formattedMonth}/${year}`;
}


// ==========================================
// Generate Calendar
// ==========================================

function generateCalendar() {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();


    // Display month and year

    const monthName = currentDate.toLocaleDateString("en-GB", {
        month: "long"
    });

    monthYear.textContent = `${monthName} ${year}`;


    // Clear existing calendar

    calendarDays.innerHTML = "";


    // Find first day of month

    const firstDay = new Date(year, month, 1).getDay();


    // Find number of days in month

    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();


    // Find number of days in previous month

    const daysInPreviousMonth = new Date(
        year,
        month,
        0
    ).getDate();


    // ==========================================
    // Previous Month Days
    // ==========================================

    for (let i = firstDay - 1; i >= 0; i--) {

        const day = daysInPreviousMonth - i;

        const dayElement = document.createElement("div");

        dayElement.classList.add(
            "calendar-day",
            "other-month"
        );

        dayElement.textContent = day;

        calendarDays.appendChild(dayElement);
    }


    // ==========================================
    // Current Month Days
    // ==========================================

    for (let day = 1; day <= daysInMonth; day++) {

        const dateId = createDateId(
            day,
            month,
            year
        );


        const dayElement = document.createElement("div");

        dayElement.classList.add("calendar-day");


        // Display day number

        dayElement.textContent = day;


        // ==========================================
        // Green Development Date
        // ==========================================

        if (developmentDates.includes(dateId)) {

            dayElement.classList.add("completed");

        }


        // ==========================================
        // Red Non-development Date
        // ==========================================

        else {

            dayElement.classList.add("not-completed");

        }


        // ==========================================
        // Highlight Today
        // ==========================================

        const today = new Date();

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            dayElement.classList.add("today");

        }


        // ==========================================
        // Click Date
        // ==========================================

        dayElement.addEventListener("click", function () {

            const target = document.getElementById(dateId);


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });


        calendarDays.appendChild(dayElement);
    }


    // ==========================================
    // Next Month Days
    // ==========================================

    const totalCells = firstDay + daysInMonth;

    const remainingCells =
        totalCells % 7 === 0
            ? 0
            : 7 - (totalCells % 7);


    for (let day = 1; day <= remainingCells; day++) {

        const dayElement = document.createElement("div");

        dayElement.classList.add(
            "calendar-day",
            "other-month"
        );

        dayElement.textContent = day;

        calendarDays.appendChild(dayElement);
    }

}


// ==========================================
// Previous Month Button
// ==========================================

previousButton.addEventListener("click", function () {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    generateCalendar();

});


// ==========================================
// Next Month Button
// ==========================================

nextButton.addEventListener("click", function () {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    generateCalendar();

});


// ==========================================
// Generate Calendar Initially
// ==========================================

generateCalendar();