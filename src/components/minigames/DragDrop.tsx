import { useState } from "react";

const DragDrop = () => {
  const [tasks, setTasks] = useState([
    { name: "topolino", category: "wip", bgcolor: "yellow" },
    { name: "minni", category: "wip", bgcolor: "pink" },
    { name: "pippo", category: "complete", bgcolor: "skyblue" },
  ]);

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let newTasks = tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    setTasks(newTasks);
  };

  let tasksByCategory = {
    wip: [],
    complete: [],
  };

  tasks.forEach((t) => {
    tasksByCategory[t.category].push(
      <div
        key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {t.name}
      </div>
    );
  });

  return (
    <div className="container-drag w-[310px] h-[310px] mx-auto mt-4 p-2">
      <h2 className="text-white text-center">FAI COME TE PARE</h2>
      <div
        className="border-4 mt-1 w-[295px] h-[130px] text-center"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "wip")}
      >
        {tasksByCategory.wip}
      </div>
      <div
        className="border-4 mt-1 w-[295px] h-[130px] text-center"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}
      >
        {tasksByCategory.complete}
      </div>
    </div>
  );
};

export default DragDrop;
