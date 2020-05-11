import React from 'react';
import 'tachyons';

const Panels = () => {
  return (
    <div>
      <div className="vh-50">
        <div className="fl w-50 h-100 ba bg-red tc">
          Urgent & Important
        </div>
        <div className="fl ba w-50 h-100 bg-blue tc">
          not Urgent & Important
        </div>
      </div>
      <div className="vh-50">
        <div className="fl w-50 h-100 ba bg-light-blue tc">
          Urgent & not Important
        </div>
        <div className="fl ba w-50 h-100 bg-green tc">
          not Urgent & not Important
        </div>
      </div>
    </div>
  )
};

export default Panels
