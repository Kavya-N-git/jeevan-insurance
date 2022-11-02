init.view.createplans = {
    setupUI: function () {
      const saveBtn = document.forms['plans'].commit; 
  
      Plans.loadAll();
  
      saveBtn.addEventListener('click', init.view.createplans.handleSaveButtonClick);
    },
    handleSaveButtonClick: function () {
      const formElement = document.forms['plans'];
      const plans = {
        pid: formElement.pid.value,
        plan_name: formElement.plan_name.value,
        duration: formElement.duration.value,
        amount: formElement.amount.value,
        sum:formElement.sum.value
        

      };
  
      
    
      Plans.create(plans);
    
      
      formElement.reset();
    },
  };
  
  
  //here we are setting up user interface.