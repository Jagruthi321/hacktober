document.addEventListener('DOMContentLoaded', function () {
    const waitingListData = {
        labels: ["Waiting List"],
        datasets: [{
            label: "Waiting List Statistics",
            backgroundColor: "#007BFF",
            data: [100000],
        }],
    };

    const donorCountData = {
        labels: ["2014", "2022"],
        datasets: [{
            label: "Donor Count",
            backgroundColor: "#FF5733",
            data: [6916, 16041],
        }],
    };

    const transplantsData = {
        labels: ["Waiting for Transplant", "Received Transplant"],
        datasets: [{
            label: "Transplant Statistics",
            backgroundColor: ["#007BFF", "#33FF33"],
            data: [7258, 1892],
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

   const waitingListChart = new Chart(document.getElementById("waitingListChart"), {
        type: "bar",
        data: waitingListData,
        options: chartOptions,
    });

    const donorCountChart = new Chart(document.getElementById("donorCountChart"), {
        type: "bar",
        data: donorCountData,
        options: chartOptions,
    });
    const transplantsChart = new Chart(document.getElementById("transplantsChart"), {
        type: "bar",
        data: transplantsData,
        options: chartOptions,
    });
});