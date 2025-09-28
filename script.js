// 1. ランダムにおみくじ画像のパスを返す処理
function getRandomImage() {
  const number = Math.floor(Math.random() * 7);
  const imagePath = `./images/omikuji_${number.toString()}.png`;
  return imagePath;
}
console.log(getRandomImage());
// 2. ボタンを押したらスロットが回転する処理
// 3. 数秒後にスロットが止まる処理