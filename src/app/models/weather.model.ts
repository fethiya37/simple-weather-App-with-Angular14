export interface weatherData {
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    all: number
    dt: number
    sys: Sys
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
    timezone: number
    name: string
    cod: number
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  
  export interface Wind {
    speed: number
    deg: number
  }
  
  export interface Clouds {
    all: number
    dt: number
  }
  
  export interface Sys {
    type: number
    id: number
  }
  