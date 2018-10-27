walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
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

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMillennials\b/g, "Hobbits");
	v = v.replace(/\bmillennials\b/g, "hobbits");
	v = v.replace(/\bMILLENNIALS\b/g, "HOBBITS");
	v = v.replace(/\bMillennial\b/g, "Hobbit");
	v = v.replace(/\bmillennial\b/g, "hobbit");
	v = v.replace(/\bMILLENNIAL\b/g, "HOBBIT");
	v = v.replace(/\bMillenials\b/g, "Hobbits");
	v = v.replace(/\bmillenials\b/g, "hobbits");	
	v = v.replace(/\bMILLENIALS\b/g, "HOBBITS");	
	v = v.replace(/\bMillenial\b/g, "Hobbit");
	v = v.replace(/\bmillenial\b/g, "hobbit");
	v = v.replace(/\bMILLENIAL\b/g, "HOBBIT");
	v = v.replace(/\bMilenials\b/g, "Hobbits");
	v = v.replace(/\bmilenials\b/g, "hobbits");	
	v = v.replace(/\bMILENIALS\b/g, "HOBBITS");	
	v = v.replace(/\bMilenial\b/g, "Hobbit");
	v = v.replace(/\bmilenial\b/g, "hobbit");
	v = v.replace(/\bMILENIAL\b/g, "HOBBIT");
	
	
	textNode.nodeValue = v;
}


