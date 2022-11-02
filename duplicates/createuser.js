init.view.createuser = {
    setupUI: function () {
      const saveBtn = document.forms['enter_plans'].commit; 
  
      User.loadAll();
  
      saveBtn.addEventListener('click', init.view.createuser.handleSaveButtonClick);
    },
    handleSaveButtonClick: function () {
      const formElement = document.forms['user'];
      const user = {
        full_name: formElement.full_name.value,
        email: formElement.email.value,
        phone: formElement.phone.value,
        dob: formElement.dob.value,
        age: formElement.age.value,
        country: formElement.country.value,
        state: formElement.state.value,
        city: formElement.city.value,
        userid : formElement.userid.value,
        password : formElement.password.value,
        security : formElement.security.value,
        answer : formElement.answer.value,
        description : formElement.description.value,

      };
  
      if(formElement.full_name.value.length >=3 && (formElement.age.value >=18 || formElement.age.value<=60))
    {
      User.create(user);
    } 
      
      formElement.reset();
    },
  };
  
  
  //here we are setting up user interface.