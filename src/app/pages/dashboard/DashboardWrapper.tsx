/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {FinancialStatsCard, FinancialStatsCardProps} from '../../../_metronic/partials'

const financialCardsData: FinancialStatsCardProps[] = [
  {
    icon: 'projects',
    amount: '327',
    title: 'Projects',
    status: 'up',
    statusValue: 2.7,
  },
  {
    icon: 'qty',
    amount: '27.5M',
    title: 'Stock Qty',
    status: 'up',
    statusValue: 2.7,
  },
  {
    icon: 'value',
    amount: '149M',
    title: 'Stock Value',
    status: 'down',
    statusValue: 0.47,
  },
  {
    icon: 'apex',
    amount: '89M',
    title: 'C APEX',
    status: 'up',
    statusValue: 2.1,
  },
  {
    icon: 'opex',
    amount: '72.5%',
    title: 'OPEX',
    status: 'down',
    statusValue: 0.647,
  },
  {
    icon: 'saving',
    amount: '106M',
    title: 'Saving',
    status: 'up',
    statusValue: 2.7,
  },
]

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      {/* <CampaignStatsTable className='mb-5 mb-xl-8' /> */}
      <div className='row gy-5 g-xl-10'>
        {financialCardsData?.map((financialCardData) => {
          const {icon, amount, title, status, statusValue} = financialCardData
          return (
            <FinancialStatsCard
              icon={icon}
              amount={amount}
              title={title}
              status={status}
              statusValue={statusValue}
            />
          )
        })}
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
