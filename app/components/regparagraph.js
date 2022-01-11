import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RegparagraphComponent extends Component {
    @tracked para = `Welcome to RegEx Rex! This is a simple application to practice RegEx. Try RegEx expressions with this example or use your own. Simply type in a new paragraph in the second input and hit "Paragraph Submit." The first input is reserved for the RegEx expression. Type in a JavaScript-based RegEx expression, and hit "RegEx Submit."`
    @tracked paraSolid = `Welcome to RegEx Rex! This is a simple application to practice RegEx. Try RegEx expressions with this example or use your own. Simply type in a new paragraph in the second input and hit "Paragraph Submit." The first input is reserved for the RegEx expression. Type in a JavaScript-based RegEx expression, and hit "RegEx Submit."`

    @tracked pInput = "";
    @tracked rInput = "\b\w{4}\b";
    @tracked rVal = "";


    @action
    changeParagraph() {
        this.pInput = document.getElementsByClassName("pInput")[0].value
        console.log(this.pInput)
        this.para = this.pInput
        this.paraSolid = this.pInput

    }

    @action
    regexFind() {
        this.para = this.paraSolid
        this.pInput = document.getElementsByClassName("rInput")[0].value
        this.rVal = new RegExp(this.pInput, "g")
        console.log(this.rVal, this.para)
        this.para = this.para.replace(this.rVal, `<span>$&</span>`)
        
    }
}
