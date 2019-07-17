content = {
	skill: "<h1>スキル</h1><hr><ul class='list-group'><li class='list-group-item'>PHP</li><li class='list-group-item'>Ruby On Rails</li><li class='list-group-item'>MySQL</li><li class='list-group-item'>HTML/CSS</li><li class='list-group-item'>novelsphere.js</li></ul>",
	experience: "<h1>活動履歴</h1><hr><h4>プロジェクト：本ポートフォリオサイト</h4><h4>概要：授業の中で、このサイトを制作しました。</h4><h4>使用したスキル：HTML,CSS</h4><h4>自分の役割：一人で制作を完結させた。</h4>",
	contact: "<h1>連絡先</h1><hr><h4>メールアドレス：<a href='mailto:frandesugianto@gmail.com'>frandesugianto@gmail.com</a></h4><h4>電話番号：080-9563-4925</h4>"
}
$(function(){
	$(".button-switch").click(function(){
	  $("#content-switch").html(
	  	"<div class='jumbotron'>" + content[this.value] + "</div>"
	  	)
	})
});