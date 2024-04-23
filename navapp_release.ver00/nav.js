const locations = {
    Offices: ["Cashier", "Director", "Guidance", "Information", "Principal", "Registrar"],
    Grade7: ["St. Lorenzo Ruiz", "St. Dominic", "St. Martin", "St. Blaise", "St. Jude", "St. John Berchmans"],
    Grade8: ["St. Mary", "St. Elizabeth", "St. Anne", "St. Bernadette", "St. Therese", "St. Martha"],
    Grade9: ["St. Matthew", "St. Mark", "St. Luke", "St. John the Evangelist", "St. Thomas"],
    Grade10: ["St. Joseph", "St. John the Baptist", "St. Peter", "St. Paul"],
    Grade11: ["ABM - St. Theresa of Calcutta", "TVL - St. Bridgette", "HUMSS - St. Catherine of Siena", "STEM - St. Claire of Assisi", "STEM - St. Maria Goretti", "STEM - St. Rita of Cascia"],
    Grade12: ["ABM - St. John Paul II", "TVL - St. Joseph the Worker", "HUMSS - St. Joseph Marello", "STEM - St. Thomas Aquinas", "STEM - St. Augustine of Hippo", "STEM - St. Albert the Great"],
     Laboratories: ["Computer Laboratory", "Science Laboratory", "TLE/TVL Laboratory"], // Missing "Audio Visual Room (AVR)", "Cafeteria", 
    Elementary: ["Elementary Department"]
};

const locationSelect = document.getElementById("locationSelect");
for (const category in locations) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = category.charAt(0).toUpperCase() + category.slice(1);
    locations[category].forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        optgroup.appendChild(option);
    });
    locationSelect.appendChild(optgroup);
}
// For categorization in menu

