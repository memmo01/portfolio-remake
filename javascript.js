var projects=[{
    title: "Restaurants Database",
    about:"'<h1>description</h1><p>Restaurants Database is an application created to help with organizing data about restaurants visited. The application allows you to enter in restaurants you have gone to or want to go to. Information such as: name, location, price range, nationality, and rating is entered into the database. Once the information is in the database it will allow the user to search the database by name, nationality, rating, price range, or just select a random restaurant to have pulled up if you are feeling spontanious. The application also allows the user to enter in text about their exerience at the restaurant.</p><br><h1>Technologies used:</h1><p><li>javascript</li><li>node.js</li><li>inquirer</li><li>MYSQL</li><p>'",
    code:["node.js","javascript","MYSQL","inquirer"],
    picture:"./images/nodeRestScreenShot.JPG",
    video:'https://www.youtube.com/embed/9ogm2sgljho',
    github:"https://github.com/memmo01/restaurant-database",
    codeLink:""
},{
    title: "Train Schedule",
    about:"'<h1>description</h1><p>The Train Schdule is an application allowing a user to enter in a train name, destination, when the first train leaves, and how often the train arrives. Once this data is entered the application will update and tell the user when the next train will arrive based on the current time.</p><br><h1>Technologies used:</h1><p><li>Firebase</li><li>Bootstrap</li><li>Momentjs</li><li>Javascript</li><li>jQuery</li><li>HTML</li><li>CSS</li></p>",
    code:["Firebase","HTML","CSS","javascript","jquery","bootstrap","momentjs"],
    picture:"./images/trainmainpage.JPG",
    video:'https://www.youtube.com/embed/wAvGqw-sPJM',
    github:"https://github.com/memmo01/train-schedule",
    codeLink:"https://memmo01.github.io/train-schedule/"
},{
    title: "Favorite Movie App",
    about:"'<h1>description</h1><p>The Favorite Movie application allows users to have a space where a list of their favorite movies can be stored. The program allows users to create a username and password so when they log in they have a personal space with movies they selected as favorites to display. When logged in a user can search movies and gain information such as : title, year released, actors, plots, ratings, and box office stats. When the user chooses a favorite movie to add to their page they will have quicker access to this information. The application will also have an area where posts can be made to connect with other users.</p><br><h1>Technologies used:</h1><p><li>javascript</li><li>node.js</li><li>jQuery</li><li>MYSQL</li><li>Bootstrap</li><li>HTML</li><li>CSS</li><li>API call</li></p>",
    code:["node.js","MYSQL","javascript","jQuery","bootstrap","html","css","API call"],
    picture:"./images/movie_app.JPG",
    video:'https://www.youtube.com/embed/Z0M8D9bwga8',
    github:"https://github.com/memmo01/movie_post",
    codeLink:""
},{
    title: "Foodie Finder",
    about:"'<h1>description</h1><p>This application allows you to fill out a 10 question survey about how you feel towards certain food scenerios. After submiting your survey, you are then directed to a compatible page. This application allows you to fill out a 10 question survey about how you feel towards certain food scenerios. After submiting your survey, you are then directed to a compatible page. This page will load 'Foodies' (profiles of people preloaded into the program) that you are most like.</p><p>In the survery you can add a name and picture. Currently the picture is not saved on a local server so you will have to add an image url of yourself or any picture from a google image.</p><p>To start the program you will need to do an NPM install of:</p><p>'body-parser',</p><p>'express',</p><p>'inquirer','path'</p><br><h1>Technologies used:</h1><p><li>node.js</li><li>Javascript</li><li>jQuery</li><li>HTML</li><li>CSS</li></p>",
    code:["HTML","CSS","javascript","node.js","express"],
    picture:"./images/foodiemainpage.JPG",
    video:'https://www.youtube.com/embed/cH-d9l226D0',
    github:"https://github.com/memmo01/Foodie-Finder",
    codeLink:""
},{
    title: "New York Times Article Search",
    about:"'<h1>description</h1><p>The New York Times Article Search is a program created to show how an API could be used to help with searching an organizing information a developer may need for their application. Once you enter in the a topic you are searching along with the date ranges being searched it will respond with a list of articles from the New York Times containing that topic. Once the list has populated the user can select the article and it will direct them to that specific article on the New York Times.</p><br><h1>Technologies used:</h1><p><li>HTML</li><li>CSS</li><li>Javascript</li><li>jQuery</li><li>New York Times API</li></p>",
    code:["HTML","CSS","javascript","New York Times API"],
    picture:"./images/nytftpg.JPG",
    video:'',
    github:"https://github.com/memmo01/nytimes-article-search",
    codeLink:"https://memmo01.github.io/nytimes-article-search/"
},{
    title: "Mock-Fitness Site",
    about:"<h1>description</h1><p>This is a sample of a Fitness site I created. My main goal with this site was to have it organized and have a modern clean feel. I wanted the user to have access to the company information easily without having to be overwhelmed with information. This is a one page site with a modal that populates so the user can gain ro submit information.</p><br><h1>Technologies used:</h1><p><li>javascript</li><li>jQuery</li><li>Bootstrap</li><li>CSS</li><li>HTML</li></p>",
    code:["HTML","javascript","Bootstrap","CSS"],
    picture:"./images/fitness.JPG",
    video:'',
    github:"https://github.com/memmo01/mock-gym-site",
    codeLink:"https://memmo01.github.io/mock-gym-site/"
},
{
    title: "Bamazon",
    about:"'<h1>description</h1><p>The Bamazon Application allows users to select and purchase items within 'Bamazon's' inventory. Once the applciation starts it will load the list of items in stock, their price, and quantity. The terminal will prompt the user to select an item and then how many they wish to buy. Once selected the system will inform the user of the item they selected and how much it would cost based on the quantity they selected. If the item is out of stock the system will inform the user that the quantity they need is not available.</p><br><h1>Technologies used:</h1><p><li>javascript</li><li>node.js</li><li>inquirer</li><li>MYSQL</li></p>",
    code:["node.js","MYSQL","javascript","inquirer"],
    picture:"./images/bam-example.JPG",
    video:'https://www.youtube.com/embed/yxO_sZg4ACs',
    github:"https://github.com/memmo01/bamazon",
    codeLink:""
},{
    title: "Trivia Game",
    about:"<h1>description</h1><p>Mario trivia edition is a trivia game that populates questions about the character mario created by nintendo. Each question that populates will have 4 answers for the user to choose, with only one of them being the correct answer. The user has 15 seconds to answer each question. If time runs out or the user selects the wrong answer an incorrect answer will be tallied and the next question will load. If a correct answer is guessed a correct answer will be tallied and the next question will load. At the end of the game it will load the results.</p><br><h1>Technologies used:</h1><p><li>javascript</li><li>jQuery</li><li>Bootstrap</li><li>CSS</li></p>",
    code:["html","javascript","Bootstrap","CSS"],
    picture:"./images/marioquestion.JPG",
    video:'https://www.youtube.com/embed/E8VoZMEQzdE',
    github:"https://github.com/memmo01/TriviaGame",
    codeLink:"https://memmo01.github.io/TriviaGame/"
},
{
    title: "Hangman",
    about:"<h1>description</h1><p>Harry Potter Hangman is a game inspired by the Harry Potter stories. The program randomly selects the name of a character within the Harry Potter series. The user then selects a letter on their keyboard to guess the name of the character that was selected. If the letter guessed is in the name of the character, the letter will show on the screen. If the letter guessed is incorrect it will also display on the screen but in the incorrect section. The user can only guess incorrect 6 times before it tallying as a loss.</p><br><h1>Technologies used:</h1><p><li>HTML</li><li>CSS</li><li>Javascript</li><li>jQuery</li><li>Boostrap</li></p>",
    code:["HTML","CSS","javascript","jQuery","bootstrap"],
    picture:"./images/hangman.jpg",
    video:'',
    github:"https://github.com/memmo01/bootstrap-hangman",
    codeLink:"https://memmo01.github.io/bootstrap-hangman/"
},{
    title: "To Do List App",
    about:"'<h1>description</h1><p>The To Do List Application is one that allows the user to enter in items that need to be completed. Once the task is submitted it will display on the screen as a task that needs to be completed along with a button stating completed. Once the completed button is selected it will display the item on the completed side with a button allowing the user to delete the task from the screen.</p><br><h1>Technologies used:</h1><p><li>Bootstrap</li><li>javascript</li><li>jQuery</li><li>Sequelize</li><li>express</li></p>",
    code:["Bootstrap","javascript","jQuery","Sequelize","express"],
    picture:"./images/todo.JPG",
    video:'https://www.youtube.com/embed/MKxOKX3d8Ac',
    github:"https://github.com/memmo01/sequelize-todo-list",
    codeLink:""
},
{
    title: "Mock-Restaurant Site",
    about:"<h1>description</h1><p>This is a Mock-Restaurant web page created to show a lay out of how a restaurant web site could look.</p><br><h1>Technologies used:<p></h1><li>HTML</li><li>CSS</li></p>",
    code:["HTML","CSS"],
    picture:"./images/mockRestaurant.JPG",
    video:'',
    github:"https://github.com/memmo01/mock-Restaurant",
    codeLink:"https://memmo01.github.io/mock-Restaurant/"
},
{
    title: "Recipe Contructor App",
    about:"<h1>description</h1><p>This is an application I put together to show the use of a constructor in javascript. It is an application that allows you to enter in recipe information. Once you enter in the name of the food, ingredients needed, process to prepare the food, and the time of day this food is typicaly meant for, you will be able to refer back to it by selecting the time of day buttons. I have some recipes loaded in the dinner section as an example. In the future I plan on implementing usage of a database to make the information persistent. Currently the information is saving in an array and it not persistent. The application was designing using Bootstrap. </p><br><h1>Technologies used:</h1><p><li>HTML</li><li>Bootstrap</li><li>jQuery</li><li>javascript</li></p>",
    code:["HTML","Bootstrap","javascript"],
    picture:"./images/recipeApp.JPG",
    video:'',
    github:"https://github.com/memmo01/bootstrap-recipe-app",
    codeLink:"https://memmo01.github.io/bootstrap-recipe-app/"
}
]

