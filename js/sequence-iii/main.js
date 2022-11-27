class SoftwareCost {
    constructor(name, description, source, initialCost = 0, annualCost = 0) {
        this.name = name;
        this.description = description;
        this.source = source;
        this.initialCost = initialCost;
        this.annualCost = annualCost;
    }
}

let individaulMechSoftwareCosts = [
    new SoftwareCost(
        name = "Solidworks",
        description = "CAD program most taught in Cal Poly",
        source = "https://www.engineeringclicks.com/solidworks-price-guide/",
        intialCost = 3995,
        annualCost = 1295
    ),
    new SoftwareCost(
        name = "Microsoft Office",
        description = "Basic office suite with Word, Excel, and Powerpoint",
        source = "https://www.microsoft.com/en-us/microsoft-365/buy/compare-all-microsoft-365-products",
        initialCost = 0,
        annualCost = 69.99,
    ),
    new SoftwareCost(
        name = "MATLAB",
        description = "Programming platform for engineers. Price includes Simulink.",
        source = "https://www.mathworks.com/store/link/products/home/ML",
        initialCost = 149   // Cost of MATLAB
            +45,            // Cost of Simulink
        annualCost = 0,
    ),
    new SoftwareCost(
        name = "Windows",
        description = "Operating System",
        source = "https://www.microsoft.com/en-us/d/windows-11-home/dg7gmgf0krt0?rtc=1",
        initialCost = 139,
        annualCost = 0
    ),
    new SoftwareCost(
        name = "Engineering Equation Solver",
        description = "Programming platform used for thermodynamic calculations",
        source = "https://fchartsoftware.com/ees/order.php",
        initialCost = 0,
        annualCost = 160,
    ),
];

let doughnutChartPlugin = {
//    return {
        id: 'doughnutCenterText',
        beforeDraw: function(chart) {
            let width = chart.chartArea.width;
            let height = chart.chartArea.height;
            let ctx = chart.ctx;

            ctx.restore();
            let fontSize = (height / 240).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            let text = chart.options.plugins.doughnutCenterText.text;
            let textX = Math.round((width - ctx.measureText(text).width) / 2);
            let textY = (height / 2) + chart.legend.height + chart.titleBlock.height;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
//    }
}

let createCostsChart = function(ctx, costArray, years = 1) {
    labels = []
    data = []
    for (cost of costArray) {
        labels.push(cost.name);
        if (years == 0) {
            data.push(0);
        } else if (cost.initialCost == 0) {
            data.push(cost.annualCost * years);
        } else {
            data.push(cost.initialCost + cost.annualCost * (years - 1));
        }
    }
    totalCost = data.reduce((cost, total) => cost + total);

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: "Cost of Software Over " + years + " Year(s)",
                data: data,
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Total Cost of Closed Source Software Over " + years + " Year(s)",
                    font: {
                        size: 20,
                    }
                },
                doughnutCenterText: {
                    text: "$"+totalCost,
                }
            }
        },
        plugins: [
            doughnutChartPlugin,
        ]
    });
    return chart
}

let updateCostsChart = function() {
    let chart = closedCostData.chart;
    let years = closedCostData.sliderDOM.value;
    let costArray = closedCostData.costArray;
    closedCostData.yearsDOM.innerHTML = years;

    data = []
    for (cost of costArray) {
        if (years == 0) {
            data.push(0);
        } else if (cost.initialCost == 0) {
            data.push(cost.annualCost * years);
        } else {
            data.push(cost.initialCost + cost.annualCost * (years - 1));
        }
    }
    totalCost = data.reduce((cost, total) => cost + total);
    console.log(totalCost);

    let dataset = chart.data.datasets[0];
    let chartData = dataset.data
    for (i in chartData) {
        chartData[i] = data[i]; 
    }

    chart.options.plugins.title.text = "Total Cost of Closed Source Software Over " + years + " Year(s)";
    dataset.label = "Cost of Software Over " + years + " Year(s)";
    chart.options.plugins.doughnutCenterText.text = "$"+totalCost;
    chart.update();
}

let closedCostData = {
    sliderDOM: null,
    yearsDOM: null,
    chart: null,
    costArray: null,
}

let createClosedCostArea = function() {
    const ctx = document.getElementById('closedCostCanvas');

    closedCostData.chart = createCostsChart(ctx, individaulMechSoftwareCosts, years = 0);
    closedCostData.sliderDOM = document.getElementById("closedCostRange");
    closedCostData.yearsDOM = document.getElementById("closedCostYearsCounter");
    closedCostData.costArray = individaulMechSoftwareCosts;
    
    // Remove the backup image because javascript is enabled
    let backupImage = document.getElementById('closedCostBackupImage');
    backupImage.parentElement.removeChild(backupImage);
    
    // Enable the slider
    closedCostData.sliderDOM.oninput = updateCostsChart;
    closedCostData.sliderDOM.min = 0;
    closedCostData.sliderDOM.max = 10;

    // Update the chart
    updateCostsChart();
}

let main = function() {
    createClosedCostArea();
}

window.onload = main;
