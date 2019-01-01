describe('textify', () => {

  it('can make a title from camelcase (id)', () => {
    let id = 'sparkUnicorn'
    let t = camelToTitle(id)
    expect(t).toBe('Spark Unicorn')
  })

})