var projList="";
var x=true;
run();


function run(){
    $(".proj-sample-1").empty();
    
if(x == true){
    projList= 6;
}
else {
    projList= projects.length;
}

       for(i=0;i<projList;i++)
        {
            var project = projects[i].title
            var picture= projects[i].picture;
            var code = projects[i].code;
            
            var projDiv= $("<div>");
                projDiv.addClass("projDiv")

            var projectInfo ="<span id='look'>"+project+"</span>"

                var titleArea = $("<div>")
                    titleArea.addClass("title-area");
                    titleArea.text(project);

                
                    var projBody = $("<img>");
                     projBody.attr("src",picture);
                         projBody.addClass("projBody");
                            

                var projectButton = $("<div>");
                    projectButton.attr("data-id",i)
                    projectButton.text("view project")
                    projectButton.addClass("proj-button")

             projDiv.append(titleArea);
         

             projDiv.append(projBody);

            projDiv.append(projectButton);

            $(".proj-sample-1").append(projDiv);
            


        }
        $(".proj-button").on("click",function(){
            $(".modal-body").empty()  
            $(".modal-title").empty() 
            $(".modal-button-area").empty()
            $(".modal-about-area").empty() 
            $(".modal").css("display","block");


        var application = ($(this).data("id"))
        var title = projects[application].title;
        var screenShot = projects[application].video;
        var gitLink = projects[application].github;
        var about = projects[application].about;
        var codeLink = projects[application].codeLink;
        var picture = projects[application].picture;

                var gitButton = $("<div>");
                    gitButton.addClass("gitButton");
                    gitButton.attr("data-link", gitLink);

                var codeLinkButton = $("<div>");
                    codeLinkButton.addClass("codeLink");
                    codeLinkButton.attr("data-code",codeLink)


              

                var gitPic="<acronym title='Click to View Code on GitHub'><img src='./images/github.png'height='40px' width='40px' alt='git' id='gitgit'></acronym>"
                var  tryCodeLink ="<acronym title='Click to Try Application'><i class='fas fa-desktop fa-2x'></i></acronym>";  
                gitButton.prepend(gitPic);

                if(codeLink !== ""){
                    codeLinkButton.append(tryCodeLink);              
                    gitButton.append(codeLinkButton);
                } 

                 
                
       
             var video = $("<iframe>");
                video.attr("src",screenShot);
            
            var pictureModal = $("<img>");
                        pictureModal.attr("src", picture);
                        pictureModal.addClass("pictureModal")
                
            if(screenShot !== ''){
                $(".modal-body").html(video);
            }
            else{
                  $(".modal-body").html(pictureModal);
            }


            $(".modal-title").html(title);
            $(".modal-button-area").html(gitButton)
            $(".modal-about-area").html(about)

           
    
$(".gitButton").on("click",function(){
   var url = ($(this).data("link"));
   window.open(url);
})
$(".codeLink").on("click",function(){
    var url =($(this).data('code'));
    window.open(url);
})
})


}


