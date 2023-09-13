import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, Name } from './styles';

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon />

      <Name>{name}</Name>

      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </Container>
  );
}
