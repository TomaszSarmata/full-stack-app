import LocationsGrid from "@/components/locations/locations-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header name="Locations Page"></Header>

      <Content>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <LocationsGrid></LocationsGrid>
        </div>
      </Content>

      <Footer buttons={[{ pageName: "Home Page", href: "/" }]}>
        <Link
          href="/"
          type="button"
          className="bg-yellow-500 text-white text-sm text-center px-3 py-2 rounded-md"
        >
          Home
        </Link>
      </Footer>
    </div>
  );
}
