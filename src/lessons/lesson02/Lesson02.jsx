// components always jsx, capital and a function

import MyButton from "../../components/myButton/MyButton.jsx";

function Lesson02() {
  const element = <h4>Это JSX элемент из переменной element!</h4>;
  const text = "Это строка пришла из переменной text...";

  const react = {
    developer: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

  function showDeveloper(obj) {
    // если obj.developer существует мы покажем данные
    if (obj.developer) {
      return "Developer: " + obj.developer;
    }
    // если нет выдадим ошибку
    return "Not valid data 😵";
  }

  // переменная для работы тернарного оператора
  const isLoggedIn = true;

  return (
    <div>
      <h2>JSX components 🤖</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела react компонента или других файлов:
      </p>
      {/* чтобы работать с логиком и динамическими данными из переменных мы используем фигурные скобки */}
      {element}
      <p>Здесь будет строка: {text}</p>
      {/* в фигурных скобках в верстке JSX можно использовать любые логические конструкции JS - в том числе числовые и вызовы функций */}
      <p>Это вычисление случилось в JSX: {20 + 22} !!!</p>
      {/* пример работы тернарного оператора с картинкой */}
      {isLoggedIn ? (
        <img width={"100px"} src={react.logo} alt="react.logo" />
      ) : (
        ""
      )}

      {/* <p>React developer: {react.developer}</p> */}
      {/* пример вызова функции в JSX */}
      <p>{showDeveloper(react)}</p>
      <h4>Пример тернарного оператора в React:</h4>
      <p>
        Пользователь <b>{isLoggedIn ? "в данный момент" : "не"}</b>{" "}
        авторизирован!
      </p>
      <h4>Пример переиспользования компонентов:</h4>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
