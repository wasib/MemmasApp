import React from "react";
import { Header, Image } from "semantic-ui-react";
import image from "../../images/about.jpg";
import { Link } from "react-router-dom";
import "../../styles/About.css";

export class AboutAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="about-gradient">
          <Header as="h2" textAlign="center">
            <Header.Content style={{ color: "white" }}>من نحن</Header.Content>
            {/* <Header.Subheader style={{ color: "white" }}>
              <br />
              مصنع الشرق الأوسط الحديث للآلآت والمعدات، تم تأسيسه في عام ٢٠١٦
              وهو اول مصنع في المملكة العربية السعودية مختص بتصميم وإنتاج
              الاجهزة والمعدات الأوتوماتيكية والتي تقلل العماله في شتى
              المجالات.اهم المنتجات التي يعمل عليها المصنع هي منتجات غسيل
              السيارات الأوتوماتيكية فائقة السرعة والتي تصل إنتاجيها حتى ٤٠
              سيارة في الساعة. ويتميز المصنع محلياً بتوفير الضمانات والصيانات
              الدورية للاجهزة في كافة أنحاء مناطق المملكة والعالم وبشكل موثوق
              ومعتمد.  والخاصة بحد سوا
            </Header.Subheader> */}
          </Header>
        </div>

        <div className="about-us-2">
          <div className="about-us-text-ar">
            <h2>من نحن</h2>
            <p>
              مصنع الشرق الأوسط الحديث للآلآت والمعدات، تم تأسيسه في عام ٢٠١٦
              وهو اول مصنع في المملكة العربية السعودية مختص بتصميم وإنتاج
              الاجهزة والمعدات الأوتوماتيكية والتي تقلل العماله في شتى
              المجالات.اهم المنتجات التي يعمل عليها المصنع هي منتجات غسيل
              السيارات الأوتوماتيكية فائقة السرعة والتي تصل إنتاجيها حتى ٤٠
              سيارة في الساعة. ويتميز المصنع محلياً بتوفير الضمانات والصيانات
              الدورية للاجهزة في كافة أنحاء مناطق المملكة والعالم وبشكل موثوق
              ومعتمد. 
            </p>
          </div>
          <div className="about-us-image">
            <Image src={image} />
          </div>
        </div>

        {/* <div className="need-a-project-2">
          <h2>شبكات ال</h2>
          <p>
            بتقديم الخدمات الاستشارية لتأمين شبكات الحاسب الآلي و نظم المعلومات
            وتطبيق المعايير العالمية و تطوير مناهج تدريبية وتعليمية متخصصة في
            مجال أمن المعلومات و مناسبة لاحتياجات المؤسسا
          </p>
          <Link to="/ar/Contact">
            <button className="ui button">شبكات ال</button>
          </Link>
        </div> */}
      </div>
    );
  }
}
