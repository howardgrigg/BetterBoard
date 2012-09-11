  <% if CurrentMember %>
        <% if memberNote %>
        <% if alreadyReadIt %>
        <tr class="alreadyreadit tiptop" title="<% loop MemberNote %>$Text<% end_loop %>">
        <td class="readitbox"><a href="{$PageLink}whoopsHaventReadIt/{$ID}" class="readit" id="$ID">Read</a></td>
        <% else %>
        <tr class="tiptop" title="<% loop MemberNote %>$Text<% end_loop %>">
        <td class="readitbox"><a href="{$PageLink}readIt/{$ID}" class="readit" id="$ID">Mark as Read</a></td>
        <% end_if %>
        <% else %>
        <% if alreadyReadIt %>
        <tr class="alreadyreadit">
        <td class="readitbox"><a href="{$PageLink}whoopsHaventReadIt/{$ID}" class="readit" id="$ID">Read</a></td>
        <% else %>
        <tr>
        <td class="readitbox"><a href="{$PageLink}readIt/{$ID}" class="readit" id="$ID">Mark as Read</a></td>
        <% end_if %>
        <% end_if %>
      <% else %>
      <tr>
  <% end_if %>
  <td>$Title <% if CurrentMember %><a class="add-resource-note-button cluetip" href="{$PageLink}addResourceNote/{$ID}" title="Add a personal note"><img src="/betterboard/css/images/tag_add.png" alt="note-add" width="" height="" /></a><% end_if %></td>
  <td class="link-col">
  <% if Reading %>
  <a href="$Reading.URL" class="pdf" target="_blank">PDF</a>
  <% end_if %>
  <% if PDFURL %>
  <a href="$PDFURL" class="pdf" target="_blank">PDF</a>
  <% end_if %>
  <% if OnlineReading %>
  <a href="$OnlineReading" class="onlinereading" target="_blank">Link</a>
  <% end_if %>
 
  <% if CollabLink %>
   - <a href="$CollabLink" target="_blank">Collab PDF</a>
  <% end_if %>
   </td>
  <td>
    <div class="vote-box upvote">
      <div class="upvote"></div>
      <a href="{$PageLink}upvote/{$ID}" class="ups vote" id="$ID">$Upvotes</a>
    </div>
    <div class="vote-box downvote">
      <div class="downvote"></div>
      <a href="{$PageLink}downvote/{$ID}" class="downs vote" id="$ID">$Downvotes</a>
    </div>
  </td>
  <% if CurrentMember %>
  <td class="update-td">
  <a href="{$PageLink}editReadingTemplate/{$ID}" class="edit-reading" id="$ID">Update</a>
  </td>
  <% end_if %>
  </tr>
