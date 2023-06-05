$(document).ready(function () {

    $("form").on("submit", (e) => {
        e.preventDefault();
        const inputText = $("#inputText").val();
        const novoItem = $('<li class="undone"> </li>');

        $(`<p>${inputText}</p>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn();
        $("#inputText").val("");

    });

    $("#lista").on("click", "li", function (e) {
        $(e.target).toggleClass("done")
    });

});

