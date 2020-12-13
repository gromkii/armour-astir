// ----- Dangers ----- //
// TODO: Consolidate this into single listener.
on('change:danger_1_radio', (event) => {
    if (event && event.newValue && event.newValue === "2") {
        setAttrs({
            danger_1_radio: '4',
            danger_1_description: '',
        });
    }
});

on('change:danger_2_radio', (event) => {
    if (event && event.newValue && event.newValue === "2") {
        setAttrs({
            danger_2_radio: '4',
            danger_2_description: '',
        });
    }
});

on('change:danger_3_radio', (event) => {
    if (event && event.newValue && event.newValue === "2") {
        setAttrs({
            danger_3_radio: '4',
            danger_3_description: '',
        });
    }
});