$(document).ready(function() {
    // Select all table cells within the tbody (these are the activity cells)
    $('table tbody td').each(function() {
        // If the cell does not contain "Not Available", set its cursor to a pointer (hand)
        if ($(this).text().trim() !== "Not Available") {
            $(this).css('cursor', 'pointer');
        }
    });
    
    // When a cell is clicked...
    $('table tbody td').click(function() {
        // Check if the clicked cell contains "Not Available"
        if ($(this).text().trim() === "Not Available") {
            // If so, do nothing.
            return;
        }
        // Otherwise, toggle the "selected" class on the cell.
        // This class should be styled in your CSS to visually highlight the cell.
        $(this).toggleClass('selected');
    });
});
