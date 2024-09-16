import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid,Line,Tooltip} from 'recharts'
import colors from 'tailwindcss/colors'
const data =[
    {data:'10/12', revenue:1200},
    {data:'11/12', revenue:1500},
    {data:'12/12', revenue:500},
    {data:'13/12', revenue:1280},
    {data:'14/12', revenue:1500},
    {data:'15/12', revenue:1400},
    {data:'16/12', revenue:1441},
    {data:'17/12', revenue:1300},
    {data:'18/12', revenue:1000},
]

export default function RevenueChart() {


  return (
    <Card className='col-span-6'>
        <CardHeader className='flex-row items-center justify-between pb-8'>
            <div className='space-y-1'>
                <CardTitle className='text-base font-medium'>Receita no período</CardTitle>
                <CardDescription>Receita diária no período</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart  data={data} style={{fontSize:12}}>
                    <XAxis dataKey="data" axisLine={false} tickLine={false} dy={16}/>
                <YAxis stroke='#888' axisLine={false} tickLine={false} tickFormatter={(value:number)=> value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} width={88}/>
                    <Line type='linear' strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']}/>

                    <CartesianGrid vertical={false} className='stroke-muted'/>
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}

