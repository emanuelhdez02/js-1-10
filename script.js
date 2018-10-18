//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}


function sleep_in(weekday, vacation){
    if (weekday === false || vacation === true) {
        return true;
    }else{
        return false;
    }
}

function monkey_trouble(a_smile, b_smile){
    if (a_smile === b_smile){
        return true;
    }else{
        return false;
    }
}

function string_times(string, n) {
    var answer = "";
    for (var i = 0; i < n; i++) {

        answer += string
    }
    return answer;
}

function front_times(string, n) {
    if (string.length > 3){
    string = string.substring(0, 3);
}
    var answer = "";
    for (var i = 0; i < n; i++) {
        answer += string
    }
    return answer;
}

function string_bits(string){
    var hello = "";
    for(var i = 0; i < string.length; i+=2){
        hello = hello + string[i]
    }
    return hello;
}

function caughtSpeeding(speed, birthday){
    var noTicket = "0";
    var smallTicket ="1";
    var bigTicket = "2";
    if(birthday == true){
        speed = speed - 5
    }
    if(speed <= 60){
        return 0;
    }
    if(speed >= 61 && speed <= 80){
        return 1;
    }
    if(speed >= 81){
        return 2;
    }
}

function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }
    if(num % 3 == 0){
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }
    return num + "!";

}

function teaParty(candy, tea){
    if(candy < 5 || tea < 5){
        return 0;
    }
    if(candy >= tea * 2 || tea >= candy * 2){
        return 2;
    }

    if(candy >= 5 && tea >= 5){
        return 1;
    }

}
function blackjack(x, y) {
    if (x > 21 && y > 21) {
        return 0;
    }
    if(x <= 21 && x > y){
        return x;
    }
    if(x > 21 && y < 21){
        return y;
    }
    if(x < 21 && y > 21){
        return x;
    }
    if (y <= 21 && y > x){
        return y;
    }
}
function loneSum(a, b, c){
    if(a == b && b == c){
        return 0;
    }
    if(a == c){
        return b;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    return a + b + c;
}