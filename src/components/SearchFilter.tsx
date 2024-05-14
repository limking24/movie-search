import { Button, Flex, TextInput } from '@mantine/core';
import { DateValue, YearPickerInput } from '@mantine/dates';
import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FilterOption } from '../models/filter-option';

interface Props {
	onChange: (option: FilterOption) => void
}

export default function SearchFilter({onChange}: Props) {
	const location = useLocation();
	const yearRegex = new RegExp(/^\d{4}$/);
	const [searchParams, setSearchParams] = useSearchParams();
	const [title, setTitle] = useState('');
	const [year, setYear] = useState<DateValue>(null);

	// On URL change
	useEffect(() => {
		let newTitle = searchParams.get('title');
		let newYear = searchParams.get('year');
		let $title = newTitle ?? '';
		let $year = newYear && yearRegex.test(newYear) ? Number(newYear) : undefined;
		setTitle(newTitle ?? '');
		setYear($year ? new Date($year, 1) : null);
		onChange({ title: $title, year: $year });
	}, [location]);

	function sumbit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSearchParams({
			title,
			year: String(year?.getFullYear() ?? '')
		});
	}

	return (
		<form onSubmit={sumbit}>
			<Flex gap="sm" align="flex-end">
				<TextInput
					required
					type="text"
					name="title"
					label="Movie Title"
					placeholder="Movie Title"
					radius="md"
					value={title}
					onChange={e => setTitle(e.target.value)}
					flex={6} />

				<YearPickerInput
					clearable
					name="year"
					label="Year of Release"
					placeholder="Year of Release"
					radius="md"
					maxDate={new Date()}
					value={year}
					onChange={date => setYear(date)}
					flex={3} />

				<Button type="submit" radius="md" flex={1} disabled={title == ''}>
					Search
				</Button>
			</Flex>
		</form>
	)
}