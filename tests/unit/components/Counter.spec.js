import { shallowMount, mount } from '@vue/test-utils'

describe('Counter Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  /*  test('debe de hacer match con el snapshot ', () => {
    expect(wrapper.html()).toMatchSnapshot()
  }) */
  test('el h2 debe tener el valor por defecto "Counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()

    expect(h2Value).toBe('Counter')
  })

  test('el valor del parrafo por defecto tiene que ser 100', () => {
    const value = wrapper.find('[data-testID="counter"]').text()

    expect(value).toBe('100')
  })
  test('debe incrementar decrementar en 1 el valor de counter', async () => {
    const [increaseBtn, descreaseBtn] = wrapper.findAll('button')

    for (let index = 0; index < 3; index++) {
      await increaseBtn.trigger('click')
    }
    for (let index = 0; index < 2; index++) {
      await descreaseBtn.trigger('click')
    }
    const value = wrapper.find('[data-testID="counter"]').text()

    expect(value).toBe('101')
  })
  test('debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props()

    const value = wrapper.find('[data-testID="counter"]').text()

    expect(Number(value)).toBe(start)
  })
  test('debe de mostrar la prop title', () => {
    const title = 'Hola mundowi'

    const wrapper = shallowMount(Counter, {
      props: {
        title
      }
    })

    expect(wrapper.find('h2').text()).toBe(title)
  })
})
