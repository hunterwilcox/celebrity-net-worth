document.addEventListener("DOMContentLoaded", function() {
    const celebrities = [
        { name: "Tom Cruise", netWorth: "$100 Million", image: "images/celebrity1.jpg" },
        { name: "Celebrity 2", netWorth: "$200 Million", image: "images/celebrity2.jpg" },
        { name: "Celebrity 3", netWorth: "$300 Million", image: "images/celebrity3.jpg" }
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
