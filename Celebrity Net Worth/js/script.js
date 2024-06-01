document.addEventListener("DOMContentLoaded", function() {
    const celebrities = [
        { name: "Celebrity 1", netWorth: "$100 Million", image: "images/Celebrity1.jpg" },
        // Add more celebrities as needed
    ];

    const celebrityList = document.getElementById("celebrity-list");

    celebrities.forEach(celebrity => {
        const celebrityDiv = document.createElement("div");
        celebrityDiv.classList.add("celebrity");

        celebrityDiv.innerHTML = `
            <img src="${celebrity.image}" alt="${celebrity.name}">
            <h2>${celebrity.name}</h2>
            <p>Net Worth: ${celebrity.netWorth}</p>
        `;

        celebrityList.appendChild(celebrityDiv);
    });
});
