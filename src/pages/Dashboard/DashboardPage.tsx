import React from 'react'
import ServiceOrderTable from '../../components/ServiceOrderTable/ServiceOrderTable'

export const DashboardPage: React.FC = () => {

    return (
        <>
            <div>
                <h2 className="page-title">Dashboard</h2>
                <ServiceOrderTable />
            </div>
        </>
    )
}