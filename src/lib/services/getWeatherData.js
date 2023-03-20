export const getWeatherData = async ( place = 'Santiago' ) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '77e6dcd974msh4768cea0fedf06ep1b6439jsn7594c5381dba',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${place}`, options)
    const data = await response.json()

    const { location, current } = data
    const { name, region, country, localtime } = location
    const { temp_c, condition, is_day } = current
    let background = ''
    let colorText = 'rgb(91, 77, 65)'

    if (is_day === 1) {
        background = 'https://w0.peakpx.com/wallpaper/479/110/HD-wallpaper-artistic-landscape-minimalist.jpg'
    } 

    if (is_day === 0) {
        background = 'https://p4.wallpaperbetter.com/wallpaper/908/977/162/artistic-landscape-blue-minimalist-moon-hd-wallpaper-preview.jpg'
        colorText = 'white'
    }

    return {
        name,
        region,
        country,
        localtime,
        temperatura: temp_c,
        dayOrnight: is_day,
        background,
        colorText,
        condition,
    }
}
