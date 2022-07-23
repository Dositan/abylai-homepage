import Layout from "../components/Layout";
import Main from '../components/Main'
import Section from "../components/Section";

export default function Home() {
  return (
    <Layout name="Home">
      <Section delay={0.2}>
        <Main />
      </Section>
    </Layout>
  );
}
