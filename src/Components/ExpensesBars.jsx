import { CChart } from '@coreui/react-chartjs';
import '@coreui/coreui/dist/css/coreui.min.css'
import { data } from '../utils/data';

const ExpensesBars = () => {

    const labels = data.map(item => (item.day));
    const amount = data.map(item => (item.amount))

    return(
        <CChart
            type="bar"
            data={{
                labels: labels,
                datasets: [
                {
                    label: 'Expenses',
                    backgroundColor: 'rgb(228, 95, 75)',
                    borderRadius: 10,
                    hoverBackgroundColor: 'rgb(101,167,173)',
                    data: amount,
                },
                ],
            }}
            labels="months"
            options={{
                plugins: {
                legend: {
                    labels: {
                    color: "rgb(228, 95, 75)",
                    }
                }
                },
                scales: {
                x: {
                    grid: {
                    color: "#fff",
                    },
                    ticks: {
                    color: "rgb(228, 95, 75)",
                    },
                },
                y: {
                    grid: {
                    color: "#fff",
                    },
                    ticks: {
                    color: "#fff",
                    },
                },
                },
            }}
            />
    )

}

export default ExpensesBars