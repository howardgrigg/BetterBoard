<?php

global $project;
$project = 'betterboard';

global $databaseConfig;

// Live details are included with _liveConfig.php
$databaseConfig = array(
	"type" => 'MySQLDatabase',
	"server" => 'localhost',
	"username" => 'root',
	"password" => 'root',
	"database" => 'betterboard',
	"path" => '',
);

MySQLDatabase::set_connection_charset('utf8');

// Set the current theme. More themes can be downloaded from
// http://www.silverstripe.org/themes/
//SSViewer::set_theme('simple');

// Set the site locale
i18n::set_locale('en_US');

// Enable nested URLs for this site (e.g. page/sub-page/)
if (class_exists('SiteTree')) SiteTree::enable_nested_urls();
Object::add_extension('Member', 'MemberResources');
//Director::set_environment_type("dev");

@include '_liveConfig.php';
Security::setDefaultAdmin('admin','password');