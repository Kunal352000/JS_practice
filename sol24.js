color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
for(let i=0; i<color.length; i++){
    if(i==0){
        console.log(i+1,o[i+1],"choice is ",color[i])
    }else if(i==1){
        console.log(i+1,o[i+1],"choice is",color[i])
    }else if(i==2){
        console.log(i+1,o[i+1],"choice is",color[i])
    }else{
        console.log(i+1,o[0],"choice is",color[i])
    }
      

    }
