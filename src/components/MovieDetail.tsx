import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Movie } from '../models/movie';
import classes from './MovieDetail.module.css';

export default function MovieDetail(model: Movie) {
	return (
		<Card withBorder radius="md" p="md" className={classes.card} flex="1 1 33%">
			<Card.Section>
				<Image src={model.poster} alt="title" />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group justify="apart">
					<Text fz="lg" fw={500}>
						{model.title}
					</Text>
					<Badge size="sm" variant="light">
						{model.year}
					</Badge>
				</Group>
			</Card.Section>

			<Group mt="xs">
				<Button radius="md" style={{ flex: 1 }}>
					Show details
				</Button>
			</Group>
		</Card>
	);
}