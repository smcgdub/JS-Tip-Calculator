d# **Simple JavaScript Tip Calculator Testing**
![Homepage displayed on multiple devices](assets/images/am_i_responsive.png)
>
## **Table of contents** ##

### **1. Automated Testing** ###

* 1.1 HTML Code Validating 
* 1.2 CSS Code Validating 
* 1.3 JavaScript Validating 

### **2. Manual Testing** ###

* 2.1 Manual testing desktop
* 2.2 Manual testing mobile

### **3. JavaScript Console Testing** ###

* 3.1 Test results from the console

<hr>

<details>
<summary><strong>1. Automated Testing</strong></summary>
<br>

**1.1 HTML Code Validating**

* All of the HTML files were tested on the [W3C HTML Markup Validation website](https://validator.w3.org/)
* All of the files came back clear with the result of **"Document checking completed. No errors or warnings to show"**

![No errors found HTML](assets/images/html_code_test.png)

**1.2 CSS Code Validating**

* The main CSS files were tested on the [W3C CSS  Validation website](https://jigsaw.w3.org/css-validator/) 
* All of the files came back clear with the result of **"Congratulations! No Error Found."**

![No errors found CSS](assets/images/css_code_test.png)

**1.3 JavaScript Code Validating**
* The main JavaScript file was tested on the [JSHint website](https://jshint.com/) 
* All of the files came back clear with no errors. The report can be found below:

![JSHint Metrics](assets/images/jshint_metrics.png)

* JSHint did state that the below variable is unused

![JSHint Unused variable](assets/images/jshint_variable.png)

* however this isn't correct that that variable is used in the line of code <br>

`let uiEachPersonPays = document.getElementById('each_person_pays_display').value = parseFloat(uiBillTotalDisplay / uiNumberOfPeopleInput).toFixed(2);
`

</details>

<hr>

<details>
<summary><strong>2. Manual Testing</strong></summary>
<br>

#### **2.1 Manual testing desktop**

* All desktop testing was carried out on Chrome, FireFox, Safari and Opera. 

**i. Navbar**

* The Navbar is functioning as normal with no issues

**ii. User Inputs**

* The User Inputs are functioning as normal with no issues

**iii. Action Buttons**

* The Action Buttons are functioning as normal with no issues

**iv. Bill Breakdown**

* The Action Buttons are functioning as normal with no issues

**v. Footer**

* The footer is static and has no functioning parts. It is being displayed as normal.


#### **2.2 Manual testing mobile**

* All mobile testing was carried out on tablet and mobile phones using Chrome, FireFox and Opera. To save repetition, unless there has been an issue highlighted below, then the site has functionality is normal. 

**i. Navbar**<br>
**ii. User Inputs**<br>
**iii. Action Buttons**<br>
**iv. Bill Breakdown**<br>
**v. Footer**<br>
</details>

<hr>

<details>
<summary><strong>3. JavaScript Console Testing</strong></summary>
<br/>

#### **3.1 Console Testing**

* There are no errors displaying when the console testing was carried out
</details>

<hr>
