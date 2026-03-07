async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const cityDisplay = document.getElementById('city');
    const tempDisplay = document.getElementById('temperature');
    const conditionDisplay = document.getElementById('condition');

    if (!cityInput) {
        alert("Please enter a city name");
        return;
    }

    try {
       
        const response = await fetch(`http://localhost:3000/api/weather?city=${cityInput}`);
        const data = await response.json();

        if (response.ok) {
           
            cityDisplay.innerText = `${data.name}, ${data.country}`;
            tempDisplay.innerText = `${data.temp}°C`;
            conditionDisplay.innerText = data.condition;
            
       
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.querySelector('.date').innerText = new Date().toLocaleDateString(undefined, options);

            const statValues = document.querySelectorAll('.stat-card .value');
            statValues[0].innerText = `${data.feels_like}°C`; 
            statValues[1].innerText = `${data.humidity}%`;    
            statValues[2].innerText = `${data.wind_speed} m/s`; 
            statValues[3].innerText = `${data.pressure} mb`;  
            statValues[4].innerText = `${data.visibility} km`; /
            statValues[5].innerText = "N/A"; 

        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Cannot connect to the server. Make sure your backend is running.");
    }
}