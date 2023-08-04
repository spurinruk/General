document.addEventListener("DOMContentLoaded", function () {
  const { data, feedbacks } = window;
  var arrIndex = 0;
  if (window.location.href.includes(data[0].id)) {
    arrIndex = 0;
  } else if (window.location.href.includes(data[1].id)) {
    arrIndex = 1;
  } else if (window.location.href.includes(data[2].id)) {
    arrIndex = 2;
  } else if (window.location.href.includes(data[3].id)) {
    arrIndex = 3;
  } else if (window.location.href.includes(data[4].id)) {
    arrIndex = 4;
  } else if (window.location.href.includes(data[5].id)) {
    arrIndex = 5;
  } else if (window.location.href.includes(data[6].id)) {
    arrIndex = 6;
  }

  const feedback_container = document.querySelector("#cust-feedback");
  function createFeedbackCard() {
    feedbacks.forEach((feedback) => {
      const feedbackCard = document.createElement("div");
      feedbackCard.setAttribute("class", "feedback-card");
      const custReview = document.createElement("p");
      custReview.innerText = feedback.review;
      const userName = document.createElement("footer");
      userName.innerText = feedback.customer_name;

      feedbackCard.appendChild(custReview);
      feedbackCard.appendChild(userName);
      feedback_container.appendChild(feedbackCard);
    });
  }

  function showPropertyDetails() {
    const propertyDetails = window.data[arrIndex];
    const typeElement = document.getElementById("type");
    const priceElement = document.getElementById("price");
    const addressElement = document.getElementById("address");
    const lotSizeElement = document.getElementById("lot-size");
    const roomsElement = document.getElementById("rooms");
    const descElement = document.getElementById("desc");

    const imageGrid = document.getElementById("image-grid");

    // Set property details
    typeElement.textContent = "Type: " + propertyDetails.type;
    priceElement.textContent = "Price: " + propertyDetails.price;
    lotSizeElement.textContent = "Area: " + propertyDetails.lotSize;
    roomsElement.textContent = "Rooms: " + propertyDetails.rooms;
    addressElement.textContent = "Address: " + propertyDetails.address;
    descElement.textContent = "Description: " + propertyDetails.description;

    let currentIndex = 0;
    function showOnePicture() {
      const firstImgeUrl = propertyDetails.imageUrls[currentIndex];
      const imgElement = document.createElement("img");
      imgElement.src = firstImgeUrl;
      imgElement.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % propertyDetails.imageUrls.length;
        showOnePicture();
      });
      imageGrid.innerHTML = "";
      imageGrid.appendChild(imgElement);
    }

    showOnePicture();
  }

  function listings() {
    /* <div class="card">
      <!--
            <img src="img_avatar.png" alt="Avatar" style="width:100%">
            <div class ="container">
                <h4></h4>
                <p></p>
            <\div>
        -->
    </div>*/
    const validProp = data.filter(
      (property) => property.id.includes("property") && property.available
    );
    const Lists = document.getElementById("all-listing");
    const allCards = []; // Create an array to hold all the cards

    for (var i = 0; i < validProp.length; i++) {
      const oneCard = document.createElement("div");
      oneCard.className = "card";
      const imgCard = document.createElement("img");
      imgCard.src = data[i + 1].imageUrls[0];
      const nameCard = document.createElement("h4");
      nameCard.textContent = data[i + 1].type;
      const szCard = document.createElement("p");
      szCard.textContent = data[i + 1].lotSize;
      const descCard = document.createElement("p");
      descCard.textContent = data[i + 1].rooms;
      const priceCard = document.createElement("p");
      priceCard.textContent = data[i + 1].price;

      oneCard.appendChild(imgCard);
      oneCard.appendChild(nameCard);
      oneCard.appendChild(descCard);
      oneCard.appendChild(szCard);
      oneCard.appendChild(priceCard);
      // Use a closure to capture the current value of `i`
      // Solution
      (function (index) {
        allCards.push(oneCard); // Add the card to the array
        /*problem */
        oneCard.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent the default page navigation behavior

          const propertyId = validProp[index].id;

          const newPage = `${propertyId}.html`;

          window.location.href = newPage;
        });
      })(i);
    }

    // Append each card to the Lists element
    for (var j = 0; j < allCards.length; j++) {
      Lists.appendChild(allCards[j]);
    }
  }

  function showCredit() {
    const ref = document.getElementById("references");
    data[6].allLinks.forEach((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.textContent = url;
      link.target = "_blank"; // open the links in a new tab
      ref.appendChild(link);
      ref.appendChild(document.createElement("br")); // Add a line break after each link
    });
  }

  if (arrIndex === 0) {
    createFeedbackCard();
  } else if ([1, 2, 3, 4].includes(arrIndex)) {
    showPropertyDetails();
  } else if (arrIndex === 5) {
    listings();
  } else if (arrIndex === 6) {
    showCredit();
  }
});
