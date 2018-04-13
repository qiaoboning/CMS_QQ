<?php 
	//开启session功能
	session_start();
    $account = isset($_POST['account']) ? $_POST['account'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

	if($account === 'admin'&& $password === 'admin' ){
        $_SESSION['LOGIN_OK'] = 37;
        $title = '成功！';
        $url = '../1.html';
	    include_once 'transit.tpl';
	}else{
		$title = '失败！';
		$url = '../cms_login.html';
		include_once 'transit.tpl';
	}
	
	
?>