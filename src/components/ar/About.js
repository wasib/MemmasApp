import React from "react";
import { Header, Image } from "semantic-ui-react";
import image from "../../images/image.png";
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
            <Header.Content style={{ color: "white" }}>
              عرض المزيد
            </Header.Content>
            <Header.Subheader style={{ color: "white" }}>
              <br />ز الغير ربحية و التي تهدف لتطوير و تقديم الحلول الأمنية
              المبتكرة للارتقاء بمستوى أمن المعلومات في القطاعات الحكومية
              والخاصة بحد سوا
            </Header.Subheader>
          </Header>
        </div>

        <div className="about-us-2">
          <div className="about-us-text-ar">
            <h2>من نحن</h2>
            <p>
              ية و التي تهدف لتطوير و تقديم الحلول الأمنية المبتكرة للارتقاء
              بمستوى أمن المعلومات في القطاعات الحكومية والخاصة بحد سواء داخل
              المملكة العربية السعودية بشكل خاص والمنطقة العربية بشكل عام وذلك
            </p>
            <p>
              بتقديم الخدمات الاستشارية لتأمين شبكات الحاسب الآلي و نظم
              المعلومات وتطبيق المعايير العالمية و تطوير مناهج تدريبية وتعليمية
              متخصصة في مجال أمن المعلومات و مناسبة لاحتياجات المؤسسا
            </p>
          </div>
          <div className="about-us-image">
            <Image src={image} />
          </div>
        </div>

        <div className="need-a-project-2">
          <h2>شبكات ال</h2>
          <p>
            بتقديم الخدمات الاستشارية لتأمين شبكات الحاسب الآلي و نظم المعلومات
            وتطبيق المعايير العالمية و تطوير مناهج تدريبية وتعليمية متخصصة في
            مجال أمن المعلومات و مناسبة لاحتياجات المؤسسا
          </p>
          <Link to="/ar/Contact">
            <button className="ui button">شبكات ال</button>
          </Link>
        </div>
      </div>
    );
  }
}
