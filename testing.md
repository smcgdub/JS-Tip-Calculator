# **Simple JavaScript Tip Calculator Testing**
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

### **3. JavaScript Specific Testing** ###

* This section is the most detailed and contains all the information from all of the testing of each Javascript file.

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

**2.1 Manual testing desktop**

All desktop testing was carried out on Chrome, FireFox and Safari. 

**1. Navbar**

**2. User Inputs**

**3. Action Buttons**

**4. Bill Breakdown**

**5. Footer**
</details>

<hr>

<details>
<summary><strong>2.1 Manual testing mobile</strong></summary>
<br/>

**1. Navbar**

**2. User Inputs**

**3. Action Buttons**

**4. Bill Breakdown**

**5. Footer**
</details>

<hr>

<details>
<summary><strong>3. JavaScript Specific Testing</strong></summary>

There is only 1 single JavaScript file in the project which is the app.js file

**TESTING OF THE APP.JS FILE**

The testing for the app.js file was carried out on [JShint.com](https://jshint.com/) The results from the test were as follows:

![Image of app.js file test results](assets/readme-images/app-js-test-results.png)

### **D) Console Testing** ###

</details>

<hr>
