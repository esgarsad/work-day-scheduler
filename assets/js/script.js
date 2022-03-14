var tasks = [];
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var rightNow = moment().hours();

var saveTasks = function(taskText,taskTime) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
  };

 // save button is clicked
$(".saveBtn").on("click",function() {

  var taskText = $(this).siblings(".tasks-def").val();
  var taskTime = $(this).siblings(".taskHour").text();
  console.log(taskText)
  console.log(taskTime)

 if (taskText && taskTime) {
  //  createTask(taskText, taskTime);
   tasks.push({text: taskText, time: taskTime});

    saveTasks();
  }
});

  // load saved data from localStorage
  var storedEvents = JSON.parse(localStorage.getItem("tasks"));

  if (storedEvents !== null) {
    events = storedEvents;
  }

  for(var i = 0; i < tasks.length; i++) {
    var taskRecord = tasks[i].text;
    $("#" + tasks[i].time).children(".tasks-def").text(taskRecord);
  }

//Show colors depending on time
function colorAlarm() {
  // get current number of hours
  var rightNow = moment().hours();

  // loop over time blocks
  $(".time-block").each(function() {
    var calendTime = parseInt($(this).attr("id"));

    // check if we've moved past this time
    // if the current hour is greater than the block hour
    // then add class "past"
    if(rightNow > calendTime) {
      $(this).addClass("past");
    }
    // if they are equal
    // then remove class "past" and add class "present"
    else if(rightNow === calendTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    // else
    // remove class "past", remove class "present", add class "future"
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    
  });
}

colorAlarm();

