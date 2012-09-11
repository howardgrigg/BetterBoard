<?php
/**
 * Page containing a registration form.
 * Uses Member::getMemberFormFields() to know what to ask of a user.
 *
 * @package
 */


class SignUpPage extends Page {
	static $db = array(
		"ThanksTitle" => "HTMLVarchar",
		"ThanksContent" => "HTMLText",
	);

	/**
	 *
	 *
	 * @param unknown $cms
	 * @return unknown
	 */
	function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->addFieldsToTab("Root.Thanks", array(
				new TextField("ThanksTitle", "Title"),
				new HTMLEditorField("ThanksContent", "Content"),
			));

		return $fields;
	}


}


class SignUpPage_Controller extends Page_Controller {


	/**
	 * Return the edit form for the current user
	 *
	 * @return unknown
	 */
	function Form() {
		if (!Member::currentUser()) {
			// Get the fields from a new member - seems like a good default :-)
			$fields = new FieldList(
				new TextField("FirstName", "First Name"),
				new TextField("Surname"),
				new EmailField("Email"),
				new ConfirmedPasswordField("Password", 'Password', '', '', '', 'Confirm Password')
			);

			$actions = new FieldList(
				new FormAction('register', 'Register')
			);

			$form = new Form($this, 'Form', $fields, $actions);

			return $form;
		}else {
		  Controller::redirect('/home/update-your-details');
		}}


	/**
	 * Save the profile details
	 *
	 * @param unknown $data
	 * @param unknown $form
	 * @return unknown
	 */
	function register($data, $form) {

		$email = Convert::raw2sql($data['Email']);
		
		// Check to make sure the email address hasn't been used before	
		if ($member = DataObject::get_one("Member", "`Email` = '$email'")) {

			// Add a error message
			$form->addErrorMessage("Email", 'Sorry, that email address already exists. Please choose another.', "bad");

			// Load errors into session and post back
			Session::set("FormInfo.Form_Form.data", $data);

			// Redirect back to form
			return Controller::redirectBack();

		}else {

			// Create a new member and save the form into it
			$member = new Member();
			$form->saveInto($member);

			// Write to the databsae
			$member->write();

			$from = 'new@silverscoop.org';
			$to = 'howard@gri.gg';
			$subject = 'New BBKiller User Registration';
			$body ='<p>A new user '.$data['FirstName'].' '.$data['Surname'].' has registered for the site.</p>';
			$email = new Email($from, $to, $subject, $body);
			$email->send();

			// Return to the original form
			Controller::redirect($this->link() . 'thanks');
		}
	}





	/**
	 *
	 *
	 * @return unknown
	 */
	function thanks() {
		return array(
			'Title' => $this->ThanksTitle,
			'Content' => $this->ThanksContent,
			'Form' => ' ',
		);
	}

}


?>