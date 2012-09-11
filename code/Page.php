<?php
class Page extends SiteTree {

	public static $db = array(
	);

	public static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work

	}

	function upvote(){
		$Params = $this->getURLParams();

		if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID']))
		{
			$Resource->Upvotes++;
			$Resource->write();
			$CurrentMember = Member::currentUser();
			$score = $CurrentMember->Score + 1;
			$CurrentMember->Score = $score;
			$CurrentMember->write();
			return $Resource->Upvotes;
		}else{
			return "didnt work";
		}
	}

	function downvote(){
		$Params = $this->getURLParams();

		if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID']))
		{
			$Resource->Downvotes++;
			$Resource->write();
			$CurrentMember = Member::currentUser();
			$score = $CurrentMember->Score + 1;
			$CurrentMember->Score = $score;
			$CurrentMember->write();
			return $Resource->Downvotes;
		}else{
			return "didnt work";
		}
	}

	function readIt(){
		$Params = $this->getURLParams();

		if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
			$CurrentMember = Member::currentUser();
			$CurrentMember->ReadResources()->add($Resource);
			return;
		}
	}

	function whoopsHaventReadIt(){
		$Params = $this->getURLParams();

		if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])){
			$CurrentMember = Member::currentUser();
			$CurrentMember->ReadResources()->remove($Resource);
			return;
		}
	}

	function LoginURL(){
		return "Security/login?BackURL=".$this->Link();
	}

	function ContactForm() {
		// Validator::set_javascript_validation_handler('none');

		if($currentPage = DataObject::get_by_id("SiteTree", $this->ID)){

			$fields = new FieldList(
				new TextField('Name'),
				new EmailField('Email'),
				new TextareaField('Message'),
				new HiddenField ('Page', 'Page',
					$currentPage->Title
				)
			);
			$actions = new FieldList( new FormAction('doContactForm', 'Submit'));
			$validator = new RequiredFields('Email', 'Message');

			return new Form($this, 'ContactForm', $fields, $actions, $validator);
		}}

	function doContactForm($data, $form) {

		// Sets the email to come from the email supplied in the form
		$From = $data['Email'];
		// Who to send the email to
		$To = 'howard@gri.gg';
		$Subject = 'BBKiller Contact Form';
		$email = new Email($From, $To, $Subject);

		// Which template to use
		$email->setTemplate('ContactFormEmail');
		$email->populateTemplate($data);

		$email->send();

		$form->sessionMessage('<h3>Thanks for contacting us. We will endeavour to get in touch with you as soon as possible!</h3>', 'good');
		return Controller::redirectBack();
	}


	function addResourceNote(){
		return $this->renderWith('ajaxResourceNote');
	}
	
	function toggleResourceAlert(){
		$Params = $this->getURLParams();
		if(is_numeric($Params['ID']) && $Resource = Resource::get()->byID($Params['ID'])
		){
			if($Resource->Alert == 1){
				$Resource->Alert = 0;
				$Resource->write();
				return $this->renderWith('ajaxResourceAlertRemove');
			}else{
				$Resource->Alert = 1;
				$Resource->write();
				return $this->renderWith('ajaxResourceAlert');
			};
			
		}
	}
	function loginToToggle(){
		return "Please <a href='http://mbbs2.betterboard.info/Security/login'>login</a> to add or remove alerts";
	}
	function addResourceNoteForm(){
		$CurrentMember = Member::currentUser();
		$Params = $this->getURLParams();

		$f = new FieldList();
		$f->push( new TextField("Text", "Add a personal note to this resource - such as 'I need to go over this again' (this is only visible by you):"));
		if(is_numeric($Params['ID'])){
			$f->push( new HiddenField("ResourceID", "ResourceID", $Params['ID']));
		}else{
			$f->push( new HiddenField("ResourceID", "ResourceID"));
		}
		$f->push( new HiddenField("MemberID", "MemberID", $CurrentMember->ID));



		$actions = new FieldList(
			new FormAction('doAddResourceNote', 'Add the Note')
		);

		$form = new Form($this, 'addResourceNoteForm', $f, $actions);



		if(is_numeric($Params['ID']) && $Resource = ResourceNote::get()
			->filter(array(
					"ResourceID" => $Params['ID'],
					"MemberID"  => $CurrentMember->ID))
		){
			if($Resource->first() != null){
				$form->loadDataFrom($Resource->first());
			}
		}

		return $form;
	}
	
	function addResourceAlertLink(){
		$Params = $this->getURLParams();
		return "home/alert/".$Params['ID'];
	}

	function doAddResourceNote($data, $form){
		$ResourceNote = ResourceNote::get()
		->filter(array(
				"ResourceID" => $data['ResourceID'],
				"MemberID"  => $data['MemberID']));

		if($ResourceNote->first() != null){
			$note = $ResourceNote->first();
			$form->saveInto($note);
			$note->write();
		}else{
			$lecture = new ResourceNote();
			$form->saveInto($lecture);
			$lecture->write();
		}

		Controller::redirect($this->link().'#lectures');
	}

	function topTen($limit = 0){
		return DataList::create('Member')
		->sort("Score", "DESC")
		->limit($limit);
	}

	function resetNotifications(){
		$members =  DataList::create('Member');
		foreach($members as $member){
			if($member->LastVisited){
				$oldtime = $member->LastVisited;
			}else{
				$oldtime = $member->Created;
			}
			DB::query("UPDATE \"Member\" SET \"NotifTime\" = '" . $oldtime . "' WHERE \"ID\" = $member->ID", null);
		}
		return "Done";
	}

	function Notifications(){
		if(Member::currentUserID()){
			$oldtime = Member::currentUser()->NotifTime;

			if($updates = DataObject::get('Resource', "Created > '".$oldtime."' OR Updated > '".$oldtime."'")){
				return $updates;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	function notTrue(){
		return false;
	}

	function clearNotifications(){
		if( Member::currentUserID() ){
			$member = Member::currentUser();

			DB::query("UPDATE \"Member\" SET \"NotifTime\" = " . DB::getConn()->now() . " WHERE \"ID\" = $member->ID", null);

		}
		return "Done";
	}
	
	function alert(){
		return "Under Construction";
	}
	
	function AllQuestions(){
	    return QuizQuestion::get();
  }
	function Questions(){
    $questions = $this->AllQuestions();
    $justOne = new PaginatedList($questions, $this->request);
    $justOne->setPageLength(1);
    return $justOne;

  }
  
}