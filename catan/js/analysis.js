finishBtn.addEventListener('click', () => {
    rollAgainBtn.style.display = 'none';
    logBtn.style.display = 'none';
    finishBtn.style.display = 'none';
    buildSettlementBtn.style.display = 'none';
    gameLogJSON = JSON.stringify(player.turnInformation, null, "\t");
    console.log(gameLogJSON);
});

analysisBtn.addEventListener('click', () => {
    console.log('test');
    const backgroundWrapper2 = document.createElement('div');
    backgroundWrapper2.className = 'backgroundWrapper2';
    backgroundWrapper2.innerHTML = "hello";

    var analysisContainer = document.createElement("div");
    analysisContainer.className = 'analysisContainer';
})