const MarketShareChart = {
    type: 'area',
    height: 200,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#3399FF', '#0033CC', '#FF3300'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        yaxis: {
            min: 0,
            max: 130
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.5,
                stops: [0]
            }
        }
    },
    series: [
        {
            name: 'FaceBook',
            data: [20, 60, 40, 89, 23, 48, 9, 59]
        },
        {
            name: 'Twitter',
            data: [45, 66, 47, 80, 29, 40, 22, 50]
        },
        {
            name: 'YouTube',
            data: [54, 60, 32, 99, 125, 50, 3, 44]
        }
    ]
};

export default MarketShareChart;
