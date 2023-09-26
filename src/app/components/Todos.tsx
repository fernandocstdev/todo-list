import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
	todos: ListOfTodos
	onRemoveTodo: ({ id }: TodoId) => void
	onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
	if (todos.length > 0) {
		return (
			<section className='mt-10 w-2/4'>
				<ul className='flex flex-col gap-1'>
					{todos.map(todo => (
						<Todo
							key={todo.id}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
							comments={todo.comments}
							date={todo.date}
							onToggleCompleteTodo={onToggleCompleteTodo}
							onRemoveTodo={onRemoveTodo}
						/>

					))}
				</ul>
			</section>
		)
	}
	return (
		<section className='mt-20'>
			<p>Sin tareas pendientes</p>
		</section>
	)
}
