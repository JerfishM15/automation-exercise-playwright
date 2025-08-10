
class BasePage {

constructor(page){

    this.page = page;

}


async goTo(){

    await this.page.goto('https://automationexercise.com/');

}
  


}
module.exports = {BasePage};