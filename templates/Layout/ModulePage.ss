<% include SideBar %>
<div class="content-container typography">	
	<article>
		<h1>$Title</h1>
		<div class="content">
		  <div class="tabs">
        <!-- tabs -->
        <ul class="tabNavigation">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#lectures">Module Lectures</a></li>
          <li><a href="#readings">Required Readings</a></li>
          <li><a href="#resources">Module Resources</a></li>
        </ul>
        <div id="welcome" class="tab">
          $Content
        </div>
		
    		<div id="lectures" class="tab">
      		<% loop Children %>
      		  <h2><a href="$Link">$Title</a></h2>
      		  <% include Lectures %>
      		<% end_loop %>
    		</div>
    		
    		<div id="readings" class="tab">
      		<% loop Children %>
      		 <h2><a href="$Link">$Title</a></h2>
        		<table>
        		<% include ReadingsHeader %>
        		<% loop MainReadings %>
        		   <% include ReadingsRow PageLink=$Up.Link %>
        		<% end_loop %>
        		</table>
          <% end_loop %>
    		</div>
    		<div id="resources" class="tab">
        		<table>
        		<% include ReadingsHeader %>
        		<% loop ModReadings %>
        		   <% include ReadingsRow PageLink=$Up.Link %>
        		<% end_loop %>
        		</table>
        </div>
  		</div>	
		</div>
	</article>
		$Form
		$PageComments
</div>
