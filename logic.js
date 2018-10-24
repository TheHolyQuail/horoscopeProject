var name = "";
var birthYear = 0;
var birthMonth = 0;
var birthDay = 0;

var zodiacSigns = ["Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn"
];
//var chineseYears = ["",""];
var horoscopes = ["You may soon need to maintain a bridge between warring camps. Keep things moving and try not to let the situation stagnate on any one issue. If the conversation turns to raging and ranting, it's in your best interests to stop it right away. Don't be afraid to step up and take a leadership role.",
    "You might feel like you're getting worked up from all angles today. Find comfort in knowing that things will definitely improve by tomorrow. You might get the feeling that somehow you're all alone despite the circle of friends that surrounds and loves you. You may be called to action by a strong force. Try to stay abreast of information and developments around you so you can make the most informed decisions possible.",
    "You have some rough spots in your future. Approach problems squarely as soon as they arise. Don't dredge up the past. It's time to move forward.  Take pride in your actions and do things with confidence.",
    "You have the possibility of a big dispute in your future. Align yourself with partners and allies who share your views. Try to keep the disagreements to a minimum. There is enough tension and war raging in the world around you today. Try not to add to the fray",
    "Your mood should be quite good, although there may be some strong forces at work trying to subvert this positive attitude. Try not to let other people's disagreements bring you down. A peaceful nature is extremely important in order to balance the anger and hostility that's present all around.",
    "You will have a great deal of things to do. Apply yourself to peace and cooperation among groups. Help people work together toward a common goal. Stay positive and be as productive you can",
    "There is a good chance of a warring force with strong opinions and vindictive tendencies rearing up in your near future.  Make sure you have your actions well aligned with your morals or else you could be thrown into a battle that has nothing to do with you.",
    "'I told you so' might be your motto of the day. Try not to rub this in other people's faces, but you have the foresight to witness an action and see the consequences right away. These consequences might rear their ugly heads on a day like this. Use your incredible perception and intuition to hone in on the best solution possible and work toward that goal before things get out of hand.",
    "You may know exactly the right thing to do, but for some reason, the action required may be a hard thing for you to implement. Don't be discouraged by failure. Take an active role to get involved. Independence is an important virtue to hold onto today.",
    "Make sure your opinion doesn't get lost in the frenzy of the times. Your words may not quite fit with the things that people want to hear. Try not to take this personally. Know that your words are important. You have an incredible gift of being able to see things that others can't. Cherish and nourish this ability instead of invalidating it.",
    "You have two choices. Either jump into the thick of the mess with both feet or stay out of it altogether. There are definitely two distinct camps setting up their arsenals for battle. Realize that there is also a soft, tender, harmonious aspect that just wants peace. It will be hard to ignore the fact that your usual warring nature is ready to do battle.",
    "You may soon end up being the peaceful savior. Inspire others to put away their differences and concentrate on the positive aspects. Generous acceptance of others is the only way to go, especially today, when people are riled up and ready to fight. Do your best to promote peace.",
    "It is your birthday. You can do endless good things. Help your allies, partners, and friends and they will help you. Have a persistent vision, help and be helpful, and you should have a magnificent year!"
];
var zodiacImages = ["aquarius.jpg",
    "pisces.jpg",
    "aries.jpg",
    "taurus.jpg",
    "gemini.jpg",
    "cancer.jpg",
    "leo.jpg",
    "virgo.jpg",
    "libra.jpg",
    "scorpio.jpg",
    "sagittarius.jpg",
    "capricorn.jpg"
];
var ageMessages = ["You have a long life ahead of you, do not mess it up. Enjoy it while it lasts!",
    "You have a long life ahead of you, if you have not found success in life, keep at it, everyone can achieve greatness!",
    "Every moment is precious, make sure to enjoy them before they're all gone.",
    "You have gone through much of a lifetime of life. Reflect on it. Your regrets, your successes, everything. Use these thoughts to guide you in the right direction.",
    "Congratulations on making it so far in life! This is truly a great accomplishment. You should use the next few moments to reflect on your life, to remember it. Memories are precious, and they are all we have in the end.",
    "Congratulations of making it this far through life and being able to use the technology of the 21st century. Tell someone your childhood stories so they are not forgotten. Whatever you did to live this long was hopefully worth it",
    "Make a book about whatever you did to live this long. That is all I can say..."

];

var zodiac = "";
var zodiacNum = 0;
//var chiZodiac = "";
var horoscope = "";
var ZImage = "";
var ageMessage = "";

function begin(){
    document.getElementById("starter").style.display = "none";
    document.getElementById("name").style.display = "block";
    document.getElementById("question").innerHTML = "Enter your name";
}
function nameInput(){

    var nameX = document.getElementById("nameText").value;

    if(nameX.length < 1){
        //no input text
        name = "anonymous"

    } else {
        //successful entry
        name = nameX;
    }

    //next question
    document.getElementById("name").style.display = "none";
    document.getElementById("birthdayYear").style.display = "block";
    document.getElementById("question").innerHTML = "What year were you born? (yyyy)";
    errorReset();
}

function birthYearInput(){

    birthYear = document.getElementById("yearText").value;

    var numYear = parseInt(birthYear);
    <!--latest possible birthday year is 2018-->
    if(birthYear.length >= 1 && birthYear <= 2018){
        //age based Messages
        var age = 2018 - birthYear.valueOf();

        if(age < 20){
            ageMessage = ageMessages[0];

        }else if(age < 40) {
            ageMessage = ageMessages[1];

        } else if(age < 65){
            ageMessage = ageMessages[2];

        } else if(age < 79){
            ageMessage = ageMessages[3];

        } else if(age < 99){
            ageMessage = ageMessages[4];

        } else if(age > 100 && age < 140) {
            ageMessage = ageMessages[5];

        } else {
            ageMessage = ageMessages[6];
        }

        //next question
        document.getElementById("birthdayYear").style.display = "none";
        document.getElementById("birthdayMonth").style.display = "block";
        document.getElementById("question").innerHTML = "What month were you born? (choose one)";
        errorReset();

    } else {
        //error
        error();

    }
}

