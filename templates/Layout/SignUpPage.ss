<div class="content-container typography">	
	<article>
		<% if URLSegment = home %><% else %><h1>$Title</h1><% end_if %>
		<div class="content">$Content</div>
	</article>
		$Form
		$PageComments
</div>
<% include SideBar %>