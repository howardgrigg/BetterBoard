<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]--><head>
	<% base_tag %>
	<title><% if MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="robots" content="nofollow" />
	$MetaTags(false)
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<% require CSS(betterboard/css/layout.css) %>
	<link rel="shortcut icon" href="$ThemeDir/images/favicon.ico" />
	<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2258559-21']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  </script>
</head>
<body class="$ClassName<% if Menu(2) %><% else %> no-sidebar<% end_if %>">
<% include Header %>
<div class="main" role="main">
	<div class="inner">
		$Layout
	</div>
</div>
<% include Footer %>
<% require javascript(http://code.jquery.com/jquery-1.7.2.js) %>
<% require javascript(http://code.jquery.com/ui/1.8.21/jquery-ui.min.js) %>
<% require javascript(betterboard/javascript/jquery.validate.js) %>
<% require javascript(betterboard/javascript/script.js) %>
</body>
</html>