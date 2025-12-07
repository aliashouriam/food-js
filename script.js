function toastFunction() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.className = "absolute top-0 right-0";

  const p = document.createElement("p");
  p.textContent = "منو کلیک کردی";
  div.append(p);
  body.append(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

function navItemShow() {
  const navItem = [
    { name: "home", link: "/" },
    { name: "products", link: "/products" },
    { name: "about us", link: "/contact-us" },
  ];

  const navUl = document.querySelector(".navUl");

  navItem.map((item) => {
    const li = document.createElement("li");
    li.className = "cursor-pointer hover:text-rose-700 transition duration-300";
    li.textContent = item.name;
    navUl.append(li);
  });
}

function cartIcon() {
  const cartIcon = document.querySelector(".cart__icon");

  cartIcon.addEventListener("click", function () {
    toastFunction();
  });
}

function main() {
  navItemShow();
  cartIcon();
}

main();
