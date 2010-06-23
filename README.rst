SyntaxHighlighter Evolved: Gherkin Brush
========================================

What is it and how do I use it?
-------------------------------

This plugin adds a brush for `Gherkin Syntax <http://wiki.github.com/aslakhellesoy/cucumber/gherkin>`_.

Here is some examples: ::

  [sourcecode language="gherkin"]Feature: List of books
    In order to loan a book
    As a system user
    I want to see the list of all books in the system

    Scenario: List all books
      Given there are 20 books in the system
      When I navigate to the books list page
      Then I should see the title of the 20 books[/sourcecode]

You can also use the following alias:

  1. cucumber ([sourcecode language="cucumber"][/sourcecode])
  2. freshen ([sourcecode language="freshen"][/sourcecode])
  3. lettuce ([sourcecode language="lettuce"][/sourcecode])

And how do I install it?
------------------------

To install this plugin, go to the `Download page <http://github.com/franciscosouza/gherkin_syntax_plugin/downloads>`_ and download the last release.

After download it, unzip the file inside your *themes* folder in Wordpress (ROOT/wp-content/plugins/). After extract the plugin, go to the Wordpress admin panel and activate the plugin in Plugins -> Inactive page.

You will need to install `Syntax Highlighter Evolved <http://wordpress.org/extend/plugins/syntaxhighlighter/>`_ before install this plugin.

Internationalization
--------------------

Actually this plugin supports only two languages: portuguese and english. You can freely edit the shBrushGherkin.js file and translate the highlighting to your mother tong ;)
