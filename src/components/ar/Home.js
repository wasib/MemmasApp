import React from "react";
import homeImage from "../../images/homeImage.svg";
import image from "../../images/image.png";
import signature from "../../images/signature.svg";
import client1 from "../../images/client1.svg";
import client2 from "../../images/client2.svg";
import client3 from "../../images/client3.svg";
import client4 from "../../images/client4.svg";
import client5 from "../../images/client5.svg";
import { Header, Embed, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import ContactForm from "./ContactForm";
import "../../styles/Home.css";

export class HomeAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        <div className="home-top">
          <div className="home-top-text">
            <div className="home-header">
              <Header as="h2" icon textAlign="center">
                <Header.Content style={{ color: "white" }}>
                  من نحن
                </Header.Content>
                <br />
                <Header.Subheader style={{ color: "white" }}>
                  مركز التميز لأمن المعلومات بجامعة الملك سعود هو أحد المراكز
                  الغير ربحية و التي تهدف لتطوير و تقديم الحلول الأمنية المبتكرة
                  للارتقاء بمستوى أمن المعلومات في القطاعات الحكومية والخاصة بحد
                  سواء داخل المملكة العربية السعودية بشكل خاص والمنطقة العربية
                  بشكل عام وذلك بتقديم الخدمات الاستشارية لتأمين ش
                </Header.Subheader>
                <br />
                <Link to="/ar/Contact">
                  <button className="ui button">التدريب</button>
                </Link>
              </Header>
            </div>
          </div>
          <div className="home-image">
            <Image src={homeImage} size="massive" />
          </div>
        </div>

        <div className="about-us">
          <div className="about-text">
            <Header as="h2" icon textAlign="center">
              <Header.Content>الخدمات</Header.Content>
              <br />
              <Header.Subheader>
                ت الأكاديمية و التخصصية من أرقى الجامعات والمعاهد العالمية،
                بالإضافة إلى تعاونه مع عدد كبير من المعاهد والمراكز البحثية
                والتدريبية المشهورة عالمياً في مجال أمن المعلومات، وكذلك موقعه
                القريب من جميع القطاعات المستفيدة والمستهدفة من خدماته. تأتي هذه
                المبادرة سعياً من المركز لتحقيق أحد أهدافه الإستراتيجية بتوفير
                كوادر مؤهلة في مجالات ذات بُعد وطني
              </Header.Subheader>
            </Header>
            <img src={signature} alt="signature" />
          </div>
        </div>

        <div className="our-work-process">
          <Header as="h2" icon textAlign="center">
            <Header.Content>الاستشارية</Header.Content>
            <br />
            <Header.Subheader>
              الأكاديمية و التخصصية من أرقى الجامعات والمعاهد العالمية، بالإضافة
              إلى تعاونه مع عدد كبير من المعاهد والمراكز البحثية والتدريبية الم
            </Header.Subheader>
            <br />
          </Header>
          <Embed id="kJQP7kiw5Fk" placeholder={image} source="youtube" />
        </div>

        <div className="carousel">
          <Carousel autoplay>
            <div>
              <h3>
                جميع القطاعات المستفيدة والمستهدفة من خدماته. تأتي هذه المبادرة
                سعياً من المركز لتحقيق أحد أهدافه الإستراتيجية بتوفير كوادر مؤ
              </h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>

        <div className="clients">
          <img src={client1} alt="client1" />
          <img src={client2} alt="client2" />
          <img src={client3} alt="client3" />
          <img src={client4} alt="client4" />
          <img src={client5} alt="client5" />
        </div>

        <div className="need-a-project">
          <Header as="h2" icon textAlign="center">
            <Header.Content>احصائيات</Header.Content>
            <br />
            <Header.Subheader>
              المؤسسات والمنظمات بمختلف مجالات عملها. ويتميز المركز باحتضانه
              لعدد من نخبة الباحثين والاستشاريين
            </Header.Subheader>
          </Header>
          <br />
          <ContactForm />
        </div>
      </div>
    );
  }
}
