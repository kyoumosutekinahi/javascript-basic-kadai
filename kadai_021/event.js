//id:btnのHTML要素を取得、定数に代入
const btn = document.getElementById("btn");
//id:textのHTML要素を取得、定数に代入
const text = document.getElementById("text");
//HTML要素がクリックされたらイベント処理実行
btn.addEventListener("click",()=>{
    setTimeout(()=>{
        text.textContent = "ボタンをクリックしました";
    },2000);
});