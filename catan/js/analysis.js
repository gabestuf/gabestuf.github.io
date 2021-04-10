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

    //local storage
    // to store multiple games, have an ID generator 
    // 1 storage variable that stays constant which holds all the IDs, 
    // then each local game with ID as the key
    /*
        localStorage.setItem('catan', gameLogJSON);
    
        var JSONGameString = localStorage.getItem('catan');  
        var CatanJsonObject = JSON.parse(JSONGameString);
        console.log('end');
        console.log(CatanJsonObject[2].resourcesGained); //Array index is turn# - 1, this would have been the resources gained on turn 3
    */
});

analysisBtn.addEventListener('click', () => {
    dicePanel.style.display = 'none';
})