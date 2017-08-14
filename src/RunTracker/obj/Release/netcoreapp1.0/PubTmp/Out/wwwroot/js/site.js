(function () {



    // Shoes/Edit: Toggle switch.
    $("#InUse").bootstrapSwitch();

    // Runs/Create: Dropdown date picker
    $('#datetimepicker').datetimepicker({
        //inline: true,
        sideBySide: true
    });

    

    $("#datetimepicker").click(function () {
        $(".bootstrap-datetimepicker-widget").css("background-color", "#fff");
        $(".bootstrap-datetimepicker-widget").css("color", "#000");
    });

    $(".bootstrap-datetimepicker-widget").css("background-color", "#fff");
    $(".bootstrap-datetimepicker-widget").css("color", "#000");

    // Home/Index: Show all runs
    $("#showAllButton").click(function () {
        $("#allRunsSwitch").checked(false);
    });

})();

