const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

console.log(cat.complain()); //To show the method is working withing the object, calling the property method.

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const AllParagraphs = document.querySelectorAll("p");

for (let i = 0; i < AllParagraphs.length; i++) {
    AllParagraphs[i].style.color = "red";
}

// Question 6 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;

// Question 7

function catList(list) {
    
    const loopedList = list.find(function(list) {
        console.log(list.name);
    });
}

catList(cats);

// Question 8

function createCats(cats) {
    
    let html = "";

    for (let i = 0; i < cats.length; i++) {
        const catName = cats[i].name;
        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div>
                    <h5>Name: ${catName}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;

    }

    return html;
}

const listOfCats = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = listOfCats;


