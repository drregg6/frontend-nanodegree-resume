var bio = {
    "name": "David Regg",
    "role": "Web Developer",
    "welcomeMessage": "A web developer in training using various books and websites to meet my goal. Thanks for visiting my resume page!",
    "contacts": {
        "mobile": "(908) 463.5052",
        "email": "drregg6@gmail.com",
        "github": "drregg6",
        "location": "Philadelphia, PA, USA"
    },
    "skills": ["Javascript", "HTML5", "CSS3", "jQuery"]
};

var work = {
    "jobs": [
        {
            "employer": "Whole Foods Market",
            "link": "http://www.wfm.com",
            "title": "Cashier",
            "location": "Philadelphia, PA, USA",
            "dates": "July 2016 to Present",
            "description": "Yadda yadda yadda"
        },
        {
            "employer": "The Couch Tomato Cafe",
            "link": "http://www.thecouchtomato.com",
            "title": "Coordinator",
            "location": "Philadlephia, PA, USA",
            "dates": "October 2013 to June 2016",
            "description": "Yadda yadda yadda"
        },
        {
            "employer": "Philadelphia Art Alliance",
            "link": "http://philartalliance.org",
            "title": "Intern",
            "location": "Philadelphia, PA, USA",
            "dates": "June 2013 to September 2013",
            "description": "Yadda yadda yadda"
        },
        {
            "employer": "DSW",
            "link": "http://www.dsw.com",
            "title": "Freight Team Associate",
            "location": "King of Prussia, USA",
            "dates": "September 2012 to December 2013",
            "description": "Yadda yadda yadda"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Rutgers University",
            "location": "New Brunswick, NJ",
            "degree": "Bachelor of Arts",
            "majors": "Art History",
            "dates": "June 2009 to August 2012",
            "url": "http://www.rutgers.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "March 2016 to Present",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Front End Development",
            "school": "Free Code Camp",
            "dates": "January 2016 to Present",
            "url": "http://www.freecodecamp.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Portfolio Page",
            "link": "http://codepen.io/#",
            "dates": "February 2016 to April 2016",
            "description": "Yadda yadda yadda",
            "images": ["http://www.placehold.it/197x148"]
        },
        {
            "title": "Wikipedia Viewer",
            "link": "http://codepen.io/#",
            "dates": "November 2016",
            "description": "Yadda yadda yadda",
            "images": ["http://www.placehold.it/197x148"]
        },
        {
            "title": "Local Weather",
            "link": "http://codepen.io/#",
            "dates": "October 2016",
            "description": "Yadda yadda yadda",
            "images": ["http://www.placehold.it/197x148"]
        },
        {
            "title": "Random Quote Generator",
            "link": "http://codepen.io/#",
            "dates": "September 2016",
            "description": "Yadda yadda yadda",
            "images": ["http://www.placehold.it/197x148"]
        }
    ]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").apppend(formattedMobile);
//.append(formattedEmail).append(formattedGithub).append(formattedLocation);