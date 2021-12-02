// const tutorial = require('./tutorial');
// console.log(tutorial.sum(3,4));
// console.log(tutorial.sub(3,4));
// console.log(tutorial.mul(3,4));


// sum(1,4);

/*
//  EventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('testing', (num1, num2) =>{
    console.log( "sum is",num1+num2);
})

eventEmitter.emit('testing', 1 , 50);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let name1= new Person("Piyush");
name1.on("name", ()=>{
    console.log("My name is", name1.name);
})

name1.emit("name");
*/

/*
// ReadLine 
const readline = require('readline');
const r1 = readline.createInterface({input: process.stdin , output: process.stdout});

let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);
let answer = num1+ num2;

r1.question(`What is ${ num1 } + ${ num2}? \n`,
    (userInput) => {
        if(userInput.trim() == answer){
            r1.close();
        }else{
            r1.setPrompt('Incorrect Response Please try Again\n');
            r1.prompt();
            r1.on('line',(userInput)=>{
                if(userInput.trim() == answer){
                    r1.close();
                }else{
                    r1.setPrompt(`Your Respose ${userInput} is wrong. Please try Again !\n`);
                    r1.prompt();
                }
            })
        }
    }
);

r1.on('close', ()=>{
    console.log('Correct!!!');
})

*/

/*
// File System Module
const fs = require('fs');

//create, rename, append, delete  a file 
fs.writeFile('example.txt', 'Testing 102', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File Created Successfully');
        fs.readFile('example.txt','utf8', (err,file)=>{
            if(err)
                console.log(err);
            else{
                console.log(file);
            }
        })
    }
})

fs.rename('example.txt', 'newName.txt', (err) =>{
    if(err) console.log(err);
    else console.log('File Renamed Successfully');
});

fs.appendFile('newName.txt', '\nThoda sa aur data added', (err)=>{
    if(err) console.log(err);
    else console.log('Added in File Successfully');
})

fs.unlink('newName.txt', (err)=>{
    if(err) console.log(err);
    else console.log('Deleted Successfully');
})
*/


/*
// Folder Creation and Deletion
const fs = require('fs');

// fs.mkdir('Testing', (err)=>{
//     if(err) console.log(err);
//     else console.log('Folder created Successfully');
// })

// fs.rmdir('Testing', (err)=>{
//     if(err) console.log(err);
//     else console.log('Folder deleted Successfully');
// })

// Creating File Inside a Folder
// fs.mkdir('Testing', (err)=>{
//     if(err) console.log(err);
//     else
//     {
//         fs.writeFile('./Testing/example.txt' , 'kuch bhi matlab kuch bhi', (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('File Created Successfully');
//                 fs.readFile('./Testing/example.txt','utf8', (err,file)=>{
//                     if(err)
//                         console.log(err);
//                     else{
//                         console.log(file);
//                     }
//                 })
//             }
//         })
//     }
// })

// delete folder with file (delete all inside file then delete directory)
fs.readdir('Testing', (err, files)=>{
    if(err) console.log(err);
    else{
        for( let file of files){
            let path = './Testing/'+file;
            console.log(path);
            fs.unlink(path, (err)=>{
                if(err) console.log(err);
                else console.log(`${file} Deleted Successfully`);
            })
        }

        fs.rmdir('Testing', (err)=>{
            if(err) console.log(err);
            else console.log('Folder deleted Successfully');
        })
    }
});
*/

/*
// Redable and Writable Streams works on very very large FILES also where readFile method fails miserably 
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./test.txt', 'utf8');
const writeStream = fs.createWriteStream('example.txt');


// readStream.on('data', (chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
//})

// Instead of writing above code use pipe instead
readStream.pipe(writeStream);
*/


/*
// Zip
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./test.txt', 'utf8');
const writeStream = fs.createWriteStream('tester123.txt.gz');


// readStream.on('data', (chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
//})

// Instead of writing above code use pipe instead
readStream.pipe(gzip).pipe(writeStream);
*/

/*
// UNZIP
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip(); 

const readStream = fs.createReadStream('./tester123.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');


// readStream.on('data', (chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
//})

// Instead of writing above code use pipe instead
readStream.pipe(gunzip).pipe(writeStream);
*/

const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url=== '/come'){
        res.write('Hellp World I am coming back soon');
        res.end();
    }else{
        res.write('WTF BRO');
        res.end();
    }
});

server.listen('3000');