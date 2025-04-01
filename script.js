document.getElementById("travel-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const weather = document.getElementById("weather").value;
    const budget = document.getElementById("budget").value;
    const travelType = document.getElementById("travel-type").value;

    let suggestions = [];

    // Helper function to convert USD to INR
    function convertToINR(usdMin, usdMax) {
        const inrMin = Math.round(usdMin * 87); // 1 USD = 87 INR
        const inrMax = Math.round(usdMax * 87);
        return `₹${inrMin.toLocaleString()} - ₹${inrMax.toLocaleString()}`;
    }

    // Logic to provide multiple suggestions with prices in INR
    if (weather === '1' && travelType === '1') {
        suggestions = budget === '1' ? 
            [["Thailand (Bangkok, Chiang Mai)", convertToINR(800, 1200)], 
             ["Vietnam (Hanoi, Sapa)", convertToINR(700, 1100)]] :
            budget === '2' ? 
            [["Peru (Machu Picchu)", convertToINR(1500, 2000)], 
             ["Costa Rica (Arenal Volcano)", convertToINR(1400, 1900)]] :
            [["New Zealand (Queenstown)", convertToINR(3000, 4000)], 
             ["South Africa (Cape Town)", convertToINR(2800, 3500)]];
    } else if (weather === '1' && travelType === '2') {
        suggestions = budget === '1' ? 
            [["Bali, Indonesia", convertToINR(900, 1200)], 
             ["Sri Lanka (Mirissa)", convertToINR(850, 1100)]] :
            budget === '2' ? 
            [["Maldives", convertToINR(2000, 3000)], 
             ["Seychelles", convertToINR(2100, 3200)]] :
            [["French Polynesia (Bora Bora)", convertToINR(5000, 6500)], 
             ["Hawaii (Maui)", convertToINR(3500, 5000)]];
    } else if (weather === '2' && travelType === '1') {
        suggestions = budget === '1' ? 
            [["Nepal (Himalayas)", convertToINR(600, 1000)], 
             ["India (Manali)", convertToINR(500, 900)]] :
            budget === '2' ? 
            [["Austria (Alps skiing)", convertToINR(1800, 2500)], 
             ["Norway (Tromsø)", convertToINR(2000, 2800)]] :
            [["Switzerland (Matterhorn)", convertToINR(3500, 5000)], 
             ["Iceland (Glaciers)", convertToINR(4000, 5500)]];
    } else if (weather === '2' && travelType === '2') {
        suggestions = budget === '1' ? 
            [["Canada (Banff)", convertToINR(1000, 1500)], 
             ["Scotland (Edinburgh)", convertToINR(1200, 1800)]] :
            budget === '2' ? 
            [["Finland (Lapland)", convertToINR(2200, 3000)], 
             ["Sweden (Abisko)", convertToINR(2000, 2800)]] :
            [["Iceland (Blue Lagoon)", convertToINR(4000, 5500)], 
             ["Japan (Hokkaido)", convertToINR(3800, 4800)]];
    } else if (travelType === '3') {
        if (weather === '1') {
            suggestions = budget === '1' ? 
                [["Mexico (Yucatan)", convertToINR(800, 1200)], 
                 ["Turkey (Istanbul)", convertToINR(900, 1300)]] :
                budget === '2' ? 
                [["Morocco (Marrakech)", convertToINR(1500, 2200)], 
                 ["Spain (Barcelona)", convertToINR(1800, 2500)]] :
                [["Italy (Rome, Florence)", convertToINR(3000, 4500)], 
                 ["Greece (Athens, Santorini)", convertToINR(3500, 5000)]];
        } else {
            suggestions = budget === '1' ? 
                [["Czech Republic (Prague)", convertToINR(1000, 1400)], 
                 ["Poland (Krakow)", convertToINR(800, 1300)]] :
                budget === '2' ? 
                [["Austria (Vienna)", convertToINR(2000, 2800)], 
                 ["Germany (Berlin)", convertToINR(1800, 2500)]] :
                [["Japan (Kyoto, Tokyo)", convertToINR(4000, 5500)], 
                 ["South Korea (Seoul)", convertToINR(3500, 4800)]];
        }
    } else {
        suggestions = [["Sorry, we couldn't find a perfect match for your preferences.", ""]];
    }

    // Display the suggestions with prices in INR
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>We recommend visiting:</p><ul>${suggestions.map(
        ([dest, price]) => `<li>${dest} - <strong>${price}</strong></li>`
    ).join('')}</ul>`;
});
