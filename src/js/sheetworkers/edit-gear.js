on('change:repeating_gearcheck:gear_name_edit', () => {
  getAttrs(['repeating_gearcheck_gear_name_edit'], (values) => {
    setAttrs({ repeating_gearcheck_gear_name: values.repeating_gearcheck_gear_name_edit });
  });
});

on('change:repeating_gearcheck:gear_tier_edit', () => {
  getAttrs(['repeating_gearcheck_gear_tier_edit'], (values) => {
    setAttrs({ repeating_gearcheck_gear_tier: values.repeating_gearcheck_gear_tier_edit });
  });
});

on('change:repeating_gearcheck:gear_tags_edit', () => {
  getAttrs(['repeating_gearcheck_gear_tags_edit'], (values) => {
    const tags = values.repeating_gearcheck_gear_tags_edit;
    const parsedTags = tags ? `${tags}` : '';
    setAttrs({ repeating_gearcheck_gear_tags: parsedTags });
  });
});