finishBtn.addEventListener('click', () => {
    rollAgainBtn.style.display = 'none';
    logBtn.style.display = 'none';
    finishBtn.style.display = 'none';
    buildSettlementBtn.style.display = 'none';
    robberBtn.style.display = 'none';
    diceButtonContainer.style.display = 'none';
    diceAreaContainer.style.display = 'none';

    diceSumLabel.innerHTML = 'Game Over';
    finishLayer.style.display = 'block';

    gameLogJSON = JSON.stringify(player.turnInformation, null, "\t");
    console.log(gameLogJSON);
});

analysisBtn.addEventListener('click', () => {
    dicePanel.style.display = 'none';
    analysisWrapper.style.display = 'block';

    makeCharts(gameLogJSON);
});

//Testing
//makeCharts('');

function makeCharts(gameLog) {
    // TEST DATA
    //gameLog = '[{"turn": 1,"redDie": 4,"yellowDie": 6,"sum": 6,"resourcesGained": ["mud"],"resourcedBlocked": []},{"turn": 2,"redDie": 3,"yellowDie": 3,"sum": 6,"resourcesGained": ["rock"],"resourcedBlocked": []},{"turn": 3,"redDie": 1,"yellowDie": 6,"sum": 7,"resourcesGained": [],"resourcedBlocked": []},{"turn": 4,"redDie": 5,"yellowDie": 5,"sum": 10,"resourcesGained": ["mud"],"resourcedBlocked": []},{"turn": 5,"redDie": 4,"yellowDie": 6,"sum": 10,"resourcesGained": ["tree","mud","sheep","wheat"],"resourcedBlocked": ["rock","sheep"]}]'

    const parsedJSON = JSON.parse(gameLog);
    var jsonArrayObj = {
        "jsonarray": parsedJSON
    }

    //SIDEBAR 
    sideBarLogging(parsedJSON);

    const listOfResources = ['wheat', 'sheep', 'rock', 'mud', 'tree'];

    var turnNumberData = jsonArrayObj.jsonarray.map(function (e) {
        return e.turn;
    });
    var redDieData = jsonArrayObj.jsonarray.map(function (e) {
        return e.redDie;
    });
    var yellowDieData = jsonArrayObj.jsonarray.map(function (e) {
        return e.yellowDie;
    });
    var sumData = jsonArrayObj.jsonarray.map(function (e) {
        return e.sum;
    });
    var resourcesGainedArrayData = jsonArrayObj.jsonarray.map(function (e) {
        return e.resourcesGained;
    });
    var resourcedBlockedArrayData = jsonArrayObj.jsonarray.map(function (e) {
        return e.resourcedBlocked;
    });



    //chart colors 
    const wheatColor = 'rgba(255,255,7,1)';
    const sheepColor = 'rgba(139,255,178,1)';
    const rockColor = 'rgba(193,193,193,1)';
    const mudColor = 'rgba(255,120,22,1)';
    const treeColor = 'rgb(0,155,0,1)';

    const twoColor = 'rgba(255,250,250,1)';
    const threeColor = 'rgba(255,200,200,1)';
    const fourColor = 'rgba(255,150,150,1)';
    const fiveColor = 'rgba(255,100,100,1)';
    const sixColor = 'rgba(255,50,50,1)';
    const sevenColor = 'rgba(255,0,0,1)';
    const eightColor = 'rgba(255,50,50,1)';
    const nineColor = 'rgba(255,100,100,1)';
    const tenColor = 'rgba(255,150,150,1)';
    const elevenColor = 'rgba(255,200,200,1)';
    const twelveColor = 'rgba(255,250,250,1)';

    //Count resources gained
    var resourcesGainedData = getElementsOfListOfArrays(resourcesGainedArrayData);
    var resourcedBlockedData = getElementsOfListOfArrays(resourcedBlockedArrayData);
    var numberOfResourcesGained = countResources(resourcesGainedData);
    //count resources blocked
    //[0] = wheat, sheep, rock, mud, tree

    //Charts default 
    Chart.defaults.font.size = '18';
    Chart.defaults.color = 'black';
    Chart.defaults.borderColor = 'rgba(0,0,0,.5';




    // CHART #1, sum of both dice
    var ctx = document.getElementById('gridElement1').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [{
                label: '',
                data: countSumData(sumData),
                backgroundColor: [twoColor, threeColor, fourColor, fiveColor, sixColor, sevenColor, eightColor, nineColor, tenColor, elevenColor, twelveColor]
            }]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Times Rolled',
                        font: {
                            size: 10
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Sum',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            layout: {
                padding: 50
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Dice Rolls | ' + sumData.length + ' Total Rolls',
                    font: {
                        size: 40
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: function (tooltipItem) {
                            return 'Dice Rolls: ' + countSumData(sumData)[Number(tooltipItem[0].dataIndex)];
                        },
                        label: function (tooltipItem) {
                            return "     " + ((tooltipItem.dataset.data[tooltipItem.dataIndex] / sumData.length) * 100).toFixed(2) + "%";
                        }
                    }
                }
            }
        }
    };

    // CHART #2, ratio of resources gained pie chart
    var ctx2 = document.getElementById('gridElement2').getContext('2d');
    var config2 = {
        type: 'pie',
        data: {
            labels: listOfResources,
            datasets: [{
                label: 'Resource',
                data: numberOfResourcesGained,
                backgroundColor: [wheatColor, sheepColor, rockColor, mudColor, treeColor]
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Resource Ratio in Pie Form',
                    padding: 30,
                    position: 'top',
                    font: {
                        size: 40
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: function (tooltipItem) {
                            return tooltipItem[0].label + ' ' + tooltipItem[0].dataset.data[tooltipItem[0].dataIndex];
                        },
                        label: function (tooltipItem) {
                            return "     " + ((tooltipItem.dataset.data[tooltipItem.dataIndex] / (Number(tooltipItem.dataset.data[0]) + Number(tooltipItem.dataset.data[1]) + Number(tooltipItem.dataset.data[2]) + Number(tooltipItem.dataset.data[3]) + Number(tooltipItem.dataset.data[4]))) * 100).toFixed(2) + "%";
                        }
                    }
                }
            }
        }
    };

    var ctx3 = document.getElementById('gridElement3').getContext('2d');
    var config3 = {
        type: 'bar',
        data: {
            labels: listOfResources,
            datasets: [{
                label: '',
                data: numberOfResourcesGained, //need a list of number of each card drawn
                backgroundColor: [wheatColor, sheepColor, rockColor, mudColor, treeColor]
            }]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Number Of Resources',
                        font: {
                            size: 25
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Resource Name',
                        font: {
                            size: 25
                        }
                    }
                },
            },
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Resource Cards Drawn',
                    padding: 30,
                    position: 'top',
                    font: {
                        size: 40
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: function (tooltipItem) {
                            return tooltipItem[0].label + ' ' + tooltipItem[0].dataset.data[tooltipItem[0].dataIndex];
                        },
                        label: function (tooltipItem) {
                            return "     " + ((tooltipItem.dataset.data[tooltipItem.dataIndex] / (Number(tooltipItem.dataset.data[0]) + Number(tooltipItem.dataset.data[1]) + Number(tooltipItem.dataset.data[2]) + Number(tooltipItem.dataset.data[3]) + Number(tooltipItem.dataset.data[4]))) * 100).toFixed(2) + "%";
                        }
                    }
                }
            }
        }
    };

    //MAKE SURE TEST DATA IS COMMENTED OUT OTHERWISE U GET BIG ERROR AND STAY UP UNTIL 2AM UNTIL YOU FIX IT
    var diceSumChart = new Chart(ctx, config);
    var resourcePieChart = new Chart(ctx2, config2);
    var resourceBarChart = new Chart(ctx3, config3);
}

