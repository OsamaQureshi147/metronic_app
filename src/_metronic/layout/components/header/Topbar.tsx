import clsx from 'clsx'
import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu} from '../../../partials'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3'
const toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* @TODO Need to add theme toggler here */}
      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='metronic' />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
    </div>
  )
}

export {Topbar}
