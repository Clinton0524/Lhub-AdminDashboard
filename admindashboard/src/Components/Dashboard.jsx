import React from "react";
import "./Css/Dashboard.css";

const stats = [
  {
    title: "Total Revenue",
    value: "$84,254",
    change: "+12.5%",
    icon: "$",
    color: "purple",
  },
  {
    title: "Total Users",
    value: "24,892",
    change: "+8.2%",
    icon: "U",
    color: "blue",
  },
  {
    title: "Total Orders",
    value: "12,486",
    change: "+15.8%",
    icon: "O",
    color: "orange",
  },
  {
    title: "Conversion Rate",
    value: "8.64%",
    change: "+2.4%",
    icon: "%",
    color: "green",
  },
];

const orders = [
  ["#ORD-001", "Alex Johnson", "Premium Package", "$249.00", "Completed"],
  ["#ORD-002", "Sarah Williams", "Basic Package", "$99.00", "Pending"],
  ["#ORD-003", "Michael Brown", "Enterprise Plan", "$599.00", "Completed"],
  ["#ORD-004", "Emily Davis", "Premium Package", "$249.00", "Processing"],
  ["#ORD-005", "David Wilson", "Basic Package", "$99.00", "Completed"],
];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <div className="logo-box">A</div>
          <span>
            Admin<span className="logo-purple">Panel</span>
          </span>
        </div>

        <p className="sidebar-title">MAIN MENU</p>

        <nav className="sidebar-nav">
          <button className="nav-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="nav-item">
            <span>◉</span>
            Users
          </button>

          <button className="nav-item">
            <span>▤</span>
            Orders
          </button>

          <button className="nav-item">
            <span>□</span>
            Products
          </button>

          <button className="nav-item">
            <span>◒</span>
            Analytics
          </button>

          <button className="nav-item">
            <span>✉</span>
            Messages
          </button>
        </nav>

        <p className="sidebar-title system-title">SYSTEM</p>

        <nav className="sidebar-nav">
          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>

          <button className="nav-item">
            <span>?</span>
            Help Center
          </button>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">JD</div>

          <div>
            <strong>John Doe</strong>
            <small>Administrator</small>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, John! Here's what's happening today.</p>
          </div>

          <div className="header-actions">
            <div className="dashboard-search">
              <span>⌕</span>
              <input placeholder="Search..." />
            </div>

            <button className="notification-button">
              ♢
              <span />
            </button>

            <div className="header-avatar">JD</div>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.title}>
              <div className="stat-card-top">
                <div className={`stat-icon ${stat.color}`}>
                  {stat.icon}
                </div>

                <span className="stat-change">
                  ↑ {stat.change}
                </span>
              </div>

              <p>{stat.title}</p>
              <h2>{stat.value}</h2>

              <small>Compared to last month</small>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="dashboard-row">
          <div className="dashboard-card revenue-card">
            <div className="card-header">
              <div>
                <h3>Revenue Overview</h3>
                <p>Monthly revenue performance</p>
              </div>

              <select>
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>

            <div className="revenue-number">
              <strong>$84,254</strong>
              <span>+12.5%</span>
            </div>

            <div className="bar-chart">
              {[45, 55, 40, 65, 58, 72, 63, 80, 70, 88, 78, 95].map(
                (height, index) => (
                  <div className="bar-wrapper" key={index}>
                    <div
                      className="bar"
                      style={{ height: `${height}%` }}
                    />
                    <small>
                      {
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]
                      }
                    </small>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Traffic */}
          <div className="dashboard-card traffic-card">
            <div className="card-header">
              <div>
                <h3>Traffic Sources</h3>
                <p>Visitors by source</p>
              </div>
            </div>

            <div className="donut">
              <div>
                <strong>24.8K</strong>
                <small>Visitors</small>
              </div>
            </div>

            <div className="traffic-list">
              <TrafficItem color="purple" name="Direct" value="42%" />
              <TrafficItem color="blue" name="Search" value="28%" />
              <TrafficItem color="orange" name="Social" value="18%" />
              <TrafficItem color="green" name="Referral" value="12%" />
            </div>
          </div>
        </section>

        {/* Orders + Activity */}
        <section className="dashboard-row bottom-row">
          <div className="dashboard-card orders-card">
            <div className="card-header">
              <div>
                <h3>Recent Orders</h3>
                <p>Latest transactions from your store</p>
              </div>

              <button className="view-all">View All →</button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ORDER</th>
                    <th>CUSTOMER</th>
                    <th>PRODUCT</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order[0]}>
                      <td>{order[0]}</td>
                      <td>{order[1]}</td>
                      <td>{order[2]}</td>
                      <td>{order[3]}</td>
                      <td>
                        <span
                          className={`status ${order[4].toLowerCase()}`}
                        >
                          {order[4]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity */}
          <div className="dashboard-card activity-card">
            <div className="card-header">
              <div>
                <h3>Recent Activity</h3>
                <p>Latest updates</p>
              </div>
            </div>

            <div className="activity-list">
              <Activity
                icon="U"
                title="New user registered"
                text="Olivia Martin created an account"
                time="5 min ago"
              />

              <Activity
                icon="O"
                title="New order received"
                text="Order #ORD-005 was placed"
                time="18 min ago"
              />

              <Activity
                icon="$"
                title="Payment received"
                text="Payment of $599.00 received"
                time="42 min ago"
              />

              <Activity
                icon="✉"
                title="New message"
                text="You received a new message"
                time="1 hour ago"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function TrafficItem({ color, name, value }) {
  return (
    <div className="traffic-item">
      <span>
        <i className={`traffic-dot ${color}`} />
        {name}
      </span>
      <strong>{value}</strong>
    </div>
  );
}

function Activity({ icon, title, text, time }) {
  return (
    <div className="activity-item">
      <div className="activity-icon">{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
        <small>{time}</small>
      </div>
    </div>
  );
}

export default Dashboard;
