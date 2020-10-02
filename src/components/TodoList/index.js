// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import tasksInitial from 'src/data/tasks';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import { nbCurrentTasks } from 'src/utils/tasks';

// == Composant
// class TodoList extends React.Component {
//   state = {
//     // tasks: tasks,
//     tasks,
//   }
//   // constructor(props) {
//   //   super(props)
//   //   this.state = { tasks };
//   // }

//   componentDidMount() {
//     console.log('TodoList#cDM');
//     document.title = nbCurrentTasks(this.state.tasks);
//   }

//   componentDidUpdate() {
//     console.log('TodoList#cDU');
//     document.title = nbCurrentTasks(this.state.tasks);
//   }

//   handleCheckboxChange = (taskId) => {
//     // console.log(evt);
//     // console.log(this);

//     // On travaille sur une copie du state courant (this.state).
//     // Pourquoi ? Parce que ça permet de préparer, éventuellement en
//     // plusieurs étapes, sa mise-à-jour, sans la déclencher tout de
//     // suite. Quand on sera prêt à effectivement faire la màj,
//     // on appelera this.setState().

//     // On sait que map travaille sur une copie => elle retourne un
//     // nouveau tableau.
//     const newTasks = this.state.tasks.map((task) => {
//       // Attention : à chaque tour de boucle, dans task, on a une donnée
//       // originelle venant directement de this.state.tasks.
//       // Il faut donc avant tout s'en faire une copie, sur laquelle
//       // on fera éventuellement des modifications.
//       const taskCopy = { ...task };

//       // Si la (copie de) tâche courante correspond à l'id récupéré en
//       // paramètre, alors on applique une màj pour cette donnée.
//       if (taskCopy.id === taskId) {
//         taskCopy.done = !taskCopy.done;
//       }

//       // On retourne la copie (éventuellement modifiée) à chaque tour de
//       // boucle pour remplir le nouveau tableau de tâches.
//       return taskCopy;
//     });

//     this.setState({
//       tasks: newTasks,
//     });
//   }

//   render() {
//     console.log('Refresh de TodoList');

//     const counterLabel = nbCurrentTasks(this.state.tasks);

//     return (
//       <div id="todo">
//         <Form />
//         <Counter label={counterLabel} />
//         <List
//           handleCheckboxChange={this.handleCheckboxChange}
//           tasks={this.state.tasks}
//         />
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [tasks, setTasks] = useState(tasksInitial);
  const [newTaskText, setNewTaskText] = useState('');
  // const [displayForm, setDisplayForm] = useState(false);

  console.log(tasks, setTasks);

  const handleCheckboxChange = (taskId) => {
    console.log('TodoList#handleCheckboxChange');
    const newTasks = tasks.map((task) => {
      const taskCopy = { ...task };
      if (taskCopy.id === taskId) taskCopy.done = !taskCopy.done;
      return taskCopy;
    });
    setTasks(newTasks);
  };

  const addTask = () => {
    // Calcul d'un id pour la nouvelle tâche
    const taskIds = tasks.map((task) => task.id);
    const maxId = Math.max(...taskIds);
    const id = maxId + 1;
    // const id = (Math.max(...taskIds)) + 1;

    // Modélisation de la nouvelle tâche
    const taskToAdd = {
      id,
      text: newTaskText,
      done: false,
    };
    const newTasks = [...tasks, taskToAdd];

    // MÀJ du state de l'élément React
    setTasks(newTasks);
    // On vide l'input du formulaire
    setNewTaskText('');
  };

  const counterLabel = nbCurrentTasks(tasks);

  console.log('TodoList#render');
  return (
    <div id="todo">
      <Form
        text={newTaskText}
        addTask={addTask}
        updateText={setNewTaskText}
      />
      <Counter label={counterLabel} />
      <List
        handleCheckboxChange={handleCheckboxChange}
        tasks={tasks}
      />
    </div>
  );
};

// == Export
export default TodoList;
