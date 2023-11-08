$(function () {
    loadRecipies();

    $("#recipes").on("click", ".btn-danger", handleDelete);
    $("#recipes").on("click", ".btn-warning", handleUpdate);
  $("#addBtn").click(addRecipe);
  $("#updateSave").click(function () {
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    var body = $("#updateBody").val();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
      data: { title, body },
      method: "PUT",
      success: function (response) {
        console.log(response);
        loadRecipies();
        $("#updateModal").modal("hide");
      },
    });
  });
});