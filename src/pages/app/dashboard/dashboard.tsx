import { Helmet } from 'react-helmet-async'
import MonthdRevenueCard from './cards/month-revenue-card'
import MounthOrdersAmountCard from './cards/month-orders-amount-card'
import DaysOrdersAmountCard from './cards/days-orders-amount-card'
import MounthCanceledOrdersAmountCard from './cards/month-canceled-orders-amount-card'

export default function Dashboard() {
  return (
    <>
    <Helmet title="Dashboard"/>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <div className='grid grid-cols-4 gap-4'>
         <MonthdRevenueCard/>
         <MounthOrdersAmountCard/>
         <DaysOrdersAmountCard/>
         <MounthCanceledOrdersAmountCard/>
        </div>
      </div>
    </>
  )
}
