//DRY - Dont repeat yourself principle

//Modules - place peices of code related to one another inside of one independet unit
//Data encapsulaton- Hide implementation details from specific modules and only expose specific functionality - which are called apis
//SOC - each part of the application should only be interested in doing one thing independently

//Data manipulation
var budgetController = (function () {
    function Expense(id, description, value) {
        this.id = id;
        this.expenseDescription = description;
        this.value = value;
    }

    function Income(id, description, value) {
        this.id = id;
        this.expenseDescription = description;
        this.value = value;
    }

    //Data structure to store all the data
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;
            //Create new id - last id +1 
            if (data.allItems[type].length > 0)
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            else
                ID = 0;
            //create new itsm exp or inc
            if (type === 'exp')
                newItem = new Expense(ID, desc, val);
            else
                newItem = new Income(ID, desc, val);

            //Push the item on to our data structure
            data.allItems[type].push(newItem);
            //Return the new item created
            return newItem;
        },
        testing: function () {
            console.log(data);
        }
    }



})();

//UI view updates and other things
var uiController = (function () {
    var DOMStrings = {
        expenseType: '.add__type',
        expenseDescription: '.add__description',
        expenseValue: '.add__value',
        addExpenseBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.expenseType).value,
                description: document.querySelector(DOMStrings.expenseDescription).value,
                value: document.querySelector(DOMStrings.expenseValue).value
            }
        },
        getDOMStrings: function () {
            return DOMStrings;
        },
        addListItem: function (obj, type) {
            var html;
            //Create HTML string with placeholder
            if (type === 'inc')
                html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            else
                html = '<div class="item clearfix" id="income-1"><div class="item__description">Sold car</div><div class="right clearfix"><div class="item__value">+ 1,500.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>;'
            //Replace the placeholder text with some actula data - which is the data tat we recieve from obj

            //Insert HTML into DOM
        }
    }
})();

//Main Controller - Evets and Eventhandlers
//if the budgetControllerand uiController name changes you dont have change the names everywhere inside appController
//thats why different name
var appController = (function (budgetCtrl, uiCtrl) {
    var setUpEventListeners = function () {
        var domStrings = uiCtrl.getDOMStrings();
        document.querySelector(domStrings.addExpenseBtn).addEventListener('click', ctrlAddItemToList);
        document.addEventListener('keypress', function (event) {
            //use which for older browsers
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItemToList();
            }
        })
    }
    var ctrlAddItemToList = function () {
        var input, newIteml

        //1. Get the field input Data
        input = uiCtrl.getInput();

        //2. Add the item to budget list
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)
        //3. Add thenew item to interface

        //4. Calculate the budget

        //5. Need to display the budget
    }

    return {
        init: function () {
            console.log('App has started.');
            setUpEventListeners();
        }
    }
})(budgetController, uiController);

//Initialize the application
appController.init();