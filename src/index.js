console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Add JavaScript that:

// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

document.addEventListener('DOMContentLoaded', () => {
  loadImg();
  loadBreedOptions();
});

loadImg = () => {
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((img) => addImage(img));
    });
};

addImage = (dogPic) => {
  const dogDiv = document.getElementById('dog-image-div');
  const newImage = document.createElement('img');
  newImage.src = dogPic;
  dogDiv.appendChild(newImage);
};

// After the first challenge is completed, add JavaScript that:

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

loadBreedOptions = () => {
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(breedUrl);
      breeds = Object.keys(data.message);
      console.log(breeds);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
};

updateBreedList = (breeds) => {
  let ul = document.getElementById('dog-breeds');
  removeChildren(ul);
  breeds.forEach((breed) => addBreed(breed));
};

removeChildren = (el) => {
  let child = el.lastElementChild;
  console.log(child);
  while (child) {
    el.removeChild(child);
    child = el.lastElementChild;
    console.log(child);
  }
};

filterByLetter = (letter) => {
  console.log(letter);
  updateBreedList(breeds.filter((breed) => breed.startsWith(letter)));
};

addBreedSelectListener = () => {
  let breedDropdown = document.getElementById('breed-dropdown');
  breedDropdown.addEventListener('change', (e) => {
    filterByLetter(e.target.value);
  });
};

addBreed = (breed) => {
  let ul = document.getElementById('dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
};

updateColor = (event) => {
  event.target.style.color = 'palevioletred';
};

// fetch(`${imgUrl}/image/random`)
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach(({ img }) => {
//       let dogImage = document.createElement(`img`);

//       dogImage.addEventListener(`click`, () => {
//         removeDiv(showDiv);
//         let img = document.createElement(`img`);
//         let desc = document.createElement(`p`);
//         let userList = document.createElement(`ul`);

//         img.src = imgUrl;
//         desc.textContent = description;
//         userList.id = `user-box`;
//         users.forEach((user) => {
//           let userLi = document.createElement(`li`);
//           userLi.textContent = user.username;
//           userLi.id = user.id;
//           userList.appendChild(userLi);
//         });
//         // btn.addEventListener(`click`, () => {
//         //   console.log(users);
//         //   if (document.getElementById(`10`)) {
//         //     fetch(`http://localhost:3000/books/${id}`, {
//         //       method: 'PATCH',
//         //       headers: {
//         //         'Content-Type': 'application/json',
//         //         Accept: 'application/json',
//         //       },
//         //       body: JSON.stringify({
//         //         users: [{ id: 8, username: 'John' }],
//         //       }),
//         //     });
//         //     document.getElementById(`10`).remove();
//         //   } else {
//         //     fetch(`http://localhost:3000/books/${id}`, {
//         //       method: 'PATCH',
//         //       headers: {
//         //         'Content-Type': 'application/json',
//         //         Accept: 'application/json',
//         //       },
//         //       body: JSON.stringify({
//         //         users: [
//         //           { id: 8, username: 'John' },
//         //           { id: 10, username: 'Doe' },
//         //         ],
//         //       }),
//         //     });
//         //     let li = document.createElement(`li`);
//         //     li.id = 10;
//         //     li.textContent = `Doe`;
//         //     document.getElementById(`user-box`).appendChild(li);
//         //   }
//         // });
//         showDiv.append(img, desc, userList, btn);
//       });
//       ul.appendChild(li);
//     });
//   });
