import React from "react"
import { useParams, useSearchParams } from "react-router-dom";

function App2() {
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
//console.log(params);


  return (
    <section>
      app2
          <h2>Invoice: {params.invoiceId}</h2>
    </section>
  )
}

export default App2
