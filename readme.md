
# NSS WYSIWYG Exercise, V2 :: jQuery Version

### Project Description 

Five famous people, [Barack Obama, Daenerys Targaryen, Meryl Streep, Kate McKinnon, Bernie Sanders], are hard-coded into an Object Array along with required attributes: `title`, `name`, `bio`, `lifespan`, as well as an image to be displayed. The contents of the array are written dynamically to the DOM using `jQuery`. If a viewer/user clicks on the *card* for one of these Famous People, the card border displays in `dotted red`, and the user has opportunity to edit the Person's biography. 

This exercise was first written using only vanilla `javascript`; that version can be seen [here](https://github.com/SMITHsharon/wysiwyg) The purpose of this assignment was to reproduce its functionality using `jQuery` after a fast summary overview of JQuery syntax and capabilities. 


#### WYSIWYG jQuery on Launch
![WYSIWYG jQuery on Launch](https://raw.githubusercontent.com/SMITHsharon/wysiwygJQuery/screens/screens/jQuery%20WYSIWG%20on%20Launch.png)

#### WYSIWYG jQuery :: Adding Text to Selected Bio
![WYSIWYG jQuery, Add to Selected Bio](https://raw.githubusercontent.com/SMITHsharon/wysiwygJQuery/screens/screens/Adding%20to%20Selected%20Bio.png)

#### WYSIWYG jQuery :: Mirrored Text in Selected Person's Bio
![WYSIWYG jQuery, Showing Mirrored Text](https://raw.githubusercontent.com/SMITHsharon/wysiwygJQuery/screens/screens/Mirrored%20Added%20Bio%20Text.png)


### Project Specs
Reproduced the original program functionality (WYSIWYG V1) using `jQuery`:
- Wrote contents of `<famePeople>` object array to the DOM
- Wrote the event listeners to handle: 
	- a click on a Person card
	- editing a selected Person's biography information


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `jQuery`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/wysiwygJQuery.git
cd wysiwygJQuery
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

