import { useEffect, useRef, useState } from "react";
import "./dashboard.scss";

import  Chart  from 'chart.js/auto';

const Dashboard = () => {
    const chartRef = useRef(null);
    const [navOpen, setNavOpen] = useState()

    const ToggleNavOpen = () => {
        setNavOpen(prevNavOpen => !prevNavOpen)
    }

    // if(nav)

    const data = [
        {
            sales: "5.5",
            month: "jan"
        },
        {
            sales: "15",
            month: "Feb"
        },
        {
            sales: "3",
            month: "Mar"
        },
        {
            sales: "25",
            month: "Mar"
        },
        {
            sales: "7",
            month: "Mei"
        },
        {
            sales: "8",
            month: "Jun"
        },
        {
            sales: "25",
            month: "Jul"
        },
        {
            sales: "30",
            month: "jan"
        },
        {
            sales: "5.000",
            month: "Aug"
        },
        {
            sales: "30.00",
            month: "Sep"
        },
        {
            sales: "4",
            month: "Okt"
        },
        {
            sales: "20",
            month: "Des"
        },
    ]


    const cards = [
        {
            cardImg: "/box-tick.svg",
            graph: "/s-graph.svg",
            cardName: "Total Order",
            gain: true,
            Amount: "350",
        },
        {
            cardImg: "/3d-rotate.svg",
            graph: "/f-graph.svg",
            cardName: "Total Refund",
            gain: false,
            Amount: "270",
        },
        {
            cardImg: "/cart.svg",
            graph: "/f-graph.svg",
            cardName: "Average Sales",
            gain: false,
            Amount: "1567",
        },
        {
            cardImg: "/coin.svg",
            graph: "/s-graph.svg",
            cardName: "Total Income",
            gain: true,
            Amount: "$350.000",
        },
    ]

    const orders = [
        {
            userImg: "/marcus.png",
            userName: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: "$80,000",
            satus: "Paid",
        },
        {
            userImg: "/jayden.png",
            userName: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: "$150,000",
            satus: "Refund",
        },
        {
            userImg: "/corey.png",
            userName: "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: "$87,000",
            satus: "Paid",
        },
        {
            userImg: "/cooper.png",
            userName: "Cooper Press",
            date: "Nov 14, 2023",
            amount: "$100,000",
            satus: "Refund",
        },
        {
            userImg: "/phillip.png",
            userName: "Phillip Lubin",
            date: "Nov 13, 2023",
            amount: "$78,000",
            satus: "Paid",
        },
    ]
    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(row => row.month),
                datasets: [
                    {
                        label: '',
                        data: data.map(row => parseFloat(row.sales)),
                        backgroundColor: Array(data.length).fill('rgba(52, 202, 165, 0.10)'),
                        hoverBorderColor: 'rgba(52, 202, 165, 0.50)',
                        borderRadius: 20,
                    },
                ],
            },
            options: {
                plugins: {
                    customHover: {
                        onHover: (event, elements) => {
                            if (elements && elements.length > 0) {
                                const index = elements[0].index;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(52, 202, 165, 0.10)');
                                gradient.addColorStop(1, 'rgba(52, 202, 165, 0.50)');

                                myChart.data.datasets[0].backgroundColor = Array(data.length).fill(gradient);
                                myChart.update();
                            }
                        },
                        onLeave: () => {
                            myChart.data.datasets[0].backgroundColor = Array(data.length).fill('rgba(52, 202, 165, 0.10)');
                            myChart.update();
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false, // Hide x-axis ticks
                        },
                    },
                    y: {
                        grid: {
                            borderDash: [5, 5],
                        },
                        beginAtZero: true,
                        ticks: {
                            precision: 3,
                        },
                    },
                },
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
            },
        });

        // Cleanup function
        return () => {
            myChart.destroy();
        };
    }, [data]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">

                <header className="mobile-header mobile--only">
                    <div className="header-left">
                        <button className="notification">
                            <img src="/notification.svg" alt="notification-icon" className="notification-icon" />
                        </button>

                        <div className="input-conteiner" tabIndex={0}>
                            <img src="/search.svg" alt="search-icon" className="search-icon" />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>

                    <button className="menu" onClick={ToggleNavOpen}>
                        <svg width="16" height="16" viewBox="0 0 16 16"><path fill="black" stroke="black" d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"></path><path fill="black" stroke="black" d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"></path><path fill="black" stroke="black" d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"></path></svg>
                    </button>
                </header>
                <header className="header">
                    <h1>Dashboard</h1>

                    <div className="header-right">
                        <div className="input-conteiner" tabIndex={0}>
                            <img src="/search.svg" alt="search-icon" className="search-icon" />
                            <input type="text" placeholder="Search" />
                        </div>

                        <div className="date">
                            <img src="/calender.svg" alt="calender-icon" className="calender-icon" />
                            <span>
                                <p className="calender-text">November 15, 2023</p>
                            </span>
                        </div>

                        <button className="notification">
                            <img src="/notification.svg" alt="notification-icon" className="notification-icon" />
                        </button>

                        <div className="user-profile">
                            <img src="/justine.png" alt="justine" className="user-image" />
                            <span className="user-info">
                                <p className="user-name">Justin Bergson</p>
                                <p className="user-gmail">Justin@gmail.com</p>
                            </span>
                            <button>
                                <img src="/dropdown.svg" className="dropdown-icon" alt="dropdown" />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="backdrop mobile--only" onClick={ToggleNavOpen} style={navOpen ? { visibility: "visible" } : { visibility: "hidden" }}></div>
                <aside className="mobile--only" style={navOpen ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}>
                    <div className="side-top mobile--only">
                        <div className="user-profile">
                            <img src="/justine.png" alt="justine" className="user-image" />
                            <span className="user-info">
                                <p className="user-name">Justin Bergson</p>
                                <p className="user-gmail">Justin@gmail.com</p>
                            </span>
                            <button>
                                <img src="/dropdown.svg" className="dropdown-icon" alt="dropdown" />
                            </button>
                        </div>
                        <div className="theme">
                            <button className="theme-menu-links">
                                <div className="theme-conteiner active">
                                    <img src="/light.svg" alt="light-mode" />
                                </div>
                            </button>
                            <button className="theme-menu-links">
                                <img src="/dark.svg" alt="dark-mode" />
                            </button>
                        </div>
                    </div>
                    <div className="sidebar-links">
                        <a href="" className="sidebar-link">
                            <img src="/arrow-right.svg" alt="arrow-right" />
                            <p> explore</p>
                        </a>
                        <a href="" className="sidebar-link">
                            <img src="/settings.svg" alt="settings" />
                            <p>settings</p>
                        </a>
                        <a href="" className="sidebar-link">
                            <img src="/logout.svg" alt="logout" />
                            <p>logout</p>
                        </a>
                    </div>
                    <div className="date">
                        <img src="/calender.svg" alt="calender-icon" className="calender-icon" />
                        <span>
                            <p className="calender-text">November 15, 2023</p>
                        </span>
                    </div>
                </aside>
                <main className="dashboard-grid">
                    <div className="graph">
                        <div className="graph-top">
                            <h2>Sales Trends</h2>

                            <div className="dropdown">
                                <p className="label">Short by : </p>
                                <button className="select-btn">
                                    <span>Weekly</span>
                                    <img src="/dropdown.svg" alt="dropdown.svg" />
                                </button>
                            </div>
                        </div>
                        <div className="w">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>

                    <div className="cards-grid">
                        {
                            cards.map((card, index) => {
                                return (
                                    <div className="card" key={index}>
                                        <div className="card-top">
                                            <div className="card-img-container">
                                                <img src={`${card.cardImg}`} alt={card.cardName} className="card-logo" />
                                            </div>
                                            <img src={card.graph} alt="graph" className="card-graph" />
                                        </div>
                                        <h2 className="card-name">{card.cardName}</h2>
                                        <p className="card-amount">{card.Amount}</p>
                                        <div className="card-footer">
                                            <span className="status" style={card.gain ? { backgroundColor: "rgba(52, 202, 165, 0.12)" } : { backgroundColor: "rgba(237, 84, 78, 0.12)" }}>
                                                <img src={card.gain ? "/gain.svg" : "/loss.svg"} alt={card.gain ? "gain-graph" : "loss-graph"} />
                                                <p className="percent" style={card.gain ? { color: "#34CAA5" } : { color: "#ED544E" }}>23.5%</p>
                                            </span>
                                            <p>vs. previous month</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="previous-order">
                        <div className="previous-order-top">
                            <h2>Last Orders</h2>

                            <a href="#">
                                <h2 className="all-orders">See All</h2>
                            </a>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="user">
                                                    <img src={row.userImg} alt="user-img" />
                                                    <p className="user-name">{row.userName}</p>
                                                </div>
                                            </td>
                                            <td><p className="date">{row.date}</p></td>
                                            <td><p className="amount">{row.amount}</p></td>
                                            <td><p className="status" style={row.satus == "Paid" ? { color: "#34CAA5" } : { color: "#ED544E" }}>{row.satus}</p></td>
                                            <td>
                                                <div className="invoice">
                                                    <img src="/document-download.svg" alt="download" />
                                                    <p>view</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="top-platforms">
                        <div className="platforms-header">
                            <h2>Top Platform</h2>
                            <a href="#">
                                <h2 className="all-platforms">See All</h2>
                            </a>
                        </div>

                        <div className="platform">
                            <h2 className="platform-name">Book Bazaar</h2>
                            <div className="progressbar-container">
                                <div className="progressbar-full"></div>
                                <div className="progressbar purple" style={{ width: "55%" }}></div>
                            </div>

                            <div className="platform-footer">
                                <p className="amount"> $2,500,000</p>
                                <p className="percent">+15%</p>
                            </div>
                        </div>

                        <div className="platform">
                            <h2 className="platform-name">Artisan Aisle</h2>
                            <div className="progressbar-container">
                                <div className="progressbar-full"></div>
                                <div className="progressbar blue" style={{ width: "40%" }}></div>
                            </div>

                            <div className="platform-footer">
                                <p className="amount"> $1,800,000</p>
                                <p className="percent">+10%</p>
                            </div>
                        </div>

                        <div className="platform">
                            <h2 className="platform-name">Toy Troop</h2>
                            <div className="progressbar-container">
                                <div className="progressbar-full"></div>
                                <div className="progressbar orange" style={{ width: "30%" }}></div>
                            </div>

                            <div className="platform-footer">
                                <p className="amount"> $1,200,000</p>
                                <p className="percent">+8%</p>
                            </div>
                        </div>

                        <div className="platform">
                            <h2 className="platform-name">XStore</h2>
                            <div className="progressbar-container">
                                <div className="progressbar-full"></div>
                                <div className="progressbar red" style={{ width: "25%" }}></div>
                            </div>

                            <div className="platform-footer">
                                <p className="amount"> $1,200,000</p>
                                <p className="percent">+8%</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;




