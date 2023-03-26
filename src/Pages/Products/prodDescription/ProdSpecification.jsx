import React from 'react'

const ProdSpecification = ({ specifications }) => {
  return (
    <div className='product-spc'>
      <div className="spc-header">
        <h3>Specifications</h3>
      </div>
      <div className="spc-content">
        {specifications?.map((spc, idx) => {
          return (<div key={idx} className="spc-con-ct">
            <div className="ps-left">
              <p>{spc.sp_name}</p>
            </div>
            <div className="ps-right">
              <p>{spc.sp_value}</p>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default ProdSpecification