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
// Holiday Dates
// ==========================================

const holidayDates = [
    "07/06/2026",
    "08/06/2026",
    "09/06/2026",
    "10/06/2026",
    "11/06/2026",
    "12/06/2026",

    "22/06/2026",
    "23/06/2026",
    "24/06/2026",
    "25/06/2026",
    "26/06/2026"
];


// ==========================================
// Generate Work Dates
// Saturday, Sunday and Wednesday
// ==========================================

const workDates = [];


// Starting date for work days
const startDate = new Date(2026, 4, 22);


// End date for generated work days
const endDate = new Date(2026, 11, 31);


// Wednesdays only count from 08/07/2026
const wednesdayStartDate = new Date(2026, 6, 8);


let workDate = new Date(startDate);


while (workDate <= endDate) {

    const dayOfWeek = workDate.getDay();


    // ==========================================
    // Sunday
    // ==========================================

    if (dayOfWeek === 0) {

        workDates.push(
            createDateId(
                workDate.getDate(),
                workDate.getMonth(),
                workDate.getFullYear()
            )
        );

    }


    // ==========================================
    // Saturday
    // ==========================================

    else if (dayOfWeek === 6) {

        workDates.push(
            createDateId(
                workDate.getDate(),
                workDate.getMonth(),
                workDate.getFullYear()
            )
        );

    }


    // ==========================================
    // Wednesday
    // Only from 08/07/2026
    // ==========================================

    else if (
        dayOfWeek === 3 &&
        workDate >= wednesdayStartDate
    ) {

        workDates.push(
            createDateId(
                workDate.getDate(),
                workDate.getMonth(),
                workDate.getFullYear()
            )
        );

    }


    // Move to next day
    workDate.setDate(
        workDate.getDate() + 1
    );

}


// ==========================================
// Calendar Elements
// ==========================================

const monthYear =
    document.getElementById("month-year");

const calendarDays =
    document.getElementById("calendar-days");

const previousButton =
    document.getElementById("prev-month");

const nextButton =
    document.getElementById("next-month");


// ==========================================
// Starting Month
// August 2026
// ==========================================

let currentDate = new Date(2026, 7, 1);


// ==========================================
// Create Date ID
// Format: DD/MM/YYYY
// ==========================================

function createDateId(day, month, year) {

    const formattedDay =
        String(day).padStart(2, "0");

    const formattedMonth =
        String(month + 1).padStart(2, "0");

    return `${formattedDay}/${formattedMonth}/${year}`;
}


// ==========================================
// Generate Calendar
// ==========================================

function generateCalendar() {

    const year =
        currentDate.getFullYear();

    const month =
        currentDate.getMonth();


    // ==========================================
    // Month Name
    // ==========================================

    const monthName =
        currentDate.toLocaleDateString(
            "en-GB",
            {
                month: "long"
            }
        );


    monthYear.textContent =
        `${monthName} ${year}`;


    // Clear existing calendar
    calendarDays.innerHTML = "";


    // ==========================================
    // First Day Of Month
    // ==========================================

    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    // ==========================================
    // Number Of Days In Month
    // ==========================================

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // ==========================================
    // Number Of Days In Previous Month
    // ==========================================

    const daysInPreviousMonth =
        new Date(
            year,
            month,
            0
        ).getDate();


    // ==========================================
    // Previous Month Days
    // ==========================================

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {

        const day =
            daysInPreviousMonth - i;


        const dayElement =
            document.createElement("div");


        dayElement.classList.add(
            "calendar-day",
            "other-month"
        );


        dayElement.textContent =
            day;


        calendarDays.appendChild(
            dayElement
        );

    }


    // ==========================================
    // Current Month Days
    // ==========================================

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {


        // ==========================================
        // Create Date ID
        // ==========================================

        const dateId =
            createDateId(
                day,
                month,
                year
            );


        // ==========================================
        // Create Calendar Day
        // ==========================================

        const dayElement =
            document.createElement("div");


        dayElement.classList.add(
            "calendar-day"
        );


        dayElement.textContent =
            day;


        // ==========================================
        // Get Today's Date
        // ==========================================

        const today =
            new Date();


        today.setHours(
            0,
            0,
            0,
            0
        );


        // ==========================================
        // Get Calendar Date
        // ==========================================

        const calendarDate =
            new Date(
                year,
                month,
                day
            );


        calendarDate.setHours(
            0,
            0,
            0,
            0
        );


        // ==========================================
        // Future Dates
        // ==========================================

        if (calendarDate > today) {

            dayElement.classList.add(
                "future"
            );

        }


        // ==========================================
        // Holidays
        // ==========================================

        else if (
            holidayDates.includes(dateId)
        ) {

            dayElement.classList.add(
                "holiday"
            );

        }


        // ==========================================
        // Portfolio Development
        // ==========================================

        else if (
            developmentDates.includes(dateId)
        ) {

            dayElement.classList.add(
                "completed"
            );

        }


        // ==========================================
        // Work Days
        // ==========================================

        else if (
            workDates.includes(dateId)
        ) {

            dayElement.classList.add(
                "work-day"
            );

        }


        // ==========================================
        // Other Past Dates
        // ==========================================

        else {

            dayElement.classList.add(
                "not-completed"
            );

        }


        // ==========================================
        // Highlight Today
        // ==========================================

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            dayElement.classList.add(
                "today"
            );

        }


        // ==========================================
        // Click Date
        // ==========================================

        dayElement.addEventListener(
            "click",
            function () {

                const target =
                    document.getElementById(
                        dateId
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );


        // ==========================================
        // Add Day To Calendar
        // ==========================================

        calendarDays.appendChild(
            dayElement
        );

    }


    // ==========================================
    // Next Month Days
    // ==========================================

    const totalCells =
        firstDay + daysInMonth;


    const remainingCells =
        totalCells % 7 === 0
            ? 0
            : 7 - (totalCells % 7);


    for (
        let day = 1;
        day <= remainingCells;
        day++
    ) {

        const dayElement =
            document.createElement("div");


        dayElement.classList.add(
            "calendar-day",
            "other-month"
        );


        dayElement.textContent =
            day;


        calendarDays.appendChild(
            dayElement
        );

    }

}


// ==========================================
// Previous Month Button
// ==========================================

previousButton.addEventListener(
    "click",
    function () {

        currentDate.setMonth(
            currentDate.getMonth() - 1
        );


        generateCalendar();

    }
);


// ==========================================
// Next Month Button
// ==========================================

nextButton.addEventListener(
    "click",
    function () {

        currentDate.setMonth(
            currentDate.getMonth() + 1
        );


        generateCalendar();

    }
);


// ==========================================
// Generate Calendar Initially
// ==========================================

generateCalendar();