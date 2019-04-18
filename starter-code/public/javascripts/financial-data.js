let startDate = document.getElementById("startDate").value
let endDate = document.getElementById("endDate").value

function handler(e){
  startDate = document.getElementById("startDate").value;
  console.log(document.getElementById("startDate").value)
  endDate = document.getElementById("endDate").value
  cryptoChart()
}

const printCharts = (labels, prices) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          label: 'BTC prices',
          data: prices
        }
      ]
    }
  });
};

const cryptoChart = title => {
  axios
    .get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
    .then(response => {
      const { data } = response;

      const { time, bpi } = data;
      console.log(data)
      console.log(Object.keys(bpi))

      const labels = Object.keys(bpi);
      const prices = Object.values(bpi);

      printCharts(labels, prices);

    })
    .catch(err => {
      console.error(err);
    });
};


cryptoChart();