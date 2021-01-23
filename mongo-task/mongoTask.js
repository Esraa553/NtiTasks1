const fs =require('fs')
const yargs = require('yargs')
const { MongoClient , ObjectID } =require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const dbName="bank"
yargs.command ({
    command:'addCustomer',
    describe: 'add customer to our bank',
    builder:{
        name: { type: 'string', demandOption: true },
        balance: { type: 'number' },
        accountnumber:{type:'number', demandOption:true}  
    },
    handler : function (argv) {
        MongoClient.connect(connectionURL,{useNewUrlPars:true},(err,client)=>{
        if(err) return console.log('db error')  
        const db = client.db(dbName)
        console.log('connected') 
        db.collection('Accounts').insertOne( { name: argv.name, balance: argv.balance, 
            accountnumber: argv.accountnumber }
       ) 

        db.collection('Accounts').find({accountnumber:argv.accountnumber}
            .toArray( (err,data)=>{if(accountnumber) {
                console.log("this Number is exist here")
            }
            else{        
                db.collection('Accounts').insertOne( { name: argv.name, balance: argv.balance, 
                    accountnumber: argv.accountnumber }
               )    
            }
        })
       ) 

    })
}

})
yargs.argv

