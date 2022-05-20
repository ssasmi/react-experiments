import React from "react"
import { useParams } from "react-router-dom";

function App2() {
  let params = useParams();


  return (
    <section>
      app2
          <h2>Invoice: {params.invoiceId}</h2>
    </section>
  )
}

export default App2
