function getConversion() {
  const form = document.querySelector('.form')

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputValue = e.target.querySelector('#value')

    const value = Number(inputValue.value)

    if (!value) {
      setResult('Digite um valor correto para real!', false)
      return
    }

    const valueConversion = getValue(value)
    const message = `R$ ${value} transformado em dólar equivale a US$ ${valueConversion}`
    setResult(message, true)
  })

  function getValue(reais) {
    const valueConversion = reais / 5.25
    return valueConversion.toFixed(2)
  }

  function createP() {
    const p = document.createElement('p')
    return p
  }

  function setResult(message, isValid) {
    const result = document.querySelector('.result')
    result.innerHTML = ''

    const p = createP()

    if (isValid) {
      p.classList.add('result-paragraph')
    } else {
      p.classList.add('bad')
    }

    p.innerHTML = message
    result.appendChild(p)
  }
}

getConversion()
