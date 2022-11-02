init.view.listplans = {
    setupUI: function () {
      const tableBodyElement = document.querySelector('table#listplans>tbody');
  
      const plans = Plans.loadAll();
  
      const keys = Object.keys(plans);
  
      for (let i = 0; i < keys.length; i++) {
        plan = keys[i];
  
        const row = tableBodyElement.insertRow();
        row.insertCell(-1).textContent = plans[plan].pid;
        row.insertCell(-1).textContent = plans[plan].plan_name;
        row.insertCell(-1).textContent = plans[plan].duration;
        row.insertCell(-1).textContent = plans[plan].amount;
        row.insertCell(-1).textContent = plans[plan].sum;

        //row.insertCell(-1).textContent = books[book].title;
        //row.insertCell(-1).textContent = books[book].year;
      }
    },
  };
