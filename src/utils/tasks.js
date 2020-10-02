/* eslint-disable import/prefer-default-export */

/**
 * À partir d'une liste de tâches complète, on la filtre.
 * On calcule une phrase appropriée pour donner le nombre de tâches en cours.
 * On retourne la phrase.
 */
export const nbCurrentTasks = (tasks) => {
  const nbTasks = tasks.filter((task) => {
    return !task.done;
  }).length;
  let taskSentence = 'tâche';
  if (nbTasks > 1) {
    taskSentence += 's';
  }
  return `${nbTasks} ${taskSentence} en cours`;
};
