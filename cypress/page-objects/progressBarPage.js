class ProgressBarPage {

    constructor(){
        this.startStopButton = "#startStopButton";
        this.progressBar="div[id='progressBar']>div";
    }

clickStartStopButton(){
    cy.get(this.startStopButton).click();
}

checkProgressBarValueNumber(eq ,number){
    cy.get(this.progressBar).should('have.attr', 'aria-valuenow').and(eq, number)
}

}
export const progressBarPage = new ProgressBarPage();