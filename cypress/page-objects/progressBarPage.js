class ProgressBarPage {

    constructor(){
        this.startStopButton = "#startStopButton";
        this.progressBar="div[id='progressBar']>div";
        this.resetBtn= "#resetButton";
    }

clickStartStopButton(){
    cy.get(this.startStopButton).click();
}

checkProgressBarValueNumber(number){
    cy.get(this.progressBar).should('have.attr', 'aria-valuenow', number)
}

checkProgressBarValueNumberWithTimeout(timeoutNum, number){
    cy.get(this.progressBar, { timeout: timeoutNum }).should('have.attr', 'aria-valuenow', number)
}

clickResetBtn(){
    cy.get(this.resetBtn).click();
}

}
export const progressBarPage = new ProgressBarPage();