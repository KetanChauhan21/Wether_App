import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="m-2 flex items-center justify-center p-1">
      <div className="w-60 md:w-72 bg-blue-900 text-white rounded-2xl shadow-xl p-4 flex flex-col gap-4">
        {/* Temperature & Weather */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-bold">{Math.round(data.main.temp)}°C</h2>
          <p className="text-md">{data.weather[0].description}</p>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center">
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather icon"
            className="w-20 h-20"
          />
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-200">
          <span>📍</span>
          <p className="truncate font-medium">{data.city}</p>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-blue-800 rounded-lg p-2 flex flex-col items-center shadow-inner">
            <p className="text-xs text-gray-300">Wind</p>
            <h3 className="text-sm font-semibold">{data.wind.speed} m/s</h3>
          </div>

          <div className="bg-blue-800 rounded-lg p-2 flex flex-col items-center shadow-inner">
            <p className="text-xs text-gray-300">Feels Like</p>
            <h3 className="text-sm font-semibold">
              {Math.round(data.main.feels_like)}
            </h3>
          </div>

          <div className="bg-blue-800 rounded-lg p-2 flex flex-col items-center shadow-inner">
            <p className="text-xs text-gray-300">Humidity</p>
            <h3 className="text-sm font-semibold">{data.main.humidity}%</h3>
          </div>

          <div className="bg-blue-800 rounded-lg p-2 flex flex-col items-center shadow-inner">
            <p className="text-xs text-gray-300">Pressure</p>
            <h3 className="text-sm font-semibold">{data.main.pressure} hPa</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
