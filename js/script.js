function newItem() {
    //jQuery
    let $li = $("<li>");
    let inputValue = $("#input").val();
    $li.text(inputValue);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        let $list = $("#list");
        $list.append($li);
    }

    //2. Crossing out an item from the list of items:
    function crossOut() {
        $(this).toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3(i). Adding the delete button "X":
    let crossOutButton = document.createElement("crossOutButton");
    crossOutButton.appendChild(document.createTextNode("X"));
    li.appendChild(crossOutButton);

    crossOutButton.addEventListener("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.classList.add("delete");
    }
    // 4. Reordering the items:
    $("#list").sortable();
}
