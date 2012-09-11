<nav class="primary">
	<span class="nav-open-button">²</span>
	<ul class="top-first-level-ul">
		<% loop Menu(1) %>	  
			<li class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a>
			 <% if Children %>
				<ul class="top-second-level-ul">
					<% loop Children %>
						<li class="$LinkingMode top-second-level-li"><a href="$Link">$MenuTitle</a></li>
					<% end_loop %>
				</ul>
			<% end_if %>
			</li>
		<% end_loop %>
	</ul>
</nav>