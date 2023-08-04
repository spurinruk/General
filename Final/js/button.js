document.addEventListener("DOMContentLoaded", function () {
  const { pages } = window;

  const button_container = document.querySelector("#menu-button");
  function createbutton() {
    pages.forEach((page) => {
      const button = document.createElement("button");
      button.innerText = page.name;
      /*addevent */
      button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default page navigation behavior

        const newPage = `${page.id}.html`;
        window.location.href = newPage;
      });
      button_container.appendChild(button);
    });
  }
  createbutton();
});
