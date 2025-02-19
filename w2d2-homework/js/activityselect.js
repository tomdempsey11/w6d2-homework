//user interaction with table cells
$(document).ready(function () {
    $("td").click(function () {
        var content = $(this).text(); // get content of cell

        if (content != "Not Available") { // check if content is not "Not Available"
            $(this).toggleClass("tdhighlight"); // toggle highlight class

            // Get the column index of the clicked cell
            var colIndex = $(this).index();
            // Use the index to get the corresponding header text
            var cliffSite = $("table thead th").eq(colIndex).text();

            if ($(this).hasClass("tdhighlight")) { // if the cell is now selected
                $('#displaySelected').css({
                    "visibility": "visible",
                    "margin-top": "2em"
                });
                // Append the cell content along with the cliff site name
                $('#result').append("<p>" + content + " at " + cliffSite + "</p>");
            } else { // if the cell is deselected
                // Remove the corresponding paragraph element.
                // Note: This uses a simple contains() filter so if you have similar content it may need refining.
                $('#result p:contains(' + content + ')').remove();

                // Hide the display box if there are no selected items
                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css({
                        "visibility": "hidden",
                        "margin-top": "0"
                    });
                }
            }
        }
    });
});
