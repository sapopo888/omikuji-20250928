// 1. ランダムにおみくじ画像のパスを返す処理
function getRandomImage() {
  const number = Math.floor(Math.random() * 7);
  const imagePath = `./images/omikuji_${number.toString()}.png`;
  return imagePath;
}
// 2. ボタンを押したらスロットが回転する処理

function playOmikuji () {
  console.log('clicked')
};

document.querySelector('#js-button').addEventListener('click', playOmikuji);

// 3. 数秒後にスロットが止まる処理