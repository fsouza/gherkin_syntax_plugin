SyntaxHighlighter Evolved: Gherkin Brush
========================================

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

Internationalization
--------------------

Actually this plugin supports only two languages: portuguese and english. You can freely edit the shBrushGherkin.js file and translate the highlighting to your mother tong ;)
