export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;
  return allOptionsList.filter((option) =>
    selectedIds.includes(option.selectedIds)
  );
};

export const avaibleOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;
  return allOptionsList.filter(
    (option) => !selectedIds.includes(option.selectedIds)
  );
};
