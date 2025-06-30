// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции
export default function MyButton({ func, text }) {
  return <button onClick={func}>{text}</button>;
}
