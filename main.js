//Don't be a cunt
var score = 0;
function part1() {
    var question1 = document.round1.question1.value;
    var question2 = document.round1.question2.value;
    var question3 = document.round1.question3.value;
    var question4 = document.round1.question4.value;
    var question5 = document.round1.question5.value;
    var question6 = document.round1.question6.value;
    var question7 = document.round1.question7.value;
    var question8 = document.round1.question8.value;

if (question1 == "Oprah") {
        score++;
        } else {
            alert("Question 1, Oprah interviewed the Royal couple")
        }
if (question2 == "Manchester City") {
            score++;
    } else {
        alert("Question 2, Manchester City are the current leaders")
    }
if (question3 == "Lauryn Hill") {
                score++;
     } else {
         alert("Question 3, Lauryn Hill hit the milestone for The Miseducation of Lauryn Hill")
     }
if (question4 == "Mexico") {
        score++;
} else {
    alert("Question 4, currently Julian Asange is in Mexico")
}
if (question5 == "Elon Musk") {
      score++;
} else {
    alert("Question 5, the current richest man is Elon Musk")
}
if (question6 == "Myanmar") {
    score++;
} else {
    alert("Question 6 Myanmar is the country experiency a coup")
}
if (question7 == "Naomi Osaka") {
    score++;
} else {
    alert("Question 7, Naomi Osaka defeated Serena Williams on her way to win the US Open")
}
if (question8 == "June22nd") {
    score++;
} else {
    alert("Question 8, UK will leave full restrictions on June 22nd")
}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("round1").style.visibility = "hidden";
document.getElementById('score').innerHTML = "Your score is " + score;
}
function part2() {
    var question9 = document.round2.question9.value;
    var question10 = document.round2.question10.value;
    var question11 = document.round2.question11.value;
    var question12 = document.round2.question12.value;
    var question13= document.round2.question13.value;
    var question14 = document.round2.question14.value;
    var question15= document.round2.question15.value;
    var question16 = document.round2.question16.value;

    if (question9 == "Coldplay") {
        score++;
    } else {
        alert("Question 9, It was Coldplay who Drake sampled")
    }
    if (question10 == "Cyndi Lauper") {
        score++;
    } else {
        alert("Question 10, Cyndi Laupers girls just wanna have fun was being sampled")
    }
    if (question11 == "Beethoven") {
        score++;
    } else {
        alert("Question 11, The Beatles sampled Beethoven for Yesterday")
    }
    if (question12 == "The Isley Brothers") {
        score++;
    } else {
        alert("Question 12, The Isley Brothers were being sampled")
    }
    if (question13 == "The Clash") {
        score++;
    } else {
        alert("Question 13, It was The Clash who M.I.A sampled")
    }
    if (question14 == "Britney Speers") {
        score++;
    } else {
        alert("Question 14, Britney Speers was being sampled by Childish Gambino")
    }
    if (question15 == "David Bowie") {
        score++;
    } else {
        alert("Question 15, Death Grips sampled David Bowie")
    }
    if (question16 == "Bach") {
        score++;
} else {
    alert("Question 16 Bach was being sampled")
}
document.getElementById("after_submit").style.visibility = "hidden";
document.getElementById("after_submit2").style.visibility = "visible";
document.getElementById('score').innerHTML = "Your score is " + score;     
}
function part3() {
    var question17 = document.round3.question17.value;
    var question18 = document.round3.question18.value;
    var question19 = document.round3.question19.value;
    var question20 = document.round3.question20.value;
    var question21= document.round3.question21.value;
    var question22 = document.round3.question22.value;
    var question23= document.round3.question23.value;
    var question24 = document.round3.question24.value;

if (question17 == "South Korea") {
    score++;
} else {
    alert("Question 17, South Korea is the country in disagreement with Japan")
}
if (question18 == "Hungary") {
    score++;
} else {
 alert("Question 18, Hungary is the most obese country...get it?")
}
if (question19 == "Qatar") {
    score++;
} else {
    alert("Question 19, Qatar will host the 2022 World Cup")
}
if (question20 == "November") {
    score++;
} else {
    alert("Question 20, ST Andrews Day is in November")
}
if (question21 == "Florida") {
    score++;
} else {
    alert("Question 21, Donald Trump lives in Florida")
}
if (question22 == "Abuja") {
    score++;
} else {
    alert("Abuja is the capital of Nigeria")
}
if (question23 == "Cuba") {
    score++;
} else {
    alert("Question 23, The Bay of Pigs occured in Cuba")
}
if (question24 == "Zaire") {
    score++;
} else {
    alert("Question 24, DR Congo DMD used to be known as Zaire")
}

var messages = ["That sucks", "Not bad", "Great job", "You are a nerd"];
var pictures = ["img/lose.gif", "img/okay.gif", "img/greatjob.gif", "img/nerd.gif"];
var range;

if (score < 8) {
    range = 0;
}
if (score > 8 && score < 12) {
    range = 1;
}

if (score > 12 && score < 20) {
    range = 2;
}
if (score > 20 && score < 24) {
    range = 3;
}
document.getElementById("message").innerHTML = messages[range];
document.getElementById("picture").src = pictures[range];
document.getElementById('score').innerHTML = "Your score is " + score;
document.getElementById("after_submit2").style.visibility = "hidden";
document.getElementById("Game_Over").style.visibility = "visible";
}
