const quiz = [
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i==5",
        b: "if i=5",
        c: "if i=5 then",
        d: "if(i==5)",
        ans: "ans4"
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function= myFunction()",
        b: "function myFunction()",
        c: "function: myFunction()",
        d: "function- myFunction()",
        ans: "ans2"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and <body> section are correct",
        b: "The <body> section",
        c: "The <head> section",
        d: "The <title> section",
        ans: "ans2"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World')",
        b: "alertBox('Hello World')",
        c: "msgBox('Hello World')",
        d: "msg('Hello World')",
        ans: "ans1"
    }

]

const question = document.querySelector("#question");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const submit = document.querySelector(".submit-btn");
const answers = document.querySelectorAll(".btns")



var questionCount = 0;
var score = 0;


function loadQuestion(){
    question.innerHTML = quiz[questionCount].question;
    ans1.innerHTML = quiz[questionCount].a;
    ans2.innerHTML = quiz[questionCount].b;
    ans3.innerHTML = quiz[questionCount].c;
    ans4.innerHTML = quiz[questionCount].d;
    
};
    loadQuestion();
    whenClicked();





function whenClicked() {
    
    $("button").click(function () {
        var idOfSelectedAnswer = this.id;
        $('.btns').prop('disabled', true);
        // console.log(idOfSelectedAnswer);
        if (idOfSelectedAnswer == quiz[questionCount].ans){
        // console.log("answer is correct");
        console.log(questionCount);
        // console.log(quiz[questionCount].ans);
        score++;
        $("#"+idOfSelectedAnswer).css("background-color", " rgb(68, 179, 64)");
        }
        else
        $("#"+idOfSelectedAnswer).css("background-color", "red");
        $(".next-btn").css("display", "block")
        questionCount++;
    });
    

}


    document.querySelector(".next-btn").addEventListener("click", function(){

        if(questionCount<=3){
            loadQuestion();
            $(".btns").css("background-color", "white");
            // loadQuestion();
            $('.btns').prop('disabled', false);
            whenClicked();
        }
        else{
            $(".submit-btn").css("display", "block");
            $(".next-btn").css("display", "none");
            document.querySelector(".submit-btn").addEventListener("click", function(){
                // alert("your score is "+score);
                document.querySelector("h2").innerHTML = "your score is "+(score-1);
                $(".btns").css("display", "none");
                $(".btn").css("display", "none");
            })

            console.log("Your Score is "+score-1);
        }
        
    });
    


