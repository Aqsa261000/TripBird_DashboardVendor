
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [{
        label: 'Orders Weekly Status',
        data: [5000, 2000, 4000, 10000, 1000,9000],
        backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)'
        ]
    }],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
 } });

  