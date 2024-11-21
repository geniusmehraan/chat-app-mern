import React from 'react';

const GenderCheckBox = (props) => {
  const { handleCheckBox, seletedgender } = props;

  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${seletedgender === "male" ? "male" : ""}`}>
          <span className='label-text'>Male</span>
          <input
            type="checkbox"
            className='checkbox border-slate-900'
            checked={seletedgender === "male"}
            onChange={() => handleCheckBox("male")}
          />
        </label>
      </div>

      <div className='form-control'>
        <label className={`label gap-2 ${seletedgender === "female" ? "seleted" : ""} cursor-pointer`}>
          <span className='label-text'>Female</span>
          <input
            type="checkbox"
            className='checkbox border-slate-900'
            checked={seletedgender === "female"}
            onChange={()=>handleCheckBox("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
