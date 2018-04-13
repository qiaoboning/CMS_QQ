<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo $title ?></title>
	<style type="text/css">
		*{
			/*background: #EEE;*/
			/*color:#3299FF;*/
			margin:0;
			padding:0;
		}
		html,body{
			height:100%;
		}
		body{
			background: url("../src/imgs/login_bg.jpg") no-repeat;
			background-size:100% 100%;
			/*padding-top:120px;*/
		}
		#message {
			position: fixed;
			top:0;
			right:0;
			bottom:0;
			left:0;
			margin:auto;
			padding: 10px;
			width: 402px;
			height:88px;
			border: 1px solid #eee;
			border-radius: 8px;
			text-align: center;
			box-shadow:  0 0 5px #ccc;
		}
	</style>
</head>
<body>
	<div id="message">
		<h2><?php echo $title ?></h2>
		<br>
		<p><span id="time">3</span>秒钟以后自动跳转</p>
	</div>
	<script>
		var oTime = document.getElementById('time');
		var h2 = document.querySelector('h2');
		var sH = h2.innerHTML;
		var iTime = oTime.innerHTML;
		if(sH == '成功！'){
			h2.style.color = '#a1d764';
		}else if(sH == '失败！'){
			h2.style.color = 'rgb(222,0,102)';
		}
		setInterval(function () {
			oTime.innerHTML = --iTime;

			if(iTime <= 0) {
				location.href = '<?php echo $url; ?>';
			}
		}, 1000);

	</script>
</body>
</html>