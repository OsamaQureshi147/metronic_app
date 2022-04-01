import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      {/* @TODO need to add some navigation routes below */}
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Advertisers' to='/advertisers' />
      <MenuItem title='Apps' to='/apps' />
      <MenuItem title='Reporting' to='/reporting' />
      <MenuItem title='Optimizations' to='/optimizations' />
      <MenuItem title='Settings' to='/crafted/account/settings' />
    </>
  )
}
