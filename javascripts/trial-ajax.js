$(document).ready(function(){
  // $('.container').click('h1', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://corpsebook-server.herokuapp.com/stories',
  //     type: 'GET',
  //     success: function(response){
  //       console.log(response);
  //     },
  //     error: function(){
  //       console.log("error");
  //     }
  //   });
  // });


// NEW USER
// ___________________
  // $('.sign-in-form').on('submit', function(e){
  //   e.preventDefault();
  //   var signInInfo = $(e.target).serialize();
  //   console.log(signInInfo);
  //   $.ajax({
  //     url: 'http://corpsebook.herokuapp.com/create',
  //     type: 'POST',
  //     data: {signInInfo},
  //     success: function(result){
  //       console.log("yes");
  //       console.log(result);
  //     },
  //     error: function(status){
  //       console.log(status);
  //     }
  //   })
  // });

// SUBMIT NEW Story
// ___________________
  $('.new-story-form').on('submit', function(e){

    e.preventDefault();
    var newStory;
    var story = $(e.target).serialize();

    var success = function(result){
      console.log("success");
      newStory = new Story(result.story);
    }
    var failure = function(error){
      console.log("error", error);
    }
    Story.create(story, success, failure);

    return newStory;
  });
});