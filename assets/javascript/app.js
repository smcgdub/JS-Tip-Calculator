// Buttons 
const calculateBtn = document.getElementById('calculate_btn');
const resetBtn = document.getElementById('reset_btn');

calculateBtn.addEventListener('click', function(){
  // Variables
  let uiBillTotalInput = parseFloat(document.getElementById('bill_total_input').value);
  let uiTipPercentInput = parseFloat(document.getElementById('tip_percent_input').value);
  let uiNumberOfPeopleInput = parseInt(document.getElementById('number_of_people_input').value);

  // Equations
  // Tip amount
  let tipAmount = document.getElementById('tip_percent_display').value = 
  parseFloat((uiBillTotalInput) * parseFloat(uiTipPercentInput) / 100).toFixed(2);
  // Total Bill
  let uiBillTotalDisplay = document.getElementById('bill_total_display').value = 
  parseFloat((uiBillTotalInput) + parseFloat(tipAmount)).toFixed(2);
  // Price per person
  let uiEachPersonPays = document.getElementById('each_person_pays_display').value = parseFloat(uiBillTotalDisplay / uiNumberOfPeopleInput).toFixed(2);
  console.log("Total Bill" + uiBillTotalInput)
  console.log("Tip Amount" + tipAmount)
  console.log("Price per person" + uiEachPersonPays)
  console.log("Total bill" + uiBillTotalDisplay)
});

// Reset Calculator Button
resetBtn.addEventListener('click', function(){
  document.getElementById('bill_total_input').value = '';
  document.getElementById('tip_percent_input').value = '';
  document.getElementById('number_of_people_input').value = '';
  document.getElementById('bill_total_display').value = '';
  document.getElementById('tip_percent_display').value = '';
  document.getElementById('each_person_pays_display').value = '';
});