function getElementsOfListOfArrays(A) {
    var ans = [];
    for (array of A) {
        for (item of array) {
            ans.push(item);
        }
    }
    return ans;
}

var countOfEachResourceArray = []; //[0] = wheat, sheep, rock, mud, tree
function countResources(ArrayOfResources) {
    var ans = new Array(5);
    for (let i = 0; i < 5; i++) {
        ans[i] = 0;
    }
    for (resource of ArrayOfResources) {
        switch (resource) {
            case 'wheat':
                ans[0]++;
                break;
            case 'sheep':
                ans[1]++;
                break;
            case 'rock':
                ans[2]++;
                break;
            case 'mud':
                ans[3]++;
                break;
            case 'tree':
                ans[4]++;
                break;
            default:
                console.log('resource not found');
                break;
        }
    }
    return ans;
}

function countSumData(arrayOfSums) {
    var ans = new Array(11);
    for (let i = 0; i < 11; i++) {
        ans[i] = 0;
    }
    for (sum of arrayOfSums) {
        ans[sum - 2]++;
    }
    return ans;
}

// TEST DATA
gameLog = '[{"turn": 1,"redDie": 4,"yellowDie": 6,"sum": 6,"resourcesGained": ["mud"],"resourcedBlocked": []},{"turn": 2,"redDie": 3,"yellowDie": 3,"sum": 6,"resourcesGained": ["rock"],"resourcedBlocked": []},{"turn": 3,"redDie": 1,"yellowDie": 6,"sum": 7,"resourcesGained": [],"resourcedBlocked": []},{"turn": 4,"redDie": 5,"yellowDie": 5,"sum": 10,"resourcesGained": ["mud"],"resourcedBlocked": []},{"turn": 5,"redDie": 4,"yellowDie": 6,"sum": 10,"resourcesGained": ["tree","mud","sheep","wheat","tree","tree","mud","sheep","wheat","tree","tree","mud","sheep","wheat","tree","mud"],"resourcedBlocked": ["rock","sheep"]}]'

const parsedJSON = JSON.parse(gameLog);
var jsonArrayObj = {
    "jsonarray": parsedJSON
}


function sideBarLogging(json) {
    for (i of json) {
        sidebarElement.innerHTML += '<div class="sidebarContent"> <h6 class="sidebarTitle">Turn: ' + i.turn + '</h6> <p class="sidebarInfo"> Roll: ' + i.sum + '</p><p class="sidebarInfo"> Resources: ' + i.resourcesGained + '</p> </div>';
        //console.log(i);
    }
}

