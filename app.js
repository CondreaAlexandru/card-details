const cardNameText = document.querySelector('.card-name')
const cardNameInput = document.querySelector('#card-name-input')
const cardNumberText = document.querySelector('.card-number')
const expDateTxt = document.querySelector('.exp-date')
const dateMonthInp = document.getElementById('month')
const dateYearInp = document.getElementById('year')
const cvcTxt = document.querySelector('.cvc')
const cvcInp = document.getElementById('cvc-inp')
const conf = document.querySelector('#confirm')
const confirmDiv = document.querySelector('.right-container')

cardNameInput.addEventListener('keyup', addNameCard)
dateMonthInp.addEventListener('keyup', expDate)
dateYearInp.addEventListener('keyup', expDate)
cvcInp.addEventListener('keyup', addCvc)
conf.addEventListener('click', submit)

function addNameCard(){
    if (cardNameText.textContent.length < 20) {
        cardNameText.textContent = cardNameInput.value
    }else {
    console.log("Name to long")
}
}


function formats(ele,e){
    if(ele.value.length<19){
      ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }else{
      return false;
    }
  }
  
  function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    if(cardNumberText.textContent == "") {
        cardNumberText.textContent = "0000 0000 0000 0000"
    } else {
        cardNumberText.textContent = e.target.value
    }
  }

  function expDate() {
    if(dateMonthInp.value < 10){
        expDateTxt.textContent = `0${dateMonthInp.value}/${dateYearInp.value}`
    }else if(dateMonthInp.value > 12) {
        alert("Month number need to be 1 to 12")
    } else {
        expDateTxt.textContent = `${dateMonthInp.value}/${dateYearInp.value}`
    }
  }

  function addCvc(){
    cvcTxt.textContent = cvcInp.value
  }


  function submit(){
    document.querySelector('.input-details').style.display = "none"
    confirmDiv.innerHTML = `
    <img src="images/icon-complete.svg"/>
    <h1>Thank you</h1>
    <p>We've added your card details.</p>
    <a href="index.html"><input type="submit" value="Continue"></a>
    `
  }