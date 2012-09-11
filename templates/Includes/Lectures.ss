  <table>
    <thead>
    <tr>
    <% if CurrentMember %>
    <td>Read It</td>
    <% end_if %>
    <td>Title</td>
    <td class="lecturer">Lecturer</td>
    <td>Link</td>
    <td>Lectopia</td>
    <td class="yeildhead">Yield</td>
    <% if CurrentMember %>
    <td>Update</td>
    <% end_if %>
    </tr>
    </thead>
    <% loop OrderedLectures %>
      <% if CurrentMember %>
        <% if memberNote %>
	        <% if alreadyReadIt %>
		        <tr class="alreadyreadit tiptop " title="<% if Alert %>Link not working<% end_if %> <% loop MemberNote %>$Text<% end_loop %>">
		        <td class="readitbox"><a href="{$Top.Link}whoopsHaventReadIt/{$ID}" class="readit" id="$ID">Read</a></td>
	        <% else %>
		        <tr class="tiptop" title="<% if Alert %>Link not working<% end_if %> <% loop MemberNote %>$Text<% end_loop %>">
		        <td class="readitbox"><a href="{$Top.Link}readIt/{$ID}" class="readit" id="$ID">Mark as Read</a></td>
	        <% end_if %>
	    <% else %>
	        <% if alreadyReadIt %>
	        	<tr class="alreadyreadit <% if Alert %>tiptop<% end_if %>" <% if Alert %>title="Link not working"<% end_if %>>
		        <td class="readitbox"><a href="{$Top.Link}whoopsHaventReadIt/{$ID}" class="readit" id="$ID">Read</a></td>
	        <% else %>
	        	<tr>
		        <td class="readitbox <% if Alert %>tiptop<% end_if %>" <% if Alert %>title="Link not working"<% end_if %>><a href="{$Top.Link}readIt/{$ID}" class="readit" id="$ID">Mark as Read</a></td>
	        <% end_if %>
        <% end_if %>
      <% else %>
      	<tr <% if Alert %>class="tiptop" title="Link not working"<% end_if %>>
    <% end_if %>      
       <td>$Title <% if CurrentMember %><a class="add-resource-note-button cluetip" href="{$Top.Link}addResourceNote/{$ID}"><img src="/betterboard/css/images/tag_add.png" alt="note-add" width="" height="" /></a><% end_if %></td>
      <td class="lecturer">$Lecturer</td>
      <td class="table-links">
      <% if VOPPURL %>
      <a href="$VOPPURL" target="_blank">VOPP</a>
      <% end_if %>
      <% if Slides or SlidesURL %>
        <% if Slides %>
        <a href="$Slides.URL" target="_blank">PDF</a>
        <% end_if %>
        <% if SlidesURL %>
        <a href="$SlidesURL" target="_blank">PDF</a>
        <% end_if %>
      <% else %>
        <span class="noslides">Not yet</span>
      <% end_if %>
      <% if CollabLink %>
       - <a href="$CollabLink" target="_blank">Collab PDF</a>
      <% end_if %>
      <% if Handout %>
       - <a href="$Handout" target="_blank">Handout</a>
      <% end_if %>
      	<% if Alert %>
      		<% if CurrentMember %>
      		<a class="add-resource-note-button cluetip removeAlert tiptop1" href="{$Top.Link}toggleResourceAlert/{$ID}" title="Remove link not working alert">
      		<% else %>
      		<a class="add-resource-note-button cluetip" href="{$Top.Link}loginToToggle">
      		<% end_if %>
	      	<img src="/betterboard/css/images/alert-colour.png" alt="note-add" width="" height="" /></a>
	    <% else %>
	    	<% if CurrentMember %>
		    <a class="add-resource-note-button cluetip addAlert tiptop1" href="{$Top.Link}toggleResourceAlert/{$ID}" title="Mark link as not working">
		    <% else %>
      		<a class="add-resource-note-button cluetip" href="{$Top.Link}loginToToggle">
      		<% end_if %>
	      	<img src="/betterboard/css/images/alert-grey.png" alt="note-add" width="" height="" /></a>
      	<% end_if %>
      </td>
      <td class="table-links">
      <% if LectopiaURL %>
      <a href="$LectopiaURL" target="_blank">Lectopia</a>
      <% else %>
      <span class="noslides"> </span>
      <% end_if %>
      </td>
      <td>
      <div class="vote-box upvote">
        <div class="upvote"></div>
        <a href="{$Top.Link}upvote/{$ID}" class="ups vote" id="$ID">$Upvotes</a>
      </div>
      <div class="vote-box downvote">
        <div class="downvote"></div>
        <a href="{$Top.Link}downvote/{$ID}" class="downs vote" id="$ID">$Downvotes</a>
      </div>
      </td>
      <% if CurrentMember %>
      <td>
      <a href="{$PageLink}editLectureTemplate/{$ID}" class="edit-lecture" id="$ID">Update</a>
      </td>
      <% end_if %>
      
    </tr>
    <% end_loop %>
    </table>