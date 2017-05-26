
//function getResult() {
//    //get result for each question
//    getResult2(1, "A");
//    getResult2(2, "A");
    
//    //disabled btnResult
//    var btnResult = document.getElementById("btnResult");
//    btnResult.disabled = true;
//}

//function getResult2(qNumber, rightAnswer) {
//    //icon_true|false
//    //icon_true
//    var icon_true = document.getElementById("icon_true");
//    //img_true
//    var img_true = document.createElement("img"); //img!
//    img_true.src = icon_true.src;
//    img_true.alt = icon_true.alt;
//    img_true.width = icon_true.width; //not px
//    img_true.height = icon_true.height;

//    //icon_false
//    var icon_false = document.getElementById("icon_false");
//    //img_false
//    var img_false = document.createElement("img");
//    img_false.src = icon_false.src;
//    img_false.alt = icon_false.alt;
//    img_false.width = icon_false.width;
//    img_false.height = icon_false.height;

//    //icon_true|false2

//    //img_true2
//    var img_true2 = document.createElement("img"); //img!
//    img_true2.src = icon_true.src;
//    img_true2.alt = icon_true.alt;
//    img_true2.width = icon_true.width; //not px
//    img_true2.height = icon_true.height;

//    //img_false2
//    var img_false2 = document.createElement("img");
//    img_false2.src = icon_false.src;
//    img_false2.alt = icon_false.alt;
//    img_false2.width = icon_false.width;
//    img_false2.height = icon_false.height;

//    var q_ = "q" + qNumber;

//    //get answer
//    var formChooseAnswer = document.getElementById("chooseAnswer");
//    var answer = formChooseAnswer.elements[q_].value;

//    //show right answers

//    //insert img-right: ALWAYS
//    var right = q_ + "-" + rightAnswer;
//    document.getElementById(right).appendChild(img_true);



//    //insert img-wrong if just wrong
//    if (answer == "") {
//        //alert("Choose answer!")
//    } else {
//        if (answer != rightAnswer) {
//            var wrong = q_ + "-" + answer;
//            document.getElementById(wrong).appendChild(img_false);

//            var wrong2 = "choose-" + wrong;
//            document.getElementById(wrong2).appendChild(img_false2);
//        } else {
//            var right2 = "choose-" + right;
//            document.getElementById(right2).appendChild(img_true2);
//            score = score + 1;
//        }
//    }

//    //show left-questions
//    document.getElementById(q_).hidden = false;
//}


//var time = 7200; //second
////count down
//var _countDown = setInterval(countDown, 1000);
//function countDown() {
//    var hour = parseInt(time / 3600);
//    var minute = parseInt((time - hour * 3600) / 60);
//    var second = time - hour * 3600 - minute * 60;
//    document.getElementById("timeCountDown").innerHTML = hour + " : " + minute + " : " + second;

//    if (time == 0) {
//        clearTimeout(_countDown);
//    } else {
//        time = time - 1;
//    }
//}

