import React from "react"
import { Radar, defaults } from "react-chartjs-2"

const CombatPower = ({
  front = 0,
  backend = 0,
  teamwork = 0,
  analyze = 0,
  management = 0,
}) => {
  const chartData = {
    labels: ["Front", "BackEnd/DevOps","TeamWork", "Analyze", "Management"],
    datasets: [
      {
        label: "戦闘力(自分調べ)",
        backgroundColor: "rgba(255,99,132,0.3)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        data: [front, backend, teamwork, analyze, management],
      },
    ],
  }

  const options = {
    scale: {
      angleLines: {
        display: true,
      },
      pointLabels: {
        fontSize: 20,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 6,
      },
    },
    legend: {
      display: false,
      labels: {
        fontSize: 20,
      },
    },
    animation: {
      duration: 2000,
    },
  }

  return (
    <div>
      <Radar data={chartData} options={options} />
    </div>
  )
}

export default CombatPower
