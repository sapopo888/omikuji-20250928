// 1. ランダムにおみくじ画像のパスを返す処理
function getRandomImage() {
  const number = Math.floor(Math.random() * 7);
  const imagePath = `./images/omikuji_${number.toString()}.png`;
  return imagePath;
}
// 2. ボタンを押したらスロットが回転する処理

function playOmikuji () {
  setInterval(function(){
    // ここに設定した関数を何度も実行する
    // ランダムに画像を書き換える処理を実装
    document.querySelector("#js-result").setAttribute("src", getRandomImage())
  }, 100);
};

document.querySelector('#js-button').addEventListener('click', playOmikuji);

// 3. 数秒後にスロットが止まる処理