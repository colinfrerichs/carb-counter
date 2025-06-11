import FilterContainer from "@/components/FilterContainer/FilterContainer";
import GridContainer from "@/components/GridContainer/GridContainer";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  return (
    // we can make all of the layout stuff here... it'll be interesting to see how this works - but this page can also be nicely complicated.
    <>
      <Navbar />
      <FilterContainer />
      <GridContainer />;
    </>
  );
}
