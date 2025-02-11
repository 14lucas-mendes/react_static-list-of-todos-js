// Add the required props
export const TodoInfo = ({ todo }) => (
  <>
    {' '}
    <article className={todo.completed ? 'TodoInfo--completed' : 'TodoInfo'}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
    </article>
  </>
);
