function getConversionDollar() {
  const form = document.querySelector('.form')

  form.addEventListener('submit', function (element) {
    element.preventDefault()
    const inputValueDollar = element.target.querySelector('#value-dollar')

    const valueDollar = Number(inputValueDollar.value)

    if (!valueDollar) {
      setResultDollar('Digite um valor correto para dólar!', false)
      return
    }
    const valueConversionDollar = getValueDollar(valueDollar)
    const messageDollar = `US$  ${valueDollar} transformado em real equivale a R$ ${valueConversionDollar}`
    setResultDollar(messageDollar, true)
  })

  function getValueDollar(dollar) {
    const valueConversionDollar = dollar * 5.25
    return valueConversionDollar.toFixed(2)
  }

  function createP() {
    const p = document.createElement('p')
    return p
  }

  function setResultDollar(messageDollar, isValidDollar) {
    const resultDollar = document.querySelector('.result-dollar')
    resultDollar.innerHTML = ''

    const p = createP()

    if (isValidDollar) {
      p.classList.add('result-paragraph')
    } else {
      p.classList.add('bad')
    }

    p.innerHTML = messageDollar
    resultDollar.appendChild(p)
  }
}

getConversionDollar()
