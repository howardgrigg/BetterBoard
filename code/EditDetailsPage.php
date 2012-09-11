<?php

/**
 * Page containing an edit details form
 * Uses Member::getMemberFormFields() to know what to make available for editing
 *
 * @package
 */


class EditDetailsPage extends Page {
	/*
function canCreate($Member = null){
		return false;
	}
*/
}


class EditDetailsPage_Controller extends Page_Controller {


	/**
	 * Return the edit form for the current user
	 *
	 * @return unknown
	 */
	function Form() {
		if (Member::currentUser()) {
			
			$member = Member::currentUser();

			// Get the fields from the current member
			$fields = new FieldList(
				new TextField("FirstName", "First Name"),
				new TextField("Surname"),
				new TextField("Email"),
				$pwdField = new ConfirmedPasswordField("Password", 'New Password', '', '', 'true', 'Confirm Password'));
				
			$actions = new FieldList(
				new FormAction('savedetails', 'Save')
			);

			$form = new Form($this, 'Form', $fields, $actions);
			$form->loadDataFrom($member);
			return $form;
		}
		else {

			Controller::redirect('/home');

		}

	}


	/**
	 * Save the profile details
	 *
	 * @param unknown $data
	 * @param unknown $form
	 */
	function savedetails($data, $form) {
		// Get the current member and save the form into it
		$member = Member::currentUser();
		$form->saveInto($member);

		// Write to the databsae
		$member->write();
		
		// Return to the original form
		Controller::redirectBack();
	}


}