
const arr = [];
const url = 'data.json';
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const hourDisplay = document.querySelectorAll('.hour-display');
const previousDisplay = document.querySelectorAll('.previous-hour-display');

function requestData() {
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    arr.push(...data);
    return arr;
  })
  .catch(error => console.log('Error:', error));
};

requestData();

function addDay(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.daily.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.daily.previous} hrs`;
  });
  weekly.classList.remove('selected');
  return data;
};

function addWeek(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.weekly.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.weekly.previous} hrs`;
  });
  return data;
}


function addMonth(data) {
  data.forEach((element, index) => {
    hourDisplay[index].textContent = `${element.timeframes.monthly.current} hrs`;
    previousDisplay[index].textContent = `Last week - ${element.timeframes.monthly.previous} hrs`;
  });
  weekly.classList.remove('selected');
  return data;
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






