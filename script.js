

var result = document.querySelector("h4");

var hlogo = document.getElementById("hlogo");
var clogo = document.getElementById("clogo");

var num=0;

function rock(){
    num=num+1;
    resultGen();
    hlogo.src = "hrock.png";
    
}

function paper(){
    num=num+2;
    
    resultGen();
    hlogo.src = "hpaper.png";


}

function scissor(){
    num=num+3;
    resultGen();
    
    hlogo.src = "hscissor.png";
}

function resultGen(){
    var numbers = [1, 2, 3];

    var randomIndex = Math.floor(Math.random() * numbers.length);
    
    var randomNum = numbers[randomIndex];

    if(randomNum==1){
        clogo.src = "crock.png";
    }else if(randomNum==2){
        clogo.src = "cpaper.png";
    }else{
        clogo.src = "cscissor.png";
    }

    

    if(num==randomNum){
        
        result.innerHTML = " 😔Game Draw !"
        
    }else if(num==3 && randomNum==1){
        result.innerHTML = " 🎉🎉 Computer Win 🎉🎉!"
    }else if(num==1 && randomNum==3){
        result.innerHTML = " 🎉🎉 Congratulations You Win 🎉🎉!"
        

    }else if(num==2 && randomNum==3){
        result.innerHTML = " 🎉🎉 Computer Win 🎉🎉!"

    }else if(num==3 && randomNum==2){
        result.innerHTML = " 🎉🎉 Congratulations You Win 🎉🎉!"

    }else if(num==1 && randomNum==2){
        result.innerHTML = " 🎉🎉 Computer Win 🎉🎉!"

    }else if(num==2 && randomNum==1){
        result.innerHTML = " 🎉🎉 Congratulations You Win 🎉🎉!"

    }
}
