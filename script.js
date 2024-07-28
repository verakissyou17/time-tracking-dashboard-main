
const arr = [];
const url = 'data.json';
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const hourDisplay = document.querySelectorAll('.hour-display');
const previousDisplay = document.querySelectorAll('.previous-hour-display');

function requestData() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    arr.push(...data);
  })
  .catch(error => alert('Error:', error));
};

requestData();

function addDay(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.daily.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.daily.previous} hrs`;
  });
};

function addWeek(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.weekly.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.weekly.previous} hrs`;
  });
}


function addMonth(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.monthly.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.monthly.previous} hrs`;
  });
}

  daily.addEventListener('click',() =>  {
    addDay(arr);
  });

  weekly.addEventListener('click',() =>  {
    addWeek(arr);
  });

  monthly.addEventListener('click',() =>  {
    addMonth(arr);
  });




