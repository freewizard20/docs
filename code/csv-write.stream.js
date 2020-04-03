let fs = require('fs');
let csvWriter = require('csv-write-stream');
let cron = require('node-cron');

let output_path1 = 'out2.csv';
let output_path2 = 'out2.csv';

writer1 = csvWriter({ headers: ["timestamp", "price"], sendHeaders: false });
writer1.pipe(fs.createWriteStream(output_path1, { flags: 'a' }));

writer2 = csvWriter({ headers: ["timestamp", "price"], sendHeaders: false });
writer2.pipe(fs.createWriteStream(output_path2, { flags: 'a' }));

cron.schedule('* * * * * *',()=>{
    writer1.write({
        timestamp : Date.now(),
        price : 'writer1'
    });
    writer2.write({
        timestamp : Date.now(),
        price : 'writer2'
    });   
});

cron.schedule('* * * * *',()=>{
    writer1.end();
    output_path1 = 'data/second ' + Date.now() + '.csv';
    writer1 = csvWriter({ headers: ["timestamp", "price"], sendHeaders: false });
    writer1.pipe(fs.createWriteStream(output_path1, { flags: 'a' }));
});