import React from "react"

function App1() {
  return (
    <section>
      <form>
        <header>
          <h2>Form title</h2>
        </header>
        <label for="input1">Input label:</label>
        <input
          type="text"
          id="input1"
          name="input1"
          size="20"
          placeholder="Input1"
        />
        <label for="select1">Select label:</label>
        <select id="select1">
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </select>
        <label for="textarea1">Textarea label:</label>
        <textarea cols="40" rows="5" id="textarea1"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default App1
