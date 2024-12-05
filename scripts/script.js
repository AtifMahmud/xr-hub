// Array of companies
const companies = [
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/100",
    url: "https://techcorp.com",
    tags: ["Tech", "Innovation"],
  },
  {
    name: "FinanceHub",
    logo: "https://via.placeholder.com/100",
    url: "https://financehub.com",
    tags: ["Finance", "Banking"],
  },
  {
    name: "RetailWorld",
    logo: "https://via.placeholder.com/100",
    url: "https://retailworld.com",
    tags: ["Retail", "E-commerce"],
  },
  {
    name: "RetailWorld",
    logo: "https://via.placeholder.com/100",
    url: "https://retailworld.com",
    tags: ["Retail", "E-commerce"],
  },
  {
    name: "RetailWorld",
    logo: "https://via.placeholder.com/100",
    url: "https://retailworld.com",
    tags: ["Retail", "E-commerce"],
  },
  {
    name: "RetailWorld",
    logo: "https://via.placeholder.com/100",
    url: "https://retailworld.com",
    tags: ["Retail", "E-commerce"],
  },
  {
    name: "RetailWorld",
    logo: "https://via.placeholder.com/100",
    url: "https://retailworld.com",
    tags: ["Retail", "E-commerce"],
  },
];

// Function to create cards
function createCompanyCards(companies) {
  const grid = document.getElementById("companyGrid");

  companies.forEach((company) => {
    // Create column wrapper
    const col = document.createElement("div");
    col.className = "col-lg-4"; // Flex column for 3-per-row layout

    // Create card container
    const card = document.createElement("div");
    card.className = "company-card";

    // Add logo
    const logo = document.createElement("img");
    logo.src = company.logo;
    logo.alt = `${company.name} Logo`;
    card.appendChild(logo);

    // Add name
    const name = document.createElement("h3");
    name.textContent = company.name;
    card.appendChild(name);

    // Add link
    const link = document.createElement("a");
    link.href = company.url;
    link.target = "_blank";
    link.textContent = "Visit Website";
    card.appendChild(link);

    // Add tags
    company.tags.forEach((tag) => {
      const tagBubble = document.createElement("span");
      tagBubble.textContent = tag;
      tagBubble.className = "tag-bubble";
      card.appendChild(tagBubble);
    });

    // Append card to column
    col.appendChild(card);

    // Append column to grid
    grid.appendChild(col);
  });
}

// Call the function
createCompanyCards(companies);