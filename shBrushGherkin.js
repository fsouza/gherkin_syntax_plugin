SyntaxHighlighter.brushes.Gherkin = function()
{
	var keywords	= 'Given When Then And Dado Quando Então Entao';

	this.regexList = [
    // English
		{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,			css: 'comments' },
		{ regex: /@.*$/gmi,						  							css: 'comments' },
		{ regex: /Feature:/gmi,												css: 'keyword' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'variable' },
		{ regex: /Scenario:/gmi,											css: 'keyword' },
		{ regex: /In order to/gmi,										css: 'variable' },
		{ regex: /As an?/gmi,					  							css: 'variable' },
		
		{ regex: /I want to/gmi,											css: 'variable' },
		{ regex: /I wish to/gmi,											css: 'variable' },
		{ regex: /So that/gmi,												css: 'variable' }

    // Portuguese
		{ regex: /Funcionalidade:/gmi,	    								css: 'keyword' },
		{ regex: /Cenário:/gmi, 											css: 'keyword' },
		{ regex: /Cenario:/gmi, 											css: 'keyword' },
		{ regex: /Para/gmi,     											css: 'variable' },
		{ regex: /Como uma?/gmi,											css: 'variable' },
		{ regex: /Eu gostaria/gmi,										css: 'variable' },
		{ regex: /Eu quero/gmi,				  							css: 'variable' },
		];
};
SyntaxHighlighter.brushes.Gherkin.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Gherkin.aliases    = ['gherkin', 'ghrkn'];
