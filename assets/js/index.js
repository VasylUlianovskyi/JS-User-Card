let userName1 = prompt("Input user Name:", "");
let userSurname = prompt("Input user Surname:", "");
let userPhone = prompt("Input user Phone:", "");
let userEmail = prompt("Input user Email:", "");
let userAge = Number(prompt("Input user age:", "0"));
let userPhoto = prompt("Write way to user photo:");

const userCard = `
<article class="user-card">
  <img class="user-photo" src=${userPhoto} alt="User Image" />
  <div class="about">
    <h1>${userName1} ${userSurname}</h1>
    <p class="subtitle"> Age: ${userAge}</p>
    <p class="subtitle"> Phone: ${userPhone}</p>
    <p class="subtitle"> Email: ${userEmail}</p>
    <footer class="card-footer">
      <button class="btn contact-btn">Contact Me</button>
      <button class="btn">Hire Me</button>
    </footer>
  </div>
</article>
`;

document.write(userCard);
