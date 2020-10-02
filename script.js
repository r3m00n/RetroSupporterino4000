const API = {
  pbiTotal: 18,
  pbiDone: 7,
  taskTotal: 69,
  taskDone: 56,
  timeTotal: 42,
  timeDone: 20,
  compleatedTime: 42,
  durationPbi: 4.2,
  durationTask: 3.3,
};

const pbiChart = document.getElementById("pbi-chart");
const taskChart = document.getElementById("task-chart");
const timeChart = document.getElementById("time-chart");

const pbiPercent = document.getElementById("pbi-percent");
const taskPercent = document.getElementById("task-percent");
const timePercent = document.getElementById("time-percent");

const pbiTotal = document.getElementById("pbi-total");
const taskTotal = document.getElementById("task-total");
const timeTotal = document.getElementById("time-total");

const timeNumber = document.getElementById("time-number");
const pbiNumber = document.getElementById("pbi-number");
const taskNumber = document.getElementById("task-number");

Chart.defaults.global.animation.duration = 1000;

const pbiDoughnutChart = new Chart(pbiChart, {
  type: "doughnut",
  data: {
    labels: ["Abgeschlossene PBI", "Offene PBI"],
    datasets: [
      {
        backgroundColor: ["#000", "#eee"],
        borderColor: "rgba(0,0,0,0)",
        hoverBorderColor: "rgba(0,0,0,0)",
      },
    ],
  },
  options: {
    circumference: Math.PI,
    rotation: Math.PI,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

const taskDoughnutChart = new Chart(taskChart, {
  type: "doughnut",
  data: {
    labels: ["Abgeschlossene Task", "Offene Task"],
    datasets: [
      {
        backgroundColor: ["#000", "#eee"],
        borderColor: "rgba(0,0,0,0)",
        hoverBorderColor: "rgba(0,0,0,0)",
      },
    ],
  },
  options: {
    circumference: Math.PI,
    rotation: Math.PI,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

const timeDoughnutChart = new Chart(timeChart, {
  type: "doughnut",
  data: {
    labels: ["Succesful Time", "Unsuccesful Time"],
    datasets: [
      {
        backgroundColor: ["#000", "#eee"],
        borderColor: "rgba(0,0,0,0)",
        hoverBorderColor: "rgba(0,0,0,0)",
      },
    ],
  },
  options: {
    circumference: Math.PI,
    rotation: Math.PI,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

timeNumber.innerText = API.compleatedTime;

function updateValues() {
  timeNumber.innerText = API.compleatedTime;
  pbiNumber.innerText = API.durationPbi;
  taskNumber.innerText = API.durationTask;

  pbiTotal.innerText = API.pbiTotal;
  taskTotal.innerText = API.taskTotal;
  timeTotal.innerText = API.timeTotal;

  timeNumber.innerText = API.compleatedTime;
  pbiNumber.innerText = API.durationPbi;
  taskNumber.innerText = API.durationTask;

  pbiPercent.innerText = Math.round((100 * API.pbiDone) / API.pbiTotal);
  taskPercent.innerText = Math.round((100 * API.taskDone) / API.taskTotal);
  timePercent.innerText = Math.round((100 * API.timeDone) / API.timeTotal);

  pbiDoughnutChart.data.datasets[0].data[0] = API.pbiDone;
  pbiDoughnutChart.data.datasets[0].data[1] = API.pbiTotal - API.pbiDone;
  pbiDoughnutChart.data.datasets[0].backgroundColor[0] = colorDecider(
    pbiPercent.innerText
  );

  taskDoughnutChart.data.datasets[0].data[0] = API.taskDone;
  taskDoughnutChart.data.datasets[0].data[1] = API.taskTotal - API.taskDone;
  taskDoughnutChart.data.datasets[0].backgroundColor[0] = colorDecider(
    taskPercent.innerText
  );

  timeDoughnutChart.data.datasets[0].data[0] = API.timeDone;
  timeDoughnutChart.data.datasets[0].data[1] = API.timeTotal - API.timeDone;
  timeDoughnutChart.data.datasets[0].backgroundColor[0] = colorDecider(
    timePercent.innerText
  );

  pbiDoughnutChart.update();
  taskDoughnutChart.update();
  timeDoughnutChart.update();
}

function colorDecider(percent) {
  if (percent > 0 && percent < 20) {
    return "#ff6666";
  } else if (percent < 40) {
    return "#ffb366";
  } else if (percent < 60) {
    return "#ffff66";
  } else if (percent < 80) {
    return "#b2ff66";
  } else if (percent <= 100) {
    return "#66ff66";
  } else {
    return "#000";
  }
}

updateValues();

/*const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')*/
