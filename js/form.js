class Form{
    constructor(){

    }
    display(){
       
        resizeCanvas(200,200,true);
     var title=createElement('h2');
        title.html("The Students' Survey");
        title.position(130,0);
        
       
        
        
        var input=createInput("name",text); 
        var input2=createInput("username@gmail.com",text); 
        
       
        var button = createButton('Start');
      
        var greeting= createElement('h3');
        var greeting2= createElement('h3');
        input.position(110,160);
        input2.position(110,230);                   
        button.position(300,205);
                           
        button.mousePressed(function (){
            input.hide();
            input2.hide();
            button.hide();
         
            var name=input.value();
            voterCount+=1;
           var im= createImg("zen.jpg")
           im.position(600,100)
            greeting.html("Hello "+name);
            greeting.position(130,160)
            greeting2.html("Welcome to the Students' Survey, "+name);
            greeting2.position(130,220)
           
        });
        
    }
  
}