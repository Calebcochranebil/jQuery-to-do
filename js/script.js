function newItem() {
    //jQuery
    //1. Adding a new item to the list of items:
    let $li = $("<li></li>"); // Creates a new <li> element and assigns it to the variable $li.
    let inputValue = $("#input").val(); // Retrieves the value of an element with an id.
    $li.text(inputValue); // Sets the text content of the $li element to the value of inputValue.

    if (inputValue === "") {
        // Checks if the value of inputValue is an empty string.
        alert("You must write something!"); // Displays an alert box with the message "You must write something!" If nothing is written.
    } else {
        let $list = $("#list"); // Creates a new jQuery object for an element with an id of "list".
        $list.append($li); // Adds the $li element to the end of the $list element.
    }

    //2. Crossing out an item from the list of items:
    function crossOut() {
        // Defines a function named crossOut
        $(this).toggleClass("strike"); // Toggles the "strike" class on the element that triggered the event
    }

    li.on("dblclick", function crossOut() {
        // Attaches a double-click event handler to the "li" elements
        li.toggleClass("strike"); // Toggles the "strike" class on all "li" elements when a "li" element is double-clicked
    });

    //3. Adding a delete button
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }
    $("#list").sortable();
}
