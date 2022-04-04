import React from 'react'
import {TableRow} from './TableRow'
import {KTSVG} from '../../../../helpers'

const campaignsData: TableDataProps[] = [
  {
    campaignName: 'Campaign 1',
    campaignImage: '/media/avatars/300-14.jpg',
    campaignId: '01516009',
    performance: 2,
    spend: 249.0,
    clicks: 287300,
    views: 287300,
    appInstalls: 287300,
    events: 287300,
    ctr: 28.73,
    cr: 28.73,
  },
  {
    campaignName: 'Campaign 2',
    campaignImage: '/media/avatars/300-2.jpg',
    campaignId: '03247001',
    performance: 5,
    spend: 54.0,
    clicks: 231240,
    views: 231240,
    appInstalls: 231240,
    events: 231240,
    ctr: 23.12,
    cr: 23.12,
  },
  {
    campaignName: 'Campaign 3',
    campaignImage: '/media/avatars/300-5.jpg',
    campaignId: '35423259',
    performance: 1,
    spend: 454.0,
    clicks: 243523,
    views: 243523,
    appInstalls: 243523,
    events: 243523,
    ctr: 12.45,
    cr: 12.45,
  },
  {
    campaignName: 'Campaign 4',
    campaignImage: '/media/avatars/300-20.jpg',
    campaignId: '23145213',
    performance: 4,
    spend: 324.0,
    clicks: 287300,
    views: 287300,
    appInstalls: 287300,
    events: 287300,
    ctr: 32.67,
    cr: 32.67,
  },
]

export interface TableDataProps {
  campaignName: string
  campaignImage: string
  campaignId: string
  performance: number
  spend: number
  clicks: number
  views: number
  appInstalls: number
  events: number
  ctr: number
  cr: number
}

type Props = {
  className: string
  tableData?: TableDataProps[]
}

export const CampaignStatsTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      {/* <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Members Statistics</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='www.google.com'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Member
          </a>
        </div>
      </div> */}
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                {[
                  'CAMPAIGN',
                  'CAMPAIGN ID',
                  'PERFORMANCE',
                  'SPEND',
                  'CLICKS',
                  'VIEWS',
                  'APP INSTALLS',
                  'EVENTS',
                  'CTR',
                  'CR',
                ].map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {campaignsData.map((campaignData) => (
                <TableRow campaignData={campaignData} />
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}
