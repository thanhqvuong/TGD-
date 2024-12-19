// DOM elements
const addressFormTrigger = document.querySelector("#address-form-trigger");
const addressCloseButton = document.querySelector("#address-close");
const addressSubmitButton = document.querySelector("#address-btn");
const addressCitySelect = document.querySelector("#address-city");
const addressDistrictSelect = document.querySelector("#address-district"); // Corrected ID
const addressWardSelect = document.querySelector("#address-ward");
const addressHouseInput = document.querySelector("#address-house");
const addressForm = document.querySelector(".address-form");

// Open the address form when the user clicks on the location button
addressFormTrigger.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    addressForm.style.display = "flex";
});

// Close the address form when the user clicks the close button
addressCloseButton.addEventListener("click", function () {
    addressForm.style.display = "none";
});

// Handle the form submission when the user clicks the "Xác Nhận" button
addressSubmitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const city = addressCitySelect.value.trim();
    const district = addressDistrictSelect.value.trim();
    const ward = addressWardSelect.value.trim();
    const houseNumber = addressHouseInput.value.trim();

    // Check if all fields are filled
    if (city === "" || district === "" || ward === "" || houseNumber === "") {
        alert("Vui lòng điền đầy đủ thông tin địa chỉ!"); // Alert in Vietnamese if any field is empty
        return;
    }

    // Check if selected options are valid (not default)
    if (city === "Chọn Địa Điểm" || district === "Chọn Quận" || ward === "Chọn Phường") {
        alert("Vui lòng chọn địa chỉ hợp lệ!"); // Alert if user has not selected valid options
        return;
    }

    // Format the full address as required
    const fullAddress = `${houseNumber} ${ward}, Phường ${ward}, Quận ${district}, ${city}`;

    // Update the button text with the full address
    addressFormTrigger.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${fullAddress}`;

    // Close the form after submission
    addressForm.style.display = "none";
});