const locationData = {
    // Grade 7
    "St. Lorenzo Ruiz": {
        image: "images/map-7lorenzo.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Dominic": {
        image: "images/map-7dominic.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Martin": {
        image: "images/map-7martin.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Blaise": {
        image: "images/map-7blaise.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Jude": {
        image: "images/map-7jude.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. John Berchmans": {
        image: "images/map-7berchmans.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Grade 8
    "St. Mary": {
        image: "images/map-8mary.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Elizabeth": {
        image: "images/map-8elizabeth.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Anne": {
        image: "images/map-8anne.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Bernadette": {
        image: "images/map-8bernadeth.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Therese": {
        image: "images/map-8therese.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Martha": {
        image: "images/map-8martha.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Grade 9
    "St. Matthew": {
        image: "images/map-9matthew.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Mark": {
        image: "images/map-9mark.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Luke": {
        image: "images/map-9luke.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. John the Evangelist": {
        image: "images/map-9john.e.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Thomas": {
        image: "images/map-9thomas.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Grade 10
    "St. Joseph": {
        image: "images/map-10joseph.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. John the Baptist": {
        image: "images/map-10john.b.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Peter": {
        image: "images/map-10peter.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "St. Paul": {
        image: "images/map-10paul.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Grade 11
    "ABM - St. Theresa of Calcutta": {
        image: "images/map-11abm.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "TVL - St. Bridgette": {
        image: "images/map-11tvl.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "HUMSS - St. Catherine of Siena": {
        image: "images/map-11humss.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Claire of Assisi": {
        image: "images/map-11stem.clare.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Maria Goretti": {
        image: "images/map-11stem.goretti.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Rita of Cascia": {
        image: "images/map-11stem.rita.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Grade 12
    "ABM - St. John Paul II": {
        image: "images/map-12abm.tvl.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "TVL - St. Joseph the Worker": {
        image: "images/map-12abm.tvl.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "HUMSS - St. Joseph Marello": {
        image: "images/map-12humss.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Thomas Aquinas": {
        image: "images/map-12stem.aquinas.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Augustine of Hippo": {
        image: "images/map-12stem.augustine.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "STEM - St. Albert the Great": {
        image: "images/map-12stem.albert.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Offices
    "Cashier": {
        image: "images/map-admin.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Director": {
        image: "images/map-director.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Guidance": {
        image: "images/map-admin.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Information": {
        image: "images/map-admin.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Principal": {
        image: "images/map-admin.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Registrar": {
        image: "images/map-registrar.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Facilities
    "Audio Visual Room (AVR)": {
        image: "images/loc.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Cafeteria": {
        image: "images/loc.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Clinic": {
        image: "images/map-clinic.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Faculty": {
        image: "images/map-faculty.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Gymnasium": {
        image: "images/map-gym.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Library": {
        image: "images/map-library.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Laboratories
    "Computer Laboratory": {
        image: "images/map-comlab.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "Science Laboratory": {
        image: "images/map-scilab.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    "TLE/TVL Laboratory": {
        image: "images/map-tlelab.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Elementary
    "Elementary Department": {
        image: "images/map-elem.png",
        legends: "<img src='images/markers/location-pin.png' alt='Image 1'><p>Destination</p><img src='images/markers/user.png' alt='Image 2'><p>User Location</p>"
    },
    // Add data for other locations with actual image paths and legends
};
// Datas for selected locations

locationSelect.addEventListener("change", function() {
    const selectedLocation = this.value;
    const locationInfo = locationData[selectedLocation];
    if (locationInfo) {
        // Remove previously displayed frame and legends section
        const existingContainer = document.getElementById("locationContainer");
        if (existingContainer) {
            existingContainer.remove();
        }

        // Create a container for the frame and legends section
        const container = document.createElement("div");
        container.id = "locationContainer";
        container.style.display = "flex"; // Use flexbox for layout
        container.style.alignItems = "center"; // Center items vertically

        // Display new frame (image)
        const frame = document.createElement("img"); // Use img tag for the image
        frame.id = "displayedFrame";
        frame.src = locationInfo.image; // Set image source
        frame.style.maxWidth = "80%"; // Image takes maximum 50% of container width
        frame.style.height = "auto"; // Maintain aspect ratio
        container.appendChild(frame);

        // Display new legends section beside the frame (image) inside the container
        const legendsSection = document.createElement("div");
        legendsSection.id = "legendsSection";
        legendsSection.innerHTML = `<h2>Legends for ${selectedLocation}</h2>
        <div class="legend-item"><img src="images/markers/location-pin.png" alt="Image 1"><p>Destination</p></div>
        <div class="legend-item"><img src="images/markers/user.png" alt="Image 2"><p>User Location</p></div>
        <div class="legend-item"><img src="images/legends/legen-canteen.jpg" alt="legen-canteen"><p>Cafeteria</p></div>
        <div class="legend-item"><img src="images/legends/legen-elem.jpg" alt="legen-elem"><p>Elementary Department</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr7.jpg" alt="legen-gr7"><p>Grade 7 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr8.jpg" alt="legen-gr8"><p>Grade 8 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr9.jpg" alt="legen-gr9"><p>Grade 9 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gr10.jpg" alt="legen-gr10"><p>Grade 10 Building</p></div>
        <div class="legend-item"><img src="images/legends/legen-gym.jpg" alt="legen-gym"><p>Gymnasium</p></div>
        <div class="legend-item"><img src="images/legends/legen-quad.jpg" alt="legen-quad"><p>Quadrangle</p></div>
        <div class="legend-item"><img src="images/legends/legen-garden.jpg" alt="legen-garden"><p>St. Joseph Garden</p></div>
        <div class="legend-item"><img src="images/legends/legen-study.jpg" alt="legen-gr10"><p>Study Area</p></div>`;
        legendsSection.style.width = "20%"; // Legends section takes 50% of container width
        legendsSection.style.padding = "20px"; // Add padding for readability
        legendsSection.style.backgroundColor = "rgba(0, 123, 255, 0.7)"; // Blueish color with transparency
        legendsSection.style.color = "#fff"; // White text color for readability
        legendsSection.style.overflowY = "auto"; // Enable scrolling if content exceeds container height
        container.appendChild(legendsSection);

        // Append the container to the document body
        document.body.appendChild(container);
    }
});

// Get the logo image element
const logoImage = document.getElementById("logoImage");

// Add click event listener to the logo image
logoImage.addEventListener("click", function() {
    // Remove the container holding the displayed image and legends section
    const existingContainer = document.getElementById("locationContainer");
    if (existingContainer) {
        existingContainer.remove();
    }

    // Reset the selected option in the selection menu
    locationSelect.selectedIndex = 0;
});

// Get the home icon element
const homeIcon = document.getElementById("homeButton");

// Add click event listener to the home icon
homeIcon.addEventListener("click", function() {
    // Redirect to the home page (assuming 'home.html' is your home page)
    window.location.href = "home.html";
});

// Get the info icon element
const infoIcon = document.getElementById("aboutButton");

// Add click event listener to the info icon
infoIcon.addEventListener("click", function() {
    // Redirect to the about page (assuming 'about.html' is your about page)
    window.location.href = "about.html";
});
