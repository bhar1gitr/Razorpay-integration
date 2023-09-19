import React from 'react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0];
    const referenceNum = seachQuery.get("reference");
  return (
    <div>
       Order no. [{referenceNum}] successfull 
    </div>
  )
}

export default PaymentSuccess