describe('Example component', () => {
  test('Debe ser mayor a 10', () => {
    //Arreglar
    let value = 9

    //Estimulo

    value = value + 2

    //Observar
    expect(value).toBeGreaterThan(10)
  })
})
