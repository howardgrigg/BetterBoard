<header class="header" role="banner">
	<div class="inner">
		<a href="$BaseHref" class="brand" rel="home">
			<h1>$SiteConfig.Title</h1>
			<% if SiteConfig.Tagline %>
			<p>$SiteConfig.Tagline</p>
			<% end_if %>
		</a>
		<div class="search-bar login-bar">
		  <% if CurrentMember %>
		  Hello $CurrentMember.FirstName - <a href="Security/logout">Log Out</a>
		  <% else %>
		  <a href="$LoginURL">Login</a> -  <a href="/home/sign-up/">Sign Up</a>
		  <% end_if %> 
		   - <a href="home/contact-me">Bug/Suggestion?</a>
		   - <a href="https://blackboard.elearning.uq.edu.au/webapps/portal/frameset.jsp" target="_blank">Blackboard Login</a>
		</div>
		<% if SearchForm %>
			<span class="search-dropdown-icon">L</span>
			<div class="search-bar">
				$SearchForm
			</div>		
		<% end_if %>
		<% include HeaderNavigation %>
	</div>
</header>
<% if Notifications %>
 <div class="notif-banner">
  <span class="notification-number">$notifications.Count</span> new updates. <a href="/home/resetNotifications" id="view-notif">View</a> - <a href="/home/resetNotifications" id="clear-notif">Clear</a>
  </div>
<div class="notifications">
 
  <div class="notif-list">
  <h4>Lectures</h4>
  <ul>
  <% loop Notifications %>
    <% if ClassName = Lecture %>
    <li><a href="$WeekPage.Link">$WeekPage.Title - $Title <% if recentlyAdded %>**Updated**<% else %>**New**<% end_if %></li>
    <% end_if %>
  <% end_loop %>
  </ul>
  <h4>Readings</h4>
  <ul>
  <% loop Notifications %>
    <% if ClassName = Reading %>
    <li><a href="{$WeekPage.Link}#readings">$WeekPage.Title - $Title <% if recentlyAdded %>**Updated**<% else %>**New**<% end_if %></a></li>
    <% end_if %>
  <% end_loop %>
  </ul>
  <h4>Others</h4>
  <ul>
  <% loop Notifications %>
    <% if ClassName == WeekCase %>
    <li><a href="{$WeekPage.Link}#cases">$WeekPage.Title - $ClassName - $Title <% if recentlyAdded %>**Updated**<% else %>**New**<% end_if %></a></li>
    <% end_if %>
    <% if ClassName == Note %>
    <li><a href="{$WeekPage.Link}#notes">$WeekPage.Title - $ClassName - $Title <% if recentlyAdded %>**Updated**<% else %>**New**<% end_if %></a></li>
    <% end_if %>
  <% end_loop %>
  </ul>
  
  <p>These notifications were a bit tricky to make so if you are having problems or errors with them please <a href="home/contact-me">let me know</a> - Cheers</p>
  </div>
</div>
<% end_if %>