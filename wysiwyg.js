
//******************************************************
// wrap all the JQuery in this function ??? 
// or the whole .js file ???
// $(document).ready(function(){
//     $("div").children();
// });
//******************************************************

// var onEnterKey = document.getElementById("enterKey");
var everyone = document.getElementById("peopleContainer");
var thisPersonContainer = document.getElementsByClassName("personContainer");
var thisPerson = document.getElementsByClassName("eachPerson");
var outputBioEdit = document.getElementById("userEditText");
var userTextEditArea = document.getElementById("userEditText");

var personBioEdit;

// Object array of five Famous people
var famePeople = [
  {
    title: "44th POTUS",
    name: "Barack Obama",
    bio: "Served two terms as 44th POTUS, from 2009 to 2017. He is the first African American to have served as president, as well as the first born outside the contiguous United States. He previously served in the U.S. Senate representing Illinois from 2005 to 2008, and in the Illinois State Senate from 1997 to 2004.",
    image: "data:image/jpeg;base64,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",
    lifespan: {
      birth: 1961, 
      death: "present"
    }
  }, 

  {
    title: "The Unburnt, Queen of the Andals, the Rhoynar and the First Men (Claiment), Queen of Meereen, Khaleesi of the Great Grass Sea, Breaker of Chains, Mother of Dragons",
    name: "Daenerys Targaryen",
    bio: "Introduced in 1996's A Game of Thrones, Daenerys (along with her older brother, Viserys) is one of the last confirmed members of House Targaryen who, until fifteen years before the events of the first novel, ruled on the Iron Throne for nearly three hundred years. She becomes the heir of the Targaryen dynasty after her brother's death and plans to reclaim the Iron Throne herself, seeing it as her birthright.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnqwh0LAZhFN5U1bbhI7TDNugs-ZIIoUfBXOohphk7B2m3HWD",
    lifespan: {
      birth: "284 AC",
      death: "present"
    }
  },

  {
    title: "So-Called Actress",
    name: "Meryl Streep",
    bio: "Cited in the media as the 'best actress of her generation',– a designation to which both she AND dTRUMP object – Streep is particularly known for her versatility in her roles, transformation into the characters she plays, and her accent adaptation.",
    image: "http://photos.vanityfair.com/2015/01/30/54cbfc7a1ca1cf0a23acdbc1_image.jpg",
    lifespan: {
      birth: 1949,
      death: "present"
    }
  }, 

  {
    title: "SNL For The Win",
    name: "Kate McKinnon",
    bio: "An American comedian and actress, McKinnon is best known for her sketch comedy work, character work, and celebrity impressions. She is a cast member on Saturday Night Live and The Big Gay Sketch Show.",
    image: "https://s-media-cache-ak0.pinimg.com/originals/94/89/86/948986532cb57dd74ff1293f8b8b677c.jpg",
    lifespan: {
      birth: 1984,
      death: "present"
    }
  }, 

  {
    title: "The Man Who Should Be President",
    name: "Bernie Sanders",
    bio: "Sanders is the longest serving independent in U.S. congressional history. Since his election to the House of Representatives in 1991, he has caucused with the Democratic Party, which has entitled him to congressional committee assignments and at times given Democrats a majority. Sanders's campaign against Hillary Clinton for the party's 2016 U.S. presidential nomination raised more money in small, individual contributions than any other in American history, and helped him rise to international recognition.",
    image: "http://www.zerohedge.com/sites/default/files/images/user5/imageroot/sanders%20teaser%202.jpg",
    lifespan: {
      birth: 1941,
      death: "present"
    }
  }, 
];



//******************************************************
// function writes the famePeople array contents to the DOM
//******************************************************
// function writeToDOM () {

//   var personString = "";
 
//   for (var i=0; i<famePeople.length; i++) {
//     personString += `<div class="personContainer" id="person$(i)">`;
//     personString += `<div class="eachPerson">`;
//     personString += `<header><strong>${famePeople[i].name}</strong><br>`;
//     personString += `${famePeople[i].title}</header>`;
//     personString += `<img class="thisImage" src="${famePeople[i].image}">`;
//     personString += `<div class="thisBio">${famePeople[i].bio}</div>`;
//     personString += `<footer>Born: ${famePeople[i].lifespan.birth}; <em>(still living)</em></footer>`;
//     personString += `</div></div>`;
//   }
//   everyone.innerHTML = personString;
// }

// writeToDOM();


$.each (famePeople, function (index,value) {
  console.log(value);
    index += 1;
    $("#peopleContainer").append(`<div class="eachPerson">`);
    // $(".personContainer:nth-of-type(" + index + ")").append(`<person class="eachPerson">`);
    $(".eachPerson:nth-of-type(" + index + ")").append(`<header><h2>${value.title} ${value.name}<h2></header>`);
    $(".eachPerson:nth-of-type(" + index + ")").append(`<section><span>${value.bio}</span><br><img src=${value.image} class="thisImage"></section>`);
    $(".eachPerson:nth-of-type(" + index + ")").append(`<footer><h3>Born: ${value.lifespan.birth}<br>Died: ${value.lifespan.death}</h3></footer>`);
});

// $("person").addClass("person__container");

// function editBio(){
//     var clickedCard = $(".clicked").find("span").text();
//     $("#user-input-field").val(clickedCard);
// }                    

// function copyText(event) {
//     if (event.keyCode !== 13) {
//         $(".clicked").find("span").text($("#user-input-field").val());
//     }
//     else {
//         $("#user-input-field").blur();
//         $("#user-input-field").val("");
//          $(".clicked").removeClass("clicked");
//     }
// }
// $("#user-input-field").keyup(function(event) {
//     copyText(event);
// });

//******************************************************
// Event Listener, when user clicks on a Person element
// a dotted border dislays around it. 
// 
// Function 
// * removes the <clicked> class from all Person elements
// * adds the <unclicked> class to all Person elements
// which deselects any previously selected element 
// and applies the default border styling
// <css><1px><solid><slategrey>
//
// * adds the <clicked> class to the selected element
// which applies the <css><2px><dotted><red> border styling
//
// AND
// the text input area immediately gains focus so 
// the user can start editing the selected Person's biography.
//******************************************************
var thisPersonBioDiv;
$(".personContainer").click(function (){

  $(this).siblings().removeClass("clicked");
  $(this).siblings().addClass("unclicked");

	$(this).addClass("clicked");

  // text input area gains focus
  $("#userEditText").focus();

  // displays the selected Person's Description in the text input area
  $("#userEditText").text($(this).children("div.eachPerson").children("div.thisBio").html());
  thisPersonBioDiv = $(this).children("div.eachPerson").children("div.thisBio");
   
  editBio(thisPersonBioDiv);

});


function editBio (bioDiv) {
// console.log("bioDiv :: ", bioDiv);
  // mirrors chars entered in text input area <=> selected Person's Description html area
  $("#userEditText").keyup(function(event) {
// console.log("event.which :: ", event.which);
    if ( event.which === 13 ) {
      $("#userEditText").val("");
      $("#userEditText").attr("placeholder","Biography Goes Here...");

    } else {
      $(bioDiv).html($(this).val());
    }
  });
}
