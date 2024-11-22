// import React, { useState } from 'react';
// import { Navbar } from './navabr';

// const Services = () => {
//   const [soilType, setSoilType] = useState('');
//   const [season, setSeason] = useState('');
//   const [location, setLocation] = useState('');
//   const [previousCrop, setPreviousCrop] = useState('');
//   const [budget, setBudget] = useState('');
//   const [recommendation, setRecommendation] = useState(null);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const processedData = { soilType, season, location, previousCrop, budget };
//     const result = getRecommendation(processedData);
//     setRecommendation(result);
//   };

//   const getRecommendation = (data) => {
//     return {
//       cropRotation: 'Wheat -> Rice -> Corn',
//       fertilizers: 'Nitrogen, Phosphorus, Potassium'
//     };
//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
//         <h2 className="text-2xl font-bold text-center mb-6">Crop Rotation & Fertilizer Recommendation</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Soil Type:</label>
//             <input
//               type="text"
//               value={soilType}
//               onChange={(e) => setSoilType(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Loamy, Sandy"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Season:</label>
//             <input
//               type="text"
//               value={season}
//               onChange={(e) => setSeason(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Winter, Summer"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Location:</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Texas, Punjab"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Previous Crop:</label>
//             <input
//               type="text"
//               value={previousCrop}
//               onChange={(e) => setPreviousCrop(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Corn, Rice"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Budget (Allocated):</label>
//             <input
//               type="number"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., 10000"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Get Recommendation
//           </button>
//         </form>

//         {recommendation && (
//           <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-500">
//             <h3 className="font-semibold">Recommendation:</h3>
//             <p><strong>Crop Rotation:</strong> {recommendation.cropRotation}</p>
//             <p><strong>Fertilizers:</strong> {recommendation.fertilizers}</p>
//           </div>
//         )}
//       </div>
//       <div className='mt-4'>
//       <section className="cta bg-green-300 py-2 text-center">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
//           <p className="text-lg text-green-700 mt-4">
//             Get the latest updates on crop trends, farming techniques, and expert advice.
//           </p>
//         </div>
//       </section>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import { Navbar } from './navabr';

// const Services = () => {
//   const [soilType, setSoilType] = useState('');
//   const [season, setSeason] = useState('');
//   const [location, setLocation] = useState('');
//   const [previousCrop, setPreviousCrop] = useState('');
//   const [budget, setBudget] = useState('');
//   const [crops, setCrops] = useState(null);
//   const [fertilizers, setFertilizers] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const processedData = { soil_type: soilType, season, location, previous_crop: previousCrop, budget };

//     try {
//       const response = await fetch('http://127.0.0.1:5000/recommend', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(processedData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch recommendation');
//       }

//       const result = await response.json();
//       setCrops(result.crops);
//       setFertilizers(result.fertilizers);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setCrops(null);
//       setFertilizers(null);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
//         <h2 className="text-2xl font-bold text-center mb-6">Crop Rotation & Fertilizer Recommendation</h2>
//         <form onSubmit={handleFormSubmit}>
//           {/* Form Fields */}
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Soil Type:</label>
//             <input
//               type="text"
//               value={soilType}
//               onChange={(e) => setSoilType(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Loamy, Sandy"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Season:</label>
//             <input
//               type="text"
//               value={season}
//               onChange={(e) => setSeason(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Winter, Summer"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Location:</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Texas, Punjab"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Previous Crop:</label>
//             <input
//               type="text"
//               value={previousCrop}
//               onChange={(e) => setPreviousCrop(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., Corn, Rice"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 font-semibold text-gray-700">Budget (Allocated):</label>
//             <input
//               type="number"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="e.g., 10000"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Get Recommendation
//           </button>
//         </form>

//         {error && (
//           <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-500">
//             <p className="text-red-700">Error: {error}</p>
//           </div>
//         )}

//         {crops && (
//           <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-500">
//             <h3 className="font-semibold">Recommended Crops:</h3>
//             {crops.split('\n').map((crop, index) => (
//               <p key={index}>{crop}</p>
//             ))}
//           </div>
//         )}

//         {fertilizers && (
//           <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-500">
//             <h3 className="font-semibold">Recommended Fertilizers:</h3>
//             {fertilizers.split('\n').map((fertilizer, index) => (
//               <p key={index}>{fertilizer}</p>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className='mt-8'>
//       <section className="cta bg-green-300 py-2 text-center">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
//           <p className="text-lg text-green-700">
//             Get the latest updates on crop trends, farming techniques, and expert advice.
//           </p>
//           <hr className="border-green-900" />
//           <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 CropCare. All rights reserved.</p>
//         </div>
//       </section>
//       </div>
//     </div>
//   );
// };