function birthMonthInput(){

    birthMonth = document.getElementById("monthSelection").value;

    //get rid of impossible day options
    if (birthMonth == 4 || birthMonth == 6 || birthMonth == 9 || birthMonth == 11 || birthMonth == 2) {
        document.getElementById("daySelection").remove(30);

        if(birthMonth == 2){
            document.getElementById("daySelection").remove(29);
        }
    }

    //next question
    document.getElementById("birthdayMonth").style.display = "none";
    document.getElementById("birthdayDay").style.display = "block";
    document.getElementById("question").innerHTML = "What day of the month were you born?";
    errorReset();
}

function birthDayInput() {

    birthDay = document.getElementById("daySelection").value;

    //hide input elements
    document.getElementById("birthdayDay").style.display = "none";
    document.getElementById("questioners").style.display = "none";

    //calculate results:
    calculate();

}
    function calculate() {
        //zodiac sign & horoscope
        if ((birthMonth == 1 && birthDay > 19) || (birthMonth == 2 && birthDay < 19)) {
            zodiac = zodiacSigns[0]; //Aquarius
            zodiacNum = 0;
            horoscope = horoscopes[0];
            ZImage = zodiacImages[0];

        } else if ((birthMonth == 2 && birthDay > 18) || (birthMonth == 3 && birthDay < 21)) {
            zodiac = zodiacSigns[1]; //Pisces
            zodiacNum = 1;
            horoscope = horoscopes[1];
            ZImage = zodiacImages[1];

        } else if ((birthMonth == 3 && birthDay > 20) || (birthMonth == 4 && birthDay < 20)) {
            zodiac = zodiacSigns[2]; //Aries
            zodiacNum = 2;
            horoscope = horoscopes[2];
            ZImage = zodiacImages[2];

        } else if ((birthMonth == 4 && birthDay > 29) || (birthMonth == 5 && birthDay < 21)) {
            zodiac = zodiacSigns[3]; //Taurus
            zodiacNum = 3;
            horoscope = horoscopes[3];
            ZImage = zodiacImages[3];

        } else if ((birthMonth == 5 && birthDay > 22) || (birthMonth == 6 && birthDay < 21)) {
            zodiac = zodiacSigns[4]; //Gemini
            zodiacNum = 4;
            horoscope = horoscopes[4];
            ZImage = zodiacImages[4];

        } else if ((birthMonth == 6 && birthDay > 20) || (birthMonth == 7 && birthDay < 23)) {
            zodiac = zodiacSigns[5]; //Cancer
            zodiacNum = 5;
            horoscope = horoscopes[5];
            ZImage = zodiacImages[5];

        } else if ((birthMonth == 7 && birthDay > 22) || (birthMonth == 8 && birthDay < 23)) {
            zodiac = zodiacSigns[6]; //Leo
            zodiacNum = 6;
            horoscope = horoscopes[6];
            ZImage = zodiacImages[6];

        } else if ((birthMonth == 8 && birthDay > 22) || (birthMonth == 9 && birthDay < 23)) {
            zodiac = zodiacSigns[7]; //Virgo
            zodiacNum = 7;
            horoscope = horoscopes[7];
            ZImage = zodiacImages[7];

        } else if ((birthMonth == 9 && birthDay > 22) || (birthMonth == 10 && birthDay < 23)) {
            zodiac = zodiacSigns[8]; //Libra
            zodiacNum = 8;
            horoscope = horoscopes[8];
            ZImage = zodiacImages[8];

        } else if ((birthMonth == 10 && birthDay > 22) || (birthMonth == 11 && birthDay < 22)) {
            zodiac = zodiacSigns[9]; //Scorpio
            zodiacNum = 9;
            horoscope = horoscopes[9];
            ZImage = zodiacImages[9];

        } else if ((birthMonth == 11 && birthDay > 21) || (birthMonth == 12 && birthDay < 22)) {
            zodiac = zodiacSigns[10]; //Sagittarius
            zodiacNum = 10;
            horoscope = horoscopes[10];
            ZImage = zodiacImages[10];

        } else if ((birthMonth == 12 && birthDay > 21) || (birthMonth == 1 && birthDay < 20)) {
            zodiac = zodiacSigns[11]; //Capricorn
            zodiacNum = 11;
            horoscope = horoscopes[11];
            ZImage = zodiacImages[11];
        }

        //birthday
        var B = isBirthday();
        if (B == true){
            //birthday horoscope
            horoscope = horoscopes[13];
        }

        //give results
        results();
    }

function isBirthday(){
    var result = false;
    var date = new Date();
    var currMonth = date.getMonth();
    var currDay = date.getDate();

    if (currDay = birthDay && currMonth == birthMonth - 1){
        result = true;
    }
    return result;
}

function results(){

    document.getElementById("zodiacImage").setAttribute('src', "horoscopeImages/" + ZImage);

    document.getElementById("birthSign").
    innerHTML = "You are a " + zodiac + "!";

    document.getElementById("horoscope").
        innerHTML = "Hi "+ name + ". " + horoscope;

    document.getElementById("ageBasedMessage").
        innerHTML = ageMessage;

    var element = document.getElementById("results");
    element.style.display = "block";
}

function reSet(){
    location.reload();
}

function error(){
    document.getElementById("errorText").innerHTML = "Error. Your entry is not viable. Please try again";
}
function errorReset() {
    document.getElementById("errorText").innerHTML = "";
}