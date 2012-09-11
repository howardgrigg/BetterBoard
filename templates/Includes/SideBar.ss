<aside>
	<% if Menu(2) %>
		<nav class="secondary">
			<h3>
				<% loop Level(1) %>
				<a href="$Link" title="Go to the $Title.XML page">$Title</a>
				<% end_loop %>
			</h3>
			<ul>
				<% loop Menu(2) %>
				<li class="$LinkingMode"><a href="$Link" title="Go to the $Title.XML page"><span class="arrow">&rarr;</span><span class="text">$MenuTitle.XML</span></a></li>
				<% end_loop %>
			</ul>
		</nav>
	<% end_if %> 
	<div id="top-ten">
	<h3>Top Contributors</h3>
	<ul>
	 <% loop topTen(5) %>
	   <li><span class="score">$Score</span> - $FirstName $Surname.LimitCharacters(1,'')</li>
	 <% end_loop %>
	</ul>
	<p class="how-to-score"><a title="How to score points" href="/home/how-to-score">How to score points?</a></p>
	</div>
</aside>
