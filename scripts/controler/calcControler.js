class CalcControler{

    constructor(){

        this._locale = ('pt-BR');
        this._displayCalcEl = document.querySelector('#display');
        this._dataEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
       
        this.currentDate; 
        this.initialize();
        this.iniButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
           element.addEventListener(event, fn, false);
        });

    }



    iniButtonsEvents(){    

        let buttons = document.querySelectorAll ("#buttons > g, #parts > g");
   
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag mouseover", e => {

                console.log(btn.className.baseVal.replace("btn-",""));
    
            });

        });
    
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);


    }

    get displayTime (){
        return this._timeEl.innerHTML;
    }

    set displayTime (value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        return this._dataEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;

    }

}