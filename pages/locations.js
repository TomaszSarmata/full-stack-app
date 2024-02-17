import LocationsGrid from "@/components/locations/locations-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header name="Locations Page"></Header>

      <Content>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <LocationsGrid></LocationsGrid>
        </div>
      </Content>

      <Footer buttons={[{ pageName: "Home Page", href: "/" }]}></Footer>
    </div>
  );
}
