import { appConfig } from '@lib/appConfig';
import { Container } from '@components/Container';

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>{appConfig.header}</Container>
      </header>
      <main>
        <Container>{appConfig.main}</Container>
      </main>
      <footer>
        <Container>{appConfig.footer}</Container>
      </footer>
    </div>
  );
}