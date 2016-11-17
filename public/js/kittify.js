// Inspired from https://kittify.herokuapp.com/

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;
	if (typeof node.tagName !== "undefined" && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea')) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
		child = node.firstChild;
		while ( child )
		{
			next = child.nextSibling;
			walk(child);
			child = next;
		}
		break;

		case 3: // Text node
		handleText(node);
		break;
	}
}

var rules = {'ver': 'fur', 'fer': 'fur', 'for': 'fur', ' for': ' fur', 'full': 'furll', 'ket' : 'cat', 'my name is' : 'my owners call me', 'My name is' : 'My owners call me', 'users' : 'cats', 'beta testers' : 'the nerdy cats', 'pow' : 'paw', 'fr' : 'furr',  'For': 'Fur', 'Hi': 'Meow!😸', 'hi ' : 'meow!😸 ', 'Yo ': 'Meow!😸 ', 'yo ': 'meow!😸 ', 'Hello': 'Meow!😸', 'hello' : 'meow!😸',  'Hey': 'Meow!😸', ' hey' : 'meow!😸', ' arr': ' purr', 'awesome': 'clawsome', 'great': 'great as catnip', 'good': 'meow-velous','er ': 'epurr ', 'ers ': 'epurrs ', 'were': 'wrrr', 'ber ': 'purr ', 'ber': 'purr', 'per' : 'purr', '%' : ' purrcent', 'thanks': 'back scratches', 'thank': 'back scratch', 'from': 'furom', 'From': 'Furom', 'feeling': 'feline', 'Product': 'Purr-oduct', 'product': 'purroduct', 'mou': 'meow', 'br' : 'purr', 'br ' : 'purr ', 'team': 'litter', 'followers': 'litter', 'people': 'cats', 'wrrr' : 'were', 'pir' : 'purr', 'bir' : 'purr', 'kidding' : 'kitten', 'kiddin' : 'kitten', 'say' : 'meow', 'saying' : 'meowing', 'said' : 'meowed',  'par' : 'purr', 'community' : 'cat park', 'fantastic' : 'catastic', 'podcast' : 'podcats', 'awesomeness' : 'pawesomeness',  ' aw' : ' paw', 'getting' : 'kitten', 'yell' : 'hiss', 'food' : 'catnip', 'run' : 'pounce', 'got' : 'cat', 'know ' : 'meow ', 'now' : 'meow', 'purp': 'purrp', 'go for it' : 'catnip it in the bud meow', 'to execute' : 'catnip it in the bud meow', 'move' : 'mewv', 'crast' : 'cats', 'pl' : 'pawl', 'amazing' : 'ameowsing', 'marvelous' : 'meowvelous', 'pr' : 'purr', 'por' : 'purr', 'connected' : 'catnected', 'leap' : 'pounce', 'hows it going' : 'whats catalakin ', 'whats up' : 'whats catalakin', 'hope all is well' : 'hope you have many more of your 9 lives still', 'life' : 'one of your 9 lives',  'years old' : 'years in my first cat life', 'garbage' : 'litter box', 'Per' : 'Purr', 'no ': ' hiss no ', 'yes ' : 'yarn right ', 'Thank' : 'Back scratch', 'Thanks' : 'Back Scratches' };

function handleText(textNode)
{
	var v = textNode.nodeValue;
	for (var key in rules) {
		v = v.replace(new RegExp(key, "g"), rules[key]);
	}

	textNode.nodeValue = v;
}

function kittifyContent() {
	walk(document.body);
}
