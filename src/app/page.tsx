import PageTemplate from "./components/template/template-page";
import Hero from "./components/organisms/hero"
import Footer from "./components/organisms/footer";

export default function App() {
  return(
    <PageTemplate>
      <Hero />
      <Footer />
    </PageTemplate>
  )
}