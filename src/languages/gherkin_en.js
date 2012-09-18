/*
Language: Gherkin (EN)
*/

function(hljs) {
  return {
    contains: [
        {
            className: 'keyword',
            begin: '^\\s*(But |And |Then |When |Given |\\* |Scenarios|Examples|Scenario Template|Scenario Outline|Scenario|Background|Feature)',
            relevance: 5
        },
        {
            className: 'string',
            begin: '\\|',
            relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
            className: 'string',
            begin: '"""', end: '"""',
            relevance: 10
        },
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
            className: 'annotation', begin: '\\s+@[^@\r\n\t ]+'
        }
    ]
  };
}