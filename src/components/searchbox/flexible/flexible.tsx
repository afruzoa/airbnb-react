function Flexible() {
    return (
      <div className="flex-container">
        <div className="flex-center">
          <h1>How long would you like to stay?</h1>
          <div className="duration-btn">
            <button>Weekend</button>
            <button>Week</button>
            <button>Month</button>
          </div>
          <div className="month-btn">
            <h1>When do you want to go?</h1>
            <div className="month-buttons">
              {[...Array(12)].map((_, i) => {
                const currentMonth = new Date();
                currentMonth.setMonth(currentMonth.getMonth() + i);
                const monthName = currentMonth.toLocaleString('default', { month: 'long' });
                const year = currentMonth.getFullYear();
  
                return (
                  <button key={i} className="month-button">
                    {monthName} {year}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Flexible;  