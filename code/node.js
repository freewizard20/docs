const fs = require('fs')

async function ls(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    console.log(dirent.name)
  }
}

ls('.').catch(console.error)


// WRITE FILE
for(let i = 0 ; i < 10 ; i++){
    fs.writeFileSync('data/'+i+'.csv', 'content : hello world');
}

// READ DIRECTORY FILES
fs.readdir('.', (err, files)=>{
    for (const dirent of files){
        console.log(dirent);
    }
});

// DELETE FILE
fs.unlink('./dummy.js',(err)=>{
    if(err) {
        console.log('wtf');
    }
});
