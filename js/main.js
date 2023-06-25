var buttonDiv = Array.from(document.querySelectorAll(".buttonDiv"));
var testimonialEmployee = Array.from(document.querySelectorAll(".testimonialEmployee"));
for(var i = 0; i < testimonialEmployee.length; i++)
{
    testimonialEmployee[i].style.display = "none";
}
testimonialEmployee[0].style.display = "block";
buttonDiv[0].style.backgroundColor = "#106eea";
for(var i = 0; i < buttonDiv.length; i++)
{
    buttonDiv[i].addEventListener("click" , getNextTestimonial);
}
function getNextTestimonial()
{
    var index = buttonDiv.indexOf(this);
    for(var i = 0; i < buttonDiv.length; i++)
    {
        if(testimonialEmployee[i].display != "none" && i != index)
        {
            testimonialEmployee[i].style.display = "none";
        }
        if(buttonDiv[i].style.backgroundColor != "rgba(255, 255, 255, 0.5)")
        {
            buttonDiv[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
    }
    $(testimonialEmployee[index]).fadeIn(500);
    buttonDiv[index].style.backgroundColor = "#106eea";
}
var portfolioPhotos = Array.from(document.querySelectorAll(".portfolioPhotos"));
for(var i = 0; i < portfolioPhotos.length; i++)
{
    portfolioPhotos[i].style.display = "none";
}
portfolioPhotos[0].style.display = "flex";
var portfolioNavList = Array.from(document.querySelectorAll(".portfolioNavList li"));
portfolioNavList[0].style.color = "#106eea";
for(var i = 0; i < portfolioNavList.length; i++)
{
    portfolioNavList[i].addEventListener("click" , getNextPhotos);
}
function getNextPhotos()
{
    var index = portfolioNavList.indexOf(this);
    for(var i = 0; i < portfolioNavList.length; i++)
    {
        if(portfolioPhotos[i].style.display != "none" && i != index)
        {
            portfolioPhotos[i].style.display = "none";
        }
        if(portfolioNavList[i].style.color != "#444444")
        {
            portfolioNavList[i].style.color = "#444444";
        }
    }
    $(portfolioPhotos[index]).fadeIn(500);
    portfolioNavList[index].style.color = "#106eea";
}
var iconPlus = Array.from(document.querySelectorAll(".section9 .portfolioPhotos div div .photoDivInSection9 div div .fa-plus"));
var portfolioImages = Array.from(document.querySelectorAll(".section9 .portfolioPhotos div div img"));
var imageSliderIndex = 0;
for(var i = 0; i < iconPlus.length; i++)
{
    iconPlus[i].addEventListener("click" , showSlider);
}
function showSlider()
{
    var index = iconPlus.indexOf(this);
    $(".sliderLayer").fadeIn(200);
    $(".sliderLayer").css("display" , "flex");
    $(".sliderImages img").attr("src" , $(portfolioImages[index]).attr("src"));
    imageSliderIndex = index;
}
$(".sliderLayer .slideGrayLayer").click(function()
{
    $(".sliderLayer").fadeOut(200);
})
document.querySelector(".nextImage").addEventListener("click" , getNextPhoto);
function getNextPhoto()
{
    $(".sliderImages img").fadeOut(0);
    imageSliderIndex++;
    if(imageSliderIndex >= portfolioImages.length)
    {
        imageSliderIndex = 0;
    }
    $(".sliderImages img").attr("src" , $(portfolioImages[imageSliderIndex]).attr("src"));
    $(".sliderImages img").fadeIn(200);
}
document.querySelector(".previousImage").addEventListener("click" , getPreviousPhoto);
function getPreviousPhoto()
{
    $(".sliderImages img").fadeOut(0);
    imageSliderIndex--;
    if(imageSliderIndex < 0)
    {
        imageSliderIndex = portfolioImages.length - 1;      
    }
    $(".sliderImages img").attr("src" , $(portfolioImages[imageSliderIndex]).attr("src"));
    $(".sliderImages img").fadeIn(200);
}
document.addEventListener("keydown" , keyboardSlide)
function keyboardSlide(e)
{
    if(e.keyCode == 39)
    {
        getNextPhoto();
    }
    else if(e.keyCode == 37)
    {
        getPreviousPhoto();
    }
}
var answerParagraph = Array.from(document.querySelectorAll(".askedQuestion .answerParagraph"));
var questionParagraph = Array.from(document.querySelectorAll(".questionParagraph"));
//var questionIcon = Array.from(document.querySelectorAll(".questionParagraph i"));
var questionUpIcon = Array.from(document.querySelectorAll(".questionParagraph .upIcon"));
var questionDownIcon = Array.from(document.querySelectorAll(".questionParagraph .downIcon"));
for(var i = 0; i < answerParagraph.length; i++)
{
    answerParagraph[i].style.display = "none";
}
for(var i = 0; i < questionParagraph.length; i++)
{
    questionParagraph[i].addEventListener("click" , showAnswer);
}
function showAnswer()
{
    var index = questionParagraph.indexOf(this);
    for(var i = 0; i < answerParagraph.length; i++)
    {
        if(answerParagraph[i].style.display != "none" && i != index)
        {
            $(answerParagraph[i]).slideUp(300);
        }
        if(questionParagraph[i].style.color != "black")
        {
            questionParagraph[i].style.color = "black";
        }
        if(questionUpIcon[i].style.display != "none" && i != index)
        {
            questionUpIcon[i].style.display = "none";
            questionDownIcon[i].style.display = "inline";
        }
    }
    //$(answerParagraph[index]).slideToggle(300);
    if(answerParagraph[index].style.display == "none")
    {
        $(answerParagraph[index]).slideDown(300);
        questionParagraph[index].style.color = "#0d58ba";
    }
    else
    {
        $(answerParagraph[index]).slideUp(300);
        questionParagraph[index].style.color = "black";
    }

    if(questionDownIcon[index].style.display != "none")
    {
        questionDownIcon[index].style.display = "none";
        questionUpIcon[index].style.display = "inline";
    }
    else
    {
        questionDownIcon[index].style.display = "inline";
        questionUpIcon[index].style.display = "none";
    }
}
var nameRegex = /^[a-zA-Z]{1,}.{0,}$/;
var emailRegex = /^[A-Za-z]{5,}(.+){0,}@(gmail|hotmail|outlook|yahoo).com$/;
var subjectRegex = /^.{8,}$/;
var messageRegex = /^.+$/;
var regexArray = [nameRegex , emailRegex , subjectRegex];
var sendMessageButton = document.querySelector(".sendMessage");
var warningParagraph = Array.from(document.querySelectorAll(".warningParagraph"));
var sendMessageInputs = Array.from(document.querySelectorAll(".contactUs div div input"));
sendMessageButton.addEventListener("click" , sendMessage);
function sendMessage()
{
    displayError(sendMessageInputs , regexArray , warningParagraph);
    if(messageRegex.test($(".contactUs div div textarea").val())== false)
    {
        $(warningParagraph[warningParagraph.length - 1]).slideDown(300);
    }
    else
    {
        $(warningParagraph[warningParagraph.length - 1]).slideUp(300);
    }
}
function displayError(inputs , regex , paragraph)
{
    for(var i = 0; i < inputs.length; i++)
    {
        if(regex[i].test(inputs[i].value) == false)
        {
            $(paragraph[i]).slideDown(300);         
        }
        else
        {
            $(paragraph[i]).slideUp(300);
        }
    }
}
var arrowUpIcon = document.querySelector(".arrowUpIcon");
arrowUpIcon.addEventListener("click" , scrollToHome);
function scrollToHome()
{
    $("html , body").animate({scrollTop : 0} , 1000);
}
$(window).scroll(function()
{
    if($(window).scrollTop() >= $(".section2").offset().top)
    {
        $(arrowUpIcon).fadeIn(500);
    }
    else
    {
        $(arrowUpIcon).fadeOut(1000);
    }
})
var navLinks = Array.from(document.querySelectorAll(".nav-link"));
for(var i = 0; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click" , scrollToTheSection);
}
function scrollToTheSection()
{
    var href = $(this).attr("href");
    var topScroll = $(href).offset().top;
    $("html , body").animate({scrollTop: topScroll} , 1000);
}