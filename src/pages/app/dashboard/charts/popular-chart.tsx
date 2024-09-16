import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'
import { ResponsiveContainer, PieChart, XAxis, YAxis, CartesianGrid,Pie,Tooltip , Cell} from 'recharts'
import colors from 'tailwindcss/colors'
const data =[
    {produto:'Pizza pepperone', amount:5},
    {produto:'Pizza 4 queijos', amount:40},
    {produto:'Pizza muzarela' , amount:11},
    {produto:'Pizza calabresa', amount:15},
    {produto:'Pizza camarão', amount:20},
    {produto:'Pizza chocolate', amount:30},
    {produto:'Pizza lomninho abacaxi', amount:12},
    {produto:'Pizza marguerita', amount:2},
    {produto:'Pizza alho e óleo', amount:10},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#7427EA', '#C71585', '#3F51B5', '#673AB7', '#9C27B0']

export default function PopularProdutsCharts() {


  return (
    <Card className='col-span-3'>
        <CardHeader className='pb-8'>
            <div className='flex items-center justify-between'>
                <CardTitle className='text-base font-medium'>Produtos populares</CardTitle>
                <BarChart className='h-4 w-4 text-muted-foreground'/>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <PieChart  style={{fontSize:12}}>
                    <Pie data={data} dataKey="amount" nameKey="product" cx="50%" cy="50%" outerRadius={86} innerRadius={64} strokeWidth={8} labelLine={false } 
                        label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index,
                            }) => {
                            const RADIAN = Math.PI / 180
                            const radius = 12 + innerRadius + (outerRadius - innerRadius)
                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                            const y = cy + radius * Math.sin(-midAngle * RADIAN)

                            return (
                                <text
                                x={x}
                                y={y}
                                className="fill-muted-foreground text-xs"
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                                >
                                {data[index].produto.length > 12
                                    ? data[index].produto.substring(0, 12).concat('...')
                                    : data[index].produto}{' '}
                                ({value})
                                </text>
                            )
                            }}>
                        
                        {data.map((_,index) =>{
                            return(
                                <Cell key={`cel-${index}`} fill={COLORS[index]} className='stroke-background hover:opacity-80'/>
                            )
                        })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}