// arrays for time spent
const daily = {
  workDay: "5hrs",
  workPDay: "previous - 7hrs",
  playDay: "1hrs",
  playPDay: "previous - 2hrs",
  studyDay: "0hrs",
  studyPDay: "previous - 1hrs",
  exerciseDay: "1hrs",
  exercisePDay: "previous - 2hrs",
  socialDay: "1hrs",
  socialPDay: "previous - 3hrs",
  selfCareDay: "2hrs",
  selfCarePDay: "previous - 1hrs",
};

const weekly = {
  workWeek: "32hrs",
  workPWeek: "previous - 36hrs",
  playWeek: "10hrs",
  playPWeek: "previous - 8hrs",
  studyWeek: "4hrs",
  studyPWeek: "previous - 7hrs",
  exerciseWeek: "4hrs",
  exercisePWeek: "previous - 5hrs",
  socialWeek: "5hrs",
  socialPWeek: "previous - 10hrs",
  selfCareWeek: "3hrs",
  selfCarePWeek: "previous - 4hrs",
};

const monthly = {
  workMonth: "130hrs",
  workPMonth: "previous - 141hrs",
  playMonth: "36hrs",
  playPMonth: "previous - 42hrs",
  studyMonth: "20hrs",
  studyPMonth: "previous - 30hrs",
  exerciseMonth: "28hrs",
  exercisePMonth: "previous - 18hrs",
  socialMonth: "18hrs",
  socialPMonth: "previous - 22hrs",
  selfCareMonth: "12hrs",
  selfCarePMonth: "previous - 17hrs",
};

// select small tiles for mouseover
const tileBody = document.querySelectorAll(".tile-card-body");
const times = document.querySelectorAll(".list-group-item");
const hrs = document.querySelectorAll(".small-subtitle");
// timeframes
const dailyButton = document.querySelector(".list-daily");
const weeklyButton = document.querySelector(".list-weekly");
const monthlyButton = document.querySelector(".list-monthly");
// tile hrs
const workHrs = document.querySelector(".work-subtitle");
const prevWorkHrs = document.querySelector(".previous-work-subtitle");
const playHrs = document.querySelector(".play-subtitle");
const prevPlayHrs = document.querySelector(".previous-play-subtitle");
const studyHrs = document.querySelector(".study-subtitle");
const prevStudyHrs = document.querySelector(".previous-study-subtitle");
const exerciseHrs = document.querySelector(".exercise-subtitle");
const prevExerciseHrs = document.querySelector(".previous-exercise-subtitle");
const socialHrs = document.querySelector(".social-subtitle");
const prevSocialHrs = document.querySelector(".previous-social-subtitle");
const selfCareHrs = document.querySelector(".self-care-subtitle");
const prevSelfCareHrs = document.querySelector(".previous-self-care-subtitle");

// add color & remove it for mouseover & mouseout
tileBody.forEach((tile) => {
  tile.addEventListener("mouseover", function () {
    tile.setAttribute("style", "background-color: #393F90");

    tile.addEventListener("mouseout", function () {
      tile.setAttribute("style", "background-color: #1c1f4a");
    });
  });
});

// rollover colors for timeframe selector
times.forEach((time) => {
  time.addEventListener("mouseover", function () {
    time.setAttribute("style", "color: white");

    time.addEventListener("mouseout", function () {
      time.setAttribute("style", "color: #6f76c8");
    });
  });
});

// ADDING LIGHT SELECTOR TO TIMEFRAMES
// times.forEach((time) => {
//   time.addEventListener("click", function (e) {
//     console.log(e.target);
//     console.log(time.classList);
//     e.target.classList.toggle("time-selector");
//   });
// });

// DAILY STATISTICS
dailyButton.addEventListener("click", function () {
  // work updates
  workHrs.textContent = daily.workDay;
  prevWorkHrs.textContent = daily.workPDay;
  //play
  playHrs.textContent = daily.playDay;
  prevPlayHrs.textContent = daily.playPDay;
  //study
  studyHrs.textContent = daily.studyDay;
  prevStudyHrs.textContent = daily.studyPDay;
  //exercise
  exerciseHrs.textContent = daily.exerciseDay;
  prevExerciseHrs.textContent = daily.exercisePDay;
  //social
  socialHrs.textContent = daily.socialDay;
  prevSocialHrs.textContent = daily.socialPDay;
  //self-care
  selfCareHrs.textContent = daily.selfCareDay;
  prevSelfCareHrs.textContent = daily.selfCarePDay;
});

// WEEKLY STATISTICS
weeklyButton.addEventListener("click", function () {
  // work updates
  workHrs.textContent = weekly.workWeek;
  prevWorkHrs.textContent = weekly.workPWeek;
  //play
  playHrs.textContent = weekly.playWeek;
  prevPlayHrs.textContent = weekly.playPWeek;
  //study
  studyHrs.textContent = weekly.studyWeek;
  prevStudyHrs.textContent = weekly.studyPWeek;
  //exercise
  exerciseHrs.textContent = weekly.exerciseWeek;
  prevExerciseHrs.textContent = weekly.exercisePWeek;
  //social
  socialHrs.textContent = weekly.socialWeek;
  prevSocialHrs.textContent = weekly.socialPWeek;
  //self-care
  selfCareHrs.textContent = weekly.selfCareWeek;
  prevSelfCareHrs.textContent = weekly.selfCarePWeek;
});

// MONTHLY STATISTICS
monthlyButton.addEventListener("click", function () {
  // work updates
  workHrs.textContent = monthly.workMonth;
  prevWorkHrs.textContent = monthly.workPMonth;
  //play
  playHrs.textContent = monthly.playMonth;
  prevPlayHrs.textContent = monthly.playPMonth;
  //study
  studyHrs.textContent = monthly.studyMonth;
  prevStudyHrs.textContent = monthly.studyPMonth;
  //exercise
  exerciseHrs.textContent = monthly.exerciseMonth;
  prevExerciseHrs.textContent = monthly.exercisePMonth;
  //social
  socialHrs.textContent = monthly.socialMonth;
  prevSocialHrs.textContent = monthly.socialPMonth;
  //self-care
  selfCareHrs.textContent = monthly.selfCareMonth;
  prevSelfCareHrs.textContent = monthly.selfCarePMonth;
});
