// Set the currently displayed tab on the character sheet.
const buttonlist = ['character', 'astir', 'misc'];
buttonlist.forEach(button => {
    on(`clicked:${button}`, function() {
        setAttrs({
            sheet_tab: button
        });
    });
});

// Set the Astir page to either display Astir or Carrier information.
on('change:show_carrier_toggle', (event) => {
    setAttrs({
      show_carrier: event.newValue,
    });
});
  
  // Show/Hide 'CHANNEL' Trait based on playbook.
on('change:support', (event) => {
    setAttrs({
      channel_hidden: event.newValue == 'on',
    });
});
  
  // Set playbook information when the playbook value changes.
on('change:playbook', (event) => {
    if (event && event.newValue && event.netValue !== event.previousValue) {
      setPlaybook(event.newValue);
    }
});