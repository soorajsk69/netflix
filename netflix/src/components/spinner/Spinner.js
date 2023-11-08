import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem' }}>
    <div style={{ fontSize: '18px', fontWeight: 700 }}>
      <TailSpin
        height={20}
        width={50}
        color="#ffffff"
        ariaLabel="tail-spin-loading"
        radius={1}
        visible={true}
      />
    </div>
  </div>
  )
}

export default Spinner