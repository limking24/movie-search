import { Button, Container, Flex, TextInput } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';

export default function SearchFilter() {
	return (
		<Container mt="10px">
			<form>
				<Flex gap="sm" align="flex-end" maw="700px">
					<TextInput
						type="text"
						label="Movie Title"
						placeholder="Movie Title"
						radius="md"
						flex={5} />

					<YearPickerInput
						clearable
						label="Year of Release"
						placeholder="Year of Release"
						radius="md"
						flex={3} />

					<Button radius="md" flex={1}>
						Search
					</Button>
				</Flex>
			</form>
		</Container>
	)
}