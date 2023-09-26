import { Button } from '@nextui-org/react'
interface Props {
	loading: boolean
	activeCount: number
	completedCount: number
	onClearCompleted: () => void
}
export const Footer: React.FC<Props> = ({
	activeCount = 0,
	completedCount = 0,
	onClearCompleted,
	loading
}) => {
	return (
		<footer className="w-2/4 flex justify-between items-stretch mt-5">
			<div className="flex flex-col ">
				<span className="text-xs text-gray-600 font-extralight flex gap-1">
					<p>{activeCount}</p> Tareas pendeientes
				</span>
				<span className="text-xs text-gray-600 font-extralight flex gap-1">
					<p>{completedCount}</p> Tareas Completadas
				</span>
			</div>
			{
				completedCount > 0 && (
					<Button size='sm' isLoading={loading} className="text-sm text-gray-600 font-light" onClick={onClearCompleted}>Eliminar compleatdos</Button>
				)
			}
		</footer>
	)
}
