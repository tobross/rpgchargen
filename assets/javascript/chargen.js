
$(document).ready(function() {
    $(".nameForm").removeClass("hide");
$(".nameBtn").on("click", function(event) {
    event.preventDefault();
    $(".nameForm").addClass("hide");
    $(".pickRole").removeClass("hide");
})
// User names their character.
$(".role").on("click", function(event){
    event.preventDefault();
    $(".pickRole").addClass("hide");
    $(".pickRace").removeClass("hide");
})
//user selects a role from dropdown menu
$(".race").on("click", function(event){
    event.preventDefault();
    $(".pickRace").addClass("hide");
    $(".pickClass").removeClass("hide");
})
$(".class").on("click", function(event){
    event.preventDefault();
    $(".pickClass").addClass("hide");
    $(".pickStats").removeClass("hide");
})
var minN = 3;
    var maxN = 18;
    var stats = [];
    var random; roll(minN, maxN);

    function roll(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $("#randomizer").on("click", function (event) {
        event.preventDefault();
        stats = [];
        for (i = 0; i < 6; i++) {
            random = roll(minN, maxN);

            function roll(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            stats.push(random);
        }
        $("#str").text("Strength ("+stats[0]+")");
        $("#dex").text("Dexterity ("+stats[1]+")");
        $("#con").text("Constitution ("+stats[2]+")");
        $("#int").text("Intelligence ("+stats[3]+")");
        $("#wis").text("Wisdom ("+stats[4]+")");
        $("#cha").text("Charisma ("+stats[5]+")");
    })
});