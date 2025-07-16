import { fellowship } from "./fellowship";
import "./lesson05.css";

function Lesson05() {
  console.log(fellowship);
  return (
    <div>
      <h2>React map() components 🧝‍♀️</h2>
      {fellowship.map((hero, index) => (
        // key - это уникальное значение которое просит передать react в итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных операциях (сортировка / удаление)
        <div className="heroCard" key={index}>
          <p>Hero: {hero.name}</p>
          <p>{hero.isDark ? "Villain 🔥" : "Hero ✨"}</p>
          <p>{hero.age} years old</p>
        </div>
      ))}
    </div>
  );
}

export default Lesson05;
