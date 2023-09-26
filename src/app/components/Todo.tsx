import { type Todo as TodoType, type TodoId } from '../types'
import { Checkbox, Button, Modal, ModalFooter, ModalHeader, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react'
import { DeleteIcon } from './icons'

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoId) => void
	onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, comments, completed, date, onRemoveTodo, onToggleCompleteTodo }) => {
	const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onToggleCompleteTodo({ id, completed: event.target.checked })
	}
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<li className='flex justify-between w-full border hover:border-stone-300 transition-all ease-in-out rounded-md'>
			<div className='w-11/12'>
				<Button onPress={onOpen} variant='light' radius='none' className='flex justify-start w-full hover:bg-transparent' >
					<Checkbox
						isSelected={completed}
						lineThrough
						onChange={handleChangeCheckbox}>
						<label>{title}</label>
					</Checkbox>
				</Button>
				<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
								<ModalBody>
									<div>
										<h2 className='text-xs text-gray-500'>Comentarios</h2>
										<p className='text-gray-700 text-base'>{comments}</p>
									</div>
									<div>
										<h2 className='text-xs text-gray-500'>Fecha</h2>
										<p className='text-gray-700 text-sm'>{date}</p>
									</div>
									<div className='mt-3'>
										<h2 className='text-xs text-gray-500'>Estatus</h2>
										<p className='text-gray-600 text-sm italic'>{completed ? 'Completada' : 'No completada'}</p>
									</div>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="light" onPress={onClose}>
										Close
									</Button>
									{/* <Button color="primary" onPress={onClose}>
										Action
									</Button> */}
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
			<div className='w-1/12 flex justify-center items-center'>
				<button
					onClick={() => { onRemoveTodo({ id }) }}
				>
					<DeleteIcon />
				</button>
			</div>
		</li>
	)
}
