 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCB8hLIKr30QaRzsxJwYM1BOLi4LVKO8RY",
    authDomain: "clickytobey.firebaseapp.com",
    databaseURL: "https://clickytobey.firebaseio.com",
    projectId: "clickytobey",
    storageBucket: "clickytobey.appspot.com",
    messagingSenderId: "781225169562"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  //application code starts here.
//variables first!
var charName;
var charRole;
var charClass;
var charRace;
var charStats;
var background;
var equipment;
var STR;
var DEX;
var CON;
var INT;
var WIS;
var CHA;
  //user names their character here.
$(document).ready(function() {
    $(".nameForm").removeClass("hide");
$(".nameBtn").on("click", function(event) {
    event.preventDefault();
    charName = $("#charName").val().trim();
    $(".nameForm").addClass("hide");
    $(".pickRole").removeClass("hide");
})
//first click brings the user to the role selection page. Each item in the drop down will have a function displaying a card with the selected role's .. well.. role.. and a button to confirm or go back to selection. Once confirmed, the next page will display.
$(".role").on("click", function(event){
    event.preventDefault();
    // charRole = $(;
    $(".pickRole").addClass("hide");
    $(".pickRace").removeClass("hide");
})
//user now selects a race from a list filtered by their role selection. Some races cannot be healers, for instance.
//The same selection proccess will take place here, showing cards with different varriants of the selected race and confirm/back buttons.
$(".race").on("click", function(event){
    event.preventDefault();
    charRace = $(this).val().trim()
    $(".pickRace").addClass("hide");
    $(".pickClass").removeClass("hide");
})
// From this next page, users will start to define their new character, a filtered selection of classes will populate a dropdown menu and, when clicking, will prompt them variants based on starting level. once selected, the screen will move to a stat generator to further distill their new persona.
$(".class").on("click", function(event){
    event.preventDefault();
    charClass = $(this).val().trim();
    $(".pickClass").addClass("hide");
    $(".pickStats").removeClass("hide");
})
//On this page, all stats will be rolled at once initially under the rule (4d6, drop the lowest roll, amounting to a range from 3-18).
//At the dungeon master's disgression, a user can then choose to mulligan an individual stat.
//These initial stats will have their racial and class stats pre-added and not to exceed 20 in any stat.
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
        STR = stats[0];
        $("#dex").text("Dexterity ("+stats[1]+")");
        DEX = stats[1];
        $("#con").text("Constitution ("+stats[2]+")");
        CON = stats[2];
        $("#int").text("Intelligence ("+stats[3]+")");
        INT = stats[3];
        $("#wis").text("Wisdom ("+stats[4]+")");
        WIS = stats[4];
        $("#cha").text("Charisma ("+stats[5]+")");
        CHA = stats[5];
    })
    $(".sumClick").on("click", function(event){
        event.preventDefault();
        database.ref().set({
            Name: charName,
            Role, charRole,
            Class, charClass,
            Race: charRace,
            STR: STR,
            DEX: DEX,
            CON: CON,
            INT: INT,
            WIS: WIS,
            CHA: CHA
        })
        $(".pickStats").addClass("hide");
        $(".charSummary").removeClass("hide");

    })
});