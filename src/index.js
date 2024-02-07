// const { e } = require("vitest/dist/reporters-rzC174PQ");

// import { e } from "vitest/dist/reporters-rzC174PQ";

// import { data } from "happy-dom/lib/PropertySymbol";

// const { e } = require("vitest/dist/reporters-rzC174PQ");

function dataFetch() {
  fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((response) => { 
      let ramenDisplayNav = document.querySelector('#ramen-menu');
      Array.from(response).forEach((ramen)=> {
        displayRamens(ramen, ramenDisplayNav);
        
    });
});
}


const displayRamens = (ramen) => {
  const ramenImg = document.createElement('img');
  ramenImg.src = ramen.image;
  ramenImg.alt = ramen.name;
  ramenImg.classList.add('image-nav');
  const ramenDisplayContainer = document.querySelector("#ramen-menu");
  ramenDisplayContainer.append(ramenImg);

  ramenImg.addEventListener('click', (event) => {
    handleClick(ramen, event);
  
  });
};

const handleClick = (ramen, event) => {
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
  const detailsRating = document.getElementById("rating-display");
  const detailsComment = document.getElementById("comment-display");

  detailImg.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating;
  detailsComment.textContent= ramen.rating;
};


const addSubmitListener = (event) => {
  event.preventDefault();

  let newRamen = {
    name: event.target[0].value,
    restaurant: event.target[1].value,
    image: event.target[2].value,
    rating: event.target[3].value,
    comment: event.target[4].value,

  };
  fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newRamen),
  })
  .then((res) => {
    if (res.status === 201) {
      return res.json();
    }
  })
  .then((data) => {
    // console.log(data);

  const ramenFormName = document.querySelector("#new-name");
  const ramenFormRestaurant = document.querySelector("#new-restaurant");
  const ramenFormImage = document.querySelector("#new-image");
  const ramenFormRating = document.querySelector("#new-rating");
  const ramenFormComment = document.querySelector("#new-comment");

  ramenFormName.value = newRamen.name;
  ramenFormRestaurant.value = newRamen.restaurant;
  ramenFormImage.value = newRamen.image;
  ramenFormRating.value = newRamen.rating;
  ramenFormComment.value = newRamen.comment;
});
}

const ramenForm = document.getElementById('new-ramen');
ramenForm.addEventListener('submit', (e) => {
  addSubmitListener(e);
  dataFetch();
});


// const main = () => {
//   Invoke displayRamens here
//   Invoke addSubmitListener here
// }

// main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
dataFetch();
