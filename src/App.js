import BigCards from "./components/BigCards";
import Cards from "./components/Cards";
import Icon_1 from './media/icon_1.svg';
import Icon_2 from './media/icon_2.svg';
import Icon_3 from './media/icon_3.svg';
import Icon_4 from './media/icon_4.svg';
import Icon_5 from './media/icon_5.svg';

function App() {
  return (
    <section className="industry">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <BigCards />
          </div>
          <div className="col-12 col-md-3 px-md-0">
            <Cards
              title="Choose Your<br /> Local Targeting"
              desc=" Our targeted and tracked calls are tailored to your business
                  needs, audience, and geolocation."
              imageUrl={Icon_1}
            />
          </div>
          <div className="col-12 col-md-3 px-md-0">
            <Cards
              title="Track Your <br /> Conversion"
              desc="We use the most progressive tracking and analytics technology
            to ensure that every call can be tracked and evaluated"
              imageUrl={Icon_2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 px-md-0"></div>
          <div className="col-12 col-md-3 px-md-0">
            <Cards
              title="CustomizedM<br>
            Campaigns"
              desc="Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest."
              imageUrl={Icon_3}
            />
          </div>
          <div className="col-12 col-md-3 px-md-0">
            <Cards
              title="Get Dedicated<br>
            Support Team"
              desc="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted."
              imageUrl={Icon_4}
            />
          </div>
          <div className="col-12 col-md-3 px-md-0">
            <Cards
              title="Quality<br>
            Assurance"
              desc="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted."
              imageUrl={Icon_5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
