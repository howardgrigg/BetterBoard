<% include SideBar %>
<div class="content-container typography">	
	<article>
		<h1>$Title</h1>
		<div class="content">
  		<div class="tabs">
  <!-- tabs -->
  <ul class="tabNavigation">
    <li><a href="#lectures">Lectures</a></li>
    <li><a href="#readings">Readings</a></li>
    <li><a href="#objectives">Learning Objectives</a></li>
    <li><a href="#cases">Cases</a></li>
    <li><a href="#notes">Additional Resources</a></li>
    <li><a href="#quiz">Quiz</a></li>
  </ul>

  <!-- tab containers -->
  <div id="lectures" class="tab">
    $Content
    <h3>Lectures &amp; Vopps</h3>
    <% include Lectures PageLink=$Link %>
    <% if CurrentMember %>
    <span id="add-lecture-button" class="add-button">Add a lecture</span>
    <div id="add-lecture">
      $addLecture
    </div>
    <% else %>
        <span class="add-button"><a href="$LoginURL">Sign in to add a Lecture</a></span>
    <% end_if %>
  </div>
  <div id="readings" class="tab">
      
      <% if MainReadings %>
      <h2>Required Readings</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop MainReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% else %>
  		<p class="no-readings">No required readings added yet</p>
  		<% end_if %>
        
    
      <% if AdditionalReadings %>
      <h2>Additional Cases Readings</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop AdditionalReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% end_if %>
  		
  		
  		 
      <% if OverviewReadings %>
      <h2>Topic Overviews</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop OverviewReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% end_if %>

  		
      <% if RecommendedReadings %>
      <h2>Recommended Readings</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop RecommendedReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% end_if %>
  		
  		
      <% if PopHealthReadings %>
      <h2>Pop Health Readings</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop PopHealthReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% end_if %>
  		
  		
      <% if EthicsReadings %>
      <h2>Ethics Readings</h2>
      <table>
  		<% include ReadingsHeader %>
  		<% loop EthicsReadings %>
  		   <% include ReadingsRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		<% end_if %>
  		
  		<% if CurrentMember %>
  		 <span id="add-reading-button" class="add-button">Add a reading</span>
        <div id="add-reading">
          <h2>Add a reading</h2>
          $addReading
        </div>
        <% else %>
        <span class="add-button"><a href="$LoginURL">Sign in to add a Reading</a></span>
      <% end_if %>
  </div>
  <div id="objectives" class="tab">
    <h2>Learning Objectives</h2>
    $KeyObjectives
    <h2>Assumed Knowledge</h2>
    $AssumedKnow
  </div>
  <div id="cases" class="tab">
    	<h2>Cases</h2>
      <% if Cases %>
        <table>
    		<% include CasesHeader %>
    		<% loop Cases %>
    		   <% include CasesRow PageLink=$Up.Link %>
    		<% end_loop %>
    		</table>
  		<% else %>
  		Not added yet
  		<% end_if %>
  		<% if CurrentMember %>
  		 <span id="add-case-button" class="add-button">Add a case</span>
        <div id="add-case">
          $addCase
        </div>
        <% else %>
        <span class="add-button"><a href="$LoginURL">Sign in to add a Case</a></span>
      <% end_if %>
  </div>
  <div id="notes" class="tab">
    <h2>Additional Resources</h2>
    <p>In this section you can add any links or notes that students have found or made, the wild west of resources if you will. If you will like to submit notes you will need to <a href="/home/sign-up/">sign up</a> or <a href="/Security/login?BackURL={$Link}">sign in.</a></p>
    <% if Notes %>
    <table>
  		<% include NotesHeader %>
  		<% loop Notes %>
  		   <% include NotesRow PageLink=$Up.Link %>
  		<% end_loop %>
  		</table>
  		
    <% else %>
    <p>None yet.</p>  
    <% end_if %>
    <% if CurrentMember %>
  		 <span id="add-note-button" class="add-button">Add a Note</span>
        <div id="add-note">
          $addNote
        </div>
        <% else %>
        <span id="add-note-button" class="add-button"><a href="$LoginURL">Sign in to add a Note</a></span>
      <% end_if %>
    
  </div>
  <div id="quiz" class="tab">
    <div id="show-questions">Show Questions</div>
    <div id="quiz-block">
    	<% if QuizQuestions %>
    		<% include QuizBlock %>
    	<% else %>
		  <h3>No Questions added yet - anyone is welcome to add some.</h3>
		<% end_if %>
    </div>
    <% if CurrentMember %>
    <span id="add-question-button" class="add-button add-question">Add a question</span>
    <div id="add-question">
      $addQuestionForm
    </div>
    <% else %>
        <span class="add-button"><a href="$LoginURL">Sign in to add a Question</a></span>
    <% end_if %> 
    </div>
  </div>
  </div>
	</article>
		$Form
		$PageComments
</div>
