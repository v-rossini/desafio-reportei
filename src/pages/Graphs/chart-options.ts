
export const pieOptions = {
    chart: {
      background: "transparent",
      foreColor: "red",
    },
    colors: ["#42e29a", "#ed7947", "#00D4FF", "#e89e10", "#a00f19"],
    legend: {
      show: true,
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      formatter: function (val, opt) { return opt.w.config.series[opt.seriesIndex]},
      enabled: true,
//      offsetX: "100px",
//      offsetY: "100px",
      style: {
        colors: ["#42e29a", "#ed7947", "#00D4FF", "#e89e10", "#a00f19"],
        fontSize: "25px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700,
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: false,
        dataLabels: {
          offset: 40,
        },
      },
    },
  };
  
  export const barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#ED7947"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
        startingShape: "rounded",
        barHeight: "60px",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        labels: {
          maxWidth: 360,
          style: {
            colors: "#00D4FF",
            fontSize: "18px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
          },
        },
      },
    ],
  };
  