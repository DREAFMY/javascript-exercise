export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  collection.forEach(res => {
    if (res.charAt(1) === 'A') {
      count += 1;
    }
  });
  return count;
}
