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

  // get saved data from localStorage
  var storedEvents = JSON.parse(localStorage.getItem("tasks"));
  if (storedEvents !== null) {
    updatedTasks = storedEvents;
  }

  for(var i = 0; i < updatedTasks.length; i++) {
    var taskRecord = updatedTasks[i].text;
    console.log(taskRecord + [i])
    $("#" + updatedTasks[i].time.split(":")[0]).children(".tasks-def").text(taskRecord);
    console.log(updatedTasks[i].time)
  }

//Show colors depending on time
function colorAlarm() {
  // get current number of hours
  var rightNow = moment().hours();

  $(".time-block").each(function() {
    var calendTime = parseInt($(this).attr("id"));

    // check if we've moved past this time
    // then add class "past"
    if(rightNow > calendTime) {
      $(this).addClass("past");
    }
    else if(rightNow === calendTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    
  });
}

colorAlarm();

