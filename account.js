var AvailbalBalance = 0;
        document.getElementById("submit").addEventListener('click', () => {

            var ViewLogic = (function () {

                var CnrNumber = document.getElementById("cnr")
                var AccountHolderName = document.getElementById("name")
                var AccountNumber = document.getElementById("number")
                var deposit = document.getElementById("deposit")
                var AvailbalBalance = document.getElementById("balance")
                var withdraw = document.getElementById("withdraw")
                var Amount = document.getElementById("amount")
                var select1 = document.getElementById("select1")
                var select2 = document.getElementById("select2")
                var submit = document.getElementById("submit");

                return {

                    data: {

                        CnrNumber: CnrNumber,
                        AccountHolderName: AccountHolderName,
                        AccountNumber: AccountNumber,
                        deposit: deposit,
                        AvailbalBalance: AvailbalBalance,
                        withdraw: withdraw,
                        select1: select1,
                        Amount: Amount,
                        submit: submit,
                    }
                }

            })();


            var controllerLogic = function (ViewLogic) {


                var amount = (Number)(ViewLogic.data.Amount.value)
                var sel1 = ViewLogic.data.select1.selectedIndex

                if (sel1 === 1) {
                    if(amount <=0) {
                        alert("Please make a deposit more than 0");
                    }
                    else {
                        ViewLogic.data.withdraw.value = "";
                    ViewLogic.data.deposit.value = amount;
                    AvailbalBalance = AvailbalBalance + amount;
                    ViewLogic.data.AvailbalBalance.value = AvailbalBalance;
                    }
                  
                       
                    }
                   

                
                else {
                    if( amount > AvailbalBalance || amount <= 0){
                        alert("Please make a deposit. Your account does not have sufficient funds");
      
                    } 
                    else {
                    ViewLogic.data.deposit.value = "";
                    ViewLogic.data.withdraw.value = amount;
                    AvailbalBalance = AvailbalBalance - amount;
                    ViewLogic.data.AvailbalBalance.value = AvailbalBalance;
                }
            }

                modelLogic(ViewLogic, controllerLogic)


            }
            controllerLogic(ViewLogic)

            function modelLogic(ViewLogic, controllerLogic) {

                var sel1 = ViewLogic.data.select1.selectedIndex

                var table = document.getElementById("displaytable");

                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                if (sel1 == 1) {

                    cell1.innerHTML = ViewLogic.data.deposit.value
                }
                else {

                    cell2.innerHTML = ViewLogic.data.withdraw.value
                }

            }

        })