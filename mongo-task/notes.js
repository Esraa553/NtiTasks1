yargs.command({
    command: "addNewCustomer",
    describe: "add new customer to our file",
    builder: {
        name: { type: 'string', demandOption: true },
        balance: { type: 'number' },
        accountnumber:{type:'number', demandOption:true}  
    },
    handler: function (argv) {
        data = readFileData()
        accountnumbers = []
        data.forEach(element => {
            accountnumbers.push(element.accountnumber)
        });
        existnum=accountnumbers.find(num => num=argv.accountnumber)
        
        if(existnum) {
            console.log("this Number is exist before")
        }
        else{        
            let customer = { name: argv.name, balance: argv.balance, 
                accountnumber: argv.accountnumber }
            addCustomer(customer)    
        }
    }
})


// fs.writeFileSync('mynotes.json', "[]")
// let readDataOfCustmer=function(){
//     data = fs.readFileSync('mynotes.json')
//     data=JSON.parse(data.toString())
//     return data 
// }
// readDataOfCustmer()