import "./Sidebar.css";

const Sidebar = ({ onShowBilling, onShowBillHistory }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          className="profile-img"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
        />
        <div className="profile-info">
          <span className="user-name">Hello Riya,</span>
          <span className="user-phone">8308401929</span>
        </div>
      </div>

      <div className="sidebar-menu">
        <button className="menu-item" onClick={onShowBilling}>
          <img src="https://cdn-icons-png.flaticon.com/128/8583/8583679.png" alt="New Bill" />
          &nbsp;&nbsp; New Bill
        </button>
        <button className="menu-item" onClick={onShowBillHistory}>
          <img src="https://cdn-icons-png.flaticon.com/128/3215/3215528.png" alt="Bill History" />
          &nbsp;&nbsp; Bill History
        </button>
        <button className="menu-item">
          <img src="https://cdn-icons-png.flaticon.com/128/4947/4947506.png" alt="Stock" />
          &nbsp;&nbsp; Stock
        </button>
        <button className="menu-item">
          <img src="https://cdn-icons-png.flaticon.com/128/1800/1800496.png" alt="Printer" />
          &nbsp;&nbsp; Printer Con
        </button>
        <button className="menu-item">
          <img src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png" alt="Settings" />
          &nbsp;&nbsp; Settings
        </button>
        <button className="menu-item logout">
          <img src="https://cdn-icons-png.flaticon.com/128/10609/10609328.png" alt="Logout" />
          &nbsp;&nbsp; Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
