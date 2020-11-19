const slug = function (title) {

  // const separateTitle = title.split(' ')
  // for (let i = 0; i < separateTitle.length; i++){
  //   separateTitle[i] = separateTitle[i].charAt(0).toUpperCase()
  //   separateTitle[i].substring(1);
  // }
  // return separateTitle.join('_')
  return title.replace(/\s+/g, '_').replace(/\W/g, '')
}

const string = 'This Is The String %'
console.log('This is slug', slug(string))
