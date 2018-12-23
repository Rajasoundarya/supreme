import React from 'react';
import House from '../house';

const FeaturedHouse = (props) => {
  if(props.house)return (
    <div>
      <div className="row">
      <h3 className="col-md-12"></h3>
        Featured House
      </div>
      <House house={props.house} />
      </div>
   );
   return(<div>NO FEATURED HOUSE AT THIS TIME</div>)
}

export default FeaturedHouse;