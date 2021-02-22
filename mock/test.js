const arr = [];
for (let index = 0; index < 20; index+=1) {
  // const element = array[index];
  // return 
  arr.push({
    id:index,
    name:`test${index}`,
  })
}

function fun() {
  return arr
}

export default {
  'GET /api/test': fun(),
};
