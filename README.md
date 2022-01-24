# gas-quiz

スプレッドシート に○択クイズを作ると、スマホ版で見られるページを作成できます。
資格の勉強等にご利用ください。
同じことを勉強しているメンバーと、サンプル問題を出し合うのもいいと思います。

## 仕様
- スプレッドシート の内容を、問題・選択肢の順に表示する。
- 選択肢を押すと、解説を見ることができる。

# 使い方
## 用意するもの
- スプレッドシート （シート名：quiz,ans）
    - quiz シート

    列を、「key	quiestion	opt_cnt	1	2	3	4	5	6	7 ・・・」としてください。
    opt_cntが選択肢の個数を入力し、各番号のところに選択肢を記載してください。
    この個数分の選択肢が表示されます。

    ![quiz](/image/quiz.png)

    - ans
    
    列を、「key	ans	exp_cnt	exp_1	exp_2	exp_3	exp_4	exp_5・・・」としてください。
    key はquizシートのkey列を参照して、一致させてください。
    exp_cntはquizシートのopt_cntと一致させてください。

    ![ans](/image/ans.png)


## ソースコードの修正
doGet.gsの以下の部分修正してください。

const pageTitle = ''//TODO ページタイトルを入力してください
const spreadSheetId = ''//TODO スプレッドシート IDを入力してください

## デプロイ

WEBアプリとして公開してください。

## URLにアクセスするとこんな感じになります


![iphone](/image/iphone.jpeg)

