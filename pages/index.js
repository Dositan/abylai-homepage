import Layout from "../components/layout";
import Main from '../components/main'
import Section from "../components/section";

export default function Home() {
  return (
    <Layout name="Home">
      <Section delay={0.2}>
        <Main />
      </Section>
    </Layout>
  );
}
