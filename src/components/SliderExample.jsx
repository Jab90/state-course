import React, {useState} from 'react';

export default function SliderExample () { 
  const [sliderValue, setSliderValue] = useState(0);

  // const handleChange = (e) => { 
  //   setSliderValue(e.target.value);
  // };

  // ONLY USE THE ABOVE WITH THE COMMENTED OUT CODE BELOW, AS YOU ARE
  // DEFINING A FUNCTIONA AND THEN CALLING IT BACK. 

  return (
    <div>
      <h2>Slider Example</h2>
      <input type="range" 
      min="0" 
      max="100" 
      value={sliderValue}
      // onChange={(e) => handleChange(e)}
      onChange={e => setSliderValue(e.target.value)}
      />
      <p>Slider Value {sliderValue}</p>
    </div>
  )
}