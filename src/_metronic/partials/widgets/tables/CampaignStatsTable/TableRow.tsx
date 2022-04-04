import React from 'react'
import {TableDataProps} from './index'
import {toAbsoluteUrl} from '../../../../helpers'

interface TableRowProps {
  campaignData: TableDataProps
}

export const TableRow: React.FC<TableRowProps> = ({campaignData}) => {
  const {
    campaignName,
    campaignImage,
    campaignId,
    performance,
    spend,
    clicks,
    views,
    appInstalls,
    events,
    ctr,
    cr,
  } = campaignData
  return (
    <tr className='text-muted'>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl(campaignImage)} alt='' />
          </div>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bolder text-hover-primary fs-6'>{campaignName}</span>
          </div>
        </div>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{campaignId}</span>
      </td>
      <td>
        <div className='rating'>
          {[...Array(5)].map((_, index) => {
            return (
              <div
                key={index}
                className={`rating-label me-2 ${index >= performance ? '' : 'checked'}`}
              >
                <i className='bi bi-star-fill fs-5'></i>
              </div>
            )
          })}
        </div>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{`$${spend}`}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{clicks}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{views}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{appInstalls}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{events}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{`${ctr}%`}</span>
      </td>
      <td>
        <span className='fw-bold  d-block fs-6'>{`${cr}%`}</span>
      </td>
    </tr>
  )
}
