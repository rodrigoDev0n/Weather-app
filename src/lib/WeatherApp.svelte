<script>
    import { getWeatherData } from "./services/getWeatherData";

    let value = ""
    let search = ""
    const onHandleInput = (e) => {
        e.preventDefault()
        value = e.target.value
        search = value

        value = ""
    }
    
    const formController = (e) => {
        e.preventDefault()
    }
</script>

<h1>Clima app</h1>
<div class="form-container">
    <form action="" on:submit={formController}>
        <input 
            type="text" 
            placeholder="Busca tu ciudad" 
            value={value} 
            on:change={onHandleInput} 
        />
        <button>Buscar</button>
    </form>
</div>

{#await getWeatherData(search) then weather}
    <div 
        class="weather-container"
        style={`background-image: url(${weather.background})`}
    >
        <div class="head-container">
            <h2 style={`color: ${weather.colorText}`}>{weather.name}</h2>
            <img src={weather.condition.icon} alt={weather.condition.text} />
        </div>
        <div class="weatherData-container">
            <p class="temp" style={`font-size: 60px; color: ${weather.colorText}`}>{weather.temperatura}°C</p>
        </div>
    </div>
{/await}

<style>

    .form-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    input {
        width: 94%;
        padding: 0.5rem;
        border: 2px solid rgba(251, 202, 202, 0.5);
        border-radius: 15px;
        outline: none;
        font-size: 1.5rem;
    }

    button {
        margin-top: 10px;
        width: 100%;
        padding: 0.5rem;
        border: 2px solid rgba(251, 202, 202, 0.5);
        border-radius: 15px;
        outline: none;
        font-size: 1.5rem;
        background-color: rgba(251, 202, 202, 0.5);
        cursor: pointer;
    }

    .weather-container {
        margin-top: 10px;
        border-radius: 15px;
        box-shadow:  0 0 10px 0 rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(251, 202, 202, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 50vh;
    }

    .weather-container h2 {
        font-size: 2rem;
    }

    .weather-container p {
        font-size: 1.5rem;
        font-weight: bolder;
    }

    .weather-container img {
        width: 50px;
        height: 50px;
    }

    .head-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .weatherData-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }

    .temp {
        font-size: 100px;
    }
</style>
