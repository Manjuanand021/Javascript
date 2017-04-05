//DRY - Dont repeat yourself principle

//Modules - place peices of code related to one another inside of one independet unit
//Data encapsulaton- Hide implementation details from specific modules and only expose specific functionality - which are called apis
//SOC - each part of the application should only be interested in doing one thing independently

//Data manipulation
var budgetController = (function () {

})();

//UI view updates and other things
var uiController = (function () {

})();

//Main Controller - Evets and Eventhandlers
//if the budgetControllerand uiController name changes you dont have change the names everywhere inside appController
//thats why different name
var appController = (function (budgetCtrl, uiCtrl) {

    var ctrlAddItemToList = function () {
        //1. Get the field input Data

        //2. Add the item to budget Controller

        //3. Add thenew item to interface

        //4. Calculate the budget

        //5. Need to display the budget
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItemToList);

    document.addEventListener('keypress', function (event) {
        //use which for older browsers
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItemToList();
        }
    })


})(budgetController, uiController);