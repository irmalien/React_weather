import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
  summer: {
    text: "let's go to beach!",
    iconName: "sun"
  },
  winter: {
    text: "it's cold outside",
    iconName: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month>2 && month<9){
    return lat > 0 ? 'summer' : 'winter';
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]

  return (
  <div className={`season-display ${season}`}>
  < i className={`icon-right massive ${iconName} icon`} />
  <h1>{text}</h1>
  < i className={`icon-left massive ${iconName} icon`} />
  </div>
  )
}

export default SeasonDisplay;
//<i class="snowflake icon"></i>
//<i class="sun icon"></i>