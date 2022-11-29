export const getTasksListSelector = (state) => state.tasks.tasksList;

export const filterListSelector = (state) =>
  getTasksListSelector(state).sort((a, b) => a.done - b.done);
