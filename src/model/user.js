class User {
    constructor(full_name,email,phone,dob,country,state,city,userid,password,security,answer,description) {
      this.full_name = full_name;
      this.email = email;
      this.phone = phone;
      this.dob=dob;
      this.country=country;
      this.state=state;
      this.city=city;
      this.userid=userid;
      this.password=password;
      this.security=security;
      this.answer=answer;
      this.description=description;

    }
   
  
    instances = {}; //object intilization //membe varaibale // global variable - using this global instance to work with all other instance
  
    static loadAll() { // function based constructor - getting all stored data form localstroage
      const user = window.localStorage.getItem('user'); // geting data from localstorage 
  
      const parsedUsers = JSON.parse(user);  //converts text to JavaScript Object
  
      this.instances = { ...parsedUsers };
  
      return parsedUsers;
    }
  
  
  
   static saveAll() { //Multiple books - static bcoz we are not using db , we are using local storage 
      const user = JSON.stringify(this.instances);
  
      try {
        window.localStorage.setItem('user', user);//keys
      } catch {
        throw Error('Can not save books to local storage');
      }
    }
  
    static save() { //Single books
      const user = JSON.parse(window.localStorage.getItem('user'));
      const updateduser = JSON.stringify({ ...user, ...this.instances });
  
      try {
        window.localStorage.setItem('user', updateduser);
      } catch {
        throw Error('Can not save books to local storage');
      }
    }
  
    static create({ full_name, email, phone,dob,country,state,city,userid,password,security,answer,description }) {
      const user = new User(full_name, email, phone,dob,country,state,city,userid,password,security,answer,description);
  
      const updatedInstances = { ...this.instances }; //Array + geting the exisitng books instances
  
      updatedInstances[`${userid}`] = user; // isbn - here acts as a primary key (and we are storing data in key:value pair
  
      this.instances = updatedInstances;
  
      User.save();
    }
  
  static update(userid, newData) {
      const user = this.instances[userid];
      user.email = newData.email;
      user.phone = newData.phone;
      user.dob   = newData.dob;
      user.country = newData.country;
      user.state = newData.state;
      user.city = newData.city;
      user.userid = newData.userid;
      user.password = newData.password;
      user.security = newData.security;
      user.answer = newData.answer;
      user.description = newData.description;

      User.save();
    }
  
    static delete(userid) {
      const user = this.instances[userid];
  
      if (user) {
        delete this.instances[user.userid];
        User.saveAll();
      } else {
        console.log('no such user exists');
      }
    }
  
    static createTestData() {
      User.create({ full_name: 'raj', email: 'abc@gmail.com', phone:9876767856 });
      //User.create({ isbn: '006251512', title: 'Different title', year: 1996 });
      //User.create({ isbn: '0062515123', title: 'Different title3', year: 1990 });
  
      User.saveAll();
      alert('User saved Successfully');
    }
  
    static clearData() {
      if (confirm('Do you really want to delete all the data?')) {
        window.localStorage.clear();
      }
    }
  }