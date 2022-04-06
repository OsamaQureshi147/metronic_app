import React, {useState} from 'react'
import {TableRow} from './TableRow'

const data: TableDataProps[] = [
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
  const [campaignsData, setCampaignsData] = useState<TableDataProps[]>(data)

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      const filteredData = data.filter((campaign) =>
        campaign?.campaignName.includes(e.target.value)
      )
      setCampaignsData([...filteredData])
    } else setCampaignsData(data)
  }

  const handlePerformanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') setCampaignsData(data)
    else {
      const filteredData = data?.filter(
        (campaign) => campaign?.performance === parseInt(e.target.value)
      )
      setCampaignsData([...filteredData])
    }
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header align-items-center py-5 gap-2 gap-md-5'>
        <div className='card-title'>
          <div className='d-flex align-items-center position-relative my-1'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <rect
                  opacity='0.5'
                  x='17.0365'
                  y='15.1223'
                  width='8.15546'
                  height='2'
                  rx='1'
                  transform='rotate(45 17.0365 15.1223)'
                  fill='black'
                />
                <path
                  d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                  fill='black'
                />
              </svg>
            </span>
            <input
              type='text'
              data-kt-ecommerce-order-filter='search'
              className='form-control form-control-solid w-250px ps-14'
              placeholder='Search Campaign'
              onChange={handleSearchInputChange}
            />
          </div>
          <div id='kt_ecommerce_report_views_export' className='d-none'></div>
        </div>
        <div className='card-toolbar flex-row-fluid justify-content-end gap-5'>
          <input
            className='form-control form-control-solid w-100 mw-250px'
            placeholder='Pick date range'
            id='kt_ecommerce_report_views_daterangepicker'
          />
          <div className='w-150px'>
            <select
              className='form-select form-select-solid'
              data-control='select2'
              data-hide-search='true'
              placeholder='Rating'
              data-kt-ecommerce-order-filter='rating'
              onChange={handlePerformanceChange}
            >
              <option value='' disabled selected>
                Performance
              </option>
              <option value=''>All</option>
              <option value='5'>5 Stars</option>
              <option value='4'>4 Stars</option>
              <option value='3'>3 Stars</option>
              <option value='2'>2 Stars</option>
              <option value='1'>1 Stars</option>
            </select>
          </div>
          <button
            type='button'
            className='btn btn-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
          >
            <span className='svg-icon svg-icon-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <rect
                  opacity='0.3'
                  x='12.75'
                  y='4.25'
                  width='12'
                  height='2'
                  rx='1'
                  transform='rotate(90 12.75 4.25)'
                  fill='black'
                />
                <path
                  d='M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z'
                  fill='black'
                />
                <path
                  d='M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z'
                  fill='#C4C4C4'
                />
              </svg>
            </span>
          </button>
          <div
            id='kt_ecommerce_report_views_export_menu'
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-200px py-4'
            data-kt-menu='true'
          >
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                Copy to clipboard
              </a>
            </div>
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3' data-kt-ecommerce-export='excel'>
                Export as Excel
              </a>
            </div>
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3' data-kt-ecommerce-export='csv'>
                Export as CSV
              </a>
            </div>
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3' data-kt-ecommerce-export='pdf'>
                Export as PDF
              </a>
            </div>
          </div>
        </div>
      </div>
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
