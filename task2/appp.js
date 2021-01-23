const fs = require('fs')
let custmers={name:'esraa',balance:5000,accNum:1}
const yargs = require('yargs');
yargs.command({
    command :"addCustmer",
    describe:"add custmers& his balance",
    builder :{ 
        name:{ demandOption:true, describe:"name of user", type:"string"},
        balance:{type:"number"},
        accNum:{demandOption:true,describe:"salary of user",type:"number"} 
    },
    handler :function(argv){
     let  dataofCustmer = []
     let addNewcustmer=function(custm){
         dataofCustmer.push(custm)
         fs.writeFileSync('mynotes.json', JSON.stringify(dataofCustmer))
    }
     addNewcustmer(argv.custmers)

      let   data = readFileData()
            accountnumbers = []
            data.forEach(element => {
                accountnumbers.push(element.accNum)
            });
            existnum=accountnumbers.find(num => num=argv.accNum)
            
            if(existnum) {
                console.log("this Number is exist before")
            }
            else{        
                let customer = { name: argv.name, balance: argv.balance, 
                    accountnumber: argv.accNum }
                addCustomer(customer)    
            }
    }
})
yargs.argv






/* to run func arge---> node nameoffile name of commend --varname=value of var etc..
ex --> node app.js adding --name=esraa --age=23 */