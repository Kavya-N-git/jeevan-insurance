class Plans {
    constructor(pid,plan_name,duration,amount,sum) {
      this.pid = pid;
      this.plan_name = plan_name;
      this.duration = duration;
      this.amount=amount;
      this.sum=sum;
    }
   
  
    instances = {}; //object intilization //membe varaibale // global variable - using this global instance to work with all other instance
  
    static loadAll() { // function based constructor - getting all stored data form localstroage
      const plans = window.localStorage.getItem('plans'); // geting data from localstorage 
  
      const parsedPlans = JSON.parse(plans);  //converts text to JavaScript Object
  
      this.instances = { ...parsedPlans };
  
      return parsedPlans;
    }
  
  
  
   static saveAll() { //Multiple books - static bcoz we are not using db , we are using local storage 
      const plans = JSON.stringify(this.instances);
  
      try {
        window.localStorage.setItem('plans', plans);//keys
      } catch {
        throw Error('Can not save plans to local storage');
      }
    }
  
    static save() { //Single plan
      const plans = JSON.parse(window.localStorage.getItem('plans'));
      const updatedplans = JSON.stringify({ ...plans, ...this.instances });
  
      try {
        window.localStorage.setItem('plans', updatedplans);
      } catch {
        throw Error('Can not save books to local storage');
      }
    }
  
    static create({pid,plan_name,duration,amount,sum}) {
      const plans = new Plans(pid,plan_name,duration,amount,sum);
  
      const updatedInstances = { ...this.instances }; //Array + geting the exisitng books instances
  
      updatedInstances[`${pid}`] = plans; // isbn - here acts as a primary key (and we are storing data in key:value pair
  
      this.instances = updatedInstances;
  
      Plans.save();
    }
  
  static update(pid, newData) {
      const plans = this.instances[pid];
      plans.plan_name = newData.plan_name;
      plans.duration = newData.duration;
      plans.amount   = newData.amount;
      plans.sum     = newData.sum;
     
      

      Plans.save();
    }
  
    static delete(pid) {
      const plans = this.instances[pid];
  
      if (plans) {
        delete this.instances[plans.pid];
        Plans.saveAll();
      } else {
        alert.log('no such plan you have enrolled');
      }
    }
  
    static createTestData() {
      Plans.create({userid: 'raj123',plan_name:'senior_citizen', duration:'12 months',amount:'2345',sum:'30000'});
      //User.create({ isbn: '006251512', title: 'Different title', year: 1996 });
      //User.create({ isbn: '0062515123', title: 'Different title3', year: 1990 });
  
      Plans.saveAll();
      alert('Plan saved Successfully');
    }
  
    static clearData() {
      if (confirm('Do you really want to delete all the data?')) {
        window.localStorage.clear();
      }
    }
  }