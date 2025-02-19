function currentTime() {
    // Declare Variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // Declare empty variable to store AM or PM

    // Add leading zero to single-digit seconds and minutes
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;

    // Determine AM or PM
    if (hr === 12) {
        ampm = "PM"; // Set to PM
    } else if (hr > 12) {
        hr -= 12; // Convert to standard time
        ampm = "PM";
    } else {
        ampm = "AM"; // Set to AM
    }

    // Assemble current local time
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // Calculate the time difference with GMT
    var gmtHours = new Date().getUTCHours(); // Get GMT hours
    var localHours = d.getHours(); // Local hours in 24-hour format
    var timeDiff = localHours - gmtHours;

    // Adjust for negative time differences
    if (timeDiff < -12) timeDiff += 24; // Handle wraparound for westward zones
    if (timeDiff > 12) timeDiff -= 24; // Handle wraparound for eastward zones

    // Map time difference to timezone
    var timeZones = {
        "-12": "AoE",
        "-11": "NUT",
        "-10": "HST",
        "-9": "AKST",
        "-8": "PST",
        "-7": "MST",
        "-6": "CST",
        "-5": "EST",
        "-4": "AST",
        "-3": "ART",
        "-2": "GST",
        "-1": "AZOST",
        "0": "GMT",
        "1": "CET",
        "2": "EET",
        "3": "MSK",
        "4": "GST",
        "5": "PKT",
        "6": "IST",
        "7": "ICT",
        "8": "CST",
        "9": "JST",
        "10": "AEST",
        "11": "AEDT",
        "12": "NZST"
    };

    var timeZone = timeZones[timeDiff] || "Unknown Timezone";

    // Add timezone to the time format
    var fullTime = time + " (" + timeZone + ")";

    // Display current local time and timezone
    document.getElementById("clock").innerText = fullTime;

    // Debugging: Log values for troubleshooting
    console.log("Local Hours:", localHours, "GMT Hours:", gmtHours, "Time Diff:", timeDiff);

    // Run time data function every 1 second
    setTimeout(currentTime, 1000);
}

// Initial run of time data function
currentTime();