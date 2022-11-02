init.view.updateplans = {
    setupUI: function () {
      const formElement = document.forms['plans'];
      const saveBtn = formElement.commit;
      const selectplansElement = formElement.selectplans;
  
      const plans = Plans.loadAll();
  
      const keys = Object.keys(plans);
  
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
  
        const plan = plans[key];
  
        const optionElement = document.createElement('option');
        optionElement.text = plan.plan_name;
        optionElement.value = plan.pid;
        selectplansElement.add(optionElement, null);
      }
  
      selectplansElement.addEventListener('change', function () {
        const key = selectplansElement.value;
  
        if (key) {
          const plan = plans[key];
          formElement.pid.value = plan.pid;
          formElement.plan_name.value = plan.plan_name;
          formElement.duration.value = plan.duration;
          formElement.amount.value = plan.amount;
          formElement.sum.value = plan.sum;

        } else {
          formElement.reset();
        }
      });
  
      saveBtn.addEventListener('click', init.view.updateplans.handleUpdateButtonClick);
    },
  
    handleUpdateButtonClick: function () {
      const formElement = document.forms['plans'];
  
      const plans = {
        plan_name: formElement.plan_name.value,
        duration: formElement.duration.value,
        amount : formElement.amount.value,
        sum : formElement.sum.value,
        
      };
  
      Plans.update(formElement.pid.value, plans);
      formElement.reset();
    },
  };
  