
const earning = document.getElementById('earning').getContext('2d');

new Chart(earning, {
  type: "polarArea",
  data: {
    labels: ['Product Avaialibility', 'Customer Reviews','Return Products'],
    datasets: [{
      label: 'Orders Weekly Stats',
      data: [70, 50, 10],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
    ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

