//strict rules
'use strict'

//function

//function for creating DOM elements from objects
function createObjectCard(object) {
    const objectSlot = document.createElement('div');
    objectSlot.classList.add('col-4');

    const objectCard = document.createElement('div');
    objectCard.classList.add('card');

    const objectImage = document.createElement('img');
    objectImage.classList.add('card-img-top','w-100');
    objectImage.src = `img/${object.photo}`;

    const objectCardBody = document.createElement('div');
    objectCardBody.classList.add('card-body','w-100');

    const objectName = document.createElement('h5');
    objectName.classList.add('card-title','w-100');
    objectName.innerHTML = object.name;

    const objectRole = document.createElement('p');
    objectRole.classList.add('card-text','w-100');
    objectRole.innerHTML = object.role;

    objectCardBody.append(objectName,objectRole);
    objectCard.append(objectImage,objectCardBody);
    objectSlot.append(objectCard);

    return objectSlot;
}


//variables

//array of objects   
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]
//initialize container on dom element
const cardBox = document.getElementById('card-box')

//print  info on console log
for (let i = 0; i < members.length; i++) {
    const member = members[i];
    console.log(i+1)
    const memberCard = createObjectCard(members[i]);
    cardBox.append(memberCard);
    for (let key in member) {
        console.log(`${key}: ${member[key]}`);
    }
}
