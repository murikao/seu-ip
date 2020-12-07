import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    data: {
      status: 'success',
      country: 'Brazil',
      countryCode: 'BR',
      region: 'MG',
      regionName: 'Minas Gerais',
      city: 'Belo Horizonte',
      isp: 'Claro S.A.',
      query: '192.168.0.82'
    },
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = args => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = args => <Main {...args} />
