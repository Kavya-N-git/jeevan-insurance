init.view.deleteplan = {
    setupUI: function () {
      const deleteBtn = document.forms['plan'].commit;
      const selectplanElement = document.forms['plan'].selectplan;
  
      const plans = Plans.loadAll();
  
      const keys = Object.keys(plans);
  
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
  
        const plan = plans[key];
  
        const optionElement = document.createElement('option');
        optionElement.text = plan.plan_name;
        optionElement.value = plan.pid;
        selectplanElement.add(optionElement, null);
      }
  
      deleteBtn.addEventListener('click', init.view.deleteplan.handleDeleteButtonClick);
    },
  
    handleDeleteButtonClick: function () {
      const selectElement = document.forms['plan'].selectplan;
      const pid = selectElement.value;
  
      if (pid && confirm('Are you sure you want to delete this plan?')) {
        Plans.delete(pid);
        selectElement.remove(selectElement.selectedIndex);
      }
    },
  };
  