$(".close").on("click",function(){
    $(".modal").css("display","none");
})

$("#more-projects").on("click",function(){
    if(x == true){
    x=false;
    $("#more-projects").text("Show Less")
    run()
    }
else if( x == false){
    x= true;
    $("#more-projects").text("Show More")
    run()
}
   
    
})

$("#res-Button").on("click", function(){
     var url = "https://drive.google.com/file/d/1ST8U-8_uD1HbgcAccuJ83TFI58LG7kYS/view?usp=sharing";
   window.open(url);
})

$("#contact").on("click",function(){
    $(".modal-body").empty()  
            $(".modal-title").empty() 
            $(".modal-button-area").empty()
            $(".modal-about-area").empty() 

    $(".modal").css("display","block");
    $(".modal-title").html("Contact Me");


    var contactForm= "<form id='contact-form'><div class='input-form'>";
            contactForm +="<ul><li><label for='name'>Name</label><br><input type='text' id='name' name='name' required='required'></li>";
            contactForm +="<li><label for='email'>Email</label><br><input type='email' id='email' name='email' required='required'></li><li>";
            contactForm +="<label for='message'>Message</label><br><textarea id='message' name='message' required='required'></textarea></li></ul>";
            contactForm +="<input type='submit' id='submit'></div></form>";
    $(".modal-about-area").html(contactForm);

$("#contact-form").submit(function(event){
    event.preventDefault();
        var name= $("#name").val().trim();
        var email = $("#email").val().trim();
        var comments = $("#message").val().trim();
        var date=Date();



        var newPost= {    
            comments: comments,
            email: email,
            name: name,
            date:date
        };

        database.ref().push(newPost);
       
        alert("Thank you " + name + " for submitting your comments!")
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");

  });


})
