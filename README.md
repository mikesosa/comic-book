## Comic Book Application

This technical test consists of developing a web application that consumes the restful API of Comic Vine which is the largest comic database online.

#### You should build a web application the following requirements:

Show a list of the last comics
Show a detail of the selected comic
Markup the UI accordingly to the wireframe presented

### API Docs

https://josephephillips.com/blog/how-to-use-comic-vine-api-part1
https://comicvine.gamespot.com/api/documentation
The Comic Vine Base URL API is http://comicvine.gamespot.com/api

### You must signup in order to get an API Key for consuming the API

https://comicvine.gamespot.com/api/ -> Here you can find your API Key after you have signed up

List of comics
https://comicvine.gamespot.com/api/issues/?api_key=YOUR_API_KEY&format=json

For each comic you should grabs the next data from the response:

The comic’s image is: image.original_url
The date is: date_added
The name is: name + issue_number

The base url comes from the property api_detail_url obtained in the previous response for each comic.

You must concatenate api_detail_url + ?api_key=xxx&fromat=json

https://comicvine.gamespot.com/api/issue/4000-6/?api_key=YOUR_API_KEY&format=json

For comic detail you should grabs the next data from the response:

The comic’s image is: image.original_url
character_credits
team_credits
location_credits

## Goals

- Code easy to read and to understand
- All code should be written in english
- Upload the code to a public git repo
- Make sure to develop a good components decomposition following the SOLID principles for each component
- Implements a responsive design making sure it looks good for mobile and tablet devices

## Optionals

- Show loading indicators
- Show error states (for example when there is no internet connection)
- Develop unit tests for the components
- Implements a filter by publisher feature for the list of comics accordingly to the API Documentation - The primary publisher a character is attached to.,
