document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("carSearch");
  const conditionSelect = document.getElementById("conditionFilter");
  const brandSelect = document.getElementById("brandFilter");
  const cars = document.querySelectorAll(".car");

  function filterCars() {
    const query = searchInput.value.toLowerCase();
    const condition = conditionSelect.value;
    const brand = brandSelect.value;

    cars.forEach((car) => {
      const carName = car.querySelector("h4").textContent.toLowerCase();
      const carBrand = car.getAttribute("data-brand");
      const carCondition = car.getAttribute("data-condition");

      // Check if matches search, brand, and condition
      const matchesSearch =
        carName.includes(query) || carBrand.toLowerCase().includes(query);
      const matchesBrand = brand === "all" || carBrand === brand;
      const matchesCondition =
        condition === "all" || carCondition === condition;

      if (matchesSearch && matchesBrand && matchesCondition) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    });
  }

  // Listen for typing and dropdown changes
  searchInput.addEventListener("input", filterCars);
  conditionSelect.addEventListener("change", filterCars);
  brandSelect.addEventListener("change", filterCars);
});
