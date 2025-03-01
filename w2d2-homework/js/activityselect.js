$(document).ready(function () {
    let selectedActivities = []; // Array to store selected activities

    $("td").click(function () {
        var content = $(this).text(); // Get clicked cell content

        if (content !== "Not Available") { // Ignore "Not Available" cells
            // Get the column index of the clicked cell
            var colIndex = $(this).index();
            // Get the corresponding cliff site name
            var cliffSite = $("table thead th").eq(colIndex).text();
            var activityEntry = content + " at " + cliffSite;

            // Toggle selection (Add/Remove from array)
            if ($(this).hasClass("tdhighlight")) {
                // Remove the activity from the selected list
                selectedActivities = selectedActivities.filter(item => item !== activityEntry);
                $(this).removeClass("tdhighlight");
            } else {
                // Add activity to the list
                selectedActivities.push(activityEntry);
                $(this).addClass("tdhighlight");
            }

            // Update modal content
            if (selectedActivities.length > 0) {
                $("#modalContent").html("<strong>Selected Activities:</strong><br>" + selectedActivities.join("<br>"));
            } else {
                $("#modalContent").html("<em>No activities selected.</em>");
            }

            // Open modal only if at least one activity is selected
            if (selectedActivities.length > 0) {
                $("#activityModal").modal("show");
            }
        }
    });
});
