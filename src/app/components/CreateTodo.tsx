import { Modal, ModalContent, Input, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { type TodoTitle, type TodoComments } from '../types'
import { useState } from 'react'

interface Props {
	onAddTodo: ({ title }: TodoTitle, { comments }: TodoComments) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [titleValue, setTitleValue] = useState('')
	const [commentsValue, setcCmmentsValue] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		onAddTodo({ title: titleValue }, { comments: commentsValue })
		setTitleValue('')
		setcCmmentsValue('')
	}

	return (
		<div className='absolute bottom-0 right-0 p-10'>
			<Button isIconOnly onPress={onOpen} color="primary">
				<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 5l0 14"></path>
					<path d="M5 12l14 0"></path>
				</svg>
			</Button>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<form onSubmit={handleSubmit}>
								<ModalHeader className="flex flex-col gap-1">Crear tarea</ModalHeader>
								<ModalBody>
									<Input
										onChange={(evt) => { setTitleValue(evt.target.value) }}
										autoFocus
										label="Tarea"
										placeholder="¿Qué quieres hacer?"
									/>
									<Input
										onChange={(evt) => { setcCmmentsValue(evt.target.value) }}
										label="Comentarios"
										placeholder="Ingresa algun comentario"
									/>

								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="flat" onPress={onClose}>
										Cancelar
									</Button>
									<Button color="primary" type='submit' onPress={onClose}>
										Crear
									</Button>
								</ModalFooter>
							</form>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	)
}
