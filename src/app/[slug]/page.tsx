import PageTemplate from "../components/template/template-page";
import Footer from "../components/organisms/footer";
import BlogDetails from "./components/organisms/blogDetails";

export default function App() {
  return(
    <PageTemplate>
      <BlogDetails />
      <Footer />
    </PageTemplate>
  )
}