<?php
/*
   Plugin Name: SyntaxHighlighter Evolved: Gherkin Brush
   Description: Adds support for the Gherkin Syntax (Cucumber) language to the SyntaxHighlighter Evolved plugin.
   Author: Francisco Souza
   Version: 1.0.0
   Author URI: http://franciscosouza.net
 */

// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_gherkin_regscript' );

// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_gherkin_addlang' );

// Register the brush file with WordPress
function syntaxhighlighter_gherkin_regscript() {
  wp_register_script( 'syntaxhighlighter-brush-gherkin', plugins_url( 'shBrushGherkin.js', __FILE__ ), array('syntaxhighlighter-core'), '2.3.8' );
}

// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_gherkin_addlang( $brushes ) {
  $brushes['gherkin'] = 'gherkin';
  $brushes['freshen'] = 'gherkin';
  $brushes['cucumber'] = 'gherkin';
  $brushes['lettuce'] = 'gherkin';

  return $brushes;
}

?>

