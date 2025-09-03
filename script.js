const countryData = {
  India: {
    name: "India",
    description: "India is a South Asian country known for its rich culture, diverse geography, and growing tech industry."
  },
  USA: {
    name: "United States of America",
    description: "The USA is a North American country with a strong economy, global influence, and diverse landscapes."
  },
  China: {
    name: "China",
    description: "China is an East Asian country known for its ancient civilization, rapid development, and vast population."
  }
};

function showCountry(countryKey) {
  const info = countryData[countryKey];
  document.getElementById("country-name").textContent = info.name;
  document.getElementById("country-description").textContent = info.description;
}
