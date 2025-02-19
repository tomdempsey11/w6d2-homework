            // Data for the partners
            const partners = [
                { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
                { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
                { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
                { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
                { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
                { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" },
            ];

            // Reference to the <ul> element
            const partnersList = document.getElementById("partners");

            // Dynamically create <li> elements for each partner
            partners.forEach(partner => {
                const listItem = document.createElement("li");
                listItem.classList.add("partner");

                const img = document.createElement("img");
                img.src = partner.src;
                img.alt = partner.alt;

                listItem.appendChild(img); // Add <img> to <li>
                partnersList.appendChild(listItem); // Add <li> to <ul>
            });