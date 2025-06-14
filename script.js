const ctx = document.getElementById('energyChart').getContext('2d');

const energyChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
    label: 'Energy Consumption (kWh)',
    data: [32, 48, 58, 62, 75, 80, 90],
    borderColor: '#4caf50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    tension: 0.4,
    fill: true,
    pointRadius: 4
    }]
},
options: {
    responsive: true,
    plugins: {
    legend: {
        position: 'top'
    },
title: {
        display: true,
        text: 'Weekly Energy Usage Overview'
    }
    }
}
});