// export default Services;



import React, { useState } from 'react';  
import { Navbar } from './navabr';

const Services = () => {
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [location, setLocation] = useState('');
  const [previousCrop, setPreviousCrop] = useState('');
  const [budget, setBudget] = useState('');
  const [crops, setCrops] = useState(null);
  const [fertilizers, setFertilizers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null); // New response time state

  // Sample data for dropdowns
  const soilTypes = ['Loamy', 'Sandy', 'Clay', 'Silty', 'Peaty', 'Saline'];
  const seasons = ['Winter', 'Summer', 'Monsoon', 'Spring', 'Autumn', 'Pre-Monsoon'];
  const locations = [
    'Andhra Pradesh', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 
    'Telangana', 'Uttar Pradesh', 'West Bengal', 'Odisha', 'Uttarakhand', 
    'Himachal Pradesh', 'Jammu & Kashmir', 'Chhattisgarh', 'Assam', 
    'Tripura', 'Nagaland', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 
    'Sikkim', 'Goa', 'Mizoram', 'Andaman & Nicobar Islands', 
    'Lakshadweep', 'Dadra & Nagar Haveli', 'Daman & Diu', 
    'Delhi', 'Puducherry', 'Chandigarh', 'Lakshadweep', 'Ladakh', 'Dadras & Nagar Haveli'
  ];

  const previousCrops = [
    'Rice', 'Wheat', 'Sugarcane', 'Cotton', 'Maize', 'Soybean', 
    'Pulses', 'Groundnut', 'Barley', 'Millets', 'Tobacco', 
    'Mustard', 'Sunflower', 'Chickpea', 'Sorghum', 'Oilseeds', 
    'Vegetables', 'Fruits', 'Tea', 'Coffee', 'Spices', 
    'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage', 
    'Cauliflower', 'Pumpkin', 'Ginger', 'Garlic', 'Turmeric',
    'Peas', 'Carrot', 'Radish', 'Eggplant', 'Bitter Gourd', 
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const processedData = { soil_type: soilType, season, location, previous_crop: previousCrop, budget };

    setLoading(true);
    setResponseTime(null); // Reset response time on new request

    const startTime = Date.now(); // Start time measurement

    try {
      const response = await fetch('https://cropcarebackend.onrender.com/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(processedData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendation');
      }

      const result = await response.json();
      setCrops(result.crops);
      setFertilizers(result.fertilizers);
      setError(null);

      const endTime = Date.now(); // End time measurement
      const duration = endTime - startTime; // Calculate duration
      setResponseTime(duration); // Set response time
    } catch (err) {
      setError(err.message);
      setCrops(null);
      setFertilizers(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Crop Rotation & Fertilizer Recommendation</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Dropdown for Soil Type */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Soil Type:</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Select Soil Type</option>
              {soilTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Dropdown for Season */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Season:</label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Select Season</option>
              {seasons.map((seasonOption, index) => (
                <option key={index} value={seasonOption}>{seasonOption}</option>
              ))}
            </select>
          </div>

          {/* Dropdown for Location */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Location:</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Dropdown for Previous Crop */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Previous Crop:</label>
            <select
              value={previousCrop}
              onChange={(e) => setPreviousCrop(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>Select Previous Crop</option>
              {previousCrops.map((crop, index) => (
                <option key={index} value={crop}>{crop}</option>
              ))}
            </select>
          </div>

          {/* Input for Budget */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Budget (Allocated):</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Min 5000"
              min="5000"
              max="5000000"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Recommendation'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-500">
            <p className="text-red-700">Error: {error}</p>
          </div>
        )}

        {crops && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-500">
            <h3 className="font-semibold">Recommended Crops:</h3>
            {crops.split('\n').map((crop, index) => (
              <p key={index}>{crop}</p>
            ))}
          </div>
        )}

        {fertilizers && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-500">
            <h3 className="font-semibold">Recommended Fertilizers:</h3>
            {fertilizers.split('\n').map((fertilizer, index) => (
              <p key={index}>{fertilizer}</p>
            ))}
          </div>
        )}

        {responseTime !== null && (
          <div className="mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-500">
            <p className="text-yellow-700">Fetched in : {responseTime/1000} Seconds</p>
          </div>
        )}
      </div>
      <div className='mt-8'>
        <section className="cta bg-green-300 py-2 text-center">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
            <p className="text-lg text-green-700">
              Get the latest updates on crop trends, farming techniques, and expert advice.
            </p>
            <hr className="border-green-900" />
            <p className="text-center text-green-700 text-base mt-1">Copyright © 2024 AgriSense. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services; 


  
