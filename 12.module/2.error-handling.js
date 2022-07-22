function readFile(path) {
  throw new Error('파일의 경로를 찾을 수 없습니다');
  return '파일내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 실행');
  }
  const result = 'hi' + content;
  return result;
}

console.log(processFile('파일'));
