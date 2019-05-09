const script = `
JACK: Brassett! 
BRASSETT: Yes, Sir? 
JACK: There’ll be luncheon for five today, Brassett. The ladies are coming! 
BRASSETT: For how many, sir?
JACK: For five. Oh, and Mr. Wykeham’s aunt will be here. He’s at the station now to meet her. That’s the whole point, to meet Charley’s aunt. That’s how we got the ladies to come.
BRASSETT: Well, that’s very droll. 
JACK: What do you mean, droll?
-----
BRASSETT: Well, sir, I’m afraid our credit in the kitchen is somewhat exhausted. (Pronounced “hegs-austed” by taking a catch-breath in the middle. ) In fact, it is completely exhausted.
JACK: Oh, is it? Well, never mind, Brassett, get it outside — go to Bunter’s.
BRASSETT: I’m afraid, sir, we owe Bunter’s.
JACK: Oh.
BRASSETT: However, sir, I’ve no doubt it will be all right at Bunter’s, if I say it’s for me. 
JACK: Ah, good fellow Brassett; luncheon for five at one o’clock.
(BRASSETT exits and JACK begins practicing his proposal to MISS SPETTIGUE.,)
-----
JACK: Miss Verdun — My Dear Miss Verdun — Kitty — It has come to my attention that I love you most horribly. Well, that doesn’t sound right, does it? Kitty — (kneels). My Dear Sainted, beloved Kitty. I cannot sleep —
(BRASSETT enters.)
BRASSETT: I beg pardon, sir, but would you mind —
JACK: Confound it, Brassett, what do you want?
BRASSETT: I merely with to say, sir, that I have laid out a few things which —
JACK: Get out and leave me alone. 
BRASSETT: — which I thought you wouldn’t care to —
JACK: Take every blessed rag I’ve got and keep ‘em, only go away! (BRASSETT begins to exit. Picks up a book off the table as he is going.)
JACK: My dear Kitty — 
BRASSETT: (stops) Beg pardon, sir? 
JACK: Confound it! I wasn’t addressing you — go away! 
BRASSETT: Sorry, sir. 
`

const mnemonologues = (myCharacter, characters, script) => {
  return breakDownScript(script, characters.reduce((a, c) => a + `|^${c}(.*?)$`, '') + `|${myCharacter}`)
}

const breakDownScript = (string, regex) => string.split(/^(.*?)$/gm).map(sub => filterLines(sub, regex)).join('\n')

const filterLines = (string, regex) => {
  const originalRegex = '\\((.*?)\\)|^.|([^\\w][\\w])|[^\\w]|[0-9]|'
  const regularExpression = new RegExp(regex + originalRegex, 'g')
  return string.match(regularExpression).join('')
}

console.log(mnemonologues('JACK:', ['BRASSETT:'], script))