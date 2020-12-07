import { render, screen } from '@testing-library/react'
import { ipRes } from 'pages'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /Seu IP/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Page', () => {
  it('should get ip info from url', async () => {
    /* const res = await fetch(
    `https://king.host/wiki/wp-content/themes/kinghost-wiki/includes/ip-api.php?ip=`
  )
  const dataProp = await res.json() */
    const dataip = await (await ipRes('')).json()
    expect(dataip.status).toBe('success')
  })
})
