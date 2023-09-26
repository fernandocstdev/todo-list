import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
	onFilterChange: (filter: FilterValue) => void
	filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({
	onFilterChange,
	filterSelected
}) => {
	return (
		<ul className='flex gap-5 mt-20'>
			{Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
				return (
					<li key={key}>
						<a
							className='border border-blue-200 px-3 py-2 rounded-md'
							href={href}
							onClick={(event) => {
								event.preventDefault()
								onFilterChange(key as FilterValue)
							}}
						>
							{literal}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
