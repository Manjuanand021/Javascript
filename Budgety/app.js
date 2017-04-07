//DRY - Dont repeat yourself principle

//Modules - place peices of code related to one another inside of one independet unit
//Data encapsulaton- Hide implementation details from specific modules and only expose specific functionality - which are called apis
//SOC - each part of the application should only be interested in doing one thing independently

//Data manipulation
var budgetController = (function () {
    function Expense(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    function Income(id, description, value) {
        this.id = id;
        this.description = description;
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
        addExpenseBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
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
            var html, newHhtml, element;
            //Create HTML string with placeholder
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else {
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //Replace the placeholder text with some actula data - which is the data tat we recieve from obj
            newHhtml = html.replace('%id%', obj.id);
            newHhtml = newHhtml.replace('%description%', obj.description);
            newHhtml = newHhtml.replace('%value%', obj.value);
            //Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHhtml);
        },
        clearInputs: function () {
            var inputs = document.querySelectorAll(DOMStrings.expenseValue + ',' + DOMStrings.expenseDescription);
            //Use slice of prototype to convert NodeList to normal arrya
            inputs = Array.prototype.slice.call(inputs);
            inputs.forEach(function (input, index, arr) {
                input.value = '';
            })
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

        //3. Add the new item to interface
        uiCtrl.addListItem(newItem, input.type)
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