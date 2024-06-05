import { FC } from "react"

interface StatsProps {
    statsDetails: {
        stat: string
        date: string
        price: string
        increaseValue: string
    }[]
}
export const Stats: FC<StatsProps> = ({
    statsDetails
}: StatsProps) => {
    return (
        <>
            {statsDetails.map((stats) => {
                return (
                    <div className="bg-white p-4 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform">
                        <p className="flex items-center text-sm font-semibold text-gray-500">
                            {stats.stat}
                            <span className="ml-auto text-xs font-medium">{stats.date}</span>
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900">{stats.price}</h3>

                        <p className="text-sm text-gray-500">
                            <b className="text-lg text-green-600 font-bold">+{stats.increaseValue}</b>
                            &nbsp;since last month
                        </p>
                    </div>
                )
            })}
        </>
    )
}