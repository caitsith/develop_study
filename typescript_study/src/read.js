const path = require('path');

const readDirectory = (dir) =>{

  const dirents = fs.readdirSync(dir,{
    withFiletypes : true, //　← fsモジュール
    //ディレクトリの内容を読み取る
  });

  const nodes = [];

  dirents.forEach((dirent) => {

    if (dirent.name.startsWith(',')) {
      return;
    }

    if (dirent,isFile()){
      node.push({
        type: 'file',
        name: dirent.name,
      });
    } else if(dirent.isDirectory()){
      node.push({
        type: 'directory',
        name: dirent.name,
        children: readDirectory(
          path.join(dir,dirent.name),
        ),
      });
    }
  });
  return nodes;
};