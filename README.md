# emailhunter API wrapper
Use http://emailhunter.co with NodeJS

## Initialisation

First, call the library:

	var EmailHunter = require('emailhunter');

Then create a new instance with your API key

	var em = new EmailHunter("YOUR API KEY");

You can also use that directly in one line

	var em = require('emailhunter')("YOUR API KEY");

## Domain search

Get the list of all the emails from a given domain name.
Each email is returned with the source(s), its type (generic or personal) and the date it was extracted on.

	em.search('stripe.com',function(err,emails){

		if(err) return console.error('ERROR',err);

		console.log("EMAILS FOUND:",emails);

	});

## Email check

Find if a given email exist. If it does, return where it was found. If not, an empty array is returned

	em.exist('paralegal@stripe.com',function(err,sources){

	    if(err)
	        return console.error('ERROR',err);

	    console.log("Sources about the email");
	    console.log(sources);

	});

# License

	The MIT License (MIT)

    Copyright (c) 2015 Nathanaël Khodl

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
