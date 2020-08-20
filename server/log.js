const fs = require('fs');

const log = (prodName, action) =>{
    fs.readFile('./server/db/stat.json', 'utf-8', (err, data) => {
        if (err){
            console.log(err);
        }else{
            const stat = JSON.parse(data);
            stat.push({
                name: prodName,
                action: action,
                date: '1 jan 2019',
            });
            fs.writeFile('./server/db/stat.json', JSON.stringify(stat, null, 4), err =>{
                if (err){
                    console.log(err);
                }
            })

        }
    })
};


module.exports = log;
