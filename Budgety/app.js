//DRY - Dont repeat yourself principle

//Modules - place peices of code related to one another inside of one independet unit
//Data encapsulaton- Hide implementation details from specific modules and only expose specific functionality - which are called apis
//SOC - each part of the application should only be interested in doing one thing independently
//Event Delegation - Event Bubbling - use cases
//---When we have an element with lots of child elements then add event listener on parent and use target to figure out who
//fired event 
//---When we want event handler to be attached to an element which is not part of the dom now and will be available in DOM
//in later point of time - then assign event handler on parent element


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
        },
        budget: 0,
        percentage: -1
    };

    function calculateTotal(type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum = sum + cur.value;
        });
        console.log('totoals - ' + type, sum);
        // data.totals[type] = sum;
        if (type === 'exp')
            data.totals.exp = sum;
        else
            data.totals.inc = sum;
        // console.log(data);
    }

    function deleteItem(type, id) {
        data.allItems[type] = data.allItems[type].map(function (item) {
            return item.id === id;
        });
    }

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
        },
        calculateBudget: function () {
            //Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //Calculate the budget income and expenses            
            data.budget = data.totals.inc = data.totals.exp;

            //Calculate the total income that we spent
            if (data.totals.inc > 0)
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            else
                data.percentage = -1;
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalExp: data.totals.exp,
                totalInc: data.totals.inc,
                percentage: data.percentage
            }
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
        expenseContainer: '.expenses__list',
        budgteLAbel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLAbel: '.budget__income--percentage',
        container: '.container'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.expenseType).value,
                description: document.querySelector(DOMStrings.expenseDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.expenseValue).value)
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
        },
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgteLAbel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.inc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.exp;
            if (obj.percentage > 0)
                document.querySelector(DOMStrings.percentageLAbel).textContent = obj.percentage;
            else
                document.querySelector(DOMStrings.percentageLAbel).textContent = '---';
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
        });
        document.querySelector(domStrings.container).addEventListener('click', ctrlDeleteItem);
    }
    var ctrlAddItemToList = function () {
        var input, newItem

        //1. Get the field input Data
        input = uiCtrl.getInput();

        //2. Add the item to budget list
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)

        if (newItem.description !== '' && !isNaN(newItem.value) && input.value > 0) {

            //3. Add the new item to interface
            uiCtrl.addListItem(newItem, input.type)

            //4. Clear Input fields
            uiCtrl.clearInputs();

            //5. Update budget
            updateBudget()
        }
    }

    function updateBudget() {
        var budget;
        //Calculate the budget
        budgetCtrl.calculateBudget();

        //Return the budget
        budget = budgetCtrl.getBudget();

        budget = {
            budget: 2800,
            exp: 1200,
            inc: 4000,
            percentage: 30
        }

        //Update UI
        uiController.displayBudget(budget);

    }

    function ctrlDeleteItem(event) {
        var itemID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            //Delete the item from datasiurce

            //Delete the item from UI

            //Update and show new budget
        }
    }
    return {
        init: function () {
            console.log('App has started.');
            uiCtrl.displayBudget({
                budget: 0,
                exp: 0,
                inc: 0,
                percentage: -1
            });
            setUpEventListeners();
        }
    }
})(budgetController, uiController);

//Initialize the application
appController